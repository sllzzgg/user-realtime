package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.DmDailyShopCategory;

/**
 * 统计类型数据
 *                       
 * @Filename: DmDailyShopCategoryDao.java
 * @Version: 1.0
 * @Author: yangzhanling 杨占岭
 * @Email:  zhanling.yang@ds365.com
 *
 */
@Repository
public interface DmDailyShopCategoryDao {

    /**
     * 根据时间段来显示类型的总金额
     * @param startDate 开始时间
     * @param endDate  结束时间
     * @return
     */
    List<DmDailyShopCategory> getByOrderDate(@Param("param1") Map<String, Object> queryMap);

	int getByOrderDateCount(@Param("param") Map<String, Object> queryMap);
}