package com.dshl.bigdata.web.entity;

import java.io.Serializable;

/**
 * 
 * <p>Table: <strong>dm_daily_shop_orders_source</strong>
 * <p><table class="er-mapping" cellspacing=0 cellpadding=0 style="border:solid 1 #666;padding:3px;">
 *   <tr style="background-color:#ddd;Text-align:Left;">
 *     <th nowrap>属性名</th><th nowrap>属性类型</th><th nowrap>字段名</th><th nowrap>字段类型</th><th nowrap>说明</th>
 *   </tr>
 *   <tr><td>orderDate</td><td>{@link java.lang.String}</td><td>order_date</td><td>varchar</td><td>orderDate</td></tr>
 *   <tr><td>orderQuantity</td><td>{@link java.lang.Integer}</td><td>orderQuantity</td><td>int</td><td>orderQuantity</td></tr>
 *   <tr><td>orderAmount</td><td>{@link java.math.BigDecimal}</td><td>orderAmount</td><td>decimal</td><td>orderAmount</td></tr>
 *   <tr><td>ReferType</td><td>{@link java.lang.Integer}</td><td>ReferType</td><td>int</td><td>ReferType</td></tr>
 *   <tr><td>RegionId</td><td>{@link java.lang.Integer}</td><td>RegionId</td><td>int</td><td>RegionId</td></tr>
 *   <tr><td>RegionCity</td><td>{@link java.lang.String}</td><td>RegionCity</td><td>varchar</td><td>RegionCity</td></tr>
 * </table>
 *
 */
public class DmDailyShopOrdersSource implements Serializable {

    /**
     *Comment for <code>serialVersionUID</code>
     */
    private static final long    serialVersionUID = -264584636750741280L;

    private java.lang.String     orderDate;

    private java.lang.Integer    orderQuantity;

    private java.math.BigDecimal orderAmount;

    private java.lang.Integer    ReferType;

    private java.lang.Integer    RegionId;

    private String               regionName;

    private Integer              RegionCityId;

    private java.lang.String     RegionCity;

    private Double               Longitude;

    private Double               Latitude;
    
    private String               referName;
    

	public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }

    public Integer getRegionCityId() {
        return RegionCityId;
    }

    public void setRegionCityId(Integer regionCityId) {
        RegionCityId = regionCityId;
    }

    public Double getLongitude() {
        return Longitude;
    }

    public void setLongitude(Double longitude) {
        Longitude = longitude;
    }

    public Double getLatitude() {
        return Latitude;
    }

    public void setLatitude(Double latitude) {
        Latitude = latitude;
    }

    /**
     * 获取orderDate
     */
    public java.lang.String getOrderDate() {
        return this.orderDate;
    }

    /**
     * 设置orderDate
     */
    public void setOrderDate(java.lang.String orderDate) {
        this.orderDate = orderDate;
    }

    /**
     * 获取orderQuantity
     */
    public java.lang.Integer getOrderQuantity() {
        return this.orderQuantity;
    }

    /**
     * 设置orderQuantity
     */
    public void setOrderQuantity(java.lang.Integer orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    /**
     * 获取orderAmount
     */
    public java.math.BigDecimal getOrderAmount() {
        return this.orderAmount;
    }

    /**
     * 设置orderAmount
     */
    public void setOrderAmount(java.math.BigDecimal orderAmount) {
        this.orderAmount = orderAmount;
    }

    /**
     * 获取ReferType
     */
    public java.lang.Integer getReferType() {
        return this.ReferType;
    }

    /**
     * 设置ReferType
     */
    public void setReferType(java.lang.Integer ReferType) {
        this.ReferType = ReferType;
    }

    /**
     * 获取RegionId
     */
    public java.lang.Integer getRegionId() {
        return this.RegionId;
    }

    /**
     * 设置RegionId
     */
    public void setRegionId(java.lang.Integer RegionId) {
        this.RegionId = RegionId;
    }

    /**
     * 获取RegionCity
     */
    public java.lang.String getRegionCity() {
        return this.RegionCity;
    }

    /**
     * 设置RegionCity
     */
    public void setRegionCity(java.lang.String RegionCity) {
        this.RegionCity = RegionCity;
    }
    
    
    public String getReferName() {
    	if(ReferType==null || ReferType==0){
    		ReferType=6;
    	}
    	switch (ReferType) {
		case 1:
			referName="PC商城";
			break;
		case 2:
			referName="微信商城";	
			break;
		case 3:
			referName="业务员";
			break;
		case 4:
			referName="400客服";
			break;
		case 5:
			referName="订货宝";
			break;
		default:
			referName="其它";
			break;
		}
    	return referName;
	}

	@Override
	public String toString() {
		return "DmDailyShopOrdersSource [orderDate=" + orderDate
				+ ", orderQuantity=" + orderQuantity + ", orderAmount="
				+ orderAmount + ", ReferType=" + ReferType + ", RegionId="
				+ RegionId +", referName="+ referName + "]";
	}
    
}