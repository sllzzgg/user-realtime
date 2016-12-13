package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.entity.User;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 下午4:14:45
 */
public interface UserControlSevice {

	ServiceResult<List<User>> getUserList(Map<String, Object> queryMap);

}
