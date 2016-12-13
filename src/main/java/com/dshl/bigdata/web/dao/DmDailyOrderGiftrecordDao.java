package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.Giftrecord;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月21日 上午10:29:00
 */
@Repository
public interface DmDailyOrderGiftrecordDao {

	int getGiftrecordCount(@Param("param") Map<String, Object> queryMap);

	List<Giftrecord> getGiftrecord(@Param("param") Map<String, Object> queryMap);

}
