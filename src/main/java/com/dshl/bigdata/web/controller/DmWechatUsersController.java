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

import com.dshl.bigdata.web.entity.DmWechatUsersCount;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmWechatUsersCountService;
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
public class DmWechatUsersController {

	@Autowired
	private DmWechatUsersCountService dmWechatUsersCountService;

	@RequestMapping(value = "/wechat")
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

		ServiceResult<List<DmWechatUsersCount>> service = dmWechatUsersCountService
				.getDmWechatUsersCountByDate(queryMap);
		List<DmWechatUsersCount> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();

		StringBuffer createDate = new StringBuffer();
		StringBuffer addQuantity = new StringBuffer();
		StringBuffer cancelQuantity = new StringBuffer();
		StringBuffer totalCount = new StringBuffer();

		for (int i = 0; i < result.size(); i++) {
			DmWechatUsersCount dc = result.get(i);

			createDate.append(DateUtils.dateToString(dc.getCreateDate(),
					"yyyy-MM-dd"));
			if (dc.getAddQuantity() == null) {
				dc.setAddQuantity(0);
			}
			if (dc.getCancelQuantity() == null) {
				dc.setCancelQuantity(0);
			}
			addQuantity.append(dc.getAddQuantity());
			cancelQuantity.append(dc.getCancelQuantity());
			totalCount.append(dc.getTotalQuantity());
			if (i != result.size() - 1) {
				createDate.append(",");
				addQuantity.append(",");
				cancelQuantity.append(",");
				totalCount.append(",");
			}
		}
		dataMap.put("createDate", createDate);
		dataMap.put("addQuantity", addQuantity);
		dataMap.put("cancelQuantity", cancelQuantity);
		dataMap.put("totalCount", totalCount);
		dataMap.put("users", result);
		dataMap.put("condtion", condtion);
		dataMap.put("pagerInfo", pagerInfo);
		return "store/wechat-register";
	}
	//分页
	@RequestMapping(value = "/wechat-iframe")
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
		
		ServiceResult<List<DmWechatUsersCount>> service = dmWechatUsersCountService
				.getDmWechatUsersCountByDate(queryMap);
		List<DmWechatUsersCount> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();
		
		dataMap.put("users", result);
		dataMap.put("condtion", condtion);
		dataMap.put("pagerInfo", pagerInfo);
		return "store/wechat-register-iframe";
	}

}
