package com.dshl.bigdata.web.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 日常销量分类
 * @author shilinlin
 *
 */
public class DmDailyShopCategory implements Serializable {

    private static final long serialVersionUID = -264584636750741280L;

    private Date              orderDate;
    //种类id
    private java.lang.String  supercategoryId;
    //种类名称
    private java.lang.String  supercategoryName;
    //仓库id
    private java.lang.String  depotId;
    //订单数量
    private java.lang.String  orderCount;
    //订单总量
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
     * 获取supercategoryId
     */
    public java.lang.String getSupercategoryId() {
        return this.supercategoryId;
    }

    /**
     * 设置supercategoryId
     */
    public void setSupercategoryId(java.lang.String supercategoryId) {
        this.supercategoryId = supercategoryId;
    }

    /**
     * 获取supercategoryName
     */
    public java.lang.String getSupercategoryName() {
        return this.supercategoryName;
    }

    /**
     * 设置supercategoryName
     */
    public void setSupercategoryName(java.lang.String supercategoryName) {
        this.supercategoryName = supercategoryName;
    }

    /**
     * 获取depotId
     */
    public java.lang.String getDepotId() {
        return this.depotId;
    }

    /**
     * 设置depotId
     */
    public void setDepotId(java.lang.String depotId) {
        this.depotId = depotId;
    }

    /**
     * 获取orderCount
     */
    public java.lang.String getOrderCount() {
        return this.orderCount;
    }

    /**
     * 设置orderCount
     */
    public void setOrderCount(java.lang.String orderCount) {
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