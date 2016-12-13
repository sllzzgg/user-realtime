package com.dshl.bigdata.web.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.ShopRegiondepotDao;
import com.dshl.bigdata.web.dao.ShopUsersDao;
import com.dshl.bigdata.web.entity.ShopRegiondepot;
import com.dshl.bigdata.web.entity.ShopUsers;
import com.dshl.bigdata.web.entity.ShopUsersQueryParams;
import com.dshl.bigdata.web.service.ShopUsersService;

@Service
public class ShopUsersServiceImpl implements ShopUsersService{
	
	@Resource
	private ShopUsersDao shopUsersDao;
	
	@Resource
	private ShopRegiondepotDao shopRegiondepotDao;

	@Override
	public List<ShopUsers> searchByParams(ShopUsersQueryParams params) {
		// TODO Auto-generated method stub
		return shopUsersDao.selectByParams(params);
	}

	@Override
	public ShopUsers getShopUsers(int userId) {
		// TODO Auto-generated method stub
		ShopUsers shopUsers = shopUsersDao.selectByUserId(userId);
		ShopRegiondepot shopRegiondepot = shopRegiondepotDao.selectByRegionID(shopUsers.getRegionId());
		shopUsers.setRegionName(shopRegiondepot.getRegionname());
		shopUsers.setParentName(shopRegiondepot.getParentName());
		
		if (shopUsers.getLatitude() == null || shopUsers.getLatitude() == 0) {
			shopUsers.setLatitude(Double.parseDouble(shopRegiondepot.getLatitude()+""));
		}
		
		if (shopUsers.getLongitude() == null || shopUsers.getLongitude() == 0) {
			shopUsers.setLongitude(Double.parseDouble(shopRegiondepot.getLongitude()+""));
		}
		
		return shopUsers;
	}

	@Override
	public int getCount() {
		// TODO Auto-generated method stub
		return shopUsersDao.selectCount();
	}

}
