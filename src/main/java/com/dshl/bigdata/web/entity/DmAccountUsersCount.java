package com.dshl.bigdata.web.entity;

import java.io.Serializable;
import java.util.Date;
public class DmAccountUsersCount implements Serializable {
 
 	/**
     *Comment for <code>serialVersionUID</code>
     */
 	private static final long serialVersionUID                    = -264584636750741280L;
 	
 		
 		private Date createDate;  
 		
 		
 		private java.lang.Integer totalCount;  
 		
 		
 		private java.lang.Integer registerCount;  
 		
 		
 		private java.lang.Integer freezeCount;  
 		
 		
 		private java.lang.Integer activateCount;  
 		
 		
 		private java.lang.Integer regionCityId;  
 		
 		
 		private java.lang.Integer sourceType;  
 		
 	
 		/**
	     * ��ȡcreateDate
	     */
 		public Date getCreateDate(){
 			return this.createDate;
 		}
 		
 		/**
	     * ����createDate
	     */
 		public void setCreateDate(Date createDate){
 			this.createDate = createDate;
 		}
 		/**
	     * ��ȡtotalCount
	     */
 		public java.lang.Integer getTotalCount(){
 			return this.totalCount;
 		}
 		
 		/**
	     * ����totalCount
	     */
 		public void setTotalCount(java.lang.Integer totalCount){
 			this.totalCount = totalCount;
 		}
 		/**
	     * ��ȡregisterCount
	     */
 		public java.lang.Integer getRegisterCount(){
 			return this.registerCount;
 		}
 		
 		/**
	     * ����registerCount
	     */
 		public void setRegisterCount(java.lang.Integer registerCount){
 			this.registerCount = registerCount;
 		}
 		/**
	     * ��ȡfreezeCount
	     */
 		public java.lang.Integer getFreezeCount(){
 			return this.freezeCount;
 		}
 		
 		/**
	     * ����freezeCount
	     */
 		public void setFreezeCount(java.lang.Integer freezeCount){
 			this.freezeCount = freezeCount;
 		}
 		/**
	     * ��ȡactivateCount
	     */
 		public java.lang.Integer getActivateCount(){
 			return this.activateCount;
 		}
 		
 		/**
	     * ����activateCount
	     */
 		public void setActivateCount(java.lang.Integer activateCount){
 			this.activateCount = activateCount;
 		}
 		/**
	     * ��ȡregionCityId
	     */
 		public java.lang.Integer getRegionCityId(){
 			return this.regionCityId;
 		}
 		
 		/**
	     * ����regionCityId
	     */
 		public void setRegionCityId(java.lang.Integer regionCityId){
 			this.regionCityId = regionCityId;
 		}
 		/**
	     * ��ȡsourceType
	     */
 		public java.lang.Integer getSourceType(){
 			return this.sourceType;
 		}
 		
 		/**
	     * ����sourceType
	     */
 		public void setSourceType(java.lang.Integer sourceType){
 			this.sourceType = sourceType;
 		}
 }