package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmDailyShopProductsStatis;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface DmDailyShopProductsStatisService {

	 /**
     * 根据id取得DmDailyShopProductsStatis对象
     * @param  dmDailyShopProductsId
     * @return
     */
    public ServiceResult<List<DmDailyShopProductsStatis>> getProductsStatisByDate(Map<String, Object> queryMap);

    /**
     * 缺货率分析
     * @param queryMap
     * @return
     */
	public ServiceResult<List<DmDailyShopProductsStatis>> getProductsStockoutRateByDate(
			Map<String, Object> queryMap);    
}