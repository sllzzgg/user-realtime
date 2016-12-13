package com.dshl.bigdata.web.entity;

/**
 * 饼图信息
 * @author shilinlin
 *
 * @param <T>
 */
public class PieEharts<T> {

    private String   name;
    private T        value;
    private T y;
    
    public void setY(T y) {
		this.y = y;
	}
    public T getY() {
		return y;
	}

    private Double[] values;

    public void setValues(Double[] values) {
        this.values = values;
    }

    public Double[] getValues() {
        return values;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}
