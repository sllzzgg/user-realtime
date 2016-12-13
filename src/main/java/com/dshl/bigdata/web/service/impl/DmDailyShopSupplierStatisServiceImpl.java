package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopSupplierStatisDao;
import com.dshl.bigdata.web.entity.DmDailyShopSupplierStatis;
import com.dshl.bigdata.web.service.DmDailyShopSupplierStatisService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmDailyShopSupplierStatisServiceImpl implements DmDailyShopSupplierStatisService {
	private static Logger log = LoggerFactory.getLogger(DmDailyShopSupplierStatisServiceImpl.class);

	@Autowired
	private DmDailyShopSupplierStatisDao dailyShopSupplierStatisDao;
	
	@Override
	public ServiceResult<List<DmDailyShopSupplierStatis>> getSupplierStatisByDate(Map<String, Object> queryMap) {
			ServiceResult<List<DmDailyShopSupplierStatis>> result = new ServiceResult<List<DmDailyShopSupplierStatis>>();
			try {
				PagerInfo pager = (PagerInfo) queryMap.get("pager");
				pager.setRowsCount(dailyShopSupplierStatisDao.getSupplierStatisByDateCount(queryMap));
				result.setPager(pager);
				result.setResult(dailyShopSupplierStatisDao.getSupplierStatisByDate(queryMap));
				
			} catch (Exception e) {
				result.setSuccess(false);
				result.setMessage("根据id[" + queryMap
						+ "]取得DmDailyShopSupplierStatis对象时出现未知异常");
				e.printStackTrace();
			}
			return result;
	}

	
	
}