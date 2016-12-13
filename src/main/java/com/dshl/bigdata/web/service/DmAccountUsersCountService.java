package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.dshl.bigdata.web.entity.DmAccountUsersCount;
import com.dshl.bigdata.web.utils.ServiceResult;


public interface DmAccountUsersCountService {

	 public ServiceResult<Integer> getByDate(Map<String, String> queryMap);
	 
	 public ServiceResult<List<DmAccountUsersCount>> findDmAccountUsersCount();
	 
	 public ServiceResult<List<DmAccountUsersCount>> findDmAccountUsers(Map<String, Object> queryMap);
}