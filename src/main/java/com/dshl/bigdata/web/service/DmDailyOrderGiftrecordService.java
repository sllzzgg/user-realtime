package com.dshl.bigdata.web.service;

import java.util.List;
import java.util.Map;

import com.dshl.bigdata.web.entity.Giftrecord;
import com.dshl.bigdata.web.utils.ServiceResult;

/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月21日 上午10:07:33
 */
public interface DmDailyOrderGiftrecordService {

	ServiceResult<List<Giftrecord>> getGiftrecord(Map<String, Object> queryMap);

}
