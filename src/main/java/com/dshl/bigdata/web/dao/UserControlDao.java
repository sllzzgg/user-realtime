package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.User;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 下午4:22:54
 */
@Repository
public interface UserControlDao {

	int getUserListCount(@Param("param") Map<String, Object> queryMap);

	List<User> getUserList(@Param("param") Map<String, Object> queryMap);

}
