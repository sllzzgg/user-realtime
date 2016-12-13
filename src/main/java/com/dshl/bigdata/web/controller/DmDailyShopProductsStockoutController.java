package com.dshl.bigdata.web.controller;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.DmDailyShopProductsStatis;
import com.dshl.bigdata.web.entity.DmWechatUsersCount;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmDailyShopProductsStatisService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;
import com.dshl.commons.utlis.DateUtils;

/**
 * 
 * 
 * @Filename: DmDailyShopCategoryController.java
 * @Version: 1.0
 * @Author: yangzhanling 杨占岭
 * @Email: zhanling.yang@ds365.com
 * 
 */

@Controller
@RequestMapping("")
public class DmDailyShopProductsStockoutController {

	@Autowired
	private DmDailyShopProductsStatisService dmDailyShopProductsStatisService;

	/**
	 * 缺货分析
	 * @param request
	 * @param response
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param dataMap
	 * @return
	 */
	@RequestMapping(value = "/product-stockout")
	public String getOrderCount(HttpServletRequest request,
			HttpServletResponse response, String startDate, String endDate,Integer depotId,
			Map<String, Object> dataMap) {

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

		ServiceResult<List<DmDailyShopProductsStatis>> service = dmDailyShopProductsStatisService.getProductsStatisByDate(queryMap);
		List<DmDailyShopProductsStatis> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();
		
		StringBuffer addDate = new StringBuffer();
		StringBuffer onlineQuantity = new StringBuffer();
		StringBuffer lackQuantity = new StringBuffer();
		StringBuffer stopQuantity = new StringBuffer();
		StringBuffer lackQuantityRate = new StringBuffer();
		
		for (int i = 0; i < result.size(); i++) {
			DmDailyShopProductsStatis dc = result.get(i);
			
			addDate.append(dc.getAddDate());
			onlineQuantity.append(dc.getOnlineQuantity());
			lackQuantity.append(dc.getLackQuantity());
			stopQuantity.append(dc.getStopQuantity());
			if (dc.getOnlineQuantity()+dc.getLackQuantity() == 0) {
				lackQuantityRate.append(0);
				dc.setLackQuantityRate(0);
			}else {
				double rate = dc.getLackQuantity()/(dc.getOnlineQuantity()+dc.getLackQuantity());
				lackQuantityRate.append(rate);
				dc.setLackQuantityRate(rate);
			}
			if (i != result.size() - 1) {
				addDate.append(",");
				onlineQuantity.append(",");
				lackQuantity.append(",");
				stopQuantity.append(",");
				lackQuantityRate.append(",");
			}
		}
		dataMap.put("addDate", addDate);
		dataMap.put("onlineQuantity", onlineQuantity);
		dataMap.put("lackQuantity", lackQuantity);
		dataMap.put("stopQuantity", stopQuantity);
		dataMap.put("lackQuantityRate", lackQuantityRate);
		dataMap.put("statis", result);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		return "product/product-stockout";
	}
	/**
	 * 缺货分析分页
	 * @param request
	 * @param response
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param dataMap
	 * @return
	 */
	@RequestMapping(value = "/product-stockout-iframe")
	public String getOrderCountIframe(HttpServletRequest request,
			HttpServletResponse response, String startDate, String endDate,Integer depotId,
			Map<String, Object> dataMap) {
		
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
		
		ServiceResult<List<DmDailyShopProductsStatis>> service = dmDailyShopProductsStatisService.getProductsStatisByDate(queryMap);
		List<DmDailyShopProductsStatis> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();
		
		dataMap.put("statis", result);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		return "product/product-stockout-iframe";
	}
	
	/**
	 * 缺货率分析
	 * @param request
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param categoryName
	 * @param dataMap
	 * @return
	 */
	@RequestMapping("/product-stockout-rate")
	public String stockoutRate(HttpServletRequest request, HttpServletResponse response, String startDate, String endDate, 
					Integer depotId, String categoryName, Map<String, Object> dataMap){
		
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
		queryMap.put("categoryName", categoryName);
		
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);
		
		ServiceResult<List<DmDailyShopProductsStatis>> service = dmDailyShopProductsStatisService.getProductsStockoutRateByDate(queryMap);
		
		List<DmDailyShopProductsStatis> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();
		
		dataMap.put("result", result);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		dataMap.put("categoryName", categoryName);
		return "product/product-stockout-rate";
	}
	
	
	@RequestMapping("/product-stockout-rate-iframe")
	public String stockoutRateIframe(HttpServletRequest request, HttpServletResponse response, String startDate, String endDate, 
			Integer depotId,  Map<String, Object> dataMap){
		
		
		String categoryName1 = request.getParameter("categoryName");
		
		String categoryName = null;
		try {
			categoryName = new String(categoryName1.getBytes("iso-8859-1"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
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
		queryMap.put("categoryName", categoryName);
		
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);
		
		ServiceResult<List<DmDailyShopProductsStatis>> service = dmDailyShopProductsStatisService.getProductsStockoutRateByDate(queryMap);
		
		List<DmDailyShopProductsStatis> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();
		
		dataMap.put("result", result);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		dataMap.put("categoryName", categoryName);
		return "product/product-stockout-rate-iframe";
	}

}
