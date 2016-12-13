package com.dshl.bigdata.web.kafka;

import java.util.Properties;

import kafka.javaapi.producer.Producer;
import kafka.producer.KeyedMessage;
import kafka.producer.ProducerConfig;

/**
 * 
 *                       
 * @Filename: ProducerDemo.java
 * @Version: 1.0
 * @Author: yangzhanling 杨占岭
 * @Email:  zhanling.yang@ds365.com
 *
 */
public class OrderProducerDemo {

    public static void main(String[] args) throws Exception {

        Properties originalProps = new Properties();
        //broker

        //主题
        String topic = "os";
        //配置zookeeper
        originalProps.put("metadata.broker.list",
            "192.168.2.241:2181,192.168.2.241:2181,192.168.2.241:2181");
        //把数据序列化到broker
        originalProps.put("serializer.class", "kafka.serializer.StringEncoder");
        //  originalProps.put("request.required.acks", "1");
        //新建生产者
        Producer<String, String> producer = new Producer<String, String>(new ProducerConfig(
            originalProps));

        String jsonStr = "{\"userId\":\"" + 1000 + "\",\"orderAmount\":\"" + 200.3 + "\"}";
        //发送消息
        producer.send(new KeyedMessage<String, String>(topic, jsonStr));
        producer.close();
    }

}
