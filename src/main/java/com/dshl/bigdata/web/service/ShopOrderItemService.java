package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.ShopBrand;
import com.dshl.bigdata.web.entity.ShopOrderItem;
import com.dshl.bigdata.web.entity.ShopOrderMapDate;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface ShopOrderItemService {
    
    public ServiceResult<List<ShopOrderItem>> getShopOrderItems(Map<String, Object> queryMap);

    public ServiceResult<List<ShopOrderItem>> getShopOrderItemsByProductId(Map<String, Object> queryMap,PagerInfo pagerInfo);

    public ServiceResult<List<ShopOrderItem>> getShopOrderItemsByShipId(Map<String, Object> queryMap, PagerInfo pageInfo);

    public ServiceResult<List<ShopOrderItem>> getShopOrderItemsByUserId(Map<String, Object> queryMap, PagerInfo pager);

	public List<ShopBrand> getAllShopBrand();

	public ServiceResult<List<ShopOrderMapDate>> getShopOrderMapDate(Map<String, Object> queryMap);

}