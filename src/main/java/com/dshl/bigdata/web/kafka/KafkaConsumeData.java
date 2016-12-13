package com.dshl.bigdata.web.kafka;

import java.io.IOException;

import kafka.consumer.ConsumerIterator;
import kafka.consumer.KafkaStream;
import kafka.message.MessageAndMetadata;

import com.dshl.bigdata.web.controller.BaseController;
import com.dshl.bigdata.web.websocket.WebSocketTest;

public class KafkaConsumeData implements Runnable {

    protected static org.apache.log4j.Logger log = org.apache.log4j.LogManager
                                                     .getLogger(BaseController.class);
    private KafkaStream<String, String> kafkaStream;


    public KafkaConsumeData(KafkaStream<String, String> kafkaStream) {
    	this.kafkaStream = kafkaStream;
    }

    @Override
    public void run() {
        ConsumerIterator<String, String> iterator = kafkaStream.iterator();
        while (iterator.hasNext()) {
            MessageAndMetadata<String, String> next = iterator.next();

            try {
                if (next.message() != null) {
                    WebSocketTest.send(next.message());
                }
            } catch (IOException e) {
                log.error("collection websocket is error" + next.message());
            }
        }

    }
}