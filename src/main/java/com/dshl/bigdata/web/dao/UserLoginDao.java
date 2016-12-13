package com.dshl.bigdata.web.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.User;



/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 下午2:01:13
 */
@Repository
public interface UserLoginDao {

	User getUserByUserName(@Param("userName") String userName);

}
