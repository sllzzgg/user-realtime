package com.dshl.bigdata.web.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dshl.bigdata.web.dao.DmDailyOrderGiftrecordDao;
import com.dshl.bigdata.web.entity.Giftrecord;
import com.dshl.bigdata.web.service.DmDailyOrderGiftrecordService;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月21日 上午10:08:56
 */
@Service
public class DmDailyOrderGiftrecordServiceImpl implements DmDailyOrderGiftrecordService {
	
	private Integer start;
	private Integer size;
	
	@Autowired
	private DmDailyOrderGiftrecordDao dmDailyOrderGiftrecordDao;
	
	@Override
	public ServiceResult<List<Giftrecord>> getGiftrecord(Map<String, Object> queryMap) {
		
		ServiceResult<List<Giftrecord>> result = new ServiceResult<>();
		
		try {
			PagerInfo pager = (PagerInfo) queryMap.get("pager");
			pager.setRowsCount(dmDailyOrderGiftrecordDao.getGiftrecordCount(queryMap));
			result.setResult(dmDailyOrderGiftrecordDao.getGiftrecord(queryMap));
			result.setPager(pager);
		} catch (Exception e) {
			result.setSuccess(false);
            result.setMessage("赠品出现未知异常");
            e.printStackTrace();
			
		}
		return result;
	}

}
