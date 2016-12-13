package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.ShopCoupon;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月16日 下午12:01:43
 */
@Repository
public interface DmDailyShopOrderCouponDao {

	//获取优惠券
	List<ShopCoupon> getCoupon(@Param("param") Map<String, Object> queryMap,@Param("start") Integer start,@Param("size") Integer size);
	//获取优惠券的总数量
	int getCouponCount(@Param("param") Map<String, Object> queryMap);



}
