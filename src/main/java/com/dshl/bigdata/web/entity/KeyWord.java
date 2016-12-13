package com.dshl.bigdata.web.entity;

public class KeyWord {
    private String searchdate;

    private Integer userid;

    private String keyword;

    private Integer searchcount;
    
    /**
     * 访问次数
     */
    private Integer sumNum;

    public String getSearchdate() {
        return searchdate;
    }

    public void setSearchdate(String searchdate) {
        this.searchdate = searchdate == null ? null : searchdate.trim();
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword == null ? null : keyword.trim();
    }

    public Integer getSearchcount() {
        return searchcount;
    }

    public void setSearchcount(Integer searchcount) {
        this.searchcount = searchcount;
    }

	public Integer getSumNum() {
		return sumNum;
	}

	public void setSumNum(Integer sumNum) {
		this.sumNum = sumNum;
	}

	@Override
	public String toString() {
		return "KeyWord [searchdate=" + searchdate + ", userid=" + userid
				+ ", keyword=" + keyword + ", searchcount=" + searchcount
				+ ", sumNum=" + sumNum + "]";
	}
	
    
}