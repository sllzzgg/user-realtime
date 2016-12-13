package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmDailyShopProducts;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface DmDailyShopProductsService {

    /**
     * 根据id取得dm_daily_shop_products对象
     * @param  dmDailyShopProductsId
     * @return
     */
    public ServiceResult<List<DmDailyShopProducts>> getDmDailyShopProductsByDate(Map<String, Object> queryMap);


}