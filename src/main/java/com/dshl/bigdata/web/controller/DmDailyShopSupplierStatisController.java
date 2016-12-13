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

import com.dshl.bigdata.web.entity.DmDailyShopSupplierStatis;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmDailyShopSupplierStatisService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

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
@RequestMapping("/")
public class DmDailyShopSupplierStatisController {

	@Autowired
	private DmDailyShopSupplierStatisService dmDailyShopSupplierStatisService;

	@RequestMapping(value = "supplier-stat")
	public String getOrderCount(HttpServletRequest request,
			HttpServletResponse response, String startDate, String endDate,
			Map<String, Object> dataMap) {
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("pager", pager);

		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);

		ServiceResult<List<DmDailyShopSupplierStatis>> service = dmDailyShopSupplierStatisService
				.getSupplierStatisByDate(queryMap);
		List<DmDailyShopSupplierStatis> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();
		dataMap.put("statis", result);
		dataMap.put("condtion", condtion);
		dataMap.put("pagerInfo", pagerInfo);
		return "supplier-statis";
	}
	@RequestMapping(value = "supplier-statis-iframe")
	public String getOrderCountIframe(HttpServletRequest request,
			HttpServletResponse response, String startDate, String endDate,
			Map<String, Object> dataMap) {
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("pager", pager);
		
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		
		ServiceResult<List<DmDailyShopSupplierStatis>> service = dmDailyShopSupplierStatisService
				.getSupplierStatisByDate(queryMap);
		List<DmDailyShopSupplierStatis> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();
		dataMap.put("statis", result);
		dataMap.put("condtion", condtion);
		dataMap.put("pagerInfo", pagerInfo);
		return "supplier-statis-iframe";
	}

}
