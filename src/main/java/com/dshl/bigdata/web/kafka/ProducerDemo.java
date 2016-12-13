package com.dshl.bigdata.web.kafka;

import java.util.Properties;
import java.util.Random;

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
public class ProducerDemo {

    public static void main(String[] args) throws Exception {

        Properties originalProps = new Properties();
        //broker
        originalProps.put("metadata.broker.list", "ds3:9092,ds5:9092,ds5:9092");
        //把数据序列化到broker
        originalProps.put("serializer.class", "kafka.serializer.StringEncoder");
        //  originalProps.put("request.required.acks", "1");
        Producer<String, String> producer = new Producer<String, String>(new ProducerConfig(originalProps));
        //    String strs = "11403,11406,11409,11410,11411,11412,11403,11406,11409,11410,11411,11412,11403,11406,11409,11410,11411,11412,11403,11406,11409,11410,11411,11412,11403,11406,11409,11410,11411,11412,11403,11406,11409,11410,11411,11412,,16329,16331,16338,16340,16363,16365,16370,16372,16374,16395,16397,16399,16404,16406,16431,16440,16463,16465,16472,16474,16497,16499,16504,16506,16529,16531,16538,16540";
        String strs = "11403,11406,11409,11410,16399,16404,16406,16431,16440,16463,16465,16472,16474,16497,16499,16504,16506,16529,16531,16538,16540";
        for (int j = 0; j < strs.split(",").length; j++) {
            Thread.sleep(3000);
            String userId = strs.split(",")[j];
            System.out.println("_______________________" + j);

            int price = (new Random().nextInt(500) + 800) + 100;
            String jsonStr = "{\"userId\":\"" + userId + "\",\"orderAmount\":\"" + price + "\"}";
            producer.send(new KeyedMessage<String, String>("u-order", "userId:", jsonStr));
        }
        //producer.send(new KeyedMessage<String, String>("ttt", "userId:", "0000"));
        producer.close();
    }

}
