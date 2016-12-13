package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopOrdersCountDao;
import com.dshl.bigdata.web.entity.DmDailyShopOrdersCount;
import com.dshl.bigdata.web.service.DmDailyShopOrdersCountService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmDailyShopOrdersCountServiceImpl implements DmDailyShopOrdersCountService {
    private static Logger             log = LoggerFactory
                                              .getLogger(DmDailyShopOrdersCountServiceImpl.class);

    @Autowired
    private DmDailyShopOrdersCountDao dmDailyShopOrdersCountDao;

    /**
    * 订单统计
    * @param  queryMap
    * @return
    */
    @Override
    public ServiceResult<List<DmDailyShopOrdersCount>> getByOrderDate(Map<String, Object> queryMap) {
        ServiceResult<List<DmDailyShopOrdersCount>> result = new ServiceResult<List<DmDailyShopOrdersCount>>();
        try {
        	PagerInfo pager =(PagerInfo) queryMap.get("pager");
        	if(pager!=null){
        		pager.setRowsCount(dmDailyShopOrdersCountDao.getByOrderDateCount(queryMap));
        		result.setPager(pager);
        	}
            result.setResult(dmDailyShopOrdersCountDao.getByOrderDate(queryMap));
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 平均客单价
     */
	@Override
	public ServiceResult<List<DmDailyShopOrdersCount>> getOrderAverageByOrderDate(Map<String, Object> queryMap) {
		ServiceResult<List<DmDailyShopOrdersCount>> result = new ServiceResult<List<DmDailyShopOrdersCount>>();
        try {
        	PagerInfo pager =(PagerInfo) queryMap.get("pager");
        	
        		pager.setRowsCount(dmDailyShopOrdersCountDao.getOrderAverageByDateCount(queryMap));
        		result.setPager(pager);
            result.setResult(dmDailyShopOrdersCountDao.getOrderAverageByDate(queryMap));
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("出现未知异常");
            e.printStackTrace();
        }
        return result;
    }
}