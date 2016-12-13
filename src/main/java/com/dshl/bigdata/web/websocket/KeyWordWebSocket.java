package com.dshl.bigdata.web.websocket;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/keyWordWebsocket")
public class KeyWordWebSocket {

	private static Map<String, Session> cacheMap = new ConcurrentHashMap<String, Session>();// 缓存容器
	protected static org.apache.log4j.Logger log = org.apache.log4j.LogManager
            .getLogger(KeyWordWebSocket.class);

	
	public KeyWordWebSocket() {
	}

	@OnOpen
	public void onopen(Session session) {
		log.info("连接成功");
		LoadCache(session);
		log.info("cacheMap   size  "+ cacheMap.entrySet().size());
		try {
			session.getBasicRemote().sendText("1");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@OnClose
	public void onclose(Session session) {
		log.info("close....");
		//移除静态map中的数据
		removeCache(session);
	}

	@OnMessage
	public void onsend(Session session, String msg) {
		try {
			session.getBasicRemote().sendText(
					"client" + session.getId() + "say:" + msg);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 装载缓存
	 */
	private void LoadCache(Session session) {

//		this.updateFlag = true;// 正在更新
		/********** 数据处理，将数据放入cacheMap缓存中 **begin ******/
		cacheMap.put(session.getId(), session);
		/********** 数据处理，将数据放入cacheMap缓存中 ***end *******/

//		this.updateFlag = false;// 更新已完成

	}
	
	/**
	 * 装载缓存
	 */
	@SuppressWarnings("unused")
	private void removeCache(Session session) {

//		this.updateFlag = true;// 正在更新
		/********** 数据处理，将数据放入cacheMap缓存中 **begin ******/
		cacheMap.remove(session.getId());
//		cacheMap.put("key2", "value2");
//		cacheMap.put("key3", "value3");
//		cacheMap.put("key4", "value4");
//		cacheMap.put("key5", "value5");
		/********** 数据处理，将数据放入cacheMap缓存中 ***end *******/

//		this.updateFlag = false;// 更新已完成

	}
	
	@SuppressWarnings("unused")
	public static void send(String info) throws IOException{
		/*Iterator<Map.Entry<String,Session>>iters = cacheMap.entrySet().iterator();
		while(iters.hasNext()){
			Map.Entry<String, Session> map = iters.next();
			Session session = map.getValue();
			session.getBasicRemote().sendText(
					"client" + session.getId() + "say:" + msg);
		}*/
		//获取商户信息
//		ShopUsers shopUsers = shopUsersService.getShopUsers(userId);
		//循环map中value
		for(Session session : cacheMap.values()){
			session.getBasicRemote().sendText(info);
		}
		
	}
}
