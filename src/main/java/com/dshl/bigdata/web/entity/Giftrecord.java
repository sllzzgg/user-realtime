package com.dshl.bigdata.web.entity;
/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月21日 上午10:02:11
 */
public class Giftrecord {
	private String title;//赠品名称
	private Integer totalCount;//赠品数量
	private Integer countUser; //参与客户数
	private Integer totalAmount;//销售额
	
	public Giftrecord() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(Integer totalCount) {
		this.totalCount = totalCount;
	}

	public Integer getCountUser() {
		return countUser;
	}

	public void setCountUser(Integer countUser) {
		this.countUser = countUser;
	}

	public Integer getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Integer totalAmount) {
		this.totalAmount = totalAmount;
	}
	
	
}
