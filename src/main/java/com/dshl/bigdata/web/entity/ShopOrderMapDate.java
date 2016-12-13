package com.dshl.bigdata.web.entity;

import java.util.List;

/**
 * 展示地图需要的参数
 * @author shilinlin
 *
 */
public class ShopOrderMapDate {
	
	
	private String name;
	//经度
	private double longitude;
	//纬度
	private double latitude;
	//商品的销量
	private int value;
	

	public ShopOrderMapDate() {
		super();
		// TODO Auto-generated constructor stub
	}


	public double getLongitude() {
		return longitude;
	}


	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}


	public double getLatitude() {
		return latitude;
	}


	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public int getValue() {
		return value;
	}




	public void setValue(int value) {
		this.value = value;
	}




	@Override
	public String toString() {
		return "ShopOrderMapDate [name=" + name + ", longitude=" + longitude
				+ ", latitude=" + latitude + ", value=" + value + "]";
	}



	

}
