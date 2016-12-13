package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmDailyShopSupplierStatis;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface DmDailyShopSupplierStatisService {

	 /**
     * 根据id取得DmDailyShopSupplierStatis对象
     * @param  dmDailyShopProductsId
     * @return
     */
    public ServiceResult<List<DmDailyShopSupplierStatis>> getSupplierStatisByDate(Map<String, Object> queryMap);

}