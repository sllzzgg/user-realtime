package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmAccountUsersCountDao;
import com.dshl.bigdata.web.entity.DmAccountUsersCount;
import com.dshl.bigdata.web.service.DmAccountUsersCountService;
import com.dshl.bigdata.web.utils.DateUtil;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmAccountUsersCountServiceImpl implements DmAccountUsersCountService {
	private static Logger log = LoggerFactory.getLogger(DmAccountUsersCountServiceImpl.class);
	
	@Autowired
	private DmAccountUsersCountDao dmAccountUsersCountDao;

	/**
	 * 根据时间段查询类型
	 * 昨天商户注册数
	 * @param queryMap
	 * @return
	 */
	public ServiceResult<Integer> getByDate(Map<String, String> queryMap) {
	        ServiceResult<Integer> result = new ServiceResult<Integer>();
	        try {
	            result.setResult(dmAccountUsersCountDao.getByDate(queryMap));
	        } catch (Exception e) {
	            result.setSuccess(false);
	            result.setMessage("出现未知异常");
	            e.printStackTrace();
	        }
	        return result;
	    }

	@Override
	public ServiceResult<List<DmAccountUsersCount>> findDmAccountUsersCount() {
		ServiceResult<List<DmAccountUsersCount>> result = new ServiceResult<List<DmAccountUsersCount>>();
        try {
            result.setResult(dmAccountUsersCountDao.findDmAccountUsersCount());
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("出现未知异常");
            e.printStackTrace();
        }
        return result;
	}
	
	/**
	 * 注册用户统计
	 */
	@Override
	public ServiceResult<List<DmAccountUsersCount>> findDmAccountUsers(Map<String, Object> queryMap) {
		ServiceResult<List<DmAccountUsersCount>> result = new ServiceResult<List<DmAccountUsersCount>>();
        try {
        	PagerInfo pager =(PagerInfo) queryMap.get("pager");
        	
        	String startTime = (String) queryMap.get("startDate");
        	String endTime = (String) queryMap.get("endDate");
        	//获取截取后的时间Map
        	Map<String, Object> dateMap = DateUtil.getSplitDateMap(startTime, endTime);
        	queryMap.put("dateMap", dateMap);
        	
        	//判断查询类型
        	String dateRad = (String) queryMap.get("dateRad");
        	//按日查询
        	if("0".equals(dateRad)){
        		pager.setRowsCount(dmAccountUsersCountDao.findDmAccountUsersCount2(queryMap));
        		result.setResult(dmAccountUsersCountDao.findDmAccountUsers(queryMap));
        		
        	}
        	//按月查询 
        	if("1".equals(dateRad)){
        		pager.setRowsCount(dmAccountUsersCountDao.findDmAccountUsersCountByMonth(queryMap));
        		result.setResult(dmAccountUsersCountDao.findDmAccountUsersByMonth(queryMap));
        	}
            result.setPager(pager);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("出现未知异常");
            e.printStackTrace();
        }
        return result;
	}
}