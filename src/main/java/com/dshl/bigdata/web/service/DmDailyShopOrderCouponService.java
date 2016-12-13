package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.ShopCoupon;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月16日 上午11:05:04
 */
public interface DmDailyShopOrderCouponService {

	ServiceResult<List<ShopCoupon>> getCoupon(Map<String, Object> queryMap);

}
