package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.DmAccountUsersCount;

@Repository
/**
 * 
 *                       
 * @Filename: DmAccountUsersCountDao.java
 * @Version: 1.0
 * @Author: yangzhanling 杨占岭
 * @Email: yangzhanling@ds365.com
 *
 */
public interface DmAccountUsersCountDao {

    Integer getByDate(@Param("param") Map<String, String> queryMap);

    List<DmAccountUsersCount> findDmAccountUsersCount();

    //按日查询商户注册数量
    List<DmAccountUsersCount> findDmAccountUsers(@Param("param") Map<String, Object> queryMap);

    //按月查询数据集合
	int findDmAccountUsersCount2(@Param("param") Map<String, Object> queryMap);

	//按月查询数量
	int findDmAccountUsersCountByMonth(@Param("param") Map<String, Object> queryMap);

	//按月查询数集合
	List<DmAccountUsersCount> findDmAccountUsersByMonth(@Param("param") Map<String, Object> queryMap);
}