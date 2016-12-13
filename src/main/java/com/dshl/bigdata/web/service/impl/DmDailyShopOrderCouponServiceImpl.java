package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyShopOrderCouponDao;
import com.dshl.bigdata.web.entity.ShopCoupon;
import com.dshl.bigdata.web.service.DmDailyShopOrderCouponService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月16日 上午11:58:35
 */
@Service
public class DmDailyShopOrderCouponServiceImpl implements DmDailyShopOrderCouponService{
	
	private Integer start;
	private Integer size;
	
	@Autowired
	private DmDailyShopOrderCouponDao dmDailyShopOrderCouponDao;

	@Override
	public ServiceResult<List<ShopCoupon>> getCoupon(Map<String, Object> queryMap) {
		
		ServiceResult<List<ShopCoupon>> result = new ServiceResult<>();
		PagerInfo pager = (PagerInfo) queryMap.get("pager");
		try {
			if(pager !=null){
				start=pager.getStart();
				size=pager.getPageSize();
				
				pager.setRowsCount(dmDailyShopOrderCouponDao.getCouponCount(queryMap));
			}
			result.setResult(dmDailyShopOrderCouponDao.getCoupon(queryMap,start,size));
			result.setPager(pager);
		} catch (Exception e) {
			result.setSuccess(false);
            result.setMessage("优惠券出现未知异常");
            e.printStackTrace();
		}
		return result;
	}
}
