package com.dshl.bigdata.web.entity;

import java.io.Serializable;
/**
 * 
 * <p>Table: <strong>dm_daily_shop_supplier_statis</strong>
 * <p><table class="er-mapping" cellspacing=0 cellpadding=0 style="border:solid 1 #666;padding:3px;">
 *   <tr style="background-color:#ddd;Text-align:Left;">
 *     <th nowrap>属性名</th><th nowrap>属性类型</th><th nowrap>字段名</th><th nowrap>字段类型</th><th nowrap>说明</th>
 *   </tr>
 *   <tr><td>dateCreate</td><td>{@link java.lang.String}</td><td>dateCreate</td><td>varchar</td><td>dateCreate</td></tr>
 *   <tr><td>supplierName</td><td>{@link java.lang.String}</td><td>supplierName</td><td>varchar</td><td>supplierName</td></tr>
 *   <tr><td>userQuantity</td><td>{@link java.lang.String}</td><td>userQuantity</td><td>varchar</td><td>userQuantity</td></tr>
 *   <tr><td>activityUser</td><td>{@link java.lang.String}</td><td>activityUser</td><td>varchar</td><td>activityUser</td></tr>
 *   <tr><td>supplierId</td><td>{@link java.lang.String}</td><td>supplierId</td><td>varchar</td><td>supplierId</td></tr>
 *   <tr><td>orderQuantity</td><td>{@link java.lang.String}</td><td>orderQuantity</td><td>varchar</td><td>orderQuantity</td></tr>
 *   <tr><td>orderAmount</td><td>{@link java.lang.String}</td><td>orderAmount</td><td>varchar</td><td>orderAmount</td></tr>
 * </table>
 *
 */
public class DmDailyShopSupplierStatis implements Serializable {
 
 	/**
     *Comment for <code>serialVersionUID</code>
     */
 	private static final long serialVersionUID                    = -264584636750741280L;
 	
 		
 		private java.lang.String dateCreate;  
 		
 		
 		private java.lang.String supplierName;  
 		
 		
 		private java.lang.String userQuantity;  
 		
 		
 		private java.lang.String activityUser;  
 		
 		
 		private java.lang.String supplierId;  
 		
 		
 		private java.lang.String orderQuantity;  
 		
 		
 		private java.lang.String orderAmount;  
 		
 	
 		/**
	     * 获取dateCreate
	     */
 		public java.lang.String getDateCreate(){
 			return this.dateCreate;
 		}
 		
 		/**
	     * 设置dateCreate
	     */
 		public void setDateCreate(java.lang.String dateCreate){
 			this.dateCreate = dateCreate;
 		}
 		/**
	     * 获取supplierName
	     */
 		public java.lang.String getSupplierName(){
 			return this.supplierName;
 		}
 		
 		/**
	     * 设置supplierName
	     */
 		public void setSupplierName(java.lang.String supplierName){
 			this.supplierName = supplierName;
 		}
 		/**
	     * 获取userQuantity
	     */
 		public java.lang.String getUserQuantity(){
 			return this.userQuantity;
 		}
 		
 		/**
	     * 设置userQuantity
	     */
 		public void setUserQuantity(java.lang.String userQuantity){
 			this.userQuantity = userQuantity;
 		}
 		/**
	     * 获取activityUser
	     */
 		public java.lang.String getActivityUser(){
 			return this.activityUser;
 		}
 		
 		/**
	     * 设置activityUser
	     */
 		public void setActivityUser(java.lang.String activityUser){
 			this.activityUser = activityUser;
 		}
 		/**
	     * 获取supplierId
	     */
 		public java.lang.String getSupplierId(){
 			return this.supplierId;
 		}
 		
 		/**
	     * 设置supplierId
	     */
 		public void setSupplierId(java.lang.String supplierId){
 			this.supplierId = supplierId;
 		}
 		/**
	     * 获取orderQuantity
	     */
 		public java.lang.String getOrderQuantity(){
 			return this.orderQuantity;
 		}
 		
 		/**
	     * 设置orderQuantity
	     */
 		public void setOrderQuantity(java.lang.String orderQuantity){
 			this.orderQuantity = orderQuantity;
 		}
 		/**
	     * 获取orderAmount
	     */
 		public java.lang.String getOrderAmount(){
 			return this.orderAmount;
 		}
 		
 		/**
	     * 设置orderAmount
	     */
 		public void setOrderAmount(java.lang.String orderAmount){
 			this.orderAmount = orderAmount;
 		}
 }