package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.OrderDiscount;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月25日 下午3:03:25
 */
public interface DmDailyMarketDiscountService {

	ServiceResult<List<OrderDiscount>> getDiscount(Map<String, Object> queryMap);

	
}
