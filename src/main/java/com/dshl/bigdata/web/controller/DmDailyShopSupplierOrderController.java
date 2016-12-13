package com.dshl.bigdata.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.DmDailyShopSupplierOrders;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmDailyShopSupplierOrdersService;
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
@RequestMapping("/supplier-order")
public class DmDailyShopSupplierOrderController {

	@Autowired
	private DmDailyShopSupplierOrdersService dailyShopSupplierOrdersService;

	@RequestMapping(value = "")
	public String getOrderCount(HttpServletRequest request,
			HttpServletResponse response, String startDate, String endDate,
			Map<String, Object> dataMap) {

		Map<String, String> queryMap = new HashMap<String, String>();
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);

		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);

		ServiceResult<List< DmDailyShopSupplierOrders>> service = dailyShopSupplierOrdersService
				.getSupplierOrdersByDate(queryMap);
		List< DmDailyShopSupplierOrders> result = service.getResult();

		
		dataMap.put("statis", result);
		dataMap.put("condtion", condtion);
		return "supplier-order";
	}

}
