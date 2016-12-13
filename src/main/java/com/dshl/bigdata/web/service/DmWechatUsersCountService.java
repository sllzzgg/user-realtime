package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmWechatUsersCount;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface DmWechatUsersCountService {

	 /**
     * 根据id取得dm_daily_shop_products对象
     * @param  dmDailyShopProductsId
     * @return
     */
    public ServiceResult<List<DmWechatUsersCount>> getDmWechatUsersCountByDate(Map<String, Object> queryMap);    
}