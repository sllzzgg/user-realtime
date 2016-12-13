package com.dshl.bigdata.web.utils;

import java.io.Serializable;

import com.dshl.bigdata.web.exception.ArgumentException;

public class PagerInfo implements Serializable {
    private static final long serialVersionUID = 506758020097476778L;

    //分页第几页
    private int               pageIndex        = 1;

    //分页的最大页数
    private int               pageSize         = 10;

    //总的记录数
    private int               rowsCount        = 0;
    private int start;

    public PagerInfo() {
    }

    public PagerInfo(int pageIndex) {
        if (pageIndex <= 0)
            throw new ArgumentException("分页信息错误，page index必须从1开始递增");
        if (pageSize <= 0)
            throw new ArgumentException("分页信息错误，page size必须大于0");
        this.pageIndex = pageIndex;
    }
    public PagerInfo(int pageSize, int pageIndex) {
        if (pageIndex <= 0)
            throw new ArgumentException("分页信息错误，page index必须从1开始递增");
        if (pageSize <= 0)
            throw new ArgumentException("分页信息错误，page size必须大于0");
        this.pageIndex = pageIndex;
        this.pageSize = pageSize;
    }

    public int getPageIndex() {
        return this.pageIndex;
    }

    public int getStart() {
        return (this.pageIndex - 1) * this.pageSize;
    }

    public int getPageSize() {
        return this.pageSize;
    }

    public int getRowsCount() {
        return this.rowsCount;
    }

    public void setRowsCount(int rowsCount) {
        this.rowsCount = rowsCount;
    }

	@Override
	public String toString() {
		return "PagerInfo [pageIndex=" + pageIndex + ", pageSize=" + pageSize
				+ ", rowsCount=" + rowsCount + ", start=" + start + "]";
	}

 

}