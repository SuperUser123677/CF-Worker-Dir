# CF-Worker-Dir

CF-Worker-Dir is a cloud function program suitable for Cloudflare Worker platform. You can use it to build your own navigation page within one minute. CF-Worker-Dir provides a lot of custom configurations, and it can also reserve an interface to help you sell your own domain name. If your domain name has not yet built a website, it is better to use CF-Worker-Dir to make your domain name no longer wasted.😉

🎉[Demo1](http://sites.51sec.org/)

🎉[Demo2](http://sites.itprosec.com/)

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

```
 

## Licence

MIT
