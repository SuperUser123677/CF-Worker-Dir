# CF-Worker-Dir

CF-Worker-Dir is a cloud function program suitable for Cloudflare Worker platform. You can use it to build your own navigation page within one minute. CF-Worker-Dir provides a lot of custom configurations, and it can also reserve an interface to help you sell your own domain name. If your domain name has not yet built a website, it is better to use CF-Worker-Dir to make your domain name no longer wasted.😉

🎉[Demo](http://sites.51sec.org/)

<details>
<summary>📷Screenshot</summary>
<img src="https://i.loli.net/2020/02/14/ahU32dQxMct9ugX.png"/>
</details>

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
const config = {
  title: "Your Own Naviation Website",                 //customize your own site title
  subtitle: "Cloudflare Workers Nav", //define the sub title
  logo_icon: "sitemap",               //choose your logo icon. Currently only supports (eg:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //enable  一言 (hitokoto) plug in
  search:true,                        //enable search function  
  search_engine:[                     //search engine list
    {
      name:"百度一下",                   //search engine name
      template:"https://www.baidu.com/s?wd=$s"  //搜索引擎模板（含关键词$s）
    }
  ],
  selling_ads: true,                  //enable domain selling function?
  sell_info:{
    domain:"example.com",             //current domain name
    price:500,                        //price
    mon_unit:"yen sign",              //currentcy (eg:https://semantic-ui.com/elements/icon.html#computers)
    contact:[                         //contact methods
      {
        type:"envelope",              //methods ("weixin","qq","telegram plane","envelope" or "phone")
        content:"info@example.com"    //details of contact method
      }
    ]                        
  },
  lists: [                            //Website infomration
    {
      name:"Technology",                    //website type
      icon:"code",                    //Website type icon. Only support (eg:https://semantic-ui.com/elements/icon.html)
      list:[
        {
          url:"https://oschina.net/", //Website url
          name:"开源中国",             //Website name
          desc:"领先的中文开源技术社区" //Website description
        }
      ]
    }
  ]
}
```

## Todo
- [ ] 模块化
- [ ] 米表列表
- [ ] 插件化（倒计时/一言/小工具）  
- [ ] 国际化  

## Licence

MIT
