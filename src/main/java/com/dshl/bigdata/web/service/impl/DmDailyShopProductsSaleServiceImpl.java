package com.dshl.bigdata.web.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopProductsSaleDao;
import com.dshl.bigdata.web.entity.DmDailyShopProductsSale;
import com.dshl.bigdata.web.service.DmDailyShopProductsSaleService;
import com.dshl.bigdata.web.utils.DateUtil;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;
import com.dshl.commons.utlis.DateUtils;

@Service
public class DmDailyShopProductsSaleServiceImpl implements DmDailyShopProductsSaleService {
    private static Logger              log = LoggerFactory
                                               .getLogger(DmDailyShopProductsSaleServiceImpl.class);
    @Autowired
    private DmDailyShopProductsSaleDao dailyShopProductsFlowDao;
    /**
     * 根据时间段查询类型
     * @param  queryMap
     * @return
     */
    @Override
    public ServiceResult<List<DmDailyShopProductsSale>> getByOrderDate(Map<String, Object> queryMap) {
        ServiceResult<List<DmDailyShopProductsSale>> result = new ServiceResult<List<DmDailyShopProductsSale>>();
        try {
        	PagerInfo pager = (PagerInfo) queryMap.get("pager");
        	
        	//仅用于区分是否需要加载折线数据
        	boolean tag = (boolean) queryMap.get("tag");
        	//仅用于区分是否需要分页
        	queryMap.put("pag", "");
    		//根据日来查
    		if(tag){
    			result.setResult(dailyShopProductsFlowDao.getProductByDate(queryMap));
    		}
    		queryMap.put("pag", "pag");//仅用于区分是否需要分页
    		result.setDataList(dailyShopProductsFlowDao.getProductByDate(queryMap));
    		pager.setRowsCount(dailyShopProductsFlowDao.getProductByDateCount(queryMap));
            result.setPager(pager);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

}