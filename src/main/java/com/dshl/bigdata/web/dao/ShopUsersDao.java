package com.dshl.bigdata.web.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.ShopUsers;
import com.dshl.bigdata.web.entity.ShopUsersQueryParams;

@Repository
public interface ShopUsersDao {
    int insert(ShopUsers record);

    int insertSelective(ShopUsers record);
    
    List<ShopUsers> selectByParams(ShopUsersQueryParams params);
    
    ShopUsers selectByUserId(int userid);
    
    int selectCount();
}