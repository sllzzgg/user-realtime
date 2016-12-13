package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.ShopOrderItemDao;
import com.dshl.bigdata.web.entity.ShopBrand;
import com.dshl.bigdata.web.entity.ShopOrderItem;
import com.dshl.bigdata.web.entity.ShopOrderMapDate;
import com.dshl.bigdata.web.service.ShopOrderItemService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class ShopOrderItemServiceImpl implements ShopOrderItemService {
    private static Logger    log   = LoggerFactory.getLogger(ShopOrderItemServiceImpl.class);

    //每页的第一条数据
    int                      start = 0;
    //每页显示数据的条数
    int                      size  = 0;
    
    @Autowired
    private ShopOrderItemDao shopOrderItemDao;

   
    @Override
    public ServiceResult<List<ShopOrderMapDate>> getShopOrderMapDate(Map<String, Object> queryMap){
    	
    	 ServiceResult<List<ShopOrderMapDate>> result = new ServiceResult<List<ShopOrderMapDate>>();
    	try {
    		List<ShopOrderMapDate> OrderMapDateList=shopOrderItemDao.getShopOrderMapDate(queryMap);
    		result.setResult(OrderMapDateList);
		} catch (Exception e) {
			result.setSuccess(false);
            result.setMessage("根据[" + queryMap + "]取得地图数据出现未知异常");
            e.printStackTrace();
		}
    	 
    	 
    	return result;
    }
    
    @Override
    public ServiceResult<List<ShopOrderItem>> getShopOrderItems(Map<String, Object> queryMap) {

        ServiceResult<List<ShopOrderItem>> result = new ServiceResult<List<ShopOrderItem>>();
        try {
        	PagerInfo pager = (PagerInfo) queryMap.get("pager");
                // 设置分页总的记录数
            	int shopOrderItemsCount = shopOrderItemDao.getShopOrderItemsCount(queryMap);
                pager.setRowsCount(shopOrderItemsCount);

                start = pager.getStart();
                size = pager.getPageSize();

            result.setResult(shopOrderItemDao.getShopOrderItems(queryMap, start, size));
            result.setPager(pager);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("根据id[" + queryMap + "]取得ShopOrderItem对象时出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public ServiceResult<List<ShopOrderItem>> getShopOrderItemsByProductId(Map<String, Object> queryMap,
                                                                           PagerInfo pagerInfo) {

        ServiceResult<List<ShopOrderItem>> result = new ServiceResult<List<ShopOrderItem>>();
        try {
            if (pagerInfo != null) {
                //每页第一条数据
                start = pagerInfo.getStart();
                //每页显示数据的条数
                size = pagerInfo.getPageSize();
                //获取并设置总的记录数
                int shopOrderItemsCount = shopOrderItemDao
                    .getShopOrderItemsCountByProductId(queryMap);
                pagerInfo.setRowsCount(shopOrderItemsCount);
            }

            result.setResult(shopOrderItemDao.getShopOrderItemsByProductId(queryMap, start, size));
            result.setPager(pagerInfo);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("根据id[" + queryMap + "]取得ShopOrderItem对象时出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public ServiceResult<List<ShopOrderItem>> getShopOrderItemsByShipId(Map<String, Object> queryMap, PagerInfo pager) {
        ServiceResult<List<ShopOrderItem>> result = new ServiceResult<List<ShopOrderItem>>();
        try {
        	//查询当前页的数据
        	if(pager!=null){
        		//每页开始的第一条数据
        		start=pager.getStart();
        		//每页显示的最大条数
        		size=pager.getPageSize();
        		//根据配送站查询总的数据
        		pager.setRowsCount(shopOrderItemDao.getShopOrderItemsCountByShipId(queryMap));
        	}
        	List<ShopOrderItem> shopOrderItemsByShipId = shopOrderItemDao.getShopOrderItemsByShipId(queryMap,start,size);
            result.setResult(shopOrderItemsByShipId);
            result.setPager(pager);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("根据id[" + queryMap + "]取得ShopOrderItem对象时出现未知异常");
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public ServiceResult<List<ShopOrderItem>> getShopOrderItemsByUserId(Map<String, Object> queryMap,PagerInfo pager) {
        ServiceResult<List<ShopOrderItem>> result = new ServiceResult<List<ShopOrderItem>>();
        try {
        	if(pager!=null){
        		start=pager.getStart();
        		size=pager.getPageSize();
        		pager.setRowsCount(shopOrderItemDao.getShopOrderItemsCountByUserId(queryMap));
        	}
        	
            result.setResult(shopOrderItemDao.getShopOrderItemsByUserId(queryMap,start,size));
            result.setPager(pager);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("根据id[" + queryMap + "]取得ShopOrderItem对象时出现未知异常");
            e.printStackTrace();
        }
        return result;
    }
    
    @Override
    public List<ShopBrand> getAllShopBrand(){
    	List<ShopBrand> allShopBrand = shopOrderItemDao.getAllShopBrand();
		return allShopBrand;
    }
}