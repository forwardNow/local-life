/* 美食
网址：
  http://meishi.meituan.com/
  http://meishi.meituan.com/i/?ci=57&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1

API：
  http://meishi.meituan.com/i/api/channel/deal/list

注意：

  可以切换为移动端设备

解析：

  var response = {};

  var result = (response).data.poiList.poiInfos.map((item) => {
    const {
      name,     // "土得土鱼头泡饭-宴（百瑞景店）",
      cateName, // "湖北菜",
      frontImg, // "//p0.meituan.net/biztone/1584591297_1685636483496.jpeg",
      areaName, // "丁字桥/石牌岭",
      distance, // "<100m"
    } = item;

    return {
      name,
      cateName,
      frontImg: 'http:' + frontImg,
      areaName,
      distance,
    }
  })

  console.log(JSON.stringify(result, null, 2));
 */
export const foodShopList = [
  {
    "name": "土得土鱼头泡饭-宴（百瑞景店）",
    "cateName": "湖北菜",
    "frontImg": "http://p0.meituan.net/biztone/1584591297_1685636483496.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "<100m"
  },
  {
    "name": "老乡鸡（武汉百瑞景店）",
    "cateName": "快餐简餐",
    "frontImg": "http://p0.meituan.net/biztone/195055628_1679477267700.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "169m"
  },
  {
    "name": "尊宝比萨（百瑞景店）",
    "cateName": "披萨",
    "frontImg": "http://p0.meituan.net/biztone/4487fcb931443c9541fc0f1ccd9705072939310.jpg",
    "areaName": "雄楚大道",
    "distance": "285m"
  },
  {
    "name": "华莱士·全鸡汉堡（石牌岭石建村店）",
    "cateName": "西式快餐/汉堡",
    "frontImg": "http://p0.meituan.net/biztone/169314868_1687250914475.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "500m"
  },
  {
    "name": "麦当劳（乐都汇店）",
    "cateName": "西式快餐/汉堡",
    "frontImg": "http://p1.meituan.net/biztone/951699_1684739660197.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "465m"
  },
  {
    "name": "塔斯汀·中国汉堡（马房山店）",
    "cateName": "西式快餐/汉堡",
    "frontImg": "http://p1.meituan.net/biztone/706194235_1687746406025.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "1.4km"
  },
  {
    "name": "肯德基（百瑞景店）",
    "cateName": "快餐简餐",
    "frontImg": "http://p0.meituan.net/biztone/1454822468_1687372456752.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "352m"
  },
  {
    "name": "肥肥虾庄·金牌油焖大虾（石牌岭总店）",
    "cateName": "小龙虾",
    "frontImg": "http://p1.meituan.net/biztone/75542546_1677059542362.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "578m"
  },
  {
    "name": "华莱士·全鸡汉堡（丁字桥向阳佳苑店）",
    "cateName": "西式快餐/汉堡",
    "frontImg": "http://p0.meituan.net/biztone/169314868_1687250914475.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "898m"
  },
  {
    "name": "京百万北京烤鸭（百瑞景店）",
    "cateName": "烤鸭",
    "frontImg": "http://p0.meituan.net/biztone/11a4342a9a46de5a25ab690968643eca65278.jpg",
    "areaName": "丁字桥/石牌岭",
    "distance": "473m"
  },
  {
    "name": "新奥尔良烤肉拌饭（丁字桥路店）",
    "cateName": "快餐简餐",
    "frontImg": "http://p1.meituan.net/merchant/1e98e28c03292a5d444b44ac56bc966d354512.jpg",
    "areaName": "丁字桥/石牌岭",
    "distance": "924m"
  },
  {
    "name": "南膳房北京烤鸭（百瑞景店）",
    "cateName": "烤鸭",
    "frontImg": "http://p0.meituan.net/biztone/1214269535_1652169401402.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "280m"
  },
  {
    "name": "CoCo都可（百瑞景店）",
    "cateName": "奶茶/果汁",
    "frontImg": "http://p0.meituan.net/biztone/164678669_1668686771197.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "148m"
  },
  {
    "name": "红门柴火鸡（石牌岭店）",
    "cateName": "本地鸡窝火锅",
    "frontImg": "http://p0.meituan.net/biztone/1168132041_1683626967051.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "436m"
  },
  {
    "name": "星巴克（武汉百瑞景店）",
    "cateName": "咖啡厅",
    "frontImg": "http://p0.meituan.net/biztone/812559789_1633679478109.jpeg",
    "areaName": "雄楚大道",
    "distance": "141m"
  },
  {
    "name": "肥肥虾庄·金牌油焖大虾（梦时代店）",
    "cateName": "小龙虾",
    "frontImg": "http://p1.meituan.net/biztone/75542546_1677059542362.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "680m"
  },
  {
    "name": "金马门国际美食百汇（珞喻路店）",
    "cateName": "综合自助",
    "frontImg": "http://p0.meituan.net/biztone/1897066_1682488083936.jpeg",
    "areaName": "广埠屯",
    "distance": "2.2km"
  },
  {
    "name": "蔡林记（武商梦时代店）",
    "cateName": "快餐简餐",
    "frontImg": "http://p0.meituan.net/biztone/8ecf14b05596032cd3c608bb127b9b88281481.jpg",
    "areaName": "丁字桥/石牌岭",
    "distance": "1.1km"
  },
  {
    "name": "塔斯汀中国汉堡（丁字桥南路店）",
    "cateName": "西式快餐/汉堡",
    "frontImg": "http://p1.meituan.net/biztone/706194235_1687746406025.jpeg",
    "areaName": "南湖城市广场",
    "distance": "1.6km"
  },
  {
    "name": "臻牛·滋补火锅（百瑞景店）",
    "cateName": "潮汕牛肉火锅",
    "frontImg": "http://p1.meituan.net/biztone/1046464207_1683368187939.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "176m"
  },
  {
    "name": "周黑鸭（武汉市武昌区百瑞景店）",
    "cateName": "卤味鸭脖",
    "frontImg": "http://p0.meituan.net/biztone/3bcbd73859df549c43405b8b25bd543d306153.png",
    "areaName": "丁字桥/石牌岭",
    "distance": "184m"
  },
  {
    "name": "手撕烤鸭（亚贸店）",
    "cateName": "烤鸭",
    "frontImg": "http://p0.meituan.net/merchant/71f93914e53968e20f54c6fb6957613b325225.jpg",
    "areaName": "丁字桥/石牌岭",
    "distance": "899m"
  },
  {
    "name": "麦当劳（石牌岭店）",
    "cateName": "西式快餐/汉堡",
    "frontImg": "http://p1.meituan.net/biztone/951699_1684739660197.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "1.2km"
  },
  {
    "name": "沪上阿姨鲜果茶（百瑞景店）",
    "cateName": "奶茶/果汁",
    "frontImg": "http://p0.meituan.net/biztone/164023691_1687831632527.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "151m"
  },
  {
    "name": "徐大川剁椒猪脚饭（乐都汇店）",
    "cateName": "快餐简餐",
    "frontImg": "http://p1.meituan.net/biztone/5d8b80980601b45c2e01ce4d09412615290429.png",
    "areaName": "石牌岭/街道口",
    "distance": "432m"
  },
  {
    "name": "醉湘江（石牌岭路店）",
    "cateName": "湘菜",
    "frontImg": "http://p0.meituan.net/merchant/afaae302fc2ba3f65d741f2dded33cda491804.jpg",
    "areaName": "雄楚大道",
    "distance": "458m"
  },
  {
    "name": "仟吉KenGee（百瑞景店）",
    "cateName": "面包蛋糕",
    "frontImg": "http://p1.meituan.net/biztone/4ecc4c18a417e8d5642f37be9ccefd27314058.jpg",
    "areaName": "石牌岭/街道口",
    "distance": "152m"
  },
  {
    "name": "虾皇•鄂派油焖大虾（石牌岭店）",
    "cateName": "小龙虾",
    "frontImg": "http://p0.meituan.net/biztone/735681018_1687332865945.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "399m"
  },
  {
    "name": "德华楼（武商梦时代店）",
    "cateName": "快餐简餐",
    "frontImg": "http://p0.meituan.net/biztone/c403a0b3da9e074ec35ceb9da872825876308.jpg",
    "areaName": "丁字桥/石牌岭",
    "distance": "1.1km"
  },
  {
    "name": "梅姐老火锅（梦时代店）",
    "cateName": "重庆火锅",
    "frontImg": "http://p0.meituan.net/biztone/1900682105_1686724929443.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "517m"
  },
  {
    "name": "蜜雪冰城（理工大东门店）",
    "cateName": "奶茶/果汁",
    "frontImg": "http://p0.meituan.net/bizgateway/84add0ee1551f1a2570af5b9e62222ee115524.jpg",
    "areaName": "南湖花园",
    "distance": "1.4km"
  },
  {
    "name": "肯德基（和成中心店）",
    "cateName": "西式快餐/汉堡",
    "frontImg": "http://p0.meituan.net/biztone/1454822468_1687372456752.jpeg",
    "areaName": "雄楚大道",
    "distance": "1.2km"
  },
  {
    "name": "巴厘龙虾（石牌岭店）",
    "cateName": "小龙虾",
    "frontImg": "http://p0.meituan.net/biztone/5788884_1686643944433.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "628m"
  },
  {
    "name": "猪角闽南猪脚饭（武汉梦时代店）",
    "cateName": "闽菜",
    "frontImg": "http://p0.meituan.net/biztone/c89fcf09f2f881106ea8ea5a2e26ad8e6436226.jpg",
    "areaName": "丁字桥/石牌岭",
    "distance": "993m"
  },
  {
    "name": "蜜雪冰城·冰淇淋与茶（中南店）",
    "cateName": "奶茶/果汁",
    "frontImg": "http://p0.meituan.net/bizgateway/84add0ee1551f1a2570af5b9e62222ee115524.jpg",
    "areaName": "中南路/洪山广场",
    "distance": "2km"
  },
  {
    "name": "塔斯汀中国汉堡（中南路店）",
    "cateName": "西式快餐/汉堡",
    "frontImg": "http://p1.meituan.net/biztone/706194235_1687746406025.jpeg",
    "areaName": "中南路/洪山广场",
    "distance": "2km"
  },
  {
    "name": "鱼拿酸菜鱼（石牌岭店）",
    "cateName": "酸菜鱼/水煮鱼",
    "frontImg": "http://p1.meituan.net/merchant/884fc4bcf0174188c9ca07e7997d44d931139.jpg",
    "areaName": "石牌岭/街道口",
    "distance": "445m"
  },
  {
    "name": "红门柴火鸡·甲鱼馆（丁字桥弘业俊园店）",
    "cateName": "本地鸡窝火锅",
    "frontImg": "http://p1.meituan.net/biztone/1177909826_1654935847956.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "618m"
  },
  {
    "name": "绝味鸭脖（绝百瑞景店）",
    "cateName": "卤味鸭脖",
    "frontImg": "http://p0.meituan.net/biztone/3c56f2b64c6c1e774729202a708aeb52173951.jpg",
    "areaName": "丁字桥/石牌岭",
    "distance": "247m"
  },
  {
    "name": "奶香铺子（百瑞景店）",
    "cateName": "小吃快餐",
    "frontImg": "http://p0.meituan.net/merchant/f9874a39a86e68d5079ea17c6366395d21220.jpg",
    "areaName": "石牌岭/街道口",
    "distance": "280m"
  },
  {
    "name": "茶百道（百瑞景店）",
    "cateName": "奶茶/果汁",
    "frontImg": "http://p0.meituan.net/biztone/1644957715_1686531302380.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "187m"
  },
  {
    "name": "熊猫盖码饭（第2档口移山美食城店）",
    "cateName": "快餐简餐",
    "frontImg": "http://p0.meituan.net/merchant/410fcdfd7dd5286d4002536c63eb04b7214176.jpg",
    "areaName": "石牌岭/街道口",
    "distance": "376m"
  },
  {
    "name": "亚马逊环球美食百汇·365道菜品畅吃（梦时代店）",
    "cateName": "综合自助",
    "frontImg": "http://p0.meituan.net/biztone/1427732343_1686813581303.jpeg",
    "areaName": "丁字桥/石牌岭",
    "distance": "1.2km"
  },
  {
    "name": "花小小新疆炒米粉（乐都汇店）",
    "cateName": "新疆菜",
    "frontImg": "http://p0.meituan.net/biztone/7a40b27ed5b5c1aa36da5881787dc74d585813.png",
    "areaName": "石牌岭/街道口",
    "distance": "465m"
  },
  {
    "name": "青瓦炭烤肉（群光广场店）",
    "cateName": "韩式烤肉",
    "frontImg": "http://p0.meituan.net/biztone/70079727_1678437197642.jpeg",
    "areaName": "石牌岭/街道口",
    "distance": "2km"
  }
];

