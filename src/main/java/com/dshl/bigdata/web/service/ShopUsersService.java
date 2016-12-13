package com.dshl.bigdata.web.service;

import java.util.List;

import com.dshl.bigdata.web.entity.ShopUsers;
import com.dshl.bigdata.web.entity.ShopUsersQueryParams;

public interface ShopUsersService {
	
	public List<ShopUsers> searchByParams(ShopUsersQueryParams params);
	
	public ShopUsers getShopUsers(int userId);
	
	public int getCount();
	
}
