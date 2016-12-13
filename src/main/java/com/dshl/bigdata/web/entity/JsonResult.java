package com.dshl.bigdata.web.entity;

import java.io.Serializable;

/**
 * 
 * @author wmb
 *
 * @param <T>
 */
public class JsonResult<T> implements Serializable {

    private static final long serialVersionUID = 6801108691770557253L;
    private boolean success = true;
    private T data;//数据
    public String message;

    public JsonResult() {
    }

    public JsonResult(T data, Boolean success, String message) {
        this.data = data;
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }


    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public static <T> JsonResult<T> newResult() {

        return new JsonResult<T>();
    }
}
