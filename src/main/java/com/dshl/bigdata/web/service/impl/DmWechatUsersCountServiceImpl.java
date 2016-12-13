package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmWechatUsersCountDao;
import com.dshl.bigdata.web.entity.DmWechatUsersCount;
import com.dshl.bigdata.web.service.DmWechatUsersCountService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmWechatUsersCountServiceImpl implements DmWechatUsersCountService {
	private static Logger log = LoggerFactory.getLogger(DmWechatUsersCountServiceImpl.class);
	
	@Autowired
	private DmWechatUsersCountDao dmWechatUsersCountDao;
    
   public void setDmWechatUsersCountDao(DmWechatUsersCountDao dmWechatUsersCountDao) {
	this.dmWechatUsersCountDao = dmWechatUsersCountDao;
}

@Override
public ServiceResult<List<DmWechatUsersCount>> getDmWechatUsersCountByDate(
		Map<String, Object> queryMap) {
	 ServiceResult<List<DmWechatUsersCount>> result = new ServiceResult<List<DmWechatUsersCount>>();
	 try {
		 PagerInfo pager = (PagerInfo) queryMap.get("pager");
		 pager.setRowsCount(dmWechatUsersCountDao.getWechatUsersByDateCount(queryMap));
         result.setResult(dmWechatUsersCountDao.getWechatUsersByDate(queryMap));
         result.setPager(pager);
     } catch (Exception e) {
         result.setSuccess(false);
         result.setMessage("根据id[" + queryMap + "]取得DmWechatUsersCount对象时出现未知异常");
         e.printStackTrace();
     }
	return result;
}
    
   
}