package com.dshl.bigdata.web.entity;

import java.io.Serializable;

public class QueryCondtion implements Serializable {

    /**
     *Comment for <code>serialVersionUID</code>
     */
    private static final long serialVersionUID = -465441304967743650L;

    private String  startDate;
    private String  endDate;
    //仓库id
    private Integer  depotId;
    //品牌id
    private Integer  brandId;
    //商品编号
    private String productSku;
    //优惠券类型
    private String couponType;
    //城市Id
    private Integer cityId;
    //你月日选择
    private String dateRad;
    
   
	public QueryCondtion() {
	
	}

	
	public String getDateRad() {
		return dateRad;
	}


	public void setDateRad(String dateRad) {
		this.dateRad = dateRad;
	}


	public Integer getCityId() {
		return cityId;
	}


	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}


	public String getCouponType() {
		return couponType;
	}


	public void setCouponType(String couponType) {
		this.couponType = couponType;
	}


	public String getProductSku() {
		return productSku;
	}

	public void setProductSku(String productSku) {
		this.productSku = productSku;
	}

	public Integer getDepotId() {
		return depotId;
	}

	public void setDepotId(Integer depotId) {
		if(depotId==null){
			depotId=0;
		}
		
		this.depotId = depotId;
	}

	public Integer getBrandId() {
		return brandId;
	}

	public void setBrandId(Integer brandId) {
		if(brandId==null){
			brandId=0;
		}
		this.brandId = brandId;
	}

	public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }


}
