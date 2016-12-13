package com.dshl.bigdata.web.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class ShopOrderItem implements Serializable {

	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = -264584636750741280L;

	private java.lang.Integer itemId;

	private java.lang.Integer orderid;

	private java.lang.String name;

	private java.lang.String productId;

	private BigDecimal sellPrice;

	private java.lang.Integer quantity;

	private Date createdDate;

	private java.lang.Integer regionid;

	private java.lang.Integer realshippingmodeid;

	//配送站名称
	private java.lang.String realshippingmodename;

	private java.lang.Integer buyerid;

	private java.lang.String shipname;

	private java.lang.Integer brandid;

	private java.lang.String sku;
	
	//-----------------------
	private Integer orderCount;
	
	//订单编号
	private String orderCode;
	
	//订单创建时间
	private Date createTime;
	
	
	public String getOrderCode() {
		return orderCode;
	}
	public void setOrderCode(String orderCode) {
		this.orderCode = orderCode;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public void setOrderCount(Integer orderCount) {
		this.orderCount = orderCount;
	}
	public Integer getOrderCount() {
		return orderCount;
	}

	public void setBrandid(java.lang.Integer brandid) {
		this.brandid = brandid;
	}

	public java.lang.Integer getBrandid() {
		return brandid;
	}

	public void setSku(java.lang.String sku) {
		this.sku = sku;
	}

	public java.lang.String getSku() {
		return sku;
	}

	/**
	 * ��ȡitemId
	 */
	public java.lang.Integer getItemId() {
		return this.itemId;
	}

	/**
	 * ����itemId
	 */
	public void setItemId(java.lang.Integer itemId) {
		this.itemId = itemId;
	}

	/**
	 * ��ȡorderid
	 */
	public java.lang.Integer getOrderid() {
		return this.orderid;
	}

	/**
	 * ����orderid
	 */
	public void setOrderid(java.lang.Integer orderid) {
		this.orderid = orderid;
	}

	/**
	 * ��ȡname
	 */
	public java.lang.String getName() {
		return this.name;
	}

	/**
	 * ����name
	 */
	public void setName(java.lang.String name) {
		this.name = name;
	}

	/**
	 * ��ȡproductId
	 */
	public java.lang.String getProductId() {
		return this.productId;
	}

	/**
	 * ����productId
	 */
	public void setProductId(java.lang.String productId) {
		this.productId = productId;
	}

	public BigDecimal getSellPrice() {
		return sellPrice;
	}

	public void setSellPrice(BigDecimal sellPrice) {
		this.sellPrice = sellPrice;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public java.lang.Integer getRegionid() {
		return regionid;
	}

	/**
	 * ��ȡquantity
	 */
	public java.lang.Integer getQuantity() {
		return this.quantity;
	}

	/**
	 * ����quantity
	 */
	public void setQuantity(java.lang.Integer quantity) {
		this.quantity = quantity;
	}

	/**
	 * ��ȡcreatedDate
	 */

	/**
	 * ����regionid
	 */
	public void setRegionid(java.lang.Integer regionid) {
		this.regionid = regionid;
	}

	/**
	 * ��ȡrealshippingmodeid
	 */
	public java.lang.Integer getRealshippingmodeid() {
		return this.realshippingmodeid;
	}

	/**
	 * ����realshippingmodeid
	 */
	public void setRealshippingmodeid(java.lang.Integer realshippingmodeid) {
		this.realshippingmodeid = realshippingmodeid;
	}

	/**
	 * ��ȡrealshippingmodename
	 */
	public java.lang.String getRealshippingmodename() {
		return this.realshippingmodename;
	}

	/**
	 * ����realshippingmodename
	 */
	public void setRealshippingmodename(java.lang.String realshippingmodename) {
		this.realshippingmodename = realshippingmodename;
	}

	/**
	 * ��ȡbuyerid
	 */
	public java.lang.Integer getBuyerid() {
		return this.buyerid;
	}

	/**
	 * ����buyerid
	 */
	public void setBuyerid(java.lang.Integer buyerid) {
		this.buyerid = buyerid;
	}

	/**
	 * ��ȡshipname
	 */
	public java.lang.String getShipname() {
		return this.shipname;
	}

	/**
	 * ����shipname
	 */
	public void setShipname(java.lang.String shipname) {
		this.shipname = shipname;
	}
	@Override
	public String toString() {
		return "ShopOrderItem [itemId=" + itemId + ", orderid=" + orderid
				+ ", name=" + name + ", productId=" + productId
				+ ", sellPrice=" + sellPrice + ", quantity=" + quantity
				+ ", createdDate=" + createdDate + ", regionid=" + regionid
				+ ", realshippingmodeid=" + realshippingmodeid
				+ ", realshippingmodename=" + realshippingmodename
				+ ", buyerid=" + buyerid + ", shipname=" + shipname
				+ ", brandid=" + brandid + ", sku=" + sku + ", orderCount="
				+ orderCount + ", orderCode=" + orderCode + ", createTime="
				+ createTime + "]";
	}
	
}