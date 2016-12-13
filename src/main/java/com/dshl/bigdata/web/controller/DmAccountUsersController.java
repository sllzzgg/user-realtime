package com.dshl.bigdata.web.controller;

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

import com.dshl.bigdata.web.entity.DmAccountUsersCount;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmAccountUsersCountService;
import com.dshl.bigdata.web.utils.DateUtil;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * 
 * @author shilinlin
 * 2016年12月6日  下午4:09:17
 */

@Controller
@RequestMapping("")
public class DmAccountUsersController {

	@Autowired
	private DmAccountUsersCountService dmAccountUsersCountService;
	
	/**
	 * 商户注册
	 * @author shilinlin
	 * @param request
	 * @param response
	 * @param startDate
	 * @param endDate
	 * @param dataMap
	 * @return
	 * 2016年12月6日 下午2:20:33
	 */
	@RequestMapping(value = "/user-register")
	public String getOrderCount(HttpServletRequest request, HttpServletResponse response,
			String startDate, String endDate, Integer cityId, String dateRad, Map<String, Object> dataMap) {

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
		queryMap.put("pager", pager);
		queryMap.put("cityId", cityId);
		queryMap.put("dateRad", dateRad);//0:按日查询 1：按月查询

		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setCityId(cityId);
		condtion.setDateRad(dateRad);

		
		ServiceResult<List<DmAccountUsersCount>> service = dmAccountUsersCountService
				.findDmAccountUsers(queryMap);
		
		//-------------------获取昨天注册量-------------------------------------
		Map<String, String> queryDateMap = new HashMap<>();
		
		queryDateMap.put("startDate", DateUtil.getYesterday());
		queryDateMap.put("endDate", DateUtil.getYesterday());

		ServiceResult<Integer> userCount = dmAccountUsersCountService.getByDate(queryDateMap);
		//-------------------------------------------------------------------
		
		//---------------------------累计商户注册量------------------------------
		ServiceResult<List<DmAccountUsersCount>> dmAccountUsersCountResult = dmAccountUsersCountService
				.findDmAccountUsersCount();

		int totalUsers = 0;
		if (dmAccountUsersCountResult.getSuccess()
				&& dmAccountUsersCountResult.getResult().size() > 0) {
			List<DmAccountUsersCount> counts = dmAccountUsersCountResult
					.getResult();
			for (DmAccountUsersCount dmAccountUsersCount : counts) {
				totalUsers += dmAccountUsersCount.getRegisterCount();
			}
		}
		//----------------------------------------------------------------------
		List<DmAccountUsersCount> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();

		StringBuffer createDate = new StringBuffer();
		StringBuffer registerCount = new StringBuffer();
		StringBuffer totalCount = new StringBuffer();

		for (int i = 0; i < result.size(); i++) {
			DmAccountUsersCount dc = result.get(i);

			//按日展示
			if("0".equals(dateRad)){
				if(dc.getCreateDate()!=null){
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
					createDate.append(sdf.format(dc.getCreateDate())).append(",");
					registerCount.append(dc.getRegisterCount()).append(",");
					totalCount.append(dc.getTotalCount()).append(",");
				}
			}
			//按月展示
			if("1".equals(dateRad)){
				if(dc.getCreateDate()!=null){
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月");
					createDate.append(sdf.format(dc.getCreateDate())).append(",");
					registerCount.append(dc.getRegisterCount()).append(",");
					totalCount.append(dc.getTotalCount()).append(",");
				}
			}
		}
		dataMap.put("createDate", createDate);
		dataMap.put("registerCount", registerCount);
		dataMap.put("totalCount", totalCount);
		dataMap.put("condtion", condtion);
		dataMap.put("users", result);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("sum_register", userCount.getResult());
		dataMap.put("totalUsers", totalUsers);
		return "store/user-register";
	}
	
	//分页
	@RequestMapping(value = "/regsister-iframe")
	public String getOrderCountIframe(HttpServletRequest request, HttpServletResponse response,
			String startDate, String endDate, Integer cityId, String dateRad, Map<String, Object> dataMap) {
		
		String sPageNo = request.getParameter("pindex");
		PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("pager", pager);
		queryMap.put("cityId", cityId);
		queryMap.put("dateRad", dateRad);//0:按日查询 1：按月查询

		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setCityId(cityId);
		condtion.setDateRad(dateRad);

		
		ServiceResult<List<DmAccountUsersCount>> service = dmAccountUsersCountService
				.findDmAccountUsers(queryMap);
		List<DmAccountUsersCount> result = service.getResult();
		PagerInfo pagerInfo = service.getPager();
		
		dataMap.put("condtion", condtion);
		dataMap.put("users", result);
		dataMap.put("pagerInfo", pagerInfo);
		return "store/user-register-iframe";
	}

}
