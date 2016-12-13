package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmDailyShopCategory;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface DmDailyShopCategoryService {

    /**
     * 根据时间段查询 类型
     * @param  dmDailyShopCategory2Id
     * @return
     */
    public ServiceResult<List<DmDailyShopCategory>> getByOrderDate(Map<String, Object> queryMap);

}