package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.DmWechatUsersCount;
import com.dshl.bigdata.web.entity.KeyWord;
import com.dshl.bigdata.web.entity.ShopRegiondepot;
import com.dshl.bigdata.web.utils.ServiceResult;

public interface KeyWordService {
	
	public int getCount ();
	
	public int getCountByDate();
	
	public List<KeyWord> searchGroupByKeyWord();
	
	public List<ShopRegiondepot> searchShopRegiondepot();
	
	 /**
     * 根据id取得KeyWord对象
     * @param  
     * @return
     */
    public ServiceResult<List<KeyWord>> getKeyWordByDate(Map<String, String> queryMap);   
	
}
