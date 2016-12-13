package com.dshl.bigdata.web.controller;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.DmDailyShopProductsSale;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.entity.ShopBrand;
import com.dshl.bigdata.web.service.DmDailyShopProductsSaleService;
import com.dshl.bigdata.web.service.DmDailyShopProductsService;
import com.dshl.bigdata.web.service.ShopOrderItemService;
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
public class DmDailyShopProductsSaleController {
	
	private Integer pagerSize = 10;
    @Autowired
    private DmDailyShopProductsSaleService dmDailyShopProductsFlowService;
    
    @Autowired
    private DmDailyShopProductsService dmDailyShopProductsService;
    
    @Autowired
	private ShopOrderItemService shopOrderItemService;
    
    /**
     * 商品销量走势
     * @author shilinlin
     * @param request
     * @param response
     * @param brandId
     * @param productName
     * @param startDate
     * @param endDate
     * @param cityId
     * @param dateRad
     * @param dataMap
     * @return
     * 2016年12月5日 下午4:49:28
     */
    @RequestMapping(value = "/sale")
    public String getOrderCount(HttpServletRequest request, HttpServletResponse response, Integer brandId, String productName,
                                String startDate, String endDate, Integer cityId, String dateRad, Map<String, Object> dataMap) {
    	
    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo = "1";
    	}
    	
    	if(StringUtils.isBlank(dateRad)){
    		dateRad="0";
    	}
    	
    	// 默认值 时间
		String d_start = "2016-09-01";
		String d_end = DateUtils.getCurrDate(DateUtils.YYYY_MM_DD);
	
		if (StringUtils.isBlank(startDate)) {
			startDate = d_start;
		}
		if (StringUtils.isBlank(endDate)) {
			endDate = d_end;
		}
    	
    	PagerInfo pager = new PagerInfo(pagerSize,Integer.parseInt(sPageNo));
    	
        Map<String, Object> queryMap = new HashMap<String, Object>();
        queryMap.put("startDate", startDate);
        queryMap.put("endDate", endDate);
        queryMap.put("cityId", cityId);
        queryMap.put("dateRad", dateRad);//用于区分时间 0：日  1：月  2：年
        queryMap.put("pager", pager);
        queryMap.put("tag", true);//仅用于区分 是否加载折线数据
        queryMap.put("brandId", brandId);
        queryMap.put("productName", productName);

        QueryCondtion condtion = new QueryCondtion();
        condtion.setStartDate(startDate);
        condtion.setEndDate(endDate);
        condtion.setCityId(cityId);
        condtion.setBrandId(brandId);
        condtion.setDateRad(dateRad);
       
       //获取所有的商品品牌
       List<ShopBrand> shopBrandList = shopOrderItemService.getAllShopBrand();
       
       ServiceResult<List<DmDailyShopProductsSale>> orderDateService = dmDailyShopProductsFlowService
            .getByOrderDate(queryMap);

       //折线图展示数据
        List<DmDailyShopProductsSale> result = orderDateService.getResult();
       //列表展示数据 
        List<DmDailyShopProductsSale> dataList = orderDateService.getDataList();
        
        PagerInfo pagerInfo = orderDateService.getPager();
        
        StringBuffer orderdate = new StringBuffer();
        StringBuffer orderamout = new StringBuffer();
        StringBuffer ordercount = new StringBuffer();
        
        for (int i = 0; i < result.size(); i++) {
        	DmDailyShopProductsSale ct= result.get(i);
        	//按日展示
        	if("0".equals(dateRad)){
        		if(ct.getOrderDate() !=null){
        			orderdate.append(DateUtils.dateToString(ct.getOrderDate(), DateUtils.YYYY_MM_DD)).append(",");
        			ordercount.append(ct.getProductQuantity()).append(",");
                    orderamout.append(ct.getTotalAmount()).append(",");
        		}
        	//按月展示
        	}else if("1".equals(dateRad)){
        		if(ct.getOrderDate() !=null){
        			orderdate.append(DateUtils.dateToString(ct.getOrderDate(), DateUtils.YYYY_MM)).append(",");
        			ordercount.append(ct.getProductQuantity()).append(",");
                    orderamout.append(ct.getTotalAmount()).append(",");
        		}
        	//按年展示
        	}else{
        		if(ct.getOrderDate() !=null){
        			orderdate.append(DateUtils.getYear(ct.getOrderDate())).append(",");
        			ordercount.append(ct.getProductQuantity()).append(",");
                    orderamout.append(ct.getTotalAmount()).append(",");
        		}
        	}
        }
        dataMap.put("dataList", dataList);
        dataMap.put("pagerInfo", pagerInfo);
        dataMap.put("orderdate", orderdate);
        dataMap.put("ordercount", ordercount);
        dataMap.put("orderamout", orderamout);

        dataMap.put("condtion", condtion);
        dataMap.put("productName", productName);
        dataMap.put("shopBrandList", shopBrandList);
        
        return "product/product-sale";
    }
    
    /**
     * 分页展示
     * @author shilinlin
     * @param request
     * @param response
     * @param startDate
     * @param endDate
     * @param cityId
     * @param dataMap
     * @return
     * 2016年12月5日 上午11:48:37
     */
    @RequestMapping(value = "/sale-iframe")
    public String getOrderCountIframe(HttpServletRequest request, HttpServletResponse response,Integer brandId,
            						String startDate, String endDate, Integer cityId, String productName, String dateRad, Map<String, Object> dataMap) {
    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo = "1";
    	}
    	if(StringUtils.isBlank(dateRad)){
    		dateRad="0";
    	}
    	
    	/*String productName1 = request.getParameter("productName");
    	
    	//java解决js乱码
    	String productName=null;
    	try {	
			productName = new String(productName1.getBytes("iso-8859-1"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
    	
    	PagerInfo pager = new PagerInfo(pagerSize,Integer.parseInt(sPageNo));
    	
    	Map<String, Object> queryMap = new HashMap<String, Object>();
    	queryMap.put("startDate", startDate);
    	queryMap.put("endDate", endDate);
    	queryMap.put("cityId", cityId);
    	queryMap.put("dateRad", dateRad);//用于区分时间 0：日  1：月  2：年
    	queryMap.put("pager", pager);
    	queryMap.put("brandId", brandId);
        queryMap.put("productName", productName);
        queryMap.put("tag", false);//仅用于区分是否加载折线数据
    	
    	QueryCondtion condtion = new QueryCondtion();
    	condtion.setStartDate(startDate);
    	condtion.setEndDate(endDate);
    	condtion.setCityId(cityId);
    	condtion.setBrandId(brandId);
    	condtion.setDateRad(dateRad);
    	
    	ServiceResult<List<DmDailyShopProductsSale>> orderDateService = dmDailyShopProductsFlowService
    			.getByOrderDate(queryMap);
    	
    	//列表展示数据 
        List<DmDailyShopProductsSale> dataList = orderDateService.getDataList();
    	
    	PagerInfo pagerInfo = orderDateService.getPager();
    	
    	dataMap.put("dataList", dataList);
    	dataMap.put("pagerInfo", pagerInfo);
    	dataMap.put("condtion", condtion);
    	dataMap.put("productName", productName);
    	return "product/product-sale-iframe";
    }
}
