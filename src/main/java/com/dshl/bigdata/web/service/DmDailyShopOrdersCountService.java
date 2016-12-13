package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmDailyShopOrdersCount;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface DmDailyShopOrdersCountService {

    /**
     * 根据时间段查询 类型
     * @param  dmDailyShopCategory2Id
     * @return
     */
    public ServiceResult<List<DmDailyShopOrdersCount>> getByOrderDate(Map<String, Object> queryMap);

    //平均客单价
	public ServiceResult<List<DmDailyShopOrdersCount>> getOrderAverageByOrderDate(
			Map<String, Object> queryMap);

}