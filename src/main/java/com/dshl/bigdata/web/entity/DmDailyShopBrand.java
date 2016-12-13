package com.dshl.bigdata.web.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * <p>Table: <strong>dm_daily_shop_brand</strong>
 * <p><table class="er-mapping" cellspacing=0 cellpadding=0 style="border:solid 1 #666;padding:3px;">
 *   <tr style="background-color:#ddd;Text-align:Left;">
 *     <th nowrap>属性名</th><th nowrap>属性类型</th><th nowrap>字段名</th><th nowrap>字段类型</th><th nowrap>说明</th>
 *   </tr>
 *   <tr><td>orderDate</td><td>{@link java.lang.String}</td><td>order_date</td><td>varchar</td><td>orderDate</td></tr>
 *   <tr><td>brandId</td><td>{@link java.lang.Integer}</td><td>brand_id</td><td>int</td><td>brandId</td></tr>
 *   <tr><td>brandName</td><td>{@link java.lang.String}</td><td>brand_name</td><td>varchar</td><td>brandName</td></tr>
 *   <tr><td>depotId</td><td>{@link java.lang.Integer}</td><td>depot_id</td><td>int</td><td>depotId</td></tr>
 *   <tr><td>orderCount</td><td>{@link java.lang.Integer}</td><td>order_count</td><td>int</td><td>orderCount</td></tr>
 *   <tr><td>orderaMount</td><td>{@link java.lang.String}</td><td>ordera_mount</td><td>varchar</td><td>orderaMount</td></tr>
 * </table>
 *
 */
public class DmDailyShopBrand implements Serializable {

    /**
     *Comment for <code>serialVersionUID</code>
     */
    private static final long serialVersionUID = -264584636750741280L;

    private Date              orderDate;

    private java.lang.Integer brandId;

    private java.lang.String  brandName;

    private java.lang.Integer depotId;

    private java.lang.Integer orderCount;

    private java.lang.String  orderaMount;

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
     * 获取brandId
     */
    public java.lang.Integer getBrandId() {
        return this.brandId;
    }

    /**
     * 设置brandId
     */
    public void setBrandId(java.lang.Integer brandId) {
        this.brandId = brandId;
    }

    /**
     * 获取brandName
     */
    public java.lang.String getBrandName() {
        return this.brandName;
    }

    /**
     * 设置brandName
     */
    public void setBrandName(java.lang.String brandName) {
        this.brandName = brandName;
    }

    /**
     * 获取depotId
     */
    public java.lang.Integer getDepotId() {
        return this.depotId;
    }

    /**
     * 设置depotId
     */
    public void setDepotId(java.lang.Integer depotId) {
        this.depotId = depotId;
    }

    /**
     * 获取orderCount
     */
    public java.lang.Integer getOrderCount() {
        return this.orderCount;
    }

    /**
     * 设置orderCount
     */
    public void setOrderCount(java.lang.Integer orderCount) {
        this.orderCount = orderCount;
    }

    /**
     * 获取orderaMount
     */
    public java.lang.String getOrderaMount() {
        return this.orderaMount;
    }

    /**
     * 设置orderaMount
     */
    public void setOrderaMount(java.lang.String orderaMount) {
        this.orderaMount = orderaMount;
    }
}