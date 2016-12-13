package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopCategoryDao;
import com.dshl.bigdata.web.entity.DmDailyShopCategory;
import com.dshl.bigdata.web.service.DmDailyShopCategoryService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmDailyShopCategoryServiceImpl implements DmDailyShopCategoryService {
    private static Logger          log = LoggerFactory
                                           .getLogger(DmDailyShopCategoryServiceImpl.class);

    @Autowired
    private DmDailyShopCategoryDao dailyShopCategoryDao;

    /**
    * 根据时间段查询类型
    * @param  queryMap
    * @return
    */
    @Override
    public ServiceResult<List<DmDailyShopCategory>> getByOrderDate(Map<String, Object> queryMap) {
        ServiceResult<List<DmDailyShopCategory>> result = new ServiceResult<List<DmDailyShopCategory>>();
        try {
        	PagerInfo pager = (PagerInfo) queryMap.get("pager");
        	pager.setRowsCount(dailyShopCategoryDao.getByOrderDateCount(queryMap));
            result.setResult(dailyShopCategoryDao.getByOrderDate(queryMap));
            result.setPager(pager);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

}