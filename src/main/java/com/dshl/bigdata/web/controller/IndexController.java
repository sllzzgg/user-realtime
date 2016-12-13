package com.dshl.bigdata.web.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.dshl.bigdata.web.entity.DmAccountUsersCount;
import com.dshl.bigdata.web.entity.DmDailyShopOrdersCount;
import com.dshl.bigdata.web.entity.PieEharts;
import com.dshl.bigdata.web.service.DmAccountUsersCountService;
import com.dshl.bigdata.web.service.DmDailyShopCategoryService;
import com.dshl.bigdata.web.service.DmDailyShopOrdersCountService;
import com.dshl.bigdata.web.utils.DateUtil;
import com.dshl.bigdata.web.utils.JsonUtil;
import com.dshl.bigdata.web.utils.PagerInfo;
import com.dshl.bigdata.web.utils.ServiceResult;
import com.dshl.bigdata.web.websocket.WebSocketTest;
import com.dshl.commons.utlis.DateUtils;

@Controller
@RequestMapping("")
public class IndexController extends BaseController {

	// private static final Logger LOGGER =
	// LoggerFactory.getLogger(IndexController.class);

	@Autowired
	private DmDailyShopCategoryService dmDailyShopCategoryService;

	@Autowired
	private DmDailyShopOrdersCountService dmDailyShopOrdersCountService;

	@Autowired
	private DmAccountUsersCountService dmAccountUsersCountService;

	@RequestMapping(value = "/home")
	public String index(HttpServletRequest request,
			HttpServletResponse response, Map<String, Object> dataMap) {

		HashMap<String, Object> queryMap = new HashMap<String, Object>();
		String sPageNo = request.getParameter("pindex");
		if(StringUtils.isBlank(sPageNo)){
			sPageNo="1";
		}
		
		PagerInfo pager = new PagerInfo(Integer.parseInt(sPageNo));
		
		queryMap.put("pager", pager);
		ServiceResult<List<DmDailyShopOrdersCount>> orderDateService = dmDailyShopOrdersCountService
				.getByOrderDate(queryMap);

		List<DmDailyShopOrdersCount> result = orderDateService.getResult();
		StringBuffer orderDate = new StringBuffer();
		StringBuffer orderamout = new StringBuffer();
		StringBuffer orderQuantity = new StringBuffer();
		StringBuffer cancelorderQuantity = new StringBuffer();

		for (int i = 0; i < result.size(); i++) {
			DmDailyShopOrdersCount ct = result.get(i);
			orderDate.append(DateUtils.dateToString(ct.getOrderDate(),
					"yyyy-MM-dd"));
			orderamout.append(ct.getOrderAmount());
			orderQuantity.append(ct.getOrderQuantity());
			cancelorderQuantity.append(ct.getCancelOrderQuantity());
			if (result.size() - 1 != i) {
				orderDate.append(",");
				orderamout.append(",");
				orderQuantity.append(",");
				cancelorderQuantity.append(",");
			}
		}
		dataMap.put("orderdate", orderDate);
		dataMap.put("orderamout", orderamout);

		dataMap.put("orderQuantity", orderQuantity);
		dataMap.put("cancelorderQuantity", cancelorderQuantity);

		dataMap.put("ordercount", result.get(0));

		Map<String, String> queryDateMap = new HashMap<String, String>();
		queryDateMap.put("startDate", DateUtil.getYesterday());
		queryDateMap.put("endDate", DateUtil.getYesterday());

		ServiceResult<Integer> userCount = dmAccountUsersCountService
				.getByDate(queryDateMap);
		
		if (userCount.getSuccess() && userCount.getResult() == null) {
			userCount.setResult(0);
		}
		ServiceResult<List<DmAccountUsersCount>> dmAccountUsersCountResult = dmAccountUsersCountService
				.findDmAccountUsersCount();

		int totalUsers = 0;
		if (dmAccountUsersCountResult.getSuccess()
				&& dmAccountUsersCountResult.getResult().size() > 0) {
			List<DmAccountUsersCount> counts = dmAccountUsersCountResult
					.getResult();
			for (DmAccountUsersCount dmAccountUsersCount : counts) {
				totalUsers += dmAccountUsersCount.getRegisterCount();
			}
		}

		List<PieEharts> eharts = new ArrayList<PieEharts>();
		List<DmAccountUsersCount> dCounts = dmAccountUsersCountResult
				.getResult();
		for (DmAccountUsersCount ds : dCounts) {
			PieEharts pieEharts = new PieEharts();
			if (ds.getSourceType() == null) {
				//ds.setSourceType(1);
				continue;
			}

			pieEharts.setName(getSourceName(ds.getSourceType()));
			pieEharts.setY(ds.getRegisterCount());
			eharts.add(pieEharts);
		}

		String piejson = JsonUtil.toJson(eharts);
		dataMap.put("piejson", piejson);
		dataMap.put("sum_register", userCount.getResult());
		dataMap.put("totalUsers", totalUsers);
		return "login/home";
	}

	@RequestMapping(value = "chart")
	public String chart(HttpServletRequest request,
			HttpServletResponse response, ModelMap map) {
		// String result = null;
		return "charts";
	}

	@RequestMapping(value = "table")
	public String table(HttpServletRequest request,
			HttpServletResponse response, ModelMap map) {
		// String result = null;
		return "pages-table";
	}

	@RequestMapping(value = "login")
	@ResponseBody
	public ModelAndView login(HttpServletRequest request) {
		ModelAndView view = new ModelAndView("dashboard2");
		view.addObject("userName", "cj");
		return view;
	}

	@RequestMapping(value = "store")
	@ResponseBody
	public ModelAndView store(HttpServletRequest request) {
		ModelAndView view = new ModelAndView("storeDistribution");
		view.addObject("userName", "cj");
		return view;
	}

	@RequestMapping(value = "keyWord")
	@ResponseBody
	public ModelAndView keyWord(HttpServletRequest request) {
		ModelAndView view = new ModelAndView("store/keyword");
		view.addObject("userName", "cj");
		return view;
	}

	@RequestMapping(value = "show")
	@ResponseBody
	public ModelAndView show(HttpServletRequest request) {
		ModelAndView view = new ModelAndView("show");
		view.addObject("userName", "cj");
		return view;
	}

	@RequestMapping(value = "send")
	@ResponseBody
	public void send(HttpServletResponse response, HttpServletRequest request,
			int userName) {
		try {
			System.out.println(userName);
			String info = "";
			if (userName == 1) {
				info = "北京";
			} else if (userName == 2) {
				info = "河南";
			} else {
				info = "上海";
			}
			request.setCharacterEncoding("utf-8");
			WebSocketTest.send(info);
			System.out.println("33333333333");
			PrintWriter out = response.getWriter();
			out.write("88885555");
		} catch (IOException e) {
			// TODO Auto-generated catch block 
			e.printStackTrace();
		}
	}

	private String getSourceName(int type) {
		String typeName = "";
		switch (type) {
		case 1:
			typeName = "PC注册";
			break;
		case 2:
			typeName = "微信注册";
			break;
		case 3:
			typeName = "订货宝注册";
			break;
		case 4:
			typeName = "400注册";
			break;
		default:
			typeName = "其他";
			break;
		}
		return typeName;
	}

}