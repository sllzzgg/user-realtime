package com.dshl.bigdata.web.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.dshl.bigdata.web.entity.DmWechatUsersCount;
import com.dshl.bigdata.web.entity.KeyWord;

@Repository
public interface KeyWordDao {
    int insert(KeyWord record);

    int insertSelective(KeyWord record);
    
    int selectCount();
    
    int selectCountByDate();
    
    List<KeyWord> selectGroupByKeyWord();
    
    List<KeyWord> getKeyWordByDate(@Param("param1") Map<String, String> queryMap);
    
}