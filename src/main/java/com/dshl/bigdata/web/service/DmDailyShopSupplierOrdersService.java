package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmDailyShopSupplierOrders;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface DmDailyShopSupplierOrdersService {
	 /**
     * 根据id取得DmDailyShopProductsStatis对象
     * @param  dmDailyShopProductsId
     * @return
     */
    public ServiceResult<List<DmDailyShopSupplierOrders>> getSupplierOrdersByDate(Map<String, String> queryMap);    
}