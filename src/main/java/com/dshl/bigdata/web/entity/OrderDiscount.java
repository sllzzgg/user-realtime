package com.dshl.bigdata.web.entity;

import java.text.DecimalFormat;
import java.util.Date;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月25日 下午2:29:46
 */
public class OrderDiscount {

	private Integer orderCount;
	private double orderAmount;
	private double discountAmount;
	private Date createDate;
	private Integer totalOrderCount;
	private double totalOrderAmount;
	private double totalDiscountAmount;
	
	
	public OrderDiscount() {
		super();
	}
	
	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Integer getOrderCount() {
		return orderCount;
	}
	public void setOrderCount(Integer orderCount) {
		this.orderCount = orderCount;
	}
	public double getOrderAmount() {
		return orderAmount;
	}
	public void setOrderAmount(double orderAmount) {
		this.orderAmount = orderAmount;
	}
	public double getDiscountAmount() {
		return discountAmount;
	}
	public void setDiscountAmount(double discountAmount) {
		this.discountAmount = discountAmount;
	}
	//折扣比例
	public String getDiscountScale(){
		if(orderAmount==0){
			return "0.00%";
		}
		double num= discountAmount/orderAmount*100;
		DecimalFormat df = new DecimalFormat("0.00");//格式化小数   
		String s = df.format(num);
		return s+"%";
	}

	public Integer getTotalOrderCount() {
		return totalOrderCount;
	}

	public void setTotalOrderCount(Integer totalOrderCount) {
		this.totalOrderCount = totalOrderCount;
	}

	public double getTotalOrderAmount() {
		return totalOrderAmount;
	}

	public void setTotalOrderAmount(double totalOrderAmount) {
		this.totalOrderAmount = totalOrderAmount;
	}

	public double getTotalDiscountAmount() {
		return totalDiscountAmount;
	}

	public void setTotalDiscountAmount(double totalDiscountAmount) {
		this.totalDiscountAmount = totalDiscountAmount;
	}

	@Override
	public String toString() {
		return "orderDiscount [orderCount=" + orderCount + ", orderAmount="
				+ orderAmount + ", discountAmount=" + discountAmount
				+ ", createDate=" + createDate + ", totalOrderCount="
				+ totalOrderCount + ", totalOrderAmount=" + totalOrderAmount
				+ ", totalDiscountAmount=" + totalDiscountAmount + "]";
	}
	
}
