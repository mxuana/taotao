import{f as E,h as $,i as z,j as V,k as F}from"./element-BPct9MS1.js";import{e as p,j as o,L as g,H as d,M as a,f as l,h as t,E as k,X as I,r as N,K as i,V as r,F as y,a3 as v,Z as T,u as w}from"./vue-YObo0oj1.js";import{u as j}from"./index-CLeK53eB.js";import{_ as S}from"./plugin-vueexport-helper-DlAUqK2U.js";const L=["xlink:href","fill"],M=p({__name:"index",props:{width:{default:""},height:{default:""},color:{default:"#333"},prefix:{default:"#icon-"},is:{default:"el-icon"},name:{default:""},inStyle:{},img:{type:Boolean,default:!1},src:{default:"/kuromia.png"}},setup(c){return(e,u)=>{const n=E;return e.img?(o(),g(n,{key:0,style:d({width:e.width,height:e.height,...e.inStyle}),src:e.src,fit:"fill"},null,8,["style","src"])):(o(),g(I(e.is),{key:1},{default:a(()=>[(o(),l("svg",k({xmlns:"http://www.w3.org/2000/svg",style:{width:e.width,height:e.height,...e.inStyle},"aria-hidden":"true"},e.$attrs),[t("use",{"xlink:href":e.prefix+e.name,fill:e.color},null,8,L)],16))]),_:1}))}}}),D={class:"song-content"},W={class:"logo-cn"},H={style:{position:"relative"}},K={class:"song-list-title"},O=p({__name:"index",props:{vup:{},avater:{default:()=>({})},slogan:{default:""},logo:{default:()=>({fontFamily:"BEYNO",fontSize:"2.7rem",height:"5rem"})},logoCn:{default:"---"},songs:{default:()=>[]},theme:{default:""},tab:{type:Boolean,default:!0},specSongs:{default:()=>[]}},setup(c){const e=N("---"),{copy:u,isSupported:n}=j({source:e}),b=s=>{n&&(u(`点歌 ${s}`),z({message:`点歌 ${s}`,grouping:!0,type:"success",duration:5e3,plain:!0,offset:200,showClose:!0}))};return(s,m)=>{const f=$,C=V,B=F;return o(),l("div",D,[i(f,{class:"slogan",style:d({"--slogan":`url(${s.slogan})`})},{default:a(()=>[t("div",{class:"logo",style:d({"font-family":s.logo.fontFamily,"font-size":s.logo.fontSize,height:s.logo.height})},r(s.vup),5),t("div",null,[t("div",W,r(s.logoCn),1),m[0]||(m[0]=t("div",{style:{"text-align":"right","font-size":"0.875rem","text-shadow":"0.0625rem 0.0625rem 0.125rem black",color:"white"}}," 注：若页面异常请看图片版本 ",-1))]),i(M,k({name:s.avater.name||"",img:s.avater.img,src:s.avater.src||"",width:"4.375rem",height:"4.375rem",is:s.avater.is||"v-fragment","in-style":{top:"5.5rem",position:"absolute","border-radius":".9375rem"}},s.avater.$attr||{}),null,16,["name","img","src","is"])]),_:1},8,["style"]),(o(!0),l(y,null,v(s.songs,h=>(o(),l("div",H,[i(f,{class:"song-list"},{default:a(()=>[i(B,null,{default:a(()=>[(o(!0),l(y,null,v(h.songs,_=>(o(),g(C,{class:"song-item","disable-transitions":"",color:"#e289c233",style:{color:"#e289c2"},onClick:Z=>b(_)},{default:a(()=>[T(r(_),1)]),_:2},1032,["onClick"]))),256))]),_:2},1024)]),_:2},1024),t("div",K,r(h.type),1)]))),256))])}}}),P=S(O,[["__scopeId","data-v-2dddb731"]]),R="/taotao/static/png/bgc-W72-WbV7.png",X=[{type:"周杰伦的歌～",songs:["枫","晴天","搁浅","迷迭香","Mojito","龙卷风","菊花台","东风破","发如雪","七里香","兰亭序","青花瓷","烟花易冷","红尘客栈","红颜如霜","等你下课","告白气球","手写的从前","雨下一整晚"]},{type:"甜甜的歌单～",songs:["宝贝","麦浪","东西","爱你","宁夏","答案","宠爱","猪猪侠","坏女孩","静悄悄","365节","喜欢你","海芋恋","我们俩","我和你","有你在","胆小鬼","恶作剧","第一天","是心动啊","奶茶加糖","星空剪影","有何不可","海绵宝宝","自娱自乐","星光派对","一笑倾城","为你写诗","依然爱你","恋爱频率","大手拉小手","99次我爱她","心愿便利贴","地球最可爱","多糖芒果冰","彩虹的微笑","热恋冰淇淋","热爱105度的你","青春修炼手册","南半球与北海道","我多喜欢你你会知道","想和你看五月的晚霞"]},{type:"偶尔听个古风～",songs:["荒","芒种","赤伶","朱砂","凉凉","下山","大鱼","青丝","探窗","怎叹","招娣","卜卦","酒家","春庭雪","燕无歇","桃花笑","典狱司","不谓侠","虞兮叹","清明雨下","烟雨行舟","西楼别序","金风玉露","莫问归期","浪人琵琶","梦回花事了","人间不值得","九九八十一","辞九门回忆","山外小楼夜听雨","天下的乌鸦一般黑"]},{type:"林俊杰的歌～",songs:["她说","曹操","当你","江南","心墙","小酒窝","醉赤壁","关键词","修炼爱情","背对背拥抱","爱笑的眼睛","只要有你的地方"]},{type:"一起来R&b 和爵士吧~",songs:["他","暧","不枉","嗯哼","BB88","蓝旗袍","柠檬树","我要你","爱爱爱","普通朋友","呼吸决定","特别的人","爱在比佛利","浪漫爱情故事","无法抗拒的你","直到我遇见了你","致姗姗来迟的你","我在人民广场吃炸鸡"]},{type:"影视歌曲～",songs:["雨","年轮","小幸运","追光者","小情歌","手掌心","九张机","星月神话","路过人间","雪落下的声音","爱情怎么喊停"]},{type:"抒情emo歌～",songs:["谁","情歌","听海","悬溺","恒温","红豆","雨爱","不删","体面","冬眠","大眠","若把你","猜不透","水星记","等雨停","同花顺","我记得","月牙湾","心之火","若能再见","太聪明","说散就散","你啊你啊","我怀念的","时间煮雨","伦敦的爱情","至少还有你","我的纸飞机","踮起脚尖爱","永不失联的爱","阿拉斯加海湾","等下一个天亮","这世界那么多人"]},{type:"其他歌曲～",songs:["夸","门","迷宫","海海海","欧若拉","凄美地","神魂颠倒","危险派对","沙漠骆驼","在意识里过一生","我期待的不是雪","烟火里的尘埃","易燃易爆炸","劈你的雷正在路上"]}],Y=p({__name:"index",setup(c){return(e,u)=>{const n=P;return o(),g(n,{songs:w(X),slogan:w(R),avater:{is:"ElImage",img:!0},vup:"TaoTao","logo-cn":"这里有个桃桃"},null,8,["songs","slogan"])}}}),Q=S(Y,[["__scopeId","data-v-8f034e1c"]]);export{Q as default};
