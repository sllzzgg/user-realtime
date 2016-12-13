package com.dshl.bigdata.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.entity.ShopBrand;
import com.dshl.bigdata.web.entity.ShopOrderItem;
import com.dshl.bigdata.web.entity.ShopOrderMapDate;
import com.dshl.bigdata.web.service.ShopOrderItemService;
import com.dshl.bigdata.web.utils.JsonUtil;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;
import com.dshl.commons.utlis.DateUtils;

/**
 * 商品分析-订单流向
 * @author shilinlin
 *
 */

@Controller
@RequestMapping("")
public class ShopOrderItemController {
	
	private int pageSize = 10;

	@Autowired
	private ShopOrderItemService shopOrderItemService;
	
	/**
	 * 展示图片详情
	 * @author shilinlin
	 * @param request
	 * @param response
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param brandId
	 * @param dataMap
	 * @param productSku
	 * @return
	 * 2016年11月9日 下午4:20:16
	 */
	@RequestMapping("detail/{sku}")
	public String getMapDate(HttpServletRequest request,
			HttpServletResponse response, String startDate, String endDate,
			Integer depotId, Integer brandId, Map<String, Object> dataMap,
			@PathVariable("sku") String sku){
		
		//查询需要的参数
		Map<String, Object> queryMap = new HashMap<>();
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("depotId", depotId);
		queryMap.put("brandId", brandId);
		queryMap.put("sku", sku);
		
		//获取数据
		ServiceResult<List<ShopOrderMapDate>> orderitemServiceResult = shopOrderItemService.getShopOrderMapDate(queryMap);
		List<ShopOrderMapDate> result = orderitemServiceResult.getResult();
		
		//经纬度数据
		Map<String,List<Double>> resultMap = new HashMap<String, List<Double>>();
		 for (ShopOrderMapDate shopOrderMapDate : result) {
			List<Double> resultList = new ArrayList<>();
			String name = shopOrderMapDate.getName();
			double longitude = shopOrderMapDate.getLongitude();
			double latitude = shopOrderMapDate.getLatitude();
			resultList.add(longitude);
			resultList.add(latitude);
			resultMap.put(name, resultList);
		}
		
		
		String orderMap = JsonUtil.toJson(result);
		String long_lat = JsonUtil.toJson(resultMap);
		
		dataMap.put("orderMap", orderMap);
		dataMap.put("longlat", long_lat);
		
		return "product/map";
	} 

	/**
	 * 带过滤查询
	 * @author shilinlin
	 * @param request
	 * @param response
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param dataMap
	 * @param brandId
	 * @return
	 * 2016年11月8日 上午9:52:38
	 */
	@RequestMapping(value = "/product-order-flow")
	public String getOrderCount(HttpServletRequest request,
			HttpServletResponse response, String startDate, String endDate,
			Integer depotId, Integer brandId, Map<String, Object> dataMap,String productSku) {

		Map<String, Object> queryMap = new HashMap<String, Object>();

		// 分页默认设定
		String sPageNo = request.getParameter("pindex");
		if (StringUtils.isBlank(sPageNo)) {
			sPageNo = "1";
		}
		
		PagerInfo pager = new PagerInfo(pageSize, Integer.parseInt(sPageNo));

		// 默认值 时间
		String d_start = "2016-11-01";
		String d_end = DateUtils.getCurrDate(DateUtils.YYYY_MM_DD);

		if (startDate == null) {
			startDate = d_start;
		}
		if (endDate == null) {
			endDate = d_end;
		}
		

		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("depotId", depotId);
		queryMap.put("brandId", brandId);
		queryMap.put("sku", productSku);
		queryMap.put("pager", pager);
		
		
		
		//表单回显参数
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);
		condtion.setBrandId(brandId);
		condtion.setProductSku(productSku);
			
		//获取订单列表
		ServiceResult<List<ShopOrderItem>> orderitemServiceResult = shopOrderItemService.getShopOrderItems(queryMap);
		List<ShopOrderItem> result = orderitemServiceResult.getResult();
		//获取所有的商品品牌
		List<ShopBrand> shopBrandList = shopOrderItemService.getAllShopBrand();
		PagerInfo pagerInfo = orderitemServiceResult.getPager();
		
