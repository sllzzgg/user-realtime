package com.dshl.bigdata.web.entity;
/**
 * @author shilinlin
 * @version 
 * 创建时间：2016年11月24日 下午1:51:40
 */
public class User {
	private	Integer userId;
	private String userName;
	private String password;
	private Integer roleId;//角色id
	private String roleName;//角色名称
	
	public User() {
		super();
	}
	

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	
}
