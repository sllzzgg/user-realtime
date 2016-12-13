package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.DmDailyShopSupplierStatis;

@Repository
public interface DmDailyShopSupplierStatisDao {
 
	 /**
     * 根据时间段来显示类型的总金额
     * @param startDate 开始时间
     * @param endDate  结束时间
     * @return
     */
    List<DmDailyShopSupplierStatis> getSupplierStatisByDate(@Param("param") Map<String, Object> queryMap);

	int getSupplierStatisByDateCount(@Param("param") Map<String, Object> queryMap);
}