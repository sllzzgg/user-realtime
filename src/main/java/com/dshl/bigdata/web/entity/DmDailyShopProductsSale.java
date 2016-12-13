package com.dshl.bigdata.web.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * <p>Table: <strong>dm_daily_shop_products_flow</strong>
 * <p><table class="er-mapping" cellspacing=0 cellpadding=0 style="border:solid 1 #666;padding:3px;">
 *   <tr style="background-color:#ddd;Text-align:Left;">
 *     <th nowrap>属性名</th><th nowrap>属性类型</th><th nowrap>字段名</th><th nowrap>字段类型</th><th nowrap>说明</th>
 *   </tr>
 *   <tr><td>orderDate</td><td>{@link java.lang.String}</td><td>order_date</td><td>varchar</td><td>orderDate</td></tr>
 *   <tr><td>sku</td><td>{@link java.lang.String}</td><td>sku</td><td>varchar</td><td>sku</td></tr>
 *   <tr><td>productName</td><td>{@link java.lang.String}</td><td>productName</td><td>varchar</td><td>productName</td></tr>
 *   <tr><td>brandid</td><td>{@link java.lang.Integer}</td><td>brandid</td><td>int</td><td>brandid</td></tr>
 *   <tr><td>brandName</td><td>{@link java.lang.String}</td><td>brandName</td><td>varchar</td><td>brandName</td></tr>
 *   <tr><td>totalQuantity</td><td>{@link java.lang.Integer}</td><td>totalQuantity</td><td>int</td><td>totalQuantity</td></tr>
 *   <tr><td>sellPrice</td><td>{@link java.lang.String}</td><td>sellPrice</td><td>varchar</td><td>sellPrice</td></tr>
 *   <tr><td>totalAmount</td><td>{@link java.math.BigDecimal}</td><td>totalAmount</td><td>decimal</td><td>totalAmount</td></tr>
 *   <tr><td>productQuantity</td><td>{@link java.lang.Integer}</td><td>productQuantity</td><td>int</td><td>productQuantity</td></tr>
 *   <tr><td>depotId</td><td>{@link java.lang.Integer}</td><td>depotId</td><td>int</td><td>depotId</td></tr>
 *   <tr><td>RegionId</td><td>{@link java.lang.Integer}</td><td>RegionId</td><td>int</td><td>RegionId</td></tr>
 *   <tr><td>RegionCity</td><td>{@link java.lang.String}</td><td>RegionCity</td><td>varchar</td><td>RegionCity</td></tr>
 * </table>
 *
 */
public class DmDailyShopProductsSale implements Serializable {

    /**
     *Comment for <code>serialVersionUID</code>
     */
    private static final long    serialVersionUID = -264584636750741280L;

    private Date     orderDate;

    private java.lang.String     sku;

    private java.lang.String     productName;

    private java.lang.Integer    brandid;

    private java.lang.String     brandName;

    private java.lang.Integer    totalQuantity;

    private java.lang.String     sellPrice;

    private java.math.BigDecimal totalAmount;

    private java.lang.Integer    productQuantity;

    private java.lang.Integer    depotId;

    private java.lang.Integer    RegionId;

    private java.lang.String     RegionCity;

   

    public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	/**
     * 获取sku
     */
    public java.lang.String getSku() {
        return this.sku;
    }

    /**
     * 设置sku
     */
    public void setSku(java.lang.String sku) {
        this.sku = sku;
    }

    /**
     * 获取productName
     */
    public java.lang.String getProductName() {
        return this.productName;
    }

    /**
     * 设置productName
     */
    public void setProductName(java.lang.String productName) {
        this.productName = productName;
    }

    /**
     * 获取brandid
     */
    public java.lang.Integer getBrandid() {
        return this.brandid;
    }

    /**
     * 设置brandid
     */
    public void setBrandid(java.lang.Integer brandid) {
        this.brandid = brandid;
    }

    /**
     * 获取brandName
     */
    public java.lang.String getBrandName() {
        return this.brandName;
    }

    /**
     * 设置brandName
     */
    public void setBrandName(java.lang.String brandName) {
        this.brandName = brandName;
    }

    /**
     * 获取totalQuantity
     */
    public java.lang.Integer getTotalQuantity() {
        return this.totalQuantity;
    }

    /**
     * 设置totalQuantity
     */
    public void setTotalQuantity(java.lang.Integer totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    /**
     * 获取sellPrice
     */
    public java.lang.String getSellPrice() {
        return this.sellPrice;
    }

    /**
     * 设置sellPrice
     */
    public void setSellPrice(java.lang.String sellPrice) {
        this.sellPrice = sellPrice;
    }

    /**
     * 获取totalAmount
     */
    public java.math.BigDecimal getTotalAmount() {
        return this.totalAmount;
    }

    /**
     * 设置totalAmount
     */
    public void setTotalAmount(java.math.BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    /**
     * 获取productQuantity
     */
    public java.lang.Integer getProductQuantity() {
        return this.productQuantity;
    }

    /**
     * 设置productQuantity
     */
    public void setProductQuantity(java.lang.Integer productQuantity) {
        this.productQuantity = productQuantity;
    }

    /**
     * 获取depotId
     */
    public java.lang.Integer getDepotId() {
        return this.depotId;
    }

    /**
     * 设置depotId
     */
    public void setDepotId(java.lang.Integer depotId) {
        this.depotId = depotId;
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

	@Override
	public String toString() {
		return "DmDailyShopProductsSale [orderDate=" + orderDate + ", sku="
				+ sku + ", productName=" + productName + ", brandid=" + brandid
				+ ", brandName=" + brandName + ", totalQuantity="
				+ totalQuantity + ", sellPrice=" + sellPrice + ", totalAmount="
				+ totalAmount + ", productQuantity=" + productQuantity
				+ ", depotId=" + depotId + ", RegionId=" + RegionId
				+ ", RegionCity=" + RegionCity + "]";
	}
    
}