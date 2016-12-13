package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyMarketDiscountDao;
import com.dshl.bigdata.web.entity.OrderDiscount;
import com.dshl.bigdata.web.service.DmDailyMarketDiscountService;
import com.dshl.bigdata.web.utils.DateUtil;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月25日 下午3:04:34
 */
@Service
public class DmDailyMarketDiscountServiceImpl implements DmDailyMarketDiscountService {

	@Autowired
	private DmDailyMarketDiscountDao dmDailyMarketDiscountDao;
	
	/**
	 * 商品折扣信息
	 */
	@Override
	public ServiceResult<List<OrderDiscount>> getDiscount(Map<String, Object> queryMap) {
		ServiceResult<List<OrderDiscount>> result = new ServiceResult<>();
		try {
			PagerInfo pager = (PagerInfo) queryMap.get("pager");
			
			pager.setRowsCount(dmDailyMarketDiscountDao.getDiscountCount(queryMap));
			
			result.setResult(dmDailyMarketDiscountDao.getDiscount(queryMap));
			result.setPager(pager);
		} catch (Exception e) {
			result.setSuccess(false);
			result.setMessage("折扣出现异常");
			e.printStackTrace();
		}
		
		return result;
	}
	

}
