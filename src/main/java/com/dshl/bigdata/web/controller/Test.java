package com.dshl.bigdata.web.controller;

public class Test {

	public static void main(String[] args) {
		 java.text.DecimalFormat   df   =new  java.text.DecimalFormat("#.00"); 
		 //String parseDouble = df.format("500.1234").toString();
		 System.err.println(Double.parseDouble(String.format("%.2f", "500.1234")));
	}
}
