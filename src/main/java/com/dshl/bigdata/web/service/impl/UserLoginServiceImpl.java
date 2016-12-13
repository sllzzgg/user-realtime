package com.dshl.bigdata.web.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.UserLoginDao;
import com.dshl.bigdata.web.entity.User;
import com.dshl.bigdata.web.service.UserLoginService;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 下午1:54:55
 */
@Service
public class UserLoginServiceImpl implements UserLoginService{

	@Autowired
	private UserLoginDao userLoginDao;
	
	@Override
	public User getUserByUserName(String userName) {
		User user=userLoginDao.getUserByUserName(userName);
		return user;
	}

}
