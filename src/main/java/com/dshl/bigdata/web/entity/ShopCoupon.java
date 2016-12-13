package com.dshl.bigdata.web.entity;

import java.text.DecimalFormat;
import java.util.Date;

/**
* @author shilinlin
* @version 
* 创建时间：2016年11月16日 上午11:13:30
*/
public class ShopCoupon {
	private String title;//优惠券名称
	private Integer couponType;//优惠券类型(1普通优惠券 2兑换优惠券 3赠送优惠券)
	private double price; //面值
	private int sendCount;//赠送个数
	private int usedCount;//使用个数
	private Integer rangeType;//使用范围(1全场 2分类 3品牌 4商品)
	private Integer status;//数据状态，默认2
	private Integer remainNum;//剩余数
	private String couponPlat;//使用平台
	
	public ShopCoupon() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}


	public Integer getCouponType() {
		return couponType;
	}

	public void setCouponType(Integer couponType) {
		this.couponType = couponType;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getSendCount() {
		return sendCount;
	}

	public void setSendCount(Integer sendCount) {
		this.sendCount = sendCount;
	}

	public Integer getUsedCount() {
		return usedCount;
	}

	public void setUsedCount(Integer usedCount) {
		this.usedCount = usedCount;
	}

	public Integer getRangeType() {
		return rangeType;
	}

	public void setRangeType(Integer rangeType) {
		this.rangeType = rangeType;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getRemainNum() {
		return remainNum;
	}

	public void setRemainNum(Integer remainNum) {
		this.remainNum = remainNum;
	}

	public String getCouponPlat() {
		return couponPlat;
	}

	public void setCouponPlat(String couponPlat) {
		this.couponPlat = couponPlat;
	}
	
	public void setSendCount(int sendCount) {
		this.sendCount = sendCount;
	}


	public void setUsedCount(int usedCount) {
		this.usedCount = usedCount;
	}

	
	//剩余总额
	public double getRemainTotal(){
		return remainNum*price;
	}
	
	//使用总额
	public double getUseTotal(){
		return usedCount*price;
	}
	
	//预算总额
	public double getSentTotal(){
		
		return sendCount*price;
	}
	
	//使用比例
	public String getUseScale(){
		if(sendCount==0){
			return "0.00%";
		}else{
			
			float num= (float)usedCount / sendCount*100;  
			
			DecimalFormat df = new DecimalFormat("0.00");//格式化小数   
			String s = df.format(num);//返回的是String类型 
			
			return s+"%";
			
		}
	}
	@Override
	public String toString() {
		return "ShopCoupon [title=" + title + ", couponType=" + couponType
				+ ", price=" + price + ", sendCount=" + sendCount
				+ ", usedCount=" + usedCount + ", rangeType=" + rangeType
				+ ", status=" + status + ", remainNum=" + remainNum
				+ ", couponPlat=" + couponPlat + "]";
	}

	
}
