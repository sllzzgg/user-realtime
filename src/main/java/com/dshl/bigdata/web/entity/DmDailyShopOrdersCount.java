package com.dshl.bigdata.web.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Date;

/**
 * 
 * <p>
 * Table: <strong>dm_daily_shop_orders_count</strong>
 * <p>
 * <table class="er-mapping" cellspacing=0 cellpadding=0 style="border:solid 1 #666;padding:3px;">
 * <tr style="background-color:#ddd;Text-align:Left;">
 * <th nowrap>属性名</th>
 * <th nowrap>属性类型</th>
 * <th nowrap>字段名</th>
 * <th nowrap>字段类型</th>
 * <th nowrap>说明</th>
 * </tr>
 * <tr>
 * <td>orderDate</td>
 * <td>{@link java.lang.String}</td>
 * <td>order_date</td>
 * <td>varchar</td>
 * <td>orderDate</td>
 * </tr>
 * <tr>
 * <td>orderQuantity</td>
 * <td>{@link java.lang.Integer}</td>
 * <td>orderQuantity</td>
 * <td>int</td>
 * <td>orderQuantity</td>
 * </tr>
 * <tr>
 * <td>orderAmount</td>
 * <td>{@link java.math.BigDecimal}</td>
 * <td>orderAmount</td>
 * <td>decimal</td>
 * <td>orderAmount</td>
 * </tr>
 * <tr>
 * <td>cancelOrderQuantity</td>
 * <td>{@link java.lang.Integer}</td>
 * <td>cancelOrderQuantity</td>
 * <td>int</td>
 * <td>cancelOrderQuantity</td>
 * </tr>
 * <tr>
 * <td>cancelOrderAmount</td>
 * <td>{@link java.math.BigDecimal}</td>
 * <td>cancelOrderAmount</td>
 * <td>decimal</td>
 * <td>cancelOrderAmount</td>
 * </tr>
 * <tr>
 * <td>backOrderQuantity</td>
 * <td>{@link java.lang.Integer}</td>
 * <td>backOrderQuantity</td>
 * <td>int</td>
 * <td>backOrderQuantity</td>
 * </tr>
 * <tr>
 * <td>backOrderAmount</td>
 * <td>{@link java.math.BigDecimal}</td>
 * <td>backOrderAmount</td>
 * <td>decimal</td>
 * <td>backOrderAmount</td>
 * </tr>
 * <tr>
 * <td>returnOrderQuantity</td>
 * <td>{@link java.lang.Integer}</td>
 * <td>returnOrderQuantity</td>
 * <td>int</td>
 * <td>returnOrderQuantity</td>
 * </tr>
 * <tr>
 * <td>returnOrderAmount</td>
 * <td>{@link java.math.BigDecimal}</td>
 * <td>returnOrderAmount</td>
 * <td>decimal</td>
 * <td>returnOrderAmount</td>
 * </tr>
 * <tr>
 * <td>depotid</td>
 * <td>{@link java.lang.Integer}</td>
 * <td>depotid</td>
 * <td>int</td>
 * <td>depotid</td>
 * </tr>
 * </table>
 * 
 */
public class DmDailyShopOrdersCount implements Serializable {

	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = -264584636750741280L;

	private Date orderDate;

	private java.lang.Integer orderQuantity;

	private java.math.BigDecimal orderAmount;

	private java.lang.Integer cancelOrderQuantity;

	private java.math.BigDecimal cancelOrderAmount;

	private java.lang.Integer backOrderQuantity;

	private java.math.BigDecimal backOrderAmount;

	private java.lang.Integer returnOrderQuantity;

	private java.math.BigDecimal returnOrderAmount;

	private java.lang.Integer depotid;

	private Integer totalQuantity;
	private double totalAmount;

	public void setTotalQuantity(Integer totalQuantity) {
		this.totalQuantity = totalQuantity;
	}

	public Integer getTotalQuantity() {
		return totalQuantity;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	/**
	 * 获取orderDate
	 */
	public Date getOrderDate() {
		return orderDate;
	}

	/**
	 * 设置orderDate
	 */
	public void setOrderDate(Date orderDate) {
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
	 * 获取cancelOrderQuantity
	 */
	public java.lang.Integer getCancelOrderQuantity() {
		return this.cancelOrderQuantity;
	}

	/**
	 * 设置cancelOrderQuantity
	 */
	public void setCancelOrderQuantity(java.lang.Integer cancelOrderQuantity) {
		this.cancelOrderQuantity = cancelOrderQuantity;
	}

	/**
	 * 获取cancelOrderAmount
	 */
	public java.math.BigDecimal getCancelOrderAmount() {
		return this.cancelOrderAmount;
	}

	/**
	 * 设置cancelOrderAmount
	 */
	public void setCancelOrderAmount(java.math.BigDecimal cancelOrderAmount) {
		this.cancelOrderAmount = cancelOrderAmount;
	}

	/**
	 * 获取backOrderQuantity
	 */
	public java.lang.Integer getBackOrderQuantity() {
		return this.backOrderQuantity;
	}

	/**
	 * 设置backOrderQuantity
	 */
	public void setBackOrderQuantity(java.lang.Integer backOrderQuantity) {
		this.backOrderQuantity = backOrderQuantity;
	}

	/**
	 * 获取backOrderAmount
	 */
	public java.math.BigDecimal getBackOrderAmount() {
		return this.backOrderAmount;
	}

	/**
	 * 设置backOrderAmount
	 */
	public void setBackOrderAmount(java.math.BigDecimal backOrderAmount) {
		this.backOrderAmount = backOrderAmount;
	}

	/**
	 * 获取returnOrderQuantity
	 */
	public java.lang.Integer getReturnOrderQuantity() {
		return this.returnOrderQuantity;
	}

	/**
	 * 设置returnOrderQuantity
	 */
	public void setReturnOrderQuantity(java.lang.Integer returnOrderQuantity) {
		this.returnOrderQuantity = returnOrderQuantity;
	}

	/**
	 * 获取returnOrderAmount
	 */
	public java.math.BigDecimal getReturnOrderAmount() {
		return this.returnOrderAmount;
	}

	/**
	 * 设置returnOrderAmount
	 */
	public void setReturnOrderAmount(java.math.BigDecimal returnOrderAmount) {
		this.returnOrderAmount = returnOrderAmount;
	}

	/**
	 * 获取depotid
	 */
	public java.lang.Integer getDepotid() {
		return this.depotid;
	}

	/**
	 * 设置depotid
	 */
	public void setDepotid(java.lang.Integer depotid) {
		this.depotid = depotid;
	}
	
	//平均销售额
	public String getAverage(){
		if(orderQuantity==0){
			return "0";
		}
		DecimalFormat df=new DecimalFormat("0.00");
		return df.format(orderAmount.doubleValue()/orderQuantity);
	}
}
