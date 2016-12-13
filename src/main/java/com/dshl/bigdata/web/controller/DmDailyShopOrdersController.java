package com.dshl.bigdata.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.DmDailyShopOrdersCount;
import com.dshl.bigdata.web.entity.DmDailyShopOrdersSource;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmDailyShopOrdersCountService;
import com.dshl.bigdata.web.service.DmDailyShopOrdersSourceService;
import com.dshl.bigdata.web.utils.JsonUtil;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;
import com.dshl.commons.utlis.DateUtils;

/**
 * 
 *                       
 * @Filename: DmDailyShopCategoryController.java
 * @Version: 1.0
 * @Author: yangzhanling 杨占岭
 * @Email:  zhanling.yang@ds365.com
 *
 */

@Controller
@RequestMapping("")
public class DmDailyShopOrdersController {

    @Autowired
    private DmDailyShopOrdersCountService dailyShopOrdersCountService;
    
    @Autowired
    private DmDailyShopOrdersSourceService dailyShopOrdersSourceService;

    /**
     * 订单统计
     * @param request
     * @param response
     * @param startDate
     * @param endDate
     * @param dataMap
     * @param depotId
     * @return
     */
    @RequestMapping(value = "/order-table")
    public String getOrderCount(HttpServletRequest request, HttpServletResponse response,
                                String startDate, String endDate, Map<String, Object> dataMap,Integer depotId) {
    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo="1";
    	}
    	PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
    	
        Map<String, Object> queryMap = new HashMap<String, Object>();
        queryMap.put("startDate", startDate);
        queryMap.put("endDate", endDate);
        queryMap.put("depotId", depotId);
        queryMap.put("pager", pager);

        QueryCondtion condtion = new QueryCondtion();
        condtion.setStartDate(startDate);
        condtion.setEndDate(endDate);
        condtion.setDepotId(depotId);

        ServiceResult<List<DmDailyShopOrdersCount>> orderDateService = dailyShopOrdersCountService
            .getByOrderDate(queryMap);

        List<DmDailyShopOrdersCount> result = orderDateService.getResult();
        PagerInfo pagerInfo = orderDateService.getPager();
		StringBuffer orderDate = new StringBuffer();
		StringBuffer orderamout = new StringBuffer();
		StringBuffer orderQuantity = new StringBuffer();
		
		StringBuffer cancelorderQuantity = new StringBuffer();
		StringBuffer cancelorderAmount = new StringBuffer();
		
		StringBuffer returnorderQuantity = new StringBuffer();
		StringBuffer returnorderAmount = new StringBuffer();

		
		for (int i = 0; i < result.size(); i++) {
			DmDailyShopOrdersCount ct = result.get(i);
			Integer totalQuantity = ct.getOrderQuantity() ;
			double totalAmount = ct.getOrderAmount().doubleValue();
			if (ct.getCancelOrderAmount() != null) {
				totalAmount = ct.getOrderAmount().subtract(ct.getCancelOrderAmount()).doubleValue() ;
				totalQuantity -= ct.getCancelOrderQuantity(); 
			}
			if (ct.getReturnOrderAmount() !=null) {
				totalAmount -=  ct.getReturnOrderAmount().doubleValue();
				totalQuantity -= ct.getReturnOrderQuantity();
			}
			
			ct.setTotalQuantity(totalQuantity);
			ct.setTotalAmount(totalAmount);
			
			
			orderDate.append(DateUtils.dateToString(ct.getOrderDate(),
					"yyyy-MM-dd"));
			orderamout.append(ct.getOrderAmount());
			orderQuantity.append(ct.getOrderQuantity());
			
			cancelorderQuantity.append(ct.getCancelOrderQuantity());
			cancelorderAmount.append(ct.getCancelOrderAmount());
			
			returnorderQuantity.append(ct.getReturnOrderQuantity());
			returnorderAmount.append(ct.getReturnOrderAmount());
			
			
			if (result.size() - 1 != i) {
				orderDate.append(",");
				orderamout.append(",");
				orderQuantity.append(",");
				
				cancelorderQuantity.append(",");
				cancelorderAmount.append(",");
				
				returnorderQuantity.append(",");
				returnorderAmount.append(",");
			}
			
		}
		dataMap.put("orderdate", orderDate);
		dataMap.put("orderamout", orderamout);
		dataMap.put("orderQuantity", orderQuantity);
		
