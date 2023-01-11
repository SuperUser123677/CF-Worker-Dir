/**
 *  Customized Sites Definition 
 *  Github address : https://github.com/sleepwood/CF-Worker-Dir/
 *  https://github.com/51sec/CF-Worker-Dir/blob/master/index.js
 */
const config = {
  title: "HomeFlix-Media's   Dashboard",                 //write your website title
  subtitle: "A List of Useful Links", //write your website subtitle
  logo_icon: "server",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: false,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"Google",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"DuckDuckGo",
      template:"https://duckduckgo.com/search?q=$s"
    },    {
      name:"Bing",
      template:"https://www.bing.com/search?q=$s"
    },
    {
      name:"Startpage",
      template:"https://www.startpage.com/search?q=$s"
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
      name:"Applications",
      icon:"globe",
      list:[
        {
      name:"Applications",
      icon:"globe",
      list:[
        {
          url:"https://nullreferer.com/?https://apps.securedserveraccess.com",
          name:"Plex Landing Page",
          desc:"Landing Page"
        },
        {
          url:"https://nullreferer.com/?https://securedserveraccess.com",
          name:"HomePage",
          desc:"HomeFlix-Media Website"
        },
        {
          url:"https://nullreferer.com/?https://hfmr.securedserveraccess.com/landingpage",
          name:"Ombi",
          desc:"Media Request Site"
        },
        {
          url:"https://nullreferer.com/?https://hfmr-alt.securedserveraccess.com/#/user",
          name:"Petio",
          desc:"Media Request Site"
        },
        {
          url:"https://nullreferer.com/?https://hfm_portal.securedserveraccess.com",
          name:"Tautulli Login",
          desc:"History, Newsletters, etc."
        },
        {
          url:"https://nullreferer.com/?https://publier.app/",
          name:"Publier",
          desc:"Publish PLEX events to the services of your choice!"
        },
        {
          url:"https://nullreferer.com/?https://stats.uptimerobot.com/NWVvOuNG8X",
          name:"Status Page",
          desc:"Website Monitoring"
        },
        {
          url:"https://nullreferer.com/?https://radio.securedserveraccess.com/login.view?",
          name:"Subsonic",
          desc:"HomeFlix-Media Internet Radio"
        },
        {
          url:"https://nullreferer.com/?https://www.securedserveraccess.com/forum/memberlist.php?mode=searchuser&form=select_user&field=username&select_single=true&sid=172c868fc15796e7d1539a34b1c5133e",
          name:"Forum Tools",
          desc:"HomeFlix-Media Forum Management"
        },
        {
          url:"https://nullreferer.com/?https://inet1.securedserveraccess.com/login",
          name:"Grafana Dashboard",
          desc:"HomeFlix-Media Monitoring"
        },
        {
          url:"https://nullreferer.com/?https://inet2.securedserveraccess.com/admin/index.php",
          name:"Pi-Hole DNS Management",
          desc:"HomeFlix-Media Monitoring"
        },
        {
          url:"https://nullreferer.com/?https://inet-manage.securedserveraccess.com/#!/auth",
          name:"Docker Management",
          desc:"HomeFlix-Media Monitoring"
        },
        {
          url:"https://nullreferer.com/?https://hfm_server.securedserveraccess.com/web/index.html#!/",
          name:"Proxied Plex Server",
          desc:"HomeFlix-Media Private Server"
        },
        {
          url:"https://nullreferer.com/?https://netbalancer.com/",
          name:"NetBalancer",
          desc:"NetBalancer is a Windows application for local network traffic control and monitoring"
        },
        {
          url:"https://nullreferer.com/?https://inet-files.securedserveraccess.com/",
          name:"GodDrive",
          desc:"HomeFlix-Media Private Drive"
        },
        {
          url:"https://nullreferer.com/?https://www.securedserveraccess.com/forum/",
          name:"Forum Page",
          desc:"HomeFlix-Media Main Forum"
        },
        {
          url:"https://nullreferer.com/?https://pwndrop.securedserveraccess.com/",
          name:"Pwndrop",
          desc:"HomeFlix-Media Mystery URL"
        },
        {
          url:"https://nullreferer.com/?https://kavita.securedserveraccess.com/",
          name:"Ebook/Comic Collection",
          desc:"Kavita is a full-fledged, fast, cross-platform, & open-source manga, comic, and book server. Built from the ground up with a focus on manga and a goal of being a full solution to your reading needs. Set up your own server and share your manga, comics, and e-book collection with your friends and family."
        },
        {
          url:"https://nullreferer.com/?https://app.smtp2go.com/login",
          name:"SMTP2GO",
          desc:"SMTP2GO, a leader in transactional email delivery. You've probably found this page because you received an email from someone using our service. SMTP2GO helps ensure that important transactional emails are delivered to an inbox, instead of the spam folder. Check out SMTP2GO to improve your email deliverability with just a few clicks."
        },
        {
          url:"https://nullreferer.com/?https://hfm-proxy.securedserveraccess.com/",
          name:"Proxy Server",
          desc:"HomeFlix-Media web Proxy (LOGIN IS REQUIRED!)"
        },
        {
          url:"https://nullreferer.com/?https://account.proton.me/login",
          name:"Proton Mail",
          desc:"Proton Mail is an end-to-end encrypted email service founded in 2013 in Geneva, Switzerland. Proton Mail uses client-side encryption to protect email content and user data before they are sent to Proton Mail servers, unlike other common email providers such as Gmail and Outlook.com"
        },
        {
          url:"https://nullreferer.com/?https://ep.ups.com/UPSRegistration/UPSLogin",
          name:"UPS Employee Portal",
          desc:"Portal to access pay, time off/leave, and view your timecard."
        },
      ]
    },

{
      name:"Websites",
      icon:"globe",
      list:[
        {
          url:"https://nullreferer.com/?https://login.mailchimp.com/",
          name:"MailChimp",
          desc:"Newsletter Creator"
        },
        {
          url:"https://nullreferer.com/?https://discohook.org",
          name:"Discohook",
          desc:"Embed into Discord"
        },
        {
          url:"https://nullreferer.com/?https://www.plex.tv",
          name:"Plex Login",
          desc:"Plex Default Website"
        },
        {
          url:"https://nullreferer.com/?https://youtube.com",
          name:"Youtube",
          desc:"Entertainment"
        },
        {
          url:"https://nullreferer.com/?https://cloudinary.com/",
          name:"Cloudinary",
          desc:"Professional Digital Media Storage"
        },
        {
          url:"https://nullreferer.com/?https://ClanAOD.net/",
          name:"ClanAOD",
          desc:"The Angels of Death is a community of players founded in 1999 based on a core set of conduct that aims to promote decency and provide a comfortable environment to play with thousands of other likeminded members. With nearly 3000 members globally there is always someone to play alongside when you want."
        },
        {
          url:"https://nullreferer.com/?https://www.greenmangaming.com/",
          name:"Green man Gaming",
          desc:"Based in sunny London, UK, Green Man Gaming is a company with a mission - to make sure gaming gets to everyone. To do that we sell PC and Xbox games at amazing prices. There's over 10,000 games on store and they are added to daily, all sourced from publishers."
        },
        {
          url:"https://nullreferer.com/?https://status.plex.tv/",
          name:"Plex Status Page",
          desc:"Uptime For the Official Plex Website / Services"
        },
        {
          url:"https://nullreferer.com/?https://us.goodcloud.xyz/#/login",
          name:"GoodCloud",
          desc:"Remote Monitoring to Gl.iNet routers."
        },
        {
          url:"https://nullreferer.com/?https://boards.4chan.org",
          name:"4chan",
          desc:"4chan is a simple image-based bulletin board where anyone can post comments and share images. There are boards dedicated to a variety of topics, from Japanese animation and culture to videogames, music, and photography."
        },
        {
          url:"https://nullreferer.com/?https://securedserveraccess.com/forum/",
          name:"HomeFlix-Media Forums Page",
          desc:"A Forum Page For Registered Plex Server Members"
        },
        {
          url:"https://nullreferer.com/?https://playback.fm/birthday-song",
          name:"Find Out The #1 Song The Day You Were Born",
          desc:"What was the #1 song on the day you were born?"
        },
        {
          url:"https://nullreferer.com/?https://www.amazon.com/Rosewill-Chassis-Rackmount-Computer-RSV-R4100U/dp/B09BDH3SYQ/ref=sr_1_1?crid=31049BD6W0RGA&keywords=rosewill+rsv-r41100u&qid=1662638914&s=electronics&sprefix=rosewill+rsv-r41100u%2Celectronics%2C65&sr=1-1",
          name:"Rosewill 4U Server Chassis 9 Bay Server Case",
          desc:"Plex Server Storage / Server Recommendations "
        },
        {
          url:"https://nullreferer.com/?https://ivipid.com/",
          name:"Ivipid Video Maker",
          desc:"Ivipid lets you create custom, high-quality video intros and greeting cards with just a few clicks !"
        },
        
      ]
    },
  
{
      name:"Misc. Links",
      icon:"globe",
      list:[
        {
          url:"https://nullreferer.com/?https://www.netflix.com/browse",
          name:"Netflix",
          desc:"Media Streaming"
        },
        {
          url:"https://nullreferer.com/?https://manganato.com/",
          name:"Manga Ebooks online",
          desc:"Read English Manga free Online."
        },
        {
          url:"https://nullreferer.com/?https://ipleak.net/",
          name:"IPLEAK.NET",
          desc:"What is your IP, What is your DNS, What informations you send to websites."
        },
        {
          url:"https://nullreferer.com/?https://tinyurl.com/",
          name:"TinyURL",
          desc:"shorten that long URL into a tiny URL."
        },
        {
          url:"https://nullreferer.com/?https://panel.dreamhost.com/",
          name:"DreamHost",
          desc:"Web Hosting"
        },
        {
          url:"https://nullreferer.com/?https://nullreferer.com/?",
          name:"Nullreferer",
          desc:"Remove HTTP Referrer from URLs."
        },
        {
          url:"https://nullreferer.com/?https://www.cdkoffers.com/?sscid=71k6_6bvue&",
          name:"CDkoffers",
          desc:"CDkoffers range from steam keys, PlayStation Network cards, and PC games/expansion packs and software keys."
        },
        {
          url:"https://nullreferer.com/?https://www.freenom.com/en/index.html?lang=en",
          name:"Freenom",
          desc:"Freenom World is a fast and anonymous Public DNS resolver."
        },
        {
          url:"https://nullreferer.com/?https://www.buyemp.com/",
          name:"Emergency Medical Products",
          desc:"Since 1972, Emergency Medical Products (EMP) has been your convenient, low-price source for medical and safety supplies. We’re here to help you prepare for a variety of medical scenarios, no matter your occupation or expertise."
        },
        {
          url:"https://nullreferer.com/?https://www.virustotal.com/gui/home/upload",
          name:"VirusTotal",
          desc:"Analyze suspicious files, domains, IPs and URLs to detect malware and other breaches, automatically share them with the security community"
        },
      ]
    },

{
      name:"Auto Links",
      icon:"globe",
      list:[
        {
          url:"https://www.rockauto.com/",
          name:"RockAuto",
          desc:"RockAuto is an online, family business founded in 1999 by automotive engineers with two goals: Liberate information hidden behind the auto parts store counter (by listing all available items and product specifications on RockAuto.com, not just what one store stocks or one counter-person knows) Make auto parts affordable (by remaining a strictly online company, we have no store locations, no counter-people and don't have a lot of money tied up in slow-moving inventory. We pass on those savings with lower prices so cars of all ages can be reliable and fun to drive.) Today, we ship thousands of parts, from hundreds of manufacturers, to millions of customers all over the world. And the RockAuto catalog keeps expanding. Someday, it may be possible to build an entire car using parts from RockAuto!"
        },
        {
          url:"https://parts.ford.com/en.html",
          name:"Ford Parts Online Store",
          desc:"Find the Right Part for Your ford."
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
    return "https://www.google.com/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    //return "http://icon.occ.hk/get.php?url=http://" + url;
    return "https://www.google.com/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://www.cloudflare.com/"','target="_blank"'],el('i',['class="fa fa-heart"'],"") + 'Cloudflare') + ' &copy; 2022-2024 ' + el('a',['class="ui label"'],el('i',['class="fa fa-heart"'],"") + 'HomeFlix-Media')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'All roads lead to Rome')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.google.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="Type anything you want to search……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> Like this domain </a></div>' : ''}`)))
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
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' Selling'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + 'Return'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + 'Contact me') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'Interested？') + el('div',['class="middle aligned row"'],price + column))));

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
