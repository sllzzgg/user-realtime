package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.UserControlDao;
import com.dshl.bigdata.web.entity.User;
import com.dshl.bigdata.web.service.UserControlSevice;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 下午4:16:00
 */
@Service
public class UserControlSeviceImpl implements UserControlSevice {

	@Autowired
	private UserControlDao userControlDao;
	
	@Override
	public ServiceResult<List<User>> getUserList(Map<String, Object> queryMap) {
		ServiceResult<List<User>> result = new ServiceResult<>();
		try {
			PagerInfo pager = (PagerInfo) queryMap.get("pager");
			pager.setRowsCount(userControlDao.getUserListCount(queryMap));
			result.setResult(userControlDao.getUserList(queryMap));
			result.setPager(pager);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMessage("用户列表出现未知异常");
			e.printStackTrace();
		}
		
		return result;
	}

}
