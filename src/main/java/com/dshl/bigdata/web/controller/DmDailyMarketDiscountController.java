package com.dshl.bigdata.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.OrderDiscount;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmDailyMarketDiscountService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;
import com.dshl.commons.utlis.DateUtils;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月25日 下午2:15:50
 */

@Controller
@RequestMapping("")
public class DmDailyMarketDiscountController {
	
	@Autowired
	private DmDailyMarketDiscountService dmDailyMarketDiscountService;
	
	/**
	 * 折扣
	 * @author shilinlin
	 * @param request
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param dataMap
	 * @return
	 * 2016年11月25日 下午3:47:29
	 */
	@RequestMapping("/discount")
	public String getDiscount(HttpServletRequest request, HttpServletResponse response,
			String startDate, String endDate, Integer depotId, String dataRdaio, Map<String, Object> dataMap){
		
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		if(StringUtils.isBlank(dataRdaio)){
			dataRdaio="0";
		}
		PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
		
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("pager", pager);
		queryMap.put("depotId", depotId);
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("dataRdaio", dataRdaio);
		
		
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);
		condtion.setDateRad(dataRdaio);
		
		ServiceResult<List<OrderDiscount>> result=dmDailyMarketDiscountService.getDiscount(queryMap);
		
		List<OrderDiscount> orderDiscountList = result.getResult();
		PagerInfo pagerInfo = result.getPager();
		
		StringBuffer createDate = new StringBuffer();
        StringBuffer orderCount = new StringBuffer();
        StringBuffer discountAmout = new StringBuffer();
        
        int orderTotalCount=0;//订单总的记录数
        double orderTotalAmount=0;//订单金额总数
        double discountTotalAmount=0;//折扣金额总数
        
        for (int i = 0; i < orderDiscountList.size(); i++) {
        	OrderDiscount ct= orderDiscountList.get(i);
        	
        	orderTotalCount+=ct.getOrderCount();
        	orderTotalAmount+=ct.getOrderAmount();
        	discountTotalAmount=ct.getDiscountAmount();
        	
        	//根据每日展示数据
        	if("0".equals(dataRdaio)){
        		if(ct.getCreateDate() !=null){
        			createDate.append(DateUtils.dateToString(ct.getCreateDate(), DateUtils.YYYY_MM_DD)).append(",");
        			orderCount.append(ct.getOrderCount()).append(",");
                	discountAmout.append(ct.getDiscountAmount()).append(",");
        		}
        	}
        	//根据每月展示数据
        	if("1".equals(dataRdaio)){
        		if(ct.getCreateDate() !=null){
        			createDate.append(DateUtils.dateToString(ct.getCreateDate(), DateUtils.YYYY_MM)).append(",");
        			orderCount.append(ct.getOrderCount()).append(",");
                	discountAmout.append(ct.getDiscountAmount()).append(",");
        		}
        	}
        }
        //封装订单总数、总金额、折扣总金额
        OrderDiscount orderDiscount = new OrderDiscount();
        orderDiscount.setTotalOrderCount(orderTotalCount);
        orderDiscount.setTotalOrderAmount(orderTotalAmount);
        orderDiscount.setTotalDiscountAmount(discountTotalAmount);
        
		dataMap.put("createDate", createDate);
		dataMap.put("orderCount", orderCount);
		dataMap.put("discountAmout", discountAmout);
		
		dataMap.put("orderDiscount", orderDiscount);
		dataMap.put("orderDiscountList", orderDiscountList);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		
		return "market/market-discount";
	}
	
	@RequestMapping("/discount-iframe")
	public String getDiscountIframe(HttpServletRequest request, HttpServletResponse response,
			String startDate, String endDate, Integer depotId, String dataRdaio, Map<String, Object> dataMap){
		
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
		
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("pager", pager);
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("depotId", depotId);
		queryMap.put("dataRdaio", dataRdaio);
		
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);
		condtion.setDateRad(dataRdaio);
		
		ServiceResult<List<OrderDiscount>> result=dmDailyMarketDiscountService.getDiscount(queryMap);
		List<OrderDiscount> orderDiscountList = result.getResult();
		PagerInfo pagerInfo = result.getPager();
		
		dataMap.put("orderDiscountList", orderDiscountList);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		
		return "market/market-discount-iframe";
	}

}
