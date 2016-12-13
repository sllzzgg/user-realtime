package com.dshl.bigdata.web.entity;

import java.io.Serializable;
import java.util.Date;

/**
 *
 */
public class DmWechatUsersCount implements Serializable {

	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = -264584636750741280L;

	private Date createDate;

	private java.lang.Integer addQuantity;

	private java.lang.Integer cancelQuantity;

	private java.lang.Integer totalQuantity;

	private String createDateString;

	public void setCreateDateString(String createDateString) {
		this.createDateString = createDateString;
	}

	public String getCreateDateString() {
		return createDateString;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getCreateDate() {
		return createDate;
	}

	/**
	 * ��ȡaddQuantity
	 */
	public java.lang.Integer getAddQuantity() {
		return this.addQuantity;
	}

	/**
	 * ����addQuantity
	 */
	public void setAddQuantity(java.lang.Integer addQuantity) {
		this.addQuantity = addQuantity;
	}

	/**
	 * ��ȡcancelQuantity
	 */
	public java.lang.Integer getCancelQuantity() {
		return this.cancelQuantity;
	}

	/**
	 * ����cancelQuantity
	 */
	public void setCancelQuantity(java.lang.Integer cancelQuantity) {
		this.cancelQuantity = cancelQuantity;
	}

	/**
	 * ��ȡtotalQuantity
	 */
	public java.lang.Integer getTotalQuantity() {
		return this.totalQuantity;
	}

	/**
	 * ����totalQuantity
	 */
	public void setTotalQuantity(java.lang.Integer totalQuantity) {
		this.totalQuantity = totalQuantity;
	}
}