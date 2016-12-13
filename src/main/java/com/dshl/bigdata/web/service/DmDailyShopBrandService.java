package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmDailyShopBrand;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface DmDailyShopBrandService {

    /**
     * 根据时间段查询 类型
     * @param  dmDailyShopCategory2Id
     * @return
     */
    public ServiceResult<List<DmDailyShopBrand>> getByOrderDate(Map<String, Object> queryMap);

}