package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.ShopBrand;
import com.dshl.bigdata.web.entity.ShopOrderItem;
import com.dshl.bigdata.web.entity.ShopOrderMapDate;

@Repository
public interface ShopOrderItemDao {
	
	//获取所有的商品品牌和id
	List<ShopBrand> getAllShopBrand();
	
	 //获取订单总记录数
    int getShopOrderItemsCount(@Param("param1") Map<String, Object> queryMap);

    //获取总的指定商品的订单总数
    int getShopOrderItemsCountByProductId(@Param("param1") Map<String, Object> queryMap);
    
    //获取致指定配送站的订单总数
	int getShopOrderItemsCountByShipId(@Param("param1") Map<String, Object> queryMap);
	
	//获取指定用户的订单总数
	int getShopOrderItemsCountByUserId(@Param("param1") Map<String, Object> queryMap);

    List<ShopOrderItem> getShopOrderItems(@Param("param1") Map<String, Object> queryMap,
                                          @Param("start") Integer start, @Param("size") Integer size);

    List<ShopOrderItem> getShopOrderItemsByProductId(@Param("param1") Map<String, Object> queryMap,
    		                     		 			 @Param("start") int start, @Param("size") int size);

    List<ShopOrderItem> getShopOrderItemsByShipId(@Param("param1") Map<String, Object> queryMap, 
    		   									  @Param("start") int start,@Param("size") int size);

    List<ShopOrderItem> getShopOrderItemsByUserId(@Param("param1") Map<String, Object> queryMap,
    		    								  @Param("start") int start,@Param("size") int size);

	List<ShopOrderMapDate> getShopOrderMapDate(@Param("param1") Map<String, Object> queryMap);


}
