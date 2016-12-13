package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.KeyWordDao;
import com.dshl.bigdata.web.dao.ShopRegiondepotDao;
import com.dshl.bigdata.web.entity.DmWechatUsersCount;
import com.dshl.bigdata.web.entity.KeyWord;
import com.dshl.bigdata.web.entity.ShopRegiondepot;
import com.dshl.bigdata.web.service.KeyWordService;
import com.dshl.bigdata.web.utils.ServiceResult;

@Service
public class KeyWordServiceImpl implements KeyWordService {
	
	@Resource
	private ShopRegiondepotDao regionDao;
	
	@Resource
	private KeyWordDao keyWordDao;

	@Override
	public int getCount() {
		// TODO Auto-generated method stub
		return keyWordDao.selectCount();
	}

	@Override
	public int getCountByDate() {
		// TODO Auto-generated method stub
		return keyWordDao.selectCountByDate();
	}

	@Override
	public List<KeyWord> searchGroupByKeyWord() {
		// TODO Auto-generated method stub
		return keyWordDao.selectGroupByKeyWord();
	}

	@Override
	public List<ShopRegiondepot> searchShopRegiondepot() {
		// TODO Auto-generated method stub
		return regionDao.selectGroupByParentId();
	}

	@Override
	public ServiceResult<List<KeyWord>> getKeyWordByDate(
			Map<String, String> queryMap) {
		 ServiceResult<List<KeyWord>> result = new ServiceResult<List<KeyWord>>();
		 try {
	         result.setResult(keyWordDao.getKeyWordByDate(queryMap));
	     } catch (Exception e) {
	         result.setSuccess(false);
	         result.setMessage("根据id[" + queryMap + "]取得KeyWord对象时出现未知异常");
	         e.printStackTrace();
	     }
		return result;
	}

}
