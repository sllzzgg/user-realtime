package com.dshl.bigdata.web.entity;

import java.io.Serializable;
import java.text.DecimalFormat;
import java.util.Date;

import org.apache.zookeeper.Op.SetData;

/**
 * 
 */
public class DmDailyShopProductsStatis implements Serializable {

	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = -264584636750741280L;

	private java.lang.String addDate;

	private java.lang.Integer depotId;

	private java.lang.String purchaseCateName;

	private java.lang.String categoryName;

	private java.lang.Integer onlineQuantity;

	private java.lang.Integer lackQuantity;

	private java.lang.Integer stopQuantity;
	
	private double lackQuantityRate;
	
	public void setLackQuantityRate(double lackQuantityRate) {
		this.lackQuantityRate = lackQuantityRate;
	}
	public double getLackQuantityRate() {
		return lackQuantityRate;
	}


	public java.lang.String getAddDate() {
		return addDate;
	}
	public void setAddDate(java.lang.String addDate) {
		this.addDate = addDate;
	}
	/**
	 * ��ȡdepotId
	 */
	public java.lang.Integer getDepotId() {
		return this.depotId;
	}

	/**
	 * ����depotId
	 */
	public void setDepotId(java.lang.Integer depotId) {
		this.depotId = depotId;
	}

	/**
	 * ��ȡpurchaseCateName
	 */
	public java.lang.String getPurchaseCateName() {
		return this.purchaseCateName;
	}

	/**
	 * ����purchaseCateName
	 */
	public void setPurchaseCateName(java.lang.String purchaseCateName) {
		this.purchaseCateName = purchaseCateName;
	}

	/**
	 * ��ȡcategoryName
	 */
	public java.lang.String getCategoryName() {
		return this.categoryName;
	}

	/**
	 * ����categoryName
	 */
	public void setCategoryName(java.lang.String categoryName) {
		this.categoryName = categoryName;
	}

	/**
	 * ��ȡonlineQuantity
	 */
	public java.lang.Integer getOnlineQuantity() {
		return this.onlineQuantity;
	}

	/**
	 * ����onlineQuantity
	 */
	public void setOnlineQuantity(java.lang.Integer onlineQuantity) {
		this.onlineQuantity = onlineQuantity;
	}

	/**
	 * ��ȡlackQuantity
	 */
	public java.lang.Integer getLackQuantity() {
		return this.lackQuantity;
	}

	/**
	 * ����lackQuantity
	 */
	public void setLackQuantity(java.lang.Integer lackQuantity) {
		this.lackQuantity = lackQuantity;
	}

	/**
	 * ��ȡstopQuantity
	 */
	public java.lang.Integer getStopQuantity() {
		return this.stopQuantity;
	}

	/**
	 * ����stopQuantity
	 */
	public void setStopQuantity(java.lang.Integer stopQuantity) {
		this.stopQuantity = stopQuantity;
	}
	
	
	/**
	 * 缺货比率
	 * @return
	 */
	public String getStockoutRate(){
		
		if(lackQuantity==0){
			return "0.00%";
		}
		DecimalFormat df = new DecimalFormat("0.00");
		Integer count = lackQuantity+onlineQuantity;
		double stocoutRate = (double)lackQuantity/count*100;
		System.out.println(stocoutRate);
		return df.format(stocoutRate)+"%";
	}
}