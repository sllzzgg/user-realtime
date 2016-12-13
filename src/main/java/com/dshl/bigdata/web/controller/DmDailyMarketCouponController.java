package com.dshl.bigdata.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.entity.ShopCoupon;
import com.dshl.bigdata.web.service.DmDailyShopOrderCouponService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * 市场费用
 * @author shilinlin
 * 2016年11月16日  上午10:51:52
 */

@Controller
@RequestMapping("")
public class DmDailyMarketCouponController {
	//每页展示出多少哦条数据
	private Integer pageSize=10;
	@Autowired
	private DmDailyShopOrderCouponService dailyShopOrderCouponService;
	
	/**
	 * 优惠券分析
	 * @author shilinlin
	 * @return
	 * 2016年11月16日 上午10:55:33
	 */
	@RequestMapping(value="/coupon")
	public String getCoupon(HttpServletRequest request,HttpServletResponse response, String couponType,String startDate, String endDate,
							Map<String, Object> dataMap){
		//查询条件集合
		Map<String, Object> queryMap =new HashMap<String, Object>();
		
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		PagerInfo pager = new PagerInfo(pageSize,Integer.parseInt(sPageNo));
		
		queryMap.put("couponType", couponType);
		queryMap.put("pager", pager);
		queryMap.put("startDate",startDate);
		queryMap.put("endDate", endDate);
		
		//查询条件公共类
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setCouponType(couponType);
		
		//查询优惠券数据
		ServiceResult<List<ShopCoupon>> shopCouponList = dailyShopOrderCouponService.getCoupon(queryMap);
		
		List<ShopCoupon> result = shopCouponList.getResult();
		
		PagerInfo pagerInfo = shopCouponList.getPager();
		//---------------------------使用的优惠券---------------------------
		//优惠券名称
		StringBuffer couponName = new StringBuffer();
		//使用的优惠券的总金额
		StringBuffer couponAmount = new StringBuffer();
		//总的优惠券的总金额
		StringBuffer sendCouponAmount = new StringBuffer();
		//剩余优惠券
		StringBuffer remainCouponAmount = new StringBuffer();
		
		double sentTotalAmount=0;//预算总额
		double useTotalAmount=0;//使用总额
		double remainTotalAmount=0;//剩余总额
	 
		for (ShopCoupon coupon : result) {
			
			sentTotalAmount+=coupon.getSentTotal();
			useTotalAmount+=coupon.getUseTotal();
			remainTotalAmount+=coupon.getRemainTotal();
			
			couponName.append(coupon.getTitle()).append(",");
			//使用的优惠券
            couponAmount.append(coupon.getUseTotal()).append(",");
            //总的优惠券
            sendCouponAmount.append(coupon.getSentTotal()).append(",");
            //剩余优惠券
            remainCouponAmount.append(coupon.getRemainTotal()).append(",");
		}
		
		//发放使用的
		dataMap.put("couponName", couponName);
		//优惠券name
		dataMap.put("couponAmount", couponAmount);
		//发放总优惠券
		dataMap.put("sendCouponAmount", sendCouponAmount);
		//剩余优惠券
		dataMap.put("remainCouponAmount", remainCouponAmount);
		
		dataMap.put("sentTotalAmount", sentTotalAmount);
		dataMap.put("useTotalAmount", useTotalAmount);
		dataMap.put("remainTotalAmount", remainTotalAmount);
		
		dataMap.put("result", result);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		
		return "market/market-coupon";
	}
	
	@RequestMapping(value="/coupon-iframe")
	public String getCoupon1(HttpServletRequest request,HttpServletResponse response, String couponType,String startDate, String endDate,
			Map<String, Object> dataMap){
		//查询条件集合
		Map<String, Object> queryMap =new HashMap<String, Object>();
		
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		PagerInfo pager = new PagerInfo(pageSize,Integer.parseInt(sPageNo));
		
		queryMap.put("couponType", couponType);
		queryMap.put("pager", pager);
		queryMap.put("startDate",startDate);
		queryMap.put("endDate", endDate);
		
		//查询条件公共类
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setCouponType(couponType);
		
		//查询优惠券数据
		ServiceResult<List<ShopCoupon>> shopCouponList = dailyShopOrderCouponService.getCoupon(queryMap);
		List<ShopCoupon> result = shopCouponList.getResult();
		PagerInfo pagerInfo = shopCouponList.getPager();
		
		dataMap.put("result", result);
		dataMap.put("condtion", condtion);
		dataMap.put("pagerInfo", pagerInfo);
		
		return "market/market-coupon-iframe";
	}
	
}
