package com.dshl.bigdata.web.utils;

import java.lang.reflect.Type;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

public final class JsonUtil {
    private static Logger log = LogManager.getLogger(JsonUtil.class);

    public static final <T> T fromJson(String json) {
        if (StringUtils.isBlank(json))
            return null;
        try {
            Type type = new TypeToken() {
            }.getType();

            Gson gson = new Gson();
            return gson.fromJson(json, type);
        } catch (Exception e) {
            log.warn("Invalidate json format:" + json, e);
        }
        return null;
    }

    public static final String toJson(Object obj) {
        if (obj == null)
            return null;
        try {
            GsonBuilder gb = new GsonBuilder();
            gb.setDateFormat("yyyy-MM-dd HH:mm:ss");
            return gb.create().toJson(obj);
        } catch (Exception e) {
            log.warn("Can not serialize object to json", e);
        }
        return null;
    }

}
