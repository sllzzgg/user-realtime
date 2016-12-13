package com.dshl.bigdata.web.utils;

import java.io.Serializable;

public class ServiceResult<T> implements Serializable {
    private static final long serialVersionUID = 3765720967319047788L;
    private T                 result;
    private T 				  dataList;
    private PagerInfo         pagerInfo;
    private boolean           success          = true;
    private String            message          = "";
    private String            code             = "";
    

    public T getDataList() {
		return dataList;
	}

	public void setDataList(T dataList) {
		this.dataList = dataList;
	}

	public boolean getSuccess() {
        return this.success;
    }

    public void setSuccess(boolean isSuccess) {
        this.success = isSuccess;
    }

    public void setResult(T result) {
        this.result = result;
    }

    public void setError(String code, String message) {
        this.code = code;
        this.message = message;
        this.success = false;
    }

    public String getCode() {
        return this.code;
    }

    public T getResult() {
        return this.result;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String value) {
        this.message = value;
    }

    public PagerInfo getPager() {
        return this.pagerInfo;
    }

    public void setPager(PagerInfo pager) {
        this.pagerInfo = pager;
    }

	@Override
	public String toString() {
		return "ServiceResult [result=" + result + ", dataList=" + dataList
				+ ", pagerInfo=" + pagerInfo + ", success=" + success
				+ ", message=" + message + ", code=" + code + "]";
	}

}
