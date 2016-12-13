package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopProductsStatisDao;
import com.dshl.bigdata.web.entity.DmDailyShopProductsStatis;
import com.dshl.bigdata.web.entity.DmWechatUsersCount;
import com.dshl.bigdata.web.service.DmDailyShopProductsStatisService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmDailyShopProductsStatisServiceImpl implements
		DmDailyShopProductsStatisService {
	private static Logger log = LoggerFactory
			.getLogger(DmDailyShopProductsStatisServiceImpl.class);

	@Autowired
	private DmDailyShopProductsStatisDao dmDailyShopProductsStatisDao;

	@Override
	public ServiceResult<List<DmDailyShopProductsStatis>> getProductsStatisByDate(
			Map<String, Object> queryMap) {

		ServiceResult<List<DmDailyShopProductsStatis>> result = new ServiceResult<List<DmDailyShopProductsStatis>>();
		try {
			PagerInfo pager = (PagerInfo) queryMap.get("pager");
			pager.setRowsCount(dmDailyShopProductsStatisDao.getProductsStatisByDateCount(queryMap));
			result.setResult(dmDailyShopProductsStatisDao.getProductsStatisByDate(queryMap));
			result.setPager(pager);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMessage("根据id[" + queryMap
					+ "]取得DmWechatUsersCount对象时出现未知异常");
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * 缺货率
	 */
	@Override
	public ServiceResult<List<DmDailyShopProductsStatis>> getProductsStockoutRateByDate(Map<String, Object> queryMap) {
		
		ServiceResult<List<DmDailyShopProductsStatis>> result = new ServiceResult<List<DmDailyShopProductsStatis>>();
		try {
			PagerInfo pager = (PagerInfo) queryMap.get("pager");
			pager.setRowsCount(dmDailyShopProductsStatisDao.getProductsStockoutRateByDateCount(queryMap));
			result.setResult(dmDailyShopProductsStatisDao.getProductsStockoutRateByDate(queryMap));
			result.setPager(pager);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMessage("根据id[" + queryMap
					+ "]取得DmWechatUsersCount对象时出现未知异常");
			e.printStackTrace();
		}
		return result;
	}

}