package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopBrandDao;
import com.dshl.bigdata.web.entity.DmDailyShopBrand;
import com.dshl.bigdata.web.service.DmDailyShopBrandService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmDailyShopBrandServiceImpl implements DmDailyShopBrandService {
    private static Logger       log = LoggerFactory.getLogger(DmDailyShopBrandServiceImpl.class);

    @Autowired
    private DmDailyShopBrandDao dmDailyShopBrandDao;

    /**
    * 根据时间段查询类型
    * @param  queryMap
    * @return
    */
    @Override
    public ServiceResult<List<DmDailyShopBrand>> getByOrderDate(Map<String, Object> queryMap) {
        ServiceResult<List<DmDailyShopBrand>> result = new ServiceResult<List<DmDailyShopBrand>>();
        try {
        	PagerInfo pager = (PagerInfo) queryMap.get("pager");
        	pager.setRowsCount(dmDailyShopBrandDao.getByOrderDateCount(queryMap));
            result.setResult(dmDailyShopBrandDao.getByOrderDate(queryMap));
            result.setPager(pager);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

}