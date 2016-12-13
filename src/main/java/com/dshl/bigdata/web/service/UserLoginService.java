package com.dshl.bigdata.web.service;

import com.dshl.bigdata.web.entity.User;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 下午1:54:00
 */
public interface UserLoginService {

	User getUserByUserName(String userName);

}