		dataMap.put("cancelorderQuantity", cancelorderQuantity);
		dataMap.put("cancelorderAmount", cancelorderAmount);
		
		dataMap.put("returnorderQuantity", returnorderQuantity);
		dataMap.put("returnorderAmount", returnorderAmount);
		
		dataMap.put("orders", result);
        dataMap.put("condtion", condtion);
        dataMap.put("pagerInfo", pagerInfo);
        
        return "order/order-table";
    }
    @RequestMapping(value = "order-table-iframe")
    public String getOrderCountIframe(HttpServletRequest request, HttpServletResponse response,
    		String startDate, String endDate, Map<String, Object> dataMap,Integer depotId) {
    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo="1";
    	}
    	PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
    	
    	Map<String, Object> queryMap = new HashMap<String, Object>();
    	queryMap.put("startDate", startDate);
    	queryMap.put("endDate", endDate);
    	queryMap.put("depotId", depotId);
    	queryMap.put("pager", pager);
    	
    	QueryCondtion condtion = new QueryCondtion();
    	condtion.setStartDate(startDate);
    	condtion.setEndDate(endDate);
    	condtion.setDepotId(depotId);
    	
    	ServiceResult<List<DmDailyShopOrdersCount>> orderDateService = dailyShopOrdersCountService
    			.getByOrderDate(queryMap);
    	
    	List<DmDailyShopOrdersCount> result = orderDateService.getResult();
    	PagerInfo pagerInfo = orderDateService.getPager();
    	
    	dataMap.put("orders", result);
    	dataMap.put("condtion", condtion);
    	dataMap.put("pagerInfo", pagerInfo);
    	
    	return "order/order-table-iframe";
    }
    
    /**
     * 订单来源
     * @param request
     * @param startDate
     * @param endDate
     * @param dataMap
     * @param cityId
     * @return
     */
    @RequestMapping(value = "/order-source")
    public String getOrderCountSource(HttpServletRequest request,  String startDate, String endDate, 
    													Map<String, Object> dataMap,Integer cityId) {
    	if(cityId==null){
    		cityId=0;
    	}
    	
        Map<String, Object> queryMap = new HashMap<String, Object>();
        queryMap.put("startDate", startDate);
        queryMap.put("endDate", endDate);
        queryMap.put("cityId", cityId);

        QueryCondtion condtion = new QueryCondtion();
        condtion.setStartDate(startDate);
        condtion.setEndDate(endDate);
        condtion.setCityId(cityId);

        ServiceResult<List<DmDailyShopOrdersSource>> orderDateService = dailyShopOrdersSourceService.getByOrderDate(queryMap);

        List<DmDailyShopOrdersSource> result = orderDateService.getResult();
        
         
        //订单数封装图表展示数据
        List<Object> ehartsList = new ArrayList<>();
        for (DmDailyShopOrdersSource ct : result) {
        	 List<Object> eharts=new ArrayList<>();
        	 eharts.add(ct.getReferName());
        	 eharts.add(ct.getOrderQuantity());
        	 
        	 ehartsList.add(eharts);
             
		}
        //销售额封装图表展示数据
        List<Object> ehartsList2 = new ArrayList<>();
        for (DmDailyShopOrdersSource ct : result) {
        	List<Object> eharts=new ArrayList<>();
        	eharts.add(ct.getReferName());
        	eharts.add(ct.getOrderAmount());
        	
        	ehartsList2.add(eharts);
        	
        }
        String json = JsonUtil.toJson(ehartsList);
        String json2 = JsonUtil.toJson(ehartsList2);
        
        dataMap.put("json", json);
        dataMap.put("json2", json2);
        dataMap.put("result", result);
        dataMap.put("condtion", condtion);

        return "order/order-source";
    }
    
    /**
     * 平均客单价
     * @param request
     * @param startDate
     * @param endDate
     * @param dateRad
     * @param dataMap
     * @param cityId
     * @return
     */
    @RequestMapping("/order-average")
    public String orderAverage(HttpServletRequest request,  String startDate, String endDate, 
			String dateRad, Map<String, Object> dataMap,Integer depotId) {
    	
    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo="1";
    	}
    	
    	if(StringUtils.isBlank(dateRad)){
    		dateRad="0";
    	}
    	PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
    	
        Map<String, Object> queryMap = new HashMap<String, Object>();
        queryMap.put("startDate", startDate);
        queryMap.put("endDate", endDate);
        queryMap.put("depotId", depotId);
        queryMap.put("pager", pager);
        queryMap.put("dateRad", dateRad);

        QueryCondtion condtion = new QueryCondtion();
        condtion.setStartDate(startDate);
        condtion.setEndDate(endDate);
        condtion.setDepotId(depotId);
        condtion.setDateRad(dateRad);

        ServiceResult<List<DmDailyShopOrdersCount>> orderDateService = dailyShopOrdersCountService
            .getOrderAverageByOrderDate(queryMap);
    	
        List<DmDailyShopOrdersCount> result = orderDateService.getResult();
        
        StringBuffer orderDate = new StringBuffer();
        StringBuffer orderAmountAverage = new StringBuffer();
        
        for (DmDailyShopOrdersCount dmDailyShopOrdersCount : result) {
        	if("0".equals(dateRad)){
        		orderDate.append(DateUtils.dateToString(dmDailyShopOrdersCount.getOrderDate(), DateUtils.YYYY_MM_DD)).append(",");
        		orderAmountAverage.append(dmDailyShopOrdersCount.getAverage()).append(",");
        		
        	}
        	if("1".equals(dateRad)){
        		orderDate.append(DateUtils.dateToString(dmDailyShopOrdersCount.getOrderDate(), DateUtils.YYYY_MM)).append(",");
        		orderAmountAverage.append(dmDailyShopOrdersCount.getAverage()).append(",");
        		
        	}
		}
        
        PagerInfo pagerInfo = orderDateService.getPager();
        
        dataMap.put("orderDate", orderDate);
        dataMap.put("orderAmountAverage", orderAmountAverage);
        
        dataMap.put("result", result);
        dataMap.put("pagerInfo", pagerInfo);
        dataMap.put("condtion", condtion);
    	
    	return "order/order-average";
    }
    /**
     * 平均客单价分页
     * @param request
     * @param startDate
     * @param endDate
     * @param dateRad
     * @param dataMap
     * @param depotId
     * @return
     */
    @RequestMapping("/order-average-iframe")
    public String orderAverageIframe(HttpServletRequest request,  String startDate, String endDate, 
    		String dateRad, Map<String, Object> dataMap,Integer depotId) {
    	
    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo="1";
    	}
    	
    	if(StringUtils.isBlank(dateRad)){
    		dateRad="0";
    	}
    	PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
    	
    	Map<String, Object> queryMap = new HashMap<String, Object>();
    	queryMap.put("startDate", startDate);
    	queryMap.put("endDate", endDate);
    	queryMap.put("depotId", depotId);
    	queryMap.put("pager", pager);
    	queryMap.put("dateRad", dateRad);
    	
    	QueryCondtion condtion = new QueryCondtion();
    	condtion.setStartDate(startDate);
    	condtion.setEndDate(endDate);
    	condtion.setDepotId(depotId);
    	condtion.setDateRad(dateRad);
    	
    	ServiceResult<List<DmDailyShopOrdersCount>> orderDateService = dailyShopOrdersCountService
    			.getOrderAverageByOrderDate(queryMap);
    	
    	List<DmDailyShopOrdersCount> result = orderDateService.getResult();
    	
    	
    	PagerInfo pagerInfo = orderDateService.getPager();
    	
    	dataMap.put("result", result);
    	dataMap.put("pagerInfo", pagerInfo);
    	dataMap.put("condtion", condtion);
    	
    	return "order/order-average-iframe";
    }
}
