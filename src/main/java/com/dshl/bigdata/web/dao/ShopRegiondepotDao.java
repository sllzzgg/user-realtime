package com.dshl.bigdata.web.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.ShopRegiondepot;

@Repository
public interface ShopRegiondepotDao {
    int insert(ShopRegiondepot record);

    int insertSelective(ShopRegiondepot record);
    
    ShopRegiondepot selectByRegionID(int regionid);
    
    List<ShopRegiondepot> selectGroupByParentId();
    
}