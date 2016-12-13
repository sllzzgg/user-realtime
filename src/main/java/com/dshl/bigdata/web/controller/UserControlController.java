package com.dshl.bigdata.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.User;
import com.dshl.bigdata.web.service.UserControlSevice;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 下午4:01:14
 */
@Controller
public class UserControlController {
	
	@Autowired
	private UserControlSevice userControlService;

	@RequestMapping("/user-control")
	public String UserControl(HttpServletRequest request, Map<String, Object> dataMap){
		
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
		Map<String, Object> queryMap = new HashMap<String, Object>();
		
		queryMap.put("pager", pager);
		
		ServiceResult<List<User>> result= userControlService.getUserList(queryMap);
		List<User> userList = result.getResult();
		PagerInfo pagerInfo = result.getPager();
		
		dataMap.put("userList", userList);
		dataMap.put("pagerInfo", pagerInfo);
		
		return "control-user-list";
	}
	
}
 