package com.dshl.bigdata.web.entity;

import java.io.Serializable;
/**
 * 
 * <p>Table: <strong>dm_daily_shop_supplier_orders</strong>
 * <p><table class="er-mapping" cellspacing=0 cellpadding=0 style="border:solid 1 #666;padding:3px;">
 *   <tr style="background-color:#ddd;Text-align:Left;">
 *     <th nowrap>������</th><th nowrap>��������</th><th nowrap>�ֶ���</th><th nowrap>�ֶ�����</th><th nowrap>˵��</th>
 *   </tr>
 *   <tr><td>orderdate</td><td>{@link java.lang.String}</td><td>orderdate</td><td>varchar</td><td>orderdate</td></tr>
 *   <tr><td>orderQuantity</td><td>{@link java.lang.Integer}</td><td>orderQuantity</td><td>int</td><td>orderQuantity</td></tr>
 *   <tr><td>orderAmount</td><td>{@link java.lang.String}</td><td>orderAmount</td><td>varchar</td><td>orderAmount</td></tr>
 *   <tr><td>supplierId</td><td>{@link java.lang.Integer}</td><td>supplierId</td><td>int</td><td>supplierId</td></tr>
 *   <tr><td>supplierName</td><td>{@link java.lang.String}</td><td>supplierName</td><td>varchar</td><td>supplierName</td></tr>
 * </table>
 *
 */
public class DmDailyShopSupplierOrders implements Serializable {
 
 	/**
     *Comment for <code>serialVersionUID</code>
     */
 	private static final long serialVersionUID                    = -264584636750741280L;
 	
 		
 		private java.lang.String orderdate;  
 		
 		
 		private java.lang.Integer orderQuantity;  
 		
 		
 		private java.lang.String orderAmount;  
 		
 		
 		private java.lang.Integer supplierId;  
 		
 		
 		private java.lang.String supplierName;  
 		
 	
 		/**
	     * ��ȡorderdate
	     */
 		public java.lang.String getOrderdate(){
 			return this.orderdate;
 		}
 		
 		/**
	     * ����orderdate
	     */
 		public void setOrderdate(java.lang.String orderdate){
 			this.orderdate = orderdate;
 		}
 		/**
	     * ��ȡorderQuantity
	     */
 		public java.lang.Integer getOrderQuantity(){
 			return this.orderQuantity;
 		}
 		
 		/**
	     * ����orderQuantity
	     */
 		public void setOrderQuantity(java.lang.Integer orderQuantity){
 			this.orderQuantity = orderQuantity;
 		}
 		/**
	     * ��ȡorderAmount
	     */
 		public java.lang.String getOrderAmount(){
 			return this.orderAmount;
 		}
 		
 		/**
	     * ����orderAmount
	     */
 		public void setOrderAmount(java.lang.String orderAmount){
 			this.orderAmount = orderAmount;
 		}
 		/**
	     * ��ȡsupplierId
	     */
 		public java.lang.Integer getSupplierId(){
 			return this.supplierId;
 		}
 		
 		/**
	     * ����supplierId
	     */
 		public void setSupplierId(java.lang.Integer supplierId){
 			this.supplierId = supplierId;
 		}
 		/**
	     * ��ȡsupplierName
	     */
 		public java.lang.String getSupplierName(){
 			return this.supplierName;
 		}
 		
 		/**
	     * ����supplierName
	     */
 		public void setSupplierName(java.lang.String supplierName){
 			this.supplierName = supplierName;
 		}
 }