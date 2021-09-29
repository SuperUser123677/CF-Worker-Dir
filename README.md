# CF-Worker-Dir

CF-Worker-Dir is a cloud function program suitable for Cloudflare Worker platform. You can use it to build your own navigation page within one minute. CF-Worker-Dir provides a lot of custom configurations, and it can also reserve an interface to help you sell your own domain name. If your domain name has not yet built a website, it is better to use CF-Worker-Dir to make your domain name no longer wasted.😉

🎉[Demo](http://sites.51sec.org/)

<details>
<summary>📷Screenshot</summary>
<img src="https://i.loli.net/2020/02/14/ahU32dQxMct9ugX.png"/>
</details>
<img src="https://photos.51sec.org/file/test1-51sec/2021/09/chrome_Wjajs2ZzFA.png"/ width="600">

## Installation
### Quick installation Steps
1. from [Cloudflare Worker](https://workers.cloudflare.com/) management page,  create a new **Worker** 。
2. Paste the code in `index.js` to the left side of Worker's edit page
3. Modify `config` setction's content based on your requirement
### Advanced steps
> How to bind it with your own subdomain
1. After completed quick installation steps，go back to your Cloudflare domain management console
2. Click `Workers` to enter Workers management page
3. Click `Add route` to create a new route
4. `Route` : you can enter your own subdomain for your route. If you would like to use your root domain, you can directly enter it，`Worker`: choose the Worker created from previous step to bind with your own subdomain.
> `Route`'s subdomain **must has a corresponding A record created to be able to be resolved**. If it has been to creaet a A record to map to an IP address,  you can enter 8.8.8.8 as IP address when createing it：）

## System Configuration

CF-Worker-Dir allows user to customize configuraiton. Here is explaination about those customization configuration：
```
/**
 *  Customized Sites Definition 
 *  Original Github address : https://github.com/sleepwood/CF-Worker-Dir/
 *  https://github.com/51sec/CF-Worker-Dir/blob/master/index.js
 */
const config = {
  title: "My Bookmarks",                 //write your website title
  subtitle: "Cloudflare Workers Dir", //write your website subtitle
  logo_icon: "sitemap",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: false,                     //use hitokoto or not
  search:false,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"Google",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"Baidu",
      template:"https://www.baidu.com/s?wd=$s"
    },    {
      name:"Bing",
      template:"https://www.bing.com/search?q=$s"
    },
    {
      name:"Sogou",
      template:"https://www.sogou.com/web?query=$s"
    }
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"51sec.org",
    price:5000,                        //domain price
    mon_unit:"usd sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"admin@51sec.org"
      }
    ]                        
  },
  lists: [                            //Url list
    {
      name:"CyberSecurity",
      icon:"shield",
      list:[
        {
          url:"https://www.51sec.org/",
          name:"Info Security Memo",
          desc:"Information Security Memo"
        },
        {
          url:"https://Blog.51sec.org",
          name:"Cyber Security Blog",
          desc:"Cyber Security Memo"
        },
        {
          url:"https://itprosec.com/",
          name:"ITProSec",
          desc:"IT Professional Security"
        },
        {
          url:"https://opc2portainer.51sec.org",
          name:"Portainer",
          desc:"Portainer"
        },
      ]
    },

{
      name:"InfoSecurity",
      icon:"id-badge",
      list:[
        {
          url:"https://51sec.loggly.com/",
          name:"Loggly",
          desc:"Loggly"
        },
        {
          url:"https://proxy.51sec.org/",
          name:"Proxy",
          desc:"Proxy"
        },
        {
          url:"https://gd.51sec.workers.dev/",
          name:"Google Drive",
          desc:"Google Drive"
        },
        {
          url:"https://od.51sec.org",
          name:"One Drive",
          desc:"One Drive"
        },
      ]
    },

{
      name:"51Sec App",
      icon:"id-badge",
      list:[
        {
          url:"https://51sec.org/mail",
          name:"51Sec Webmail",
          desc:"51Sec Webmail"
        },
        {
          url:"https://sec.myxwiki.org/",
          name:"51Sec Wiki",
          desc:"51Sec Wiki"
        },
        {
          url:"https://calendly.com/51sec/",
          name:"51Sec Calendar",
          desc:"Google Drive"
        },
        {
          url:"https://myod.51sec.eu.org",
          name:"51Sec EU OneDrive",
          desc:"51Sec EU OneDrive"
        },
      ]
    },

    {
      name:"Technologies",
      icon:"code",
      list:[
        {
          url:"https://oschina.net/",
          name:"开源中国",
          desc:"程序员集散地"
        },
        {
          url:"https://v2ex.com",
          name:"V2EX",
          desc:"程序员集散地"
        },
        {
          url:"https://csdn.net/",
          name:"CSDN技术社区",
          desc:"程序员集散地"
        },
        {
          url:"https://github.com/",
          name:"Github",
          desc:"程序员集散地"
        },
      ]
    },
    {
      name:"Learning",
      icon:"graduation cap",
      list:[
        {
          url:"https://w3school.com.cn/",
          name:"W3school在线教程",
          desc:"程序员集散地"
        },
        {
          url:"https://runoob.com/",
          name:"菜鸟教程",
          desc:"程序员集散地"
        },
        {
          url:"https://segmentfault.com/",
          name:"思否社区",
          desc:"程序员集散地"
        },
        {
          url:"https://jianshu.com/",
          name:"简书",
          desc:"程序员集散地"
        },
      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    //return "http://icon.occ.hk/get.php?url=" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    //return "http://icon.occ.hk/get.php?url=http://" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/51sec/cf-worker-dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License    51sec.org')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.google.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="Search what you want to know……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}

```

## Todo
- [ ] 模块化
- [ ] 米表列表
- [ ] 插件化（倒计时/一言/小工具）  
- [ ] 国际化  

## Licence

MIT
