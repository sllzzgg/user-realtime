package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.DmDailyShopProductsStatis;

@Repository
public interface DmDailyShopProductsStatisDao {
 
	 /**
	 * //缺货分析
     * 根据时间段来显示类型的总金额
     * @param startDate 开始时间
     * @param endDate  结束时间
     * @return
     */
    List<DmDailyShopProductsStatis> getProductsStatisByDate(@Param("param") Map<String, Object> queryMap);

     //缺货
	int getProductsStatisByDateCount(@Param("param") Map<String, Object> queryMap);

	//缺货率
	int getProductsStockoutRateByDateCount(@Param("param") Map<String, Object> queryMap);
	
	//缺货率分析
	List<DmDailyShopProductsStatis> getProductsStockoutRateByDate(@Param("param") Map<String, Object> queryMap);

}