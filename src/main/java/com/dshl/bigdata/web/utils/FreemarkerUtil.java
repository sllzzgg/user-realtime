package com.dshl.bigdata.web.utils;

import java.text.SimpleDateFormat;


public class FreemarkerUtil {
    private static org.apache.log4j.Logger log = org.apache.log4j.LogManager
                                                   .getLogger(FreemarkerUtil.class);

    /**
     * 将unix时间戳转换为yyyy-MM-dd hh:mm:ss 格式字符串
     * @param unixDate
     * @return
     */
    public static String parseUnixDate(long unixDate) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = "";
        try {
            long unixLong = unixDate * 1000;
            date = sdf.format(unixLong);
        } catch (Exception ex) {
            log.error("unix日期转换发生异常");
            log.error(ex);
        }
        return date;
    }

   

    public static int calTotalPage(int rowsCount, int pageSize) {
        int totalPage = (rowsCount + pageSize - 1) / pageSize;
        return totalPage;
    }

   

    public static int getEndNumForProductPage(PagerInfo pager) {
        int index = pager.getPageIndex();
        int size = pager.getPageSize();
        int total = pager.getRowsCount();
        return Math.min(total, index * size);
    }


  
}
