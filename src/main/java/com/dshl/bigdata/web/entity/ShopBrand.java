package com.dshl.bigdata.web.entity;

public class ShopBrand {
	//商品品牌id
	private Integer brandId;
	
	//商品品牌Name
	private String brandName;

	public ShopBrand() {
	
	
	}

	public Integer getBrandId() {
		return brandId;
	}

	public void setBrandId(Integer brandId) {
		this.brandId = brandId;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	@Override
	public String toString() {
		return "ShopBrand [brandId=" + brandId + ", brandName=" + brandName
				+ "]";
	}
	
	

}
