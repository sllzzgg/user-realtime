package com.dshl.bigdata.web.controller.store;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.dshl.bigdata.web.controller.BaseController;
import com.dshl.bigdata.web.entity.JsonResult;
import com.dshl.bigdata.web.entity.KeyWord;
import com.dshl.bigdata.web.entity.QueryCondtion;
import com.dshl.bigdata.web.entity.ShopRegiondepot;
import com.dshl.bigdata.web.entity.ShopUsers;
import com.dshl.bigdata.web.entity.ShopUsersQueryParams;
import com.dshl.bigdata.web.service.KeyWordService;
import com.dshl.bigdata.web.service.ShopUsersService;
import com.dshl.bigdata.web.utils.JsonResultUtils;
import com.dshl.bigdata.web.utils.ServiceResult;

@Controller
@Scope("prototype")
@RequestMapping("/distribution")
public class ShopUsersController extends BaseController {

    @Autowired
    private ShopUsersService shopUsersService;

    @Autowired
    private KeyWordService   keyWordService;

	@RequestMapping(value = "")
	@ResponseBody
	public ModelAndView toStoreDistribution() {
		ModelAndView view = new ModelAndView("realTime/user-distribution");
		// 插入html中需要显示的数据 地图数据 需要通过异步加载
		return view;
	}

    @RequestMapping(value = "/keyWord")
    @ResponseBody
    public ModelAndView toKeyWord() {
        ModelAndView view = new ModelAndView("realTime/user-keyword");

        int userCnt = shopUsersService.getCount();
        int keyWordCnt = keyWordService.getCount();
        int keyWordDateCnt = keyWordService.getCountByDate();
        List<KeyWord> keyWords = keyWordService.searchGroupByKeyWord();
        view.addObject("userCnt", userCnt).addObject("keyWordCnt", keyWordCnt)
            .addObject("keyWordDateCnt", keyWordDateCnt).addObject("keyWords", keyWords);
        return view;
    }

    @RequestMapping(value = "/serach")
    @ResponseBody
    public JsonResult<List<ShopUsers>> serachByParams(ShopUsersQueryParams params) {
        List<ShopUsers> list = shopUsersService.searchByParams(params);

        return JsonResultUtils.createJsonResult(list);
    }

    @RequestMapping(value = "/serachById")
    @ResponseBody
    public JsonResult<ShopUsers> serachById(int userId) {
        try {
            ShopUsers shopUsers = shopUsersService.getShopUsers(userId);
            
            return JsonResultUtils.createJsonResult(shopUsers);
        } catch (Exception e) {
            return JsonResultUtils.createJsonResult(null, false, "用户不存在");
        }

    }

    @RequestMapping(value = "/serachKeyWordGroupByProvice")
    @ResponseBody
    public JsonResult<List<ShopRegiondepot>> serachKeyWordGroupByProvice() {
        List<ShopRegiondepot> keyWords = keyWordService.searchShopRegiondepot();
        return JsonResultUtils.createJsonResult(keyWords);
    }

    @RequestMapping(value = "/word")
    public String getOrderCount(HttpServletRequest request, HttpServletResponse response,
                                String startDate, String endDate, Map<String, Object> dataMap) {
        Map<String, String> queryMap = new HashMap<String, String>();
        queryMap.put("startDate", startDate);
        queryMap.put("endDate", endDate);

        QueryCondtion condtion = new QueryCondtion();
        condtion.setStartDate(startDate);
        condtion.setEndDate(endDate);

        ServiceResult<List<KeyWord>> service = keyWordService.getKeyWordByDate(queryMap);
        List<KeyWord> result = service.getResult();
        dataMap.put("keywords", result);
        dataMap.put("condtion", condtion);
        return "realTime/keyword";
    }

}