		dataMap.put("items", result);
		dataMap.put("condtion", condtion);
		dataMap.put("pagerInfo",pagerInfo );
		dataMap.put("shopBrandList", shopBrandList);
		return "product/product-order-flow";
	}

	/**
	 * 订单商品流向
	 * 
	 * @param request
	 * @param response
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param dataMap
	 * @return
	 */
	@RequestMapping(value = "product-order-flow-iframe")
	public String getProductItem(HttpServletRequest request,
			HttpServletResponse response, String startDate, String endDate,
			Integer brandId,Integer depotId, Map<String, Object> dataMap) {

		Map<String, Object> queryMap = new HashMap<String, Object>();

		
		String sPageNo = request.getParameter("pindex");
		if (StringUtils.isBlank(sPageNo)) {
			sPageNo = "1";
		}
		PagerInfo pager = new PagerInfo(pageSize, Integer.parseInt(sPageNo));

		//查询条件
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("depotId", depotId);
		queryMap.put("brandId", brandId);
		queryMap.put("pager", pager);

		//搜索条件表单回显
		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);
		condtion.setBrandId(brandId);

		ServiceResult<List<ShopOrderItem>> orderitemServiceResult = shopOrderItemService
				.getShopOrderItems(queryMap);
		List<ShopOrderItem> result = orderitemServiceResult.getResult();
		PagerInfo pagerInfo = orderitemServiceResult.getPager();
		
		dataMap.put("items", result);
		dataMap.put("condtion", condtion);
		dataMap.put("pagerInfo",pagerInfo );
		return "product/product-order-flow-iframe";
	}

	/**
	 * 查看运送站信息
	 * @author shilinlin
	 * @param request
	 * @param response
	 * @param productId
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param dataMap
	 * @return
	 * 2016年11月4日
	 */
	@RequestMapping(value = "ship/{productId}")
	public String getByProductId(HttpServletRequest request,
			HttpServletResponse response,
			@PathVariable("productId") String productId, String startDate,
			String endDate, Integer depotId, Map<String, Object> dataMap) {

		Map<String, Object> queryMap = new HashMap<String, Object>();

		// 获取当前页码
		String sPageNoStr = request.getParameter("pindex");
		if (StringUtils.isBlank(sPageNoStr)) {
			sPageNoStr = "1";
		}
		int sPageNo = Integer.parseInt(sPageNoStr);

		PagerInfo pagerInfo = new PagerInfo(pageSize, sPageNo);

		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("productId", productId);
		

		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);

		// 过滤条件查询分页数据
		ServiceResult<List<ShopOrderItem>> orderitemServiceResult = shopOrderItemService.getShopOrderItemsByProductId(queryMap, pagerInfo);

		PagerInfo pager = orderitemServiceResult.getPager();
		List<ShopOrderItem> result = orderitemServiceResult.getResult();
		
		
		dataMap.put("items", result);
		dataMap.put("condtion", condtion);
		dataMap.put("productId", productId);
		dataMap.put("pagerInfo", pager);
		return "product/ship-iframe-stat";
	}

	/**
	 * 查看用户信息
	 * @author shilinlin
	 * @param request
	 * @param response
	 * @param productId
	 * @param shipId
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param dataMap
	 * @return
	 * 2016年11月4日 上午11:01:19
	 */
	@RequestMapping(value = "user/{productId}/{shipId}")
	public String getByShipId(HttpServletRequest request,
			HttpServletResponse response,
			@PathVariable("productId") String productId,
			@PathVariable("shipId") String shipId, String startDate,
			String endDate, Integer depotId, Map<String, Object> dataMap) {

		Map<String, Object> queryMap = new HashMap<String, Object>();

		// 获取当前页码
		String pageIndexStr = request.getParameter("pindex");
		if (StringUtils.isBlank(pageIndexStr)) {
			pageIndexStr = "1";
		}
		int pageIndex = Integer.parseInt(pageIndexStr);
		PagerInfo pager = new PagerInfo(pageSize, pageIndex);

		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("shipId", shipId);
		queryMap.put("productId", productId);

		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);

		ServiceResult<List<ShopOrderItem>> orderitemServiceResult = shopOrderItemService.getShopOrderItemsByShipId(queryMap, pager);

		List<ShopOrderItem> result = orderitemServiceResult.getResult();
		PagerInfo pagerInfo =orderitemServiceResult.getPager();

		dataMap.put("items", result);
		dataMap.put("condtion", condtion);
		dataMap.put("shipId", shipId);
		dataMap.put("productId", productId);
		dataMap.put("pagerInfo", pagerInfo);
		return "product/user-iframe-stat";
	}

	/**
	 * 指定用户订单信息
	 * @author shilinlin
	 * @param request
	 * @param response
	 * @param productId
	 * @param shipId
	 * @param buyId
	 * @param startDate
	 * @param endDate
	 * @param depotId
	 * @param dataMap
	 * @return
	 * 2016年11月4日 下午1:21:13
	 */
	@RequestMapping(value = "order/{productId}/{shipId}/{buyId}")
	public String getByBuyerId(HttpServletRequest request,
			HttpServletResponse response,
			@PathVariable("productId") String productId,
			@PathVariable("shipId") String shipId,
			@PathVariable("buyId") String buyId, String startDate,
			String endDate, Integer depotId, Map<String, Object> dataMap) {

		Map<String, Object> queryMap = new HashMap<String, Object>();
		
		//获取当前页码
		String pagerIndexStr = request.getParameter("pindex");
		if(StringUtils.isBlank(pagerIndexStr)){
			pagerIndexStr="1";
		}
		
		int pagerIndex = Integer.parseInt(pagerIndexStr);
		PagerInfo pager = new PagerInfo(pageSize,pagerIndex);
		
		queryMap.put("startDate", startDate);
		queryMap.put("endDate", endDate);
		queryMap.put("productId", productId);
		queryMap.put("shipId", shipId);
		queryMap.put("buyId", buyId);

		QueryCondtion condtion = new QueryCondtion();
		condtion.setStartDate(startDate);
		condtion.setEndDate(endDate);
		condtion.setDepotId(depotId);

		ServiceResult<List<ShopOrderItem>> orderitemServiceResult = shopOrderItemService.getShopOrderItemsByUserId(queryMap,pager);

		List<ShopOrderItem> result = orderitemServiceResult.getResult();
		
		PagerInfo pagerInfo = orderitemServiceResult.getPager();
		dataMap.put("items", result);
		dataMap.put("condtion", condtion);
		dataMap.put("pagerInfo", pagerInfo);
		dataMap.put("productId", productId);
		dataMap.put("shipId", shipId);
		dataMap.put("buyId", buyId);
		return "product/order-iframe-stat";
	}
}
