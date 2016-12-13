package com.dshl.bigdata.web.utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

public class DateUtil {

	public static final String YYYY_MM_DD = "yyyy-MM-dd";
	
	/**
	 * 获取昨天的日期
	 * @author shilinlin
	 * @return
	 * 2016年12月6日 下午4:21:19
	 */
	public static String getYesterday(){
		Calendar   cal   =   Calendar.getInstance();
		  cal.add(Calendar.DATE,   -1);
		  String yesterday = new SimpleDateFormat(YYYY_MM_DD).format(cal.getTime());
		  return yesterday;
	}

	
	/**
	 * 获取截取后的时间数组
	 * @author shilinlin
	 * @param startDate
	 * @param endDate
	 * @return
	 * 2016年12月6日 下午1:29:31
	 */
	public static Map<String, Object> getSplitDateMap(String startDate, String endDate){
		//时间map
    	Map<String, Object> dateMap = new HashMap<String, Object>();
    	//开始时间
    	if(!StringUtils.isBlank(startDate)){
    		String[] start = startDate.split("-");
    		String startYear =start[0];
    		String startMonth = start[1];
    		dateMap.put("startYear", startYear);
    		dateMap.put("startMonth", startMonth);
    	}
    	//结束时间
    	if(!StringUtils.isBlank(endDate)){
    		String[] end = endDate.split("-");
    		String endYear = end[0];
    		String endMonth = end[1];
    		
    		dateMap.put("endYear", endYear);
    		dateMap.put("endMonth", endMonth);
    	}
    	return dateMap;
	}
}
