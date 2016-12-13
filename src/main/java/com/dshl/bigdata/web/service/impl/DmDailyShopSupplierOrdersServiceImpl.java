package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopSupplierOrdersDao;
import com.dshl.bigdata.web.entity.DmDailyShopSupplierOrders;
import com.dshl.bigdata.web.service.DmDailyShopSupplierOrdersService;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmDailyShopSupplierOrdersServiceImpl implements DmDailyShopSupplierOrdersService {
	private static Logger log = LoggerFactory.getLogger(DmDailyShopSupplierOrdersServiceImpl.class);
	
	@Autowired
	private DmDailyShopSupplierOrdersDao dmDailyShopSupplierOrdersDao;
	
	
	@Override
	public ServiceResult<List<DmDailyShopSupplierOrders>> getSupplierOrdersByDate(Map<String, String> queryMap) {
			ServiceResult<List<DmDailyShopSupplierOrders>> result = new ServiceResult<List<DmDailyShopSupplierOrders>>();
			try {
				result.setResult(dmDailyShopSupplierOrdersDao
						.getShopSupplierStatisByDate(queryMap));
			} catch (Exception e) {
				result.setSuccess(false);
				result.setMessage("根据id[" + queryMap
						+ "]取得DmWechatUsersCount对象时出现未知异常");
				e.printStackTrace();
			}
	return result;
}
}