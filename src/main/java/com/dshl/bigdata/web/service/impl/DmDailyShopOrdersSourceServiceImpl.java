package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopOrdersSourceDao;
import com.dshl.bigdata.web.entity.DmDailyShopOrdersSource;
import com.dshl.bigdata.web.service.DmDailyShopOrdersSourceService;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmDailyShopOrdersSourceServiceImpl implements DmDailyShopOrdersSourceService {
    private static Logger              log = LoggerFactory
                                               .getLogger(DmDailyShopOrdersSourceServiceImpl.class);

    @Autowired
    private DmDailyShopOrdersSourceDao dmDailyShopOrdersSourceDao;

    /**
     * 根据时间段查询类型
     * @param  queryMap
     * @return
     */
    @Override
    public ServiceResult<List<DmDailyShopOrdersSource>> getByOrderDate(Map<String, Object> queryMap) {
        ServiceResult<List<DmDailyShopOrdersSource>> result = new ServiceResult<List<DmDailyShopOrdersSource>>();
        try {
            result.setResult(dmDailyShopOrdersSourceDao.getByOrderDate(queryMap));
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

}