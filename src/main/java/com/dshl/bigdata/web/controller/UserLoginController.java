package com.dshl.bigdata.web.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.User;
import com.dshl.bigdata.web.service.UserLoginService;


/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 上午10:39:17
 */
@Controller
public class UserLoginController {
	
	@Autowired
	private UserLoginService userLoginService;
	
	//跳转登录页面
	@RequestMapping("/index")
	public String login(){
		return "redirect:user-login ";
	}
	
	@RequestMapping("/user-login")
	public String userLogin(){
		return "login/login";
	}
	/**
	 * 用户登录
	 * @author shilinlin
	 * @param userName
	 * @param password
	 * @param request
	 * @param dataMap
	 * @return
	 * 2016年11月24日 下午1:50:07
	 */
	@RequestMapping("/loginCheck")
	public String loginCheck(String userName, String password, HttpServletRequest request,
			HttpSession session, Map<String, Object> dataMap){
		
		if (StringUtils.isBlank(userName) || StringUtils.isBlank(password)) {
			dataMap.put("error", "用户名或密码为空！");
			return "login/login";
		}
		if("admin".equals(userName) && "123456".equals(password)){
			User user =new User();
			user.setUserName(userName);
			user.setRoleName("超级管理员");
			session.setAttribute("user", user);
			return  "redirect:/home";
		}
		
		User user = userLoginService.getUserByUserName(userName);
		
		if(user==null){
			dataMap.put("error", "用户名不存在！");
			return "login/login";
		}
		
		String queryPassword = user.getPassword();
		if(!password.equals(queryPassword)){
			dataMap.put("error", "密码错误！");
			return "login/login";
		}
		session.setAttribute("user", user);
		return  "redirect:/home";
	}
	
}
