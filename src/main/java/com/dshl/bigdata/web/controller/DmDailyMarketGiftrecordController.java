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

import com.dshl.bigdata.web.entity.Giftrecord;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmDailyOrderGiftrecordService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月21日 上午9:46:02
 */
@Controller
public class DmDailyMarketGiftrecordController {
	
	private int pageSize = 10;
	
	@Autowired
	private DmDailyOrderGiftrecordService dmDailyOrderGiftrecordService;
	
	/**
	 * 赠品展示-图表展示
	 */
	@RequestMapping("/giftrecord")
	public String getGiftrecord(HttpServletRequest request,HttpServletResponse response,Map<String, Object> dataMap,
								String startDate,String endDate, Integer cityId){
		//查询数据集合
		Map<String, Object> queryMap = new HashMap<String, Object>();
		
		if(cityId==null){
			cityId=0;
		}
		
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		PagerInfo pager = new PagerInfo(pageSize,Integer.parseInt(sPageNo));
		
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("pager", pager);
		
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setCityId(cityId);
		//列表展示数据
		ServiceResult<List<Giftrecord>> giftrecordList=dmDailyOrderGiftrecordService.getGiftrecord(queryMap);
		List<Giftrecord> result = giftrecordList.getResult();
		PagerInfo pagerInfo = giftrecordList.getPager();
		
		//树状图展示数据
		StringBuffer giftName = new StringBuffer();
		StringBuffer giftCount = new StringBuffer();
		for (Giftrecord giftrecord : result) {
			giftName.append(giftrecord.getTitle()).append(",");
			
			giftCount.append(giftrecord.getTotalCount()).append(",");
		}
		
		dataMap.put("giftName", giftName);
		dataMap.put("giftCount", giftCount);
		
		dataMap.put("result", result);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		
		return "market/market-giftrecord";
	}
	/**
	 * 分页
	 * @author shilinlin
	 * @param request
	 * @param response
	 * @param dataMap
	 * @param startDate
	 * @param endDate
	 * @param cityId
	 * @return
	 * 2016年11月21日 上午11:30:41
	 */
	@RequestMapping("giftrecord-iframe")
	public String getGiftrecordIfram(HttpServletRequest request,HttpServletResponse response,Map<String, Object> dataMap,
			String startDate , String endDate,Integer  cityId){
		//查询数据集合
		Map<String, Object> queryMap = new HashMap<String, Object>();
		
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		PagerInfo pager = new PagerInfo(pageSize,Integer.parseInt(sPageNo));
		
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("cityId", cityId);
		queryMap.put("pager", pager);
		
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setCityId(cityId);
		
		ServiceResult<List<Giftrecord>> giftrecordList=dmDailyOrderGiftrecordService.getGiftrecord(queryMap);
		
		List<Giftrecord> result = giftrecordList.getResult();
		PagerInfo pagerInfo = giftrecordList.getPager();
		
		dataMap.put("result", result);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("condtion", condtion);
		
		return "market/market-giftrecord-iframe";
	}
}
