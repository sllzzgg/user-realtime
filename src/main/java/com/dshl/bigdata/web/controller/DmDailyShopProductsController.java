package com.dshl.bigdata.web.controller;

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

import com.dshl.bigdata.web.entity.DmDailyShopProducts;
import com.dshl.bigdata.web.entity.PieEharts;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.service.DmDailyShopProductsService;
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
public class DmDailyShopProductsController {

	private int pagerSize=10;
    @Autowired
    private DmDailyShopProductsService dmDailyShopProductsService;

    @RequestMapping(value = "/product")
    public String getOrderCount(HttpServletRequest request, HttpServletResponse response,
                                String startDate, String endDate,Integer depotId, Map<String, Object> dataMap) {

        Map<String, Object> queryMap = new HashMap<String, Object>();
        
        String sPagerNo = request.getParameter("pindex");
        if(StringUtils.isBlank(sPagerNo)){
        	sPagerNo="1";
        }
        PagerInfo pager = new PagerInfo(pagerSize,Integer.parseInt(sPagerNo));
        
        queryMap.put("startDate", startDate);
        queryMap.put("endDate", endDate);
        queryMap.put("depotId", depotId);
        queryMap.put("pager", pager);

        QueryCondtion condtion = new QueryCondtion();
        condtion.setStartDate(startDate);
        condtion.setEndDate(endDate);
        condtion.setDepotId(depotId);
       
        ServiceResult<List<DmDailyShopProducts>> orderDateService = dmDailyShopProductsService
            .getDmDailyShopProductsByDate(queryMap);
        
        List<DmDailyShopProducts> result = orderDateService.getResult();
        PagerInfo pagerInfo = orderDateService.getPager();
        
        StringBuffer categoryName = new StringBuffer();
        StringBuffer orderamout = new StringBuffer();
        StringBuffer ordercount = new StringBuffer();
        List<PieEharts> eharts = new ArrayList<PieEharts>();
        for (DmDailyShopProducts ct : result) {
            
            PieEharts pieEharts = new PieEharts();
            pieEharts.setName(ct.getProductName());
            pieEharts.setY(ct.getTotalQuantity());
            eharts.add(pieEharts);

            categoryName.append(ct.getProductName()).append(",");
            ordercount.append(ct.getTotalQuantity()).append(",");
            orderamout.append(ct.getTotalAmount()).append(",");

        }
        dataMap.put("categoryName", categoryName);
        dataMap.put("ordercount", ordercount);
        dataMap.put("orderamout", orderamout);

        String json = JsonUtil.toJson(eharts);
        dataMap.put("result", json);
        dataMap.put("pagerInfo", pagerInfo);
        dataMap.put("condtion", condtion);
        dataMap.put("products", result);
        return "category/product-table";
    }
    @RequestMapping(value = "product-iframe")
    public String getOrderCountIframe(HttpServletRequest request, HttpServletResponse response,
    		String startDate, String endDate , Integer depotId, Map<String, Object> dataMap) {
    	
    	Map<String, Object> queryMap = new HashMap<String, Object>();
    	
    	String sPageNo = request.getParameter("pindex");
    	if(StringUtils.isBlank(sPageNo)){
    		sPageNo="1";
    	}
    	PagerInfo pager = new PagerInfo(pagerSize,Integer.parseInt(sPageNo));
    	
    	queryMap.put("startDate", startDate);
    	queryMap.put("endDate", endDate);
    	queryMap.put("depotId", depotId);
    	queryMap.put("pager", pager);
    	
    	QueryCondtion condtion = new QueryCondtion();
    	condtion.setStartDate(startDate);
    	condtion.setEndDate(endDate);
    	condtion.setDepotId(depotId);
    	
    	ServiceResult<List<DmDailyShopProducts>> orderDateService = dmDailyShopProductsService
    			.getDmDailyShopProductsByDate(queryMap);
    	
    	List<DmDailyShopProducts> result = orderDateService.getResult();
    	
    	PagerInfo pagerInfo = orderDateService.getPager();
    	
    	dataMap.put("products", result);
    	dataMap.put("condtion", condtion);
    	dataMap.put("pagerInfo", pagerInfo);
    	return "category/product-table-iframe";
    }
}
