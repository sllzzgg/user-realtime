package com.dshl.bigdata.web.kafka;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import kafka.consumer.Consumer;
import kafka.consumer.ConsumerConfig;
import kafka.consumer.KafkaStream;
import kafka.javaapi.consumer.ConsumerConnector;
import kafka.serializer.StringDecoder;
import kafka.utils.VerifiableProperties;

import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

/**
 * 
 *                       
 * @Filename: KafkaConsumer.java
 * @Version: 1.0
 * @Author: yangzhanling 杨占岭
 * @Email:  zhanling.yang@ds365.com
 *
 */
public class KafkaConsumerListener implements ApplicationListener<ContextRefreshedEvent> {

    private void doConsumerRunner(String topic,int topicType) {
        //准备配置信息
        Properties prop = new Properties();
        try {
            prop.load(KafkaConsumerListener.class.getClassLoader().getResourceAsStream(
                "consumer.properties"));
        } catch (IOException e) {
            System.out.print("read properties error");
        }

        //创建消费者连接对象
        ConsumerConnector consumerConnector = Consumer
            .createJavaConsumerConnector(new ConsumerConfig(prop));

        Map<String, Integer> topicCountMap = new HashMap<>();
        topicCountMap.put(topic, 2);
        //根据topic和消费的数目创建消费流。
        StringDecoder keyDecoder = new StringDecoder(new VerifiableProperties());
        StringDecoder valueDecoder = new StringDecoder(new VerifiableProperties());
        Map<String, List<KafkaStream<String, String>>> topicMessageStreams = consumerConnector
            .createMessageStreams(topicCountMap, keyDecoder, valueDecoder);

        //获取topic为hello的流的list 这里的消费流数和topicmap里的一致
        List<KafkaStream<String, String>> kafkaStreams = topicMessageStreams.get(topic);

        //根据消费者个数创建线程进行消费消息
        for (KafkaStream<String, String> kafkaStream : kafkaStreams) {
        	if (topicType == 1) {
        		new Thread(new KafkaConsumeData(kafkaStream)).start();
			}
        	if (topicType == 2) {
        		new Thread(new KafkaKeywordConsumeData(kafkaStream)).start();
			}
        }

    }
    private void doUserOrderConsumerRunner() {
    	 String topic = "u-order";
       doConsumerRunner(topic, 1);

    }
    private void doKeywordConsumerRunner() {
        String topic = "u-keyword";
       doConsumerRunner(topic, 2);

    }
    
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
    	doUserOrderConsumerRunner();
    	doKeywordConsumerRunner();
        System.out.println("doConsumerRunner() is revoke");
    }
}
