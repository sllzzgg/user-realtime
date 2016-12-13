package com.dshl.bigdata.web.kafka;

import java.io.IOException;

import org.apache.commons.lang.StringUtils;

import kafka.consumer.ConsumerIterator;
import kafka.consumer.KafkaStream;
import kafka.message.MessageAndMetadata;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.dshl.bigdata.web.controller.BaseController;
import com.dshl.bigdata.web.websocket.KeyWordWebSocket;
import com.dshl.bigdata.web.websocket.WebSocketTest;

public class KafkaKeywordConsumeData implements Runnable {
	protected static org.apache.log4j.Logger log = org.apache.log4j.LogManager
			.getLogger(BaseController.class);

	public KafkaKeywordConsumeData(KafkaStream<String, String> kafkaStream) {
		this.kafkaStream = kafkaStream;
	}

	private KafkaStream<String, String> kafkaStream;

	@Override
	public void run() {
		ConsumerIterator<String, String> iterator = kafkaStream.iterator();
		while (iterator.hasNext()) {
			MessageAndMetadata<String, String> next = iterator.next();

			try {
				if (!StringUtils.isBlank(next.message())) {
					System.out.print(next.message());
					String jsonMessage = next.message().substring(next.message().lastIndexOf("{"));
					   JSONObject parseObject = JSON.parseObject(jsonMessage);
					   System.out.println(parseObject);
						      String userId = String.valueOf(parseObject.get("userId"));
						      String keyword = String.valueOf(parseObject.get("keyword"));
						      
						      //测试用
						      if (userId == null || userId.equals("null")) {
								userId = 11412+"";
						      }
						      if ("null".equals(keyword)) {
								keyword = null;
							}
						      
						      if (!StringUtils.isBlank(keyword)) {
								
						    	  String jsonStr = "{\"userId\":\""+userId+"\",\"keyword\":\""+keyword+"\"}";
						    	  if(!StringUtils.isBlank(userId) || !"0".equals(userId)){
						    		  KeyWordWebSocket.send(jsonStr);
//						    	  WebSocketTest.send(userId + "-" + keyword);
//						    	  WebSocketTest.send("北京");
						    	  }
							}
				}
			} catch (IOException e) {
				log.error("collection websocket is error" + next.message());
			}
		}

	}
}