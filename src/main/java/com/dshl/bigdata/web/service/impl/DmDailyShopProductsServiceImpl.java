package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopProductsDao;
import com.dshl.bigdata.web.entity.DmDailyShopProducts;
import com.dshl.bigdata.web.service.DmDailyShopProductsService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class DmDailyShopProductsServiceImpl implements DmDailyShopProductsService {
    private static Logger          log = LoggerFactory
                                           .getLogger(DmDailyShopProductsServiceImpl.class);

    @Autowired
    private DmDailyShopProductsDao dmDailyShopProductsDao;

    /**
    * 根据id取得dm_daily_shop_products对象
    * @param  dmDailyShopProductsId
    * @return
    * @see com.dshl.bigdata.web.service.DmDailyShopProductsService#getDmDailyShopProductsById(java.lang.Integer)
    */
    @Override
    public ServiceResult<List<DmDailyShopProducts>> getDmDailyShopProductsByDate(Map<String, Object> queryMap) {
        ServiceResult<List<DmDailyShopProducts>> result = new ServiceResult<List<DmDailyShopProducts>>();
        try {
        	PagerInfo pager = (PagerInfo) queryMap.get("pager");
        	pager.setRowsCount(dmDailyShopProductsDao.getProductByDateCount(queryMap));
            result.setResult(dmDailyShopProductsDao.getProductByDate(queryMap));
            result.setPager(pager);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("根据id[" + queryMap + "]取得dm_daily_shop_products对象时出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

}