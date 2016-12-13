package com.dshl.bigdata.web.utils;

import com.dshl.bigdata.web.entity.JsonResult;

/**
 * 
 * @author cj
 *
 */
public class JsonResultUtils {

	private static final String DEFAULT_MESSAGE = "OK";
	private static final String DEFAULT_MESSAGE_FAIL = "FAIL";

	public static <T> JsonResult<T> createJsonResult(T data) {
		JsonResult<T> temResult = new JsonResult<T>();
		temResult.setData(data);
		temResult.setMessage(DEFAULT_MESSAGE);
		return temResult;
	}

	public static <T> JsonResult<T> createJsonResult(T data, boolean isSuccess) {
		JsonResult<T> temResult = new JsonResult<T>();
		temResult.setData(data);
		temResult.setSuccess(isSuccess);
		temResult.setMessage(DEFAULT_MESSAGE);
		return temResult;
	}

	public static <T> JsonResult<T> createJsonResult(T data, boolean isSuccess, String msg) {
		JsonResult<T> temResult = new JsonResult<T>();
		temResult.setData(data);
		temResult.setSuccess(isSuccess);
		temResult.setMessage(msg);
		return temResult;
	}

	public static <T> JsonResult<T> createJsonResult(T data, String msg) {
		JsonResult<T> temResult = new JsonResult<T>();
		temResult.setData(data);
		temResult.setSuccess(true);
		temResult.setMessage(DEFAULT_MESSAGE_FAIL);
		return temResult;
	}
}