/* KTV
网址：
  http://meishi.meituan.com/
  https://g.meituan.com/mrn-gc-filterlistpage/rn_gcbu_filterlistpage/index.html?mrn_component=mrn-gc-commonfilterlistpage&templateKey=default&bizid=1&categoryid=10

API：
  https://mapi.meituan.com/general/platform/mtlist/filterlist.bin

注意：

  切换为移动端设备会报 403 错误

解析：

  var response = {};

  var result = (response).list.map((item) => {
    const {
      shopName, // "佰乐星纯K（百瑞景店）"
      categoryName, // "量贩式KTV"
      cbdName, // "丁字桥/石牌岭"
      distance, // "153m"
      headPic, // "https://p0.meituan.net/dpmerchantpic/xxx"
    } = item.shopCardInfo.baseInfoVO;

    return {
      name: shopName,
      cateName: categoryName,
      frontImg: headPic,
      areaName: cbdName,
      distance: distance,
    }
  })

  console.log(JSON.stringify(result, null, 2));
*/
export const ktvShopList = [
  {
    "name": "佰乐星纯K（百瑞景店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/8723c4b0c494601dd622f72094ebd5df77201.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "丁字桥/石牌岭",
    "distance": "153m"
  },
  {
    "name": "尚-KTV（武商梦时代店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p1.meituan.net/dpmerchantpic/bba0eafa6060437623b75f4562e05673925631.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "丁字桥/石牌岭",
    "distance": "1.1km"
  },
  {
    "name": "魅KTV（南湖店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/0a681071e94d0ed26abc507989929059417517.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "南湖花园",
    "distance": "2.0km"
  },
  {
    "name": "北极光Party KTV（街道口店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://vfile.meituan.net/joymerchant/5903203645937143251-3605104-1522638830493.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "石牌岭/街道口",
    "distance": "1.6km"
  },
  {
    "name": "漢娱公馆商务KTV",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/36e0d173c227a20abdf91b57137c7705312478.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "石牌岭/街道口",
    "distance": "1.7km"
  },
  {
    "name": "米乐星世界KTV（南湖店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p1.meituan.net/dpmerchantpic/a4ad9aa962d04b50ede0760f6d180fcd873901.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "南湖花园",
    "distance": "2.1km"
  },
  {
    "name": "蓝悦汇KTV",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/6dd35cfa4071a1718b2adcad602776f5160820.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "石牌岭/街道口",
    "distance": "1.7km"
  },
  {
    "name": "好乐迪KTV（街道口旗舰店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/d02b9149f64628656b31621ab78705bd102520.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "石牌岭/街道口",
    "distance": "2.3km"
  },
  {
    "name": "阳光纯K",
    "cateName": "量贩式KTV",
    "frontImg": "https://p1.meituan.net/dpmerchantpic/c8398a128c6dc1865c76b86baab49ab41332761.png%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "水果湖",
    "distance": "2.2km"
  },
  {
    "name": "钻石人间商务KTV",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/6702a34cd243ae0bf7c31589cad40ee1460402.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "雄楚大道",
    "distance": "1.6km"
  },
  {
    "name": "唱吧麦颂KTV（街道口店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/4b9e2d6506ab52eabd0a5a0079d3c043432944.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "石牌岭/街道口",
    "distance": "1.8km"
  },
  {
    "name": "优畅KTV（街道口店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/04c871c3f6c06b4952183ccb9d9ad885242810.png%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "石牌岭/街道口",
    "distance": "1.9km"
  },
  {
    "name": "阳光钱柜KTV（八一路店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/cbca4104fd42a7ddc65de4714ce69e871218953.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "中南路/洪山广场",
    "distance": "2.2km"
  },
  {
    "name": "海天之恋KTV（南湖店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/cdd04c892645d9bf2e10ac144927ebcb1172876.png%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "南湖花园",
    "distance": "1.7km"
  },
  {
    "name": "金沙国际公馆KTV（欢乐汇广场店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/3a540fe2704a6183a5889584b82dcb1174183.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "雄楚大道",
    "distance": "1.6km"
  },
  {
    "name": "阿曼达主题KTV（南湖都会店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p1.meituan.net/dpmerchantpic/d65f46748401ec0a6c3fbeeabde84a48204853.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "南湖花园",
    "distance": "2.3km"
  },
  {
    "name": "金帝豪KTV",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/92e8124ce0634fc9e0f5c4adbe83386580950.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "雄楚大道",
    "distance": "1.7km"
  },
  {
    "name": "米乐星世界KTV（中南天紫广场店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p1.meituan.net/dpmerchantpic/a4ad9aa962d04b50ede0760f6d180fcd873901.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "中南路/洪山广场",
    "distance": "2.0km"
  },
  {
    "name": "动感之音录音棚（中南店）",
    "cateName": "录音棚",
    "frontImg": "https://p1.meituan.net/merchantpic/34a119bd80ba9c8d3b0c20131c0cd7a2461110.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "中南路/洪山广场",
    "distance": "1.7km"
  },
  {
    "name": "MIMO录音棚（中南店）",
    "cateName": "录音棚",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/c69919752db6e8d91c2f0eca6dbb5a7b225718.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "中南路/洪山广场",
    "distance": "1.6km"
  },
  {
    "name": "森海音乐录音棚（街道口店）",
    "cateName": "录音棚",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/c1379961fc5e36591b26673b763d9449366481.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "石牌岭/街道口",
    "distance": "1.9km"
  },
  {
    "name": "春天里量贩KTV",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/joymerchant/8b2a83b1ad3842650b54242869bc3423-754830446.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "卓刀泉/虎泉",
    "distance": "3.3km"
  },
  {
    "name": "欢乐空间KTV（烽火店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/c0aa7a510eb4d6a648e17599faba5e41701467.png%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "白沙洲",
    "distance": "4.2km"
  },
  {
    "name": "公馆KTV（司门口店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p1.meituan.net/dpmerchantpic/000c72abb7ccf1b6e99d333768e94fea90866.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "司门口",
    "distance": "4.3km"
  },
  {
    "name": "欢乐空间KTV（首义店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/c0aa7a510eb4d6a648e17599faba5e41701467.png%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "首义汇/阅马场",
    "distance": "3.4km"
  },
  {
    "name": "空境·派对KTV（汉街店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p1.meituan.net/dpmerchantpic/2d30865c7565608957757b1ac32ce46d1178307.png%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "楚河汉街",
    "distance": "4.2km"
  },
  {
    "name": "魅KTV（武汉凯德1818店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/0a681071e94d0ed26abc507989929059417517.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "楚河汉街",
    "distance": "3.6km"
  },
  {
    "name": "唱吧麦颂KTV（司门口店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/4b9e2d6506ab52eabd0a5a0079d3c043432944.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "司门口",
    "distance": "4.3km"
  },
  {
    "name": "星聚会KTV（汉街店）",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/b68dce2e0dd1b56fe025bf6e5a865435339693.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "楚河汉街",
    "distance": "4.4km"
  },
  {
    "name": "OPENBASE量贩KTV",
    "cateName": "量贩式KTV",
    "frontImg": "https://p0.meituan.net/dpmerchantpic/0aba002fb3658e5d522076bdcf1eaf18223148.jpg%40200w_200h_1e_1c_1l%7Cwatermark%3D0",
    "areaName": "南湖花园",
    "distance": "4.2km"
  }
];