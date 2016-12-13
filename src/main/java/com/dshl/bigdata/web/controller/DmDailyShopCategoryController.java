package com.dshl.bigdata.web.controller;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.DmDailyShopCategory;
import com.dshl.bigdata.web.entity.PieEharts;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmDailyShopCategoryService;
import com.dshl.bigdata.web.utils.JsonUtil;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * 
 *                       
 * @Filename: DmDailyShopCategoryController.java
 * @Version: 1.0
 * @Author: yangzhanling 杨占岭
 * @Email:  zhanling.yang@ds365.com
 *
 */

@Controller
@RequestMapping("")
public class DmDailyShopCategoryController {
	
	private int pageSize = 10;

    @Autowired
    private DmDailyShopCategoryService dmDailyShopCategoryService;

    @RequestMapping(value = "/category")
    public String getOrderCount(HttpServletRequest request, HttpServletResponse response,
                                String startDate, String endDate,Integer depotId, Map<String, Object> dataMap, String dataRdaio) {

    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo="1";
    	}
    	PagerInfo pager = new PagerInfo(pageSize,Integer.parseInt(sPageNo));
    	
        Map<String, Object> queryMap = new HashMap<String, Object>();
        queryMap.put("startDate", startDate);
        queryMap.put("endDate", endDate);
        queryMap.put("depotId", depotId);
        queryMap.put("pager", pager);
        queryMap.put("dataRdaio", dataRdaio);

        QueryCondtion condtion = new QueryCondtion();
        condtion.setStartDate(startDate);
        condtion.setEndDate(endDate);
        condtion.setDepotId(depotId);
        
       
    	ServiceResult<List<DmDailyShopCategory>> orderDateService = dmDailyShopCategoryService
    			   .getByOrderDate(queryMap);
    	   
        List<DmDailyShopCategory> result = orderDateService.getResult();
        PagerInfo pagerInfo = orderDateService.getPager();
        
        List<PieEharts> eharts = new ArrayList<PieEharts>();
        
        StringBuffer categoryName = new StringBuffer();
        StringBuffer orderamout = new StringBuffer();
        StringBuffer ordercount = new StringBuffer();
        
        DecimalFormat df = new DecimalFormat("#,###.0");//格式化小数
        
        for (DmDailyShopCategory ct : result) {
        	//创建图表对象
            PieEharts pieEharts = new PieEharts();
            String ordermount = ct.getOrderaMount();
            pieEharts.setName(ct.getSupercategoryName());
            
            if (ordermount == null) {
				ct.setOrderaMount("0");
				ordermount = "0";
			}else {
				String mount = df.format(Double.parseDouble(ct.getOrderaMount()));
				ct.setOrderaMount(mount);
			}
            
            pieEharts.setY(Double.parseDouble(String.format("%.2f", Double.parseDouble(ordermount))));
            eharts.add(pieEharts);

            categoryName.append(ct.getSupercategoryName()).append(",");
            ordercount.append(ct.getOrderCount()).append(",");
            orderamout.append(ordermount).append(",");
        }
        dataMap.put("cates", result);
        dataMap.put("pagerInfo", pagerInfo);
        dataMap.put("categoryName", categoryName);
        dataMap.put("ordercount", ordercount);
        dataMap.put("orderamout", orderamout);

        String json = JsonUtil.toJson(eharts);
        dataMap.put("result", json);
        dataMap.put("condtion", condtion);
        return "category/category-table";
    }
    @RequestMapping(value = "/category-table-iframe")
    public String getOrderCountIframe(HttpServletRequest request, HttpServletResponse response,
    		String startDate, String endDate,Integer depotId, Map<String, Object> dataMap) {
    	
    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo="1";
    	}
    	PagerInfo pager = new PagerInfo(pageSize,Integer.parseInt(sPageNo));
    	
    	Map<String, Object> queryMap = new HashMap<String, Object>();
    	queryMap.put("startDate", startDate);
    	queryMap.put("endDate", endDate);
    	queryMap.put("depotId", depotId);
    	queryMap.put("pager", pager);
    	
    	QueryCondtion condtion = new QueryCondtion();
    	condtion.setStartDate(startDate);
    	condtion.setEndDate(endDate);
    	condtion.setDepotId(depotId);
    	
    	ServiceResult<List<DmDailyShopCategory>> orderDateService = dmDailyShopCategoryService
    			.getByOrderDate(queryMap);
    	
    	List<DmDailyShopCategory> result = orderDateService.getResult();
    	PagerInfo pagerInfo = orderDateService.getPager();
    	
    	
    	dataMap.put("cates", result);
    	dataMap.put("pagerInfo", pagerInfo);
    	
    	dataMap.put("condtion", condtion);
    	return "category/category-table-iframe";
    }
}
