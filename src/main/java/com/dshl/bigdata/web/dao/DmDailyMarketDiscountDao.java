package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.OrderDiscount;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月25日 下午3:14:28
 */
@Repository
public interface DmDailyMarketDiscountDao {

	//商品折扣数据
	List<OrderDiscount> getDiscount(@Param("param") Map<String, Object> queryMap);
	//商品折扣数据量
	int getDiscountCount(@Param("param") Map<String, Object> queryMap);


}
