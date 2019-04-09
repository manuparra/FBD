
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"191",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",5],8,16],".split(\"\/\").length){if(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",6],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",5],8,16],"+\"\/?\"+",["escape",["macro",6],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",5],8,16],"+\"\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",6],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",15]],["map","index","1","group",["macro",16]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",17]],["map","index","2","dimension",["macro",18]],["map","index","3","dimension",["macro",15]],["map","index","4","dimension",["macro",19]],["map","index","5","dimension",["macro",20]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"unifiedLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com.*","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",33]],["map","index","4","group",["macro",34]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",7]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",36]],["map","index","2","dimension",["macro",37]],["map","index","3","dimension",["macro",38]],["map","index","4","dimension",["macro",39]],["map","index","5","dimension",["macro",40]],["map","index","9","dimension",["macro",41]],["map","index","10","dimension",["macro",42]],["map","index","11","dimension",["macro",43]],["map","index","12","dimension",["macro",44]],["map","index","13","dimension",["macro",34]],["map","index","14","dimension",["macro",45]],["map","index","15","dimension",["macro",46]],["map","index","16","dimension",["macro",47]],["map","index","17","dimension",["macro",48]],["map","index","18","dimension",["macro",33]],["map","index","19","dimension",["macro",49]],["map","index","20","dimension",["macro",50]],["map","index","21","dimension",["macro",51]],["map","index","27","dimension",["macro",52]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",53],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*amazon.*","value","true"],["map","key",".*aws.*","value","true"],["map","key",".*kubernetes.*","value","true"],["map","key",".*sre.*","value","true"],["map","key",".*devops.*","value","true"],["map","key",".*microservices.*","value","true"],["map","key",".*containers.*","value","true"],["map","key",".*distributed.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*data-science.*","value","true"],["map","key",".*big-data.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*data-engineering.*","value","true"],["map","key",".*data-architecture.*","value","true"],["map","key",".*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*software-architecture.*","value","true"],["map","key",".*microservices.*","value","true"],["map","key",".*serverless.*","value","true"],["map","key",".*software-engineering.*","value","true"],["map","key",".*chaos-engineering.*","value","true"],["map","key",".*evolutionary-architecture.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*data-science.*","value","true"],["map","key",".*big-data.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*data-engineering.*","value","true"],["map","key",".*data-architecture.*","value","true"],["map","key",".*business-intelligence.*","value","true"],["map","key",".*databases.*","value","true"],["map","key",".*analytics.*","value","true"],["map","key",".*data-show-podcast.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*reinforcement-learning.*","value","true"],["map","key",".*nueral-networks.*","value","true"],["map","key",".*natural-language-processing.*","value","true"],["map","key",".*bots.*","value","true"],["map","key",".*agents.*","value","true"],["map","key",".*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*machine-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*reinforcement-learning.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*GANS.*","value","true"],["map","key",".*NLP.*","value","true"],["map","key",".*natural-language-processing.*","value","true"],["map","key",".*NSTM.*","value","true"],["map","key",".*tensorflow.*","value","true"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",77],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",78]]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*open-source.*","value","false"],["map","key",".*cloud-native.*","value","false"],["map","key",".*software-development.*","value","false"],["map","key",".*blockchain.*","value","false"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*devops.*","value","true"],["map","key",".*kubernetes.*","value","true"],["map","key",".*cloud-native.*","value","true"],["map","key",".*site-reliability-engineering.*","value","true"],["map","key",".*systems-engineering.*","value","true"],["map","key",".*configuration-management.*","value","true"],["map","key",".*containerization.*","value","true"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "live_only":true,
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",11],
      "tag_id":32
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"tfRcCMnwwHQQk4a4jwM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",11],
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":39
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",23],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",24],
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",27],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",28]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"Card",
      "vtp_eventLabel":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",28]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",23],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",24],
      "vtp_eventCategory":["macro",25],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",54],
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",27],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":68
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv2po",
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",54],
      "vtp_eventAction":["template",["macro",55],"%"],
      "vtp_eventLabel":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",56],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"926848715",
      "vtp_conversionLabel":"Lb0LCIvGqpABEMut-rkD",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":112
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":113
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",56],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1065103245",
      "vtp_conversionLabel":"vCakCOu-148BEI3f8PsD",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":114
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":115
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv3z2",
      "tag_id":122
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"AW-773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",11],
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",56],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1065103245",
      "vtp_conversionLabel":"u_1aCI6GipMBEI3f8PsD",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":132
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":133
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",56],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"804958955",
      "vtp_conversionLabel":"JiwyCPH8jZUBEOvl6v8C",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":155
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":156
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",56],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"voGZCImi7ZQBELOysOID",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":157
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":158
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":161
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":162
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",11],
      "tag_id":165
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",6],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":180
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1669222_90",
      "tag_id":181
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":182
    },{
      "function":"__cl",
      "tag_id":183
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":184
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":185
    },{
      "function":"__hl",
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId=2775\u0026amp;ITEM1=Safari-Subscription\u0026amp;AMT1=",["escape",["macro",13],12],"\u0026amp;QTY1=1\u0026amp;CID=1525054\u0026amp;OID=",["escape",["macro",57],12],"\u0026amp;TYPE=",["escape",["macro",58],12],"\u0026amp;CURRENCY=",["escape",["macro",59],12],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SafariSubscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;if(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",5],8,16],".split(\"\/\")[1]}else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"\",isSubDomainTracker=!0,isSeparateDomainTracker=!1,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",action:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",\nlabel:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];\nmainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0;if(!isExcluded(arr[i])){var mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(b){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}}function _isSocial(b){return\"\"!=socSites?null!=b.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(b){return\"\"!=folders_to_track?null!=b.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(b){for(var c=0,a=0;a\u003CextDoc.length;a++){var d=b.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[a])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(b,c){var a=b.toLowerCase().split(\".\");a=a[a.length-1].split(\/[#?\u0026?]\/);var d=b.toLowerCase().split(c);d=d[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=a;eValues.downloads.label=eValues.outbound_downloads.label=d}\nfunction _tagLinks(b,c,a,d,g,e,f){isGTM?b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+a+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+a+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(b){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var a=b.parentNode;null!=a;){if(a==c)return!0;a=a.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;a=\/((.*)oreilly.com\\\/(learning|idea)(.*))\/i;return c.test(b.href)\u0026\u0026a.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(b).parents(\".article-body\").length||\njQuery(b).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar checkin=new Date,checkout=new Date;checkin.setDate((new Date).getDate()+10);checkout.setDate((new Date).getDate()+24);\nvar trialends=(1==(checkin.getMonth()+1).toString().length?\"0\"+(checkin.getMonth()+1):checkin.getMonth()+1)+\"\/\"+(1==checkin.getDate().toString().length?\"0\"+checkin.getDate():checkin.getDate())+\"\/\"+checkin.getFullYear(),trialends2=(1==(checkout.getMonth()+1).toString().length?\"0\"+(checkout.getMonth()+1):checkout.getMonth()+1)+\"\/\"+(1==checkout.getDate().toString().length?\"0\"+checkout.getDate():checkout.getDate())+\"\/\"+checkout.getFullYear();window.criteo_q=window.criteo_q||[];\nvar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";\nwindow.criteo_q.push({event:\"manualFlush\"},{event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"},function(){setTimeout(function(){criteo_q.push({event:\"viewSearch\",din:trialends,dout:trialends2},{event:\"viewHome\"},{event:\"setData\",trialends:trialends},{event:\"flushEvents\"})},1E3)});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"##user_email##\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"##subscription_cost##\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cdiv class=\"remarketing\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"setData\",ui_strata:\"VLNY18\"},{event:\"viewHome\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cdiv class=\"remarketing\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AIUK2018\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username;window.medalliaUserIDvsg=window.__INITIAL_STATE__.user.user_identifier;console.log(\"This ran\")})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"436018\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=436018\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SANY19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"conferenceID\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"480604\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=480604\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(b){var a=document.getElementById(b);a.kBind(\"firstPlay.fp\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".fp\")});a.kBind(\"firstQuartile.1q\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"25%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".1q\")});a.kBind(\"secondQuartile.2q\",\nfunction(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".2q\")});a.kBind(\"thirdQuartile.3q\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"75%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0});a.kUnbind(\".3q\")});a.kBind(\"playerPlayEnd.pe\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video\",eventAct:\"100%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,\nnonInteraction:0});a.kUnbind(\".pe\")});var d=!1;a.addJsListener(\"playerUpdatePlayhead\",function(){var c=a.evaluate(\"{video.player.currentTime}\"),b=a.evaluate(\"{mediaProxy.entry.duration}\");c=100*parseFloat(c\/b);95\u003Cc\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video\",eventAct:\"95%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}))});a.kUnbind(\".pp\")});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar tag=document.createElement(\"script\");tag.src=document.location.protocol+\"\/\/www.youtube.com\/iframe_api\";var firstScriptTag=document.getElementsByTagName(\"script\")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var videoArray=[],playerArray=[],Settings_HitType=\"gtm\";function _sendYouTubeProgressEvent(a,b){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"\"+b+\"%\",eventLbl:a})}\n(function(a){function b(){var b=0;a(\"iframe\").each(function(){a(this);var c=this.src;IsYouTube(c)\u0026\u0026(this.src=YTUrlHandler(c),c=youtube_parser(c),videoArray[b]=c,this.setAttribute(\"id\",c),b++)})}a(document).ready(function(){b()})})(jQuery);function onYouTubeIframeAPIReady(){for(var a=0;a\u003CvideoArray.length;a++)playerArray[a]=new YT.Player(videoArray[a],{events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(a){}cCi=1;\nfunction onPlayerStateChange(a){var b=",["escape",["macro",44],8,16],";var e=a.target.getVideoData().video_id;for(var c=0,d=0;d\u003CvideoArray.length;d++)videoArray[d]==e\u0026\u0026(c=d);e=(parseInt(playerArray[c].getCurrentTime())\/parseInt(playerArray[c].getDuration())*100).toFixed();a.data==YT.PlayerState.PLAYING\u0026\u00260==e\u0026\u0026(eval(\"(function() {  var flag_\"+cCi+\"_25 \\x3d false;var flag_\"+cCi+\"_50 \\x3d false;var flag_\"+cCi+\"_75 \\x3d false;var flag_\"+cCi+\"_95 \\x3d false;function xx\"+cCi+\"(vindx){ var percentage \\x3d ((parseInt(playerArray[vindx].getCurrentTime()) \/ parseInt(playerArray[vindx].getDuration())) * 100).toFixed();var videotitle \\x3d playerArray[vindx].getVideoData().title; if (percentage \\x3c 100) { if (percentage \\x3e 25 \\x26\\x26 percentage \\x3c\\x3d 50 \\x26\\x26 flag_\"+\ncCi+\"_25 \\x3d\\x3d false) { _sendYouTubeProgressEvent(videotitle,25); flag_\"+cCi+\"_25\\x3dtrue; }if (percentage \\x3e 50 \\x26\\x26 percentage \\x3c\\x3d 75 \\x26\\x26 flag_\"+cCi+\"_50 \\x3d\\x3d false) {_sendYouTubeProgressEvent(videotitle,50);flag_\"+cCi+\"_50\\x3dtrue;}if (percentage \\x3e 75 \\x26\\x26 percentage \\x3c\\x3d 95 \\x26\\x26 flag_\"+cCi+\"_75 \\x3d\\x3d false) {_sendYouTubeProgressEvent(videotitle,75);flag_\"+cCi+\"_75\\x3dtrue;}if (percentage \\x3e 95 \\x26\\x26 flag_\"+cCi+\"_95 \\x3d\\x3d false) {_sendYouTubeProgressEvent(videotitle,95);flag_\"+\ncCi+\"_95\\x3dtrue;}} }setInterval(function(){  xx\"+cCi+\"(\"+c+\"); }, parseInt(\"+playerArray[c].getDuration()+\")\/10); })();\"),cCi++);a.data==YT.PlayerState.PLAYING\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"play\",eventLbl:b,eventVal:0})}function youtube_parser(a){var b=\/^.*(youtu.be\\\/|v\\\/|u\\\/\\w\\\/|embed\\\/|watch\\?v=|\u0026v=)([^#\u0026\\?]*).*\/;if((a=a.match(b))\u0026\u002611==a[2].length)return a[2]}\nfunction IsYouTube(a){var b=\/^.*((youtu.be\\\/)|(v\\\/)|(\\\/u\\\/\\w\\\/)|(embed\\\/)|(watch\\?))\\??v?=?([^#\u0026\\?]*).*\/;a=a.match(b);return null!=a\u0026\u00260\u003Ca.length?!0:!1}\nfunction YTUrlHandler(a){a=a.replace(\/origin=(https?:\\\/\\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})\u0026?\/ig,\"origin\\x3d\"+document.location.protocol+\"\/\/\"+document.location.host);stAdd=\"\";adFlag=!1;-1==a.indexOf(\"https\")\u0026\u0026(a=a.replace(\"http\",\"https\"));-1==a.indexOf(\"?\")\u0026\u0026(stAdd=\"?flag\\x3d1\");-1==a.indexOf(\"enablejsapi\")\u0026\u0026(stAdd+=\"\\x26enablejsapi\\x3d1\",adFlag=!0);-1==a.indexOf(\"origin\")\u0026\u0026(stAdd+=\"\\x26origin\\x3d\"+document.location.protocol+\"\/\/\"+document.location.host,adFlag=!0);return 1==adFlag?a+stAdd:a};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",44],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nyjdi\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"11004156\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"497295923798472\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=497295923798472\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-926848715\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-926848715\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"SSF2019\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-926848715\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-926848715\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{send_to:\"AW-926848715\/Lb0LCIvGqpABEMut-rkD\",transaction_id:",["escape",["macro",56],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.San Francisco Registration Confirmation\",orderid:",["escape",["macro",56],8,16],",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":119
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"AINY19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.London 2019 Registration Confirmation\",orderid:\"INSERT+ORDER+ID\",event:\"refresh\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"strata19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"strata19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-1065103245\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-1065103245\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"user_email\"},{event:\"setData\",ui_strata:\"VLCA19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"436018\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=436018\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewHome\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SASJ19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":146
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"ZMY7MBBFIFDUBAVNOE7XUJ\";adroll_pix_id=\"JPUOHWQVQZBGBBTRCVCUVP\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"480604\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=480604\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"ZMY7MBBFIFDUBAVNOE7XUJ\";adroll_pix_id=\"JPUOHWQVQZBGBBTRCVCUVP\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"562374324175078\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=562374324175078\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BUYJ3NIIJFFQJIFHTF6V72\";adroll_pix_id=\"DITK2PSWM5FXBNEB3QXQRH\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":159
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:2995,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"db165134aeed46bea98098dc4a8f09f7\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/db165134aeed46bea98098dc4a8f09f7\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}try{window.twttr=function(b,a,d){var c,e=b.getElementsByTagName(a)[0];if(!b.getElementById(d))return b=b.createElement(a),b.id=d,b.src=\"\/\/platform.twitter.com\/widgets.js\",e.parentNode.insertBefore(b,e),window.twttr||(c={_e:[],ready:function(a){c._e.push(a)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(a){a.events.bind(\"tweet\",trackTwitter)})}catch(b){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,b){if(a){var c=new RegExp(\"[\\\\?\\x26#]\"+b+\"\\x3d([^\\x26#]*)\");c=c.exec(a);if(null!=c)return unescape(c[1])}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:\"0.01\",currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv3zg\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"OSCON19\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":179
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"www.oreilly.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsor-strata"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",13],
      "arg1":"0.0"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"VPTracker"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"src-Card-coverAnchor"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"(^$|((^|,)1669222_90($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"(.*)oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"conferences.oreilly.com|learning.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/library\\\/view.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)get.oreilly.com(.*)|(.*)www.oreilly.com(.*)|(.*)members.oreilly.com(.*)|(.*)ssearch.oreilly.com(.*)|(.*)shop.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"book|article",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"artificial-intelligence\/ai-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata\/strata-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/velocity\/vl-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/data-science\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/ds-series-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"blended-courses"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.qa.safariflow.com\/home\/"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(.*))"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"(^$|((^|,)1669222_110($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.review(.*)"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"safaribooksonline.com\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/signup\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"cybermonday-2018.html"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/artificial-intelligence\/ai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-eu"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/about"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"video"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((.*)oreilly.com\\\/(learning|idea)(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"podcast"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.oreilly.com\/data\/free\/ai-adoption-in-the-enterprise.csp"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.oreilly.com\/data\/free\/state-of-machine-learning-adoption-in-the-enterprise.csp"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"artificial-intelligence\/ai-ny"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata-ca"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"invoice"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/content\/about"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/schedule\/speakers"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny\/schedule\/2019-04-15"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/artificial-intelligence\/ai-ny\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu\/public\/register\/invoice"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"purchased"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/content\/sponsors"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"strata\/strata-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-eu\/public\/schedule\/topic\/2913"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/sponsors"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/resources"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/velocity\/vl-ca\/public\/register\/order"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/resources"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/content\/about"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/order"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",68],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"data-science"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/purchased"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/register\/purchased\/"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/oscon\/oscon-or"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/about"
    }],
  "rules":[
    [["if",0,1],["add",3,14]],
    [["if",1,2],["add",3,14]],
    [["if",1],["add",4,9,29,39,42,43,44,45]],
    [["if",1,3],["add",5]],
    [["if",1,4],["add",5]],
    [["if",1,5,6],["add",6,46,48,51]],
    [["if",1],["unless",7],["add",7,20,38]],
    [["if",8,9],["add",8,10,21,50]],
    [["if",1,10,11],["add",11]],
    [["if",1,12],["add",11]],
    [["if",10,13],["add",12]],
    [["if",13,14],["add",12]],
    [["if",10,15],["add",13]],
    [["if",16,17,18],["add",15]],
    [["if",1,19],["add",16]],
    [["if",15,20],["add",17]],
    [["if",15,21],["add",17]],
    [["if",15,22],["add",17]],
    [["if",13,23],["unless",24,25],["add",18]],
    [["if",1,26],["unless",25,27],["add",19]],
    [["if",1,28],["add",22]],
    [["if",29,30,31],["add",23]],
    [["if",1,32],["add",24,81]],
    [["if",1,33],["add",25,68,80]],
    [["if",1,34],["add",26,79,82]],
    [["if",1,35],["add",27,72,120]],
    [["if",1,36],["add",28,33,115]],
    [["if",1,37],["add",30,88,94,97]],
    [["if",1,38],["add",31]],
    [["if",1,39],["add",32,102]],
    [["if",1,40],["add",34,108,111,113,121],["block",109]],
    [["if",1,41],["add",35,109,110,112]],
    [["if",1,42],["add",36,119],["block",118]],
    [["if",1,43],["add",37,118]],
    [["if",1,44],["add",40]],
    [["if",1,45],["add",41]],
    [["if",1],["unless",46],["add",47]],
    [["if",1,47],["add",0,2]],
    [["if",48,49],["add",49]],
    [["if",50,51,52],["add",49]],
    [["if",1,53],["add",1]],
    [["if",1,54],["add",1,56]],
    [["if",1,55],["add",52]],
    [["if",1,56],["add",53]],
    [["if",1,57],["add",53]],
    [["if",1,58],["add",53]],
    [["if",1,59],["add",54]],
    [["if",1,60],["add",55]],
    [["if",1,61],["add",57]],
    [["if",1,62],["add",58]],
    [["if",1,63],["add",59]],
    [["if",1,64],["add",60]],
    [["if",1,65],["add",61]],
    [["if",1,66],["add",62,63]],
    [["if",49,67],["add",64,65]],
    [["if",49,68],["add",66]],
    [["if",49,69],["add",67]],
    [["if",1,70],["add",68,70,84]],
    [["if",1,71],["add",68,70,84]],
    [["if",1,72],["add",69,70,71,85,103,131]],
    [["if",1,73,74],["unless",75],["add",73]],
    [["if",1,76],["add",74]],
    [["if",1,77],["add",75]],
    [["if",1,78],["add",76]],
    [["if",1,79],["add",76]],
    [["if",1,80],["add",77]],
    [["if",1,81],["add",78]],
    [["if",1,82],["add",82]],
    [["if",1,83],["add",83]],
    [["if",1,84],["add",84]],
    [["if",1,85],["add",84]],
    [["if",1,86],["add",85]],
    [["if",1,87],["add",85]],
    [["if",1,88],["add",85]],
    [["if",1,89],["add",85]],
    [["if",1,90],["add",86]],
    [["if",1,91],["add",87]],
    [["if",1,92],["add",88]],
    [["if",1,93],["unless",75,94],["add",89,95]],
    [["if",1,95],["add",90]],
    [["if",1,96],["add",91]],
    [["if",1,97],["add",91]],
    [["if",1,98],["add",92]],
    [["if",1,99],["add",93]],
    [["if",1,100],["add",96,120]],
    [["if",1,101],["add",97]],
    [["if",1,102],["add",98]],
    [["if",1,103],["add",99]],
    [["if",1,104],["add",99]],
    [["if",1,105],["add",100]],
    [["if",1,106],["add",101]],
    [["if",1,107],["add",104]],
    [["if",1,108],["add",105]],
    [["if",1,109],["add",105]],
    [["if",1,110],["add",106]],
    [["if",1,111],["add",107]],
    [["if",1,112],["add",114]],
    [["if",1,113],["add",116]],
    [["if",1,114],["add",117]],
    [["if",1,115],["add",118]],
    [["if",116],["add",122]],
    [["if",1,117],["add",123,125]],
    [["if",1,118],["add",124],["block",123]],
    [["if",1,119],["add",126]],
    [["if",1,120],["add",127]],
    [["if",1,121],["add",128]],
    [["if",1,122],["add",129]],
    [["if",1,123],["add",130]]]
},
"runtime":[
[],[]
]


};
var aa,ca=this,da=/^[\w+/_-]+[=]{0,2}$/,ea=null,ka=function(a,b){function c(){}c.prototype=b.prototype;a.Wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fg=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var la=function(){},ma=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},na=function(a){return"number"==typeof a&&!isNaN(a)},oa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ra=function(a,b){if(a&&oa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},sa=function(a,b){if(!na(a)||
!na(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(oa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ya=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},za=function(){return(new Date).getTime()},Aa=function(){this.prefix="gtm.";this.values=
{}};Aa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Aa.prototype.get=function(a){return this.values[this.prefix+a]};Aa.prototype.contains=function(a){return void 0!==this.get(a)};
var Ba=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ca=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ea=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Fa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ka=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},p=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=p(e,c[d])):Ka(e)?(Ka(c[d])||(c[d]={}),c[d]=p(e,c[d])):c[d]=e}return c};var u=window,x=document,La=navigator,Ma=x.currentScript&&x.currentScript.src,Na=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pa=function(a,b,c){var d=x.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=x.getElementsByTagName("script")[0]||x.body||x.head;l.parentNode.insertBefore(d,l);return d},Qa=function(){if(Ma){var a=Ma.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ra=function(a,b){var c=x.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=x.body&&x.body.lastChild||
x.body||x.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},Sa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){u.setTimeout(a,0)},Va=function(a){var b=
x.getElementById(a);if(b&&Ua(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ua(document.all[a][c],"id")==a)return document.all[a][c];return b},Ua=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=x.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a=/:[0-9]+$/,ab=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},C=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=bb(a.protocol)||bb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace($a,"").toLowerCase());var g=b,h,k=bb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=cb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace($a,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
qa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=ab(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},bb=function(a){return a?a.replace(":","").toLowerCase():""},cb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},db=function(a){var b=x.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace($a,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var eb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},hb=function(a,b,c,d){var e=fb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=gb(e,function(a){return a.xb},b);if(1===e.length)return e[0].id;e=gb(e,function(a){return a.Ua},c);return e[0]?e[0].id:void 0}};
function ib(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=eb(b,e).indexOf(c)}
var mb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,r=void 0,t;for(t in h)if(h.hasOwnProperty(t)){var v=h[t];if(null!=v)switch(t){case "secure":v&&(m+="; secure");break;case "domain":q=v;break;default:"path"==t&&(r=v),"expires"==t&&v instanceof Date&&(v=
v.toUTCString()),m+="; "+t+"="+v}}if("auto"===q){for(var w=kb(),A=0;A<w.length;++A){var E="none"!=w[A]?w[A]:void 0;if(!lb(E,r)&&ib(m+(E?"; domain="+E:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!lb(q,r)&&ib(m,a,l)}return k};function gb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function fb(a,b){for(var c=[],d=eb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),xb:1*k[0]||1,Ua:1*k[1]||1}))}}return c}
var nb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ob=/(^|\.)doubleclick\.net$/i,lb=function(a,b){return ob.test(document.location.hostname)||"/"===b&&nb.test(a)},kb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var pb=[],qb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},rb=function(a){return qb[a]},sb=/[\x00\x22\x26\x27\x3c\x3e]/g;var xb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,yb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},zb=function(a){return yb[a]};
pb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(xb,zb)+"'"}};var Fb=/['()]/g,Gb=function(a){return"%"+a.charCodeAt(0).toString(16)};pb[12]=function(a){var b=
encodeURIComponent(String(a));Fb.lastIndex=0;return Fb.test(b)?b.replace(Fb,Gb):b};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ib={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jb=function(a){return Ib[a]};pb[16]=function(a){return a};var Lb=[],Mb=[],Nb=[],Ob=[],Pb=[],Qb={},Rb,Sb,Tb,Ub=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Vb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Qb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Qb[c](e):(void 0)(c,e,b)},Xb=function(a,b,c,d){c=c||[];d=d||la;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Wb(a[g],b,
c,d));return e},Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Qb[b];return c?c.b||0:0},Wb=function(a,b,c,d){if(oa(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Wb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Lb[h];if(!k||b(k))return;c[h]=!0;try{var l=Xb(k,b,c,d);e=Vb(l,d);Tb&&(e=Tb.ff(e,l))}catch(E){d(E,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Wb(a[m],b,c,d)]=Wb(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,q=1;q<a.length;q++){var r=Wb(a[q],b,c,d);Sb&&(n=n||r===Sb.nb);e.push(r)}return Sb&&n?Sb.kf(e):e.join("");case "escape":e=Wb(a[1],b,c,d);if(Sb&&oa(a[1])&&"macro"===a[1][0]&&Sb.Nf(a))return Sb.Yf(e);e=String(e);for(var t=2;t<a.length;t++)pb[a[t]]&&(e=pb[a[t]](e));return e;case "tag":var v=a[1];if(!Ob[v])throw Error("Unable to resolve tag reference "+v+".");return e={wd:a[2],index:v};case "zb":var w={arg0:a[2],arg1:a[3],
ignore_case:a[5]};w["function"]=a[1];var A=Zb(w,b,c,d);a[4]&&(A=!A);return A;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zb=function(a,b,c,d){try{return Rb(Xb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var $b=null,cc=function(a,b){function c(a){for(var b=0;b<a.length;b++)e[a[b]]=!0}var d=[],e=[];$b=ac(a,b||function(){});for(var g=0;g<Mb.length;g++){var h=Mb[g],k=bc(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var n=[],q=0;q<Ob.length;q++)d[q]&&!e[q]&&(n[q]=!0);return n},bc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=$b(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=$b(e[g]);if(null===
h)return null;if(h)return!1}return!0},ac=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Zb(Nb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Se&&(h["fix_"+k]=!0),h.xd=h.xd||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=q.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,C:b.C,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||g.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],C:d,Za:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},r=function(){for(var b in l)if(l[b].test(a)){var c=q[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.xd&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.Jd=function(){return this[this.length-1]};d.xc=function(a){var b=this.Jd();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.ef=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Za=b.test(a.tagName)||a.Za);return a},g=r,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.xc("TABLE")?(a="<TBODY>"+a,m()):h.Kg&&c.test(e)&&d.ef(e)?d.xc(e)?k():(a="</"+b.tagName+">"+a,m()):b.Za||d.push(b)},endTag:function(a){d.Jd()?h.vf&&!d.xc(a.tagName)?k():d.pop():h.vf&&(g(),m())}},m=function(){var b=a,c=e(g());a=b;if(c&&
l[c.type])l[c.type](c)};r=function(){m();return e(g())}}();return{append:function(b){a+=b},eg:r,Qg:function(a){for(var b;(b=r())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Rg:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.Xg="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Tg=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Yg=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.C){var d=a.C[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Za?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Jg=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Xe=a.Xe||!b[h]&&h;dc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function g(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(t){var b=[];c(a,function(a){b.push(a)});return b}}var k={Ie:a,Je:a,Ke:a,Le:a,Te:a,Ue:function(a){return a},done:a,error:function(a){throw a;},ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var g=a.getAttribute(e);return b(g)?String(g):g}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,$a:d.defaultView||d.parentWindow,xa:d,Cb:dc("",{Se:!0}),bc:[b],Fc:"",Gc:d.createElement(b.nodeName),Ya:[],la:[]});a(this.Gc,"proxyof",0)}g.prototype.write=function(){[].push.apply(this.la,arguments);for(var a;!this.wb&&this.la.length;)a=this.la.shift(),"function"===typeof a?this.af(a):this.Rc(a)};g.prototype.af=function(a){var b={type:"function",value:a.name||a.toString()};this.Cc(b);a.call(this.$a,this.xa);this.Nd(b)};
g.prototype.Rc=function(a){this.Cb.append(a);for(var b,c=[],d,e;(b=this.Cb.eg())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.zg(c);d&&this.Bf(b);e&&this.Cf(b)};g.prototype.zg=function(a){var b=this.Ye(a);b.qd&&(b.oc=this.Fc+b.qd,this.Fc+=b.cg,this.Gc.innerHTML=b.oc,this.wg())};g.prototype.Ye=function(a){var b=this.bc.length,d=[],e=[],g=[];c(a,function(a){d.push(a.text);if(a.C){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.C.id&&"ps-style"!==a.C.id&&g.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Za?" />":">"))}}else e.push(a.text),g.push("endTag"===a.type?a.text:"")});return{Zg:a,raw:d.join(""),qd:e.join(""),cg:g.join("")}};g.prototype.wg=function(){for(var c,d=[this.Gc];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.bc[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");
g&&this.bc[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};g.prototype.Bf=function(a){var b=this.Cb.clear();b&&this.la.unshift(b);a.src=a.C.src||a.C.Cg;a.src&&this.Ya.length?this.wb=a:this.Cc(a);var c=this;this.yg(a,function(){c.Nd(a)})};g.prototype.Cf=function(a){var b=this.Cb.clear();b&&this.la.unshift(b);a.type=a.C.type||a.C.Dg||"text/css";this.Ag(a);b&&this.write()};g.prototype.Ag=function(a){var b=this.$e(a);this.Lf(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.xa.createTextNode(a.content)))};g.prototype.$e=function(a){var b=this.xa.createElement(a.tagName);b.setAttribute("type",a.type);d(a.C,function(a,c){b.setAttribute(a,c)});return b};g.prototype.Lf=function(a){this.Rc('<span id="ps-style"/>');var b=this.xa.getElementById("ps-style");b.parentNode.replaceChild(a,b)};g.prototype.Cc=function(a){a.Uf=this.la;this.la=[];this.Ya.unshift(a)};g.prototype.Nd=function(a){a!==this.Ya[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Ya.shift(),this.write.apply(this,a.Uf),!this.Ya.length&&this.wb&&(this.Cc(this.wb),this.wb=null))};g.prototype.yg=function(a,b){var c=this.Ze(a),d=this.pg(c),e=this.options.Ie;a.src&&(c.src=a.src,this.mg(c,d?e:function(){b();e()}));try{this.Kf(c),a.src&&!d||b()}catch(B){this.options.error(B),b()}};g.prototype.Ze=function(a){var b=this.xa.createElement(a.tagName);d(a.C,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};g.prototype.Kf=function(a){this.Rc('<span id="ps-script"/>');
var b=this.xa.getElementById("ps-script");b.parentNode.replaceChild(a,b)};g.prototype.mg=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};g.prototype.pg=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.ig&&a.src&&a.hasAttribute("async"))};
return g}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Je(),a.stream=c.apply(null,a),b.Ke())}function c(c,g,k){function l(a){a=k.Ue(a);w.write(a);k.Le(a)}w=new n(c,k);w.id=d++;w.name=k.name||w.id;var m=c.ownerDocument,q={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var r=w.$a.onerror||a;w.$a.onerror=function(a,b,c){k.error({Ng:a+
" - "+b+":"+c});r.apply(w.$a,arguments)};w.write(g,function(){e(m,q);w.$a.onerror=r;k.done();w=null;b()});return w}var d=0,m=[],w=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=g(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Lg?c[0]:c;var h=[c,d,e];c.Xf={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Te(h);m.push(h);w||b();return c.Xf},{streams:{},Pg:m,Eg:n})}();ec=l.postscribe}})();var D={},G=null,pc=Math.random();D.o="GTM-5P4V6Z";D.rb="2q1";var qc="www.googletagmanager.com/gtm.js";var rc=qc,sc=null,tc=null,uc=null,vc="//www.googletagmanager.com/a?id="+D.o+"&cv=191",wc={},xc={},yc=function(){var a=G.sequence||0;G.sequence=a+1;return a};var K=function(a,b,c,d){return(2===zc()||d||"http:"!=u.location.protocol?a:b)+c},zc=function(){var a=Qa(),b;if(1===a)a:{var c=rc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=x.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Ac=!1;var N=function(){var a=function(a){return{toString:function(){return a}}};return{Vc:a("convert_case_to"),Wc:a("convert_false_to"),Xc:a("convert_null_to"),Yc:a("convert_true_to"),Zc:a("convert_undefined_to"),ra:a("function"),ye:a("instance_name"),ze:a("live_only"),Ae:a("malware_disabled"),Be:a("once_per_event"),md:a("once_per_load"),nd:a("setup_tags"),Ce:a("tag_id"),od:a("teardown_tags")}}();var Dc=new Aa,Ec={},Fc={},Jc={set:function(a,b){p(Gc(a,b),Ec);Hc()},get:function(a){return Ic(a,2)},reset:function(){Dc=new Aa;Ec={};Hc()}},Ic=function(a,b){return 2!=b?Dc.get(a):Kc(a)},Kc=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Mc(d)},Mc=function(a){for(var b=
Ec,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Pc=function(a,b){Fc.hasOwnProperty(a)||(Dc.set(a,b),p(Gc(a,b),Ec),Hc())},Gc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},Hc=function(a){ta(Fc,function(b,c){Dc.set(b,c);p(Gc(b,void 0),Ec);p(Gc(b,c),Ec);a&&delete Fc[b]})};var Qc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Rc={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Sc={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var Uc=function(a){var b=Ic("gtm.whitelist");var c=b&&Fa(wa(b),Rc),d=Ic("gtm.blacklist")||Ic("tagTypeBlacklist")||[];
Tc()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Fa(wa(d),Sc),g={};return function(h){var k=h&&h[N.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=xc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>qa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>qa(c,l[q])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var r=!1;if(d){var t;if(!(t=0<=qa(e,k)))a:{for(var v=l||[],w=new Aa,
A=0;A<e.length;A++)w.set(e[A],!0);for(var E=0;E<v.length;E++)if(w.get(v[E])){t=!0;break a}t=!1}r=t}return g[k]=!m||r}},Tc=function(){return Qc.test(u.location&&u.location.hostname)};var Wc=function(a){return function(b,c){if(na(c))a(b,c);else{b instanceof Vc||(b=new Vc(b));var d=b;c&&d.jc.push(c);throw d;}}},Vc=function(a){this.Tf=a;this.jc=[]};ka(Vc,Error);var Xc={ff:function(a,b){b[N.Vc]&&"string"===typeof a&&(a=1==b[N.Vc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(N.Xc)&&null===a&&(a=b[N.Xc]);b.hasOwnProperty(N.Zc)&&void 0===a&&(a=b[N.Zc]);b.hasOwnProperty(N.Yc)&&!0===a&&(a=b[N.Yc]);b.hasOwnProperty(N.Wc)&&!1===a&&(a=b[N.Wc]);return a}};var Yc={active:!0,isWhitelisted:function(){return!0}},Zc=function(a){var b=G.zones;!b&&a&&(b=G.zones=a());return b};var $c=!1,ad=0,bd=[];function cd(a){if(!$c){var b=x.createEventObject,c="complete"==x.readyState,d="interactive"==x.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){$c=!0;for(var e=0;e<bd.length;e++)z(bd[e])}bd.push=function(){for(var a=0;a<arguments.length;a++)z(arguments[a]);return 0}}}function dd(){if(!$c&&140>ad){ad++;try{x.documentElement.doScroll("left"),cd()}catch(a){u.setTimeout(dd,50)}}}var ed=function(a){$c?a():bd.push(a)};var fd=function(){function a(a){return!na(a)||0>a?0:a}if(!G._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=na(Jc.get("gtm.start"))?Jc.get("gtm.start"):0;G._li={cst:a(c-b),cbt:a(tc-b)}}};var jd=!1,kd=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},ld=!1;var md=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(!u[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}fd();return u[b]},nd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=kd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var pd=function(){},od=function(){return u.GoogleAnalyticsObject||"ga"},qd=!1;var xd=function(a){};
function wd(a,b){a.containerId=D.o;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};
var yd=function(){return"&tc="+Ob.filter(function(a){return a}).length},Hd=function(){zd&&(u.clearTimeout(zd),zd=void 0);void 0===Ad||Bd[Ad]&&!Cd||(Dd[Ad]||Ed.Pf()||0>=Fd--?Dd[Ad]=!0:(Ed.gg(),Sa(Gd()),Bd[Ad]=!0,Cd=""))},Gd=function(){var a=Ad;return void 0===a?"":[Id,Bd[a]?"":"&es=1",Jd[a],yd(),Cd,"&z=0"].join("")},Kd=function(){return[vc,"&v=3&t=t","&pid="+sa(),"&rv="+D.rb].join("")},Ld="0.005000">Math.random(),Id=Kd(),Md=function(){Id=Kd()},Bd={},Cd="",Ad=void 0,Jd={},Dd={},zd=
void 0,Ed=function(a,b){var c=0,d=0;return{Pf:function(){if(c<a)return!1;za()-d>=b&&(c=0);return c>=a},gg:function(){za()-d>=b&&(c=0);c++;d=za()}}}(2,1E3),Fd=1E3,Nd=function(a,b){if(Ld&&!Dd[a]&&Ad!==a){Hd();Ad=a;Cd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Jd[a]="&e="+c+"&eid="+a;zd||(zd=u.setTimeout(Hd,500))}},Od=function(a,b,c){if(Ld&&!Dd[a]&&b){a!==Ad&&(Hd(),Ad=a);var d=c+String(b[N.ra]||"").replace(/_/g,"");Cd=Cd?Cd+"."+d:"&tr="+d;zd||(zd=u.setTimeout(Hd,500));2022<=Gd().length&&
Hd()}};function Pd(a,b,c,d,e){var g=Ob[a],h=Qd(a,b,c,d,e);if(!h)return null;var k=Wb(g[N.nd],d.fa,[],la);if(k&&k.length){var l=k[0];h=Pd(l.index,b,{H:h,M:1===l.wd?c.terminate:h,terminate:c.terminate},d,e)}return h}
function Qd(a,b,c,d,e){function g(){if(h[N.Ae])l();else{var b=Xb(h,d.fa,[],Wc(function(a){xd(a)})),c=!1;b.vtp_gtmOnSuccess=function(){if(!c){c=!0;Od(d.id,Ob[a],"5");k()}};b.vtp_gtmOnFailure=function(){if(!c){c=!0;Od(d.id,Ob[a],"6");l()}};b.vtp_gtmTagId=h.tag_id;Od(d.id,h,"1");var e=!1,
g=function(a,b){if(!e){a instanceof Vc||(a=new Vc(a));var g=a;b&&g.jc.push(b);throw g;}xd(a);Od(d.id,h,"7");c||(c=!0,l())};try{Vb(b,g)}catch(P){try{e=!0,g(P)}catch(F){}}}}var h=
Ob[a],k=c.H,l=c.M,m=c.terminate;if(d.fa(h))return null;var n=Wb(h[N.od],d.fa,[],la);if(n&&n.length){var q=n[0],r=Pd(q.index,b,{H:k,M:l,terminate:m},d,e);if(!r)return null;k=r;l=2===q.wd?m:r}if(h[N.md]||h[N.Be]){var t=h[N.md]?Pb:b,v=k,w=l;if(!t[a]){g=Ca(g);var A=Rd(a,t,g);k=A.H;l=A.M}return function(){t[a](v,w)}}return g}function Rd(a,b,c){var d=[],e=[];b[a]=Sd(d,e,c);return{H:function(){b[a]=Td;for(var c=0;c<d.length;c++)d[c]()},M:function(){b[a]=Ud;for(var c=0;c<e.length;c++)e[c]()}}}
function Sd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Td(a){a()}function Ud(a,b){b()};function Vd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ca(function(){b++;d&&b>=c&&a()})},Qe:function(){d=!0;b>=c&&a()}}}var Yd=function(a){for(var b=Vd(a.callback),c=[],d=[],e=0;e<Ob.length;e++)if(a.Wa[e]){var g=Ob[e];var h=b.add();try{var k=Pd(e,c,{H:h,M:h,terminate:h},a,e);k?d.push({Xd:e,b:Yb(g),uf:k}):(Wd(e,a),h())}catch(m){h()}}b.Qe();d.sort(Xd);for(var l=0;l<d.length;l++)d[l].uf();return 0<d.length};
function Xd(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Xd,k=b.Xd;g=h>k?1:h<k?-1:0}return g}function Wd(a,b){if(!Ld)return;var c=function(a){var d=b.fa(Ob[a])?"3":"4",g=Wb(Ob[a][N.nd],b.fa,[],la);g&&g.length&&c(g[0].index);Od(b.id,Ob[a],d);var h=Wb(Ob[a][N.od],b.fa,[],la);h&&h.length&&c(h[0].index)};c(a);}
var Zd=!1,$d=function(a,b,c,d){if("gtm.js"==b){if(Zd)return!1;Zd=!0}Nd(a,b);var e=Uc(c),g={id:a,name:b,callback:d||la,fa:e,Wa:[]};g.Wa=cc(e,Wc(function(a){xd(a)}));var h=Yd(g);"gtm.js"!==b&&"gtm.sync"!==b||pd();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<g.Wa.length;l++)if(g.Wa[l]){var m=
Ob[l];if(m&&!k[m[N.ra]])return!0}return!1};var O={Ob:"event_callback",Qb:"event_timeout"};var be={};var ce=/[A-Z]+/,de=/\s/,ee=function(a){if(f(a)&&(a=ya(a),!de.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ce.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},ge=function(a){for(var b={},c=0;c<a.length;++c){var d=ee(a[c]);d&&(b[d.id]=d)}fe(b);var e=[];ta(b,function(a,b){e.push(b)});return e};
function fe(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var he=null,ie={},je={},ke,le=function(a,b){var c={event:a};b&&(c.eventModel=p(b),b[O.Ob]&&(c.eventCallback=b[O.Ob]),b[O.Qb]&&(c.eventTimeout=b[O.Qb]));return c};
var qe={config:function(a){},event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ka(a[2]))return;
c=a[2]}var d=le(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];be[b]||(be[b]=[]);be[b].push(c)}},set:function(a){var b;2==a.length&&Ka(a[1])?b=p(a[1]):3==a.length&&f(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=p(b),b.event="gtag.set",b._clear=!0,b}},re={policy:!0};var se=function(){return!1};var xe=function(a){this.vg=a};xe.prototype.Af=function(){return this.vg};var ye=function(a){return!a||"object"!==Ha(a)||Ka(a)?!1:"getUntrustedUpdateValue"in a};xe.prototype.getUntrustedUpdateValue=xe.prototype.Af;var ze=!1,Ae=[];function Be(){if(!ze){ze=!0;for(var a=0;a<Ae.length;a++)z(Ae[a])}}var Ce=function(a){ze?z(a):Ae.push(a)};var De=[],Ee=!1;function Fe(a){var b=a.eventCallback,c=Ca(function(){ma(b)&&z(function(){b(D.o)})}),d=a.eventTimeout;d&&u.setTimeout(c,Number(d));return c}
var Ge=function(a){return u["dataLayer"].push(a)},Ie=function(a){var b=a._clear;ta(a,function(a,c){"_clear"!==a&&(b&&Pc(a,void 0),Pc(a,c))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=yc(),a["gtm.uniqueEventId"]=d,Pc("gtm.uniqueEventId",d));uc=c;var e=He(a);uc=null;if(!sc){sc=a["gtm.start"];}return e};
function He(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=G.zones;d=e?e.checkState(D.o,c):Yc;if(!d.active)return!1;var g=Fe(a);return $d(c,b,d.isWhitelisted,g)?!0:!1}
var Je=function(){for(var a=!1;!Ee&&0<De.length;){Ee=!0;delete Ec.eventModel;Hc();var b=De.shift();if(null!=b){var c=ye(b);if(c){var d=b;b=ye(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=Ic(h,1);if(oa(k)||Ka(k))k=p(k);Fc[h]=k}}try{if(ma(b))try{b.call(Jc)}catch(w){}else if(oa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),r=Ic(m.join("."),2);if(void 0!==r&&null!==r)try{r[n].apply(r,q)}catch(w){}}}else{var t=b;if(t&&("[object Arguments]"==Object.prototype.toString.call(t)||Object.prototype.hasOwnProperty.call(t,"callee"))){a:{if(b.length&&f(b[0])){var v=qe[b[0]];if(v&&(!c||!re[b[0]])){b=v(b);break a}}b=void 0}if(!b){Ee=!1;continue}}a=Ie(b)||a}}finally{c&&Hc(!0)}}Ee=!1}
return!a},Ke=function(){var a=Je();try{var b=D.o,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Le=function(){var a=Na("dataLayer",[]),b=Na("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ed(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ce(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b;
if(0<G.SANDBOXED_JS_SEMAPHORE){b=[];for(var e=0;e<arguments.length;e++)b[e]=new xe(arguments[e])}else b=[].slice.call(arguments,0);c.apply(a,b);for(De.push.apply(De,b);300<this.length;)this.shift();return Je()};De.push.apply(De,a.slice(0));z(Ke)};var Ne=function(a){return Me?x.querySelectorAll(a):null},Oe=function(a,b){if(!Me)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!x.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Pe=!1;if(x.querySelectorAll)try{var Qe=x.querySelectorAll(":root");Qe&&1==Qe.length&&Qe[0]==x.documentElement&&(Pe=!0)}catch(a){}var Me=Pe;var Re;var nf={};nf.nb=new String("undefined");
var of=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===nf.nb?b:a[d]);return c.join("")}};of.prototype.toString=function(){return this.resolve("undefined")};of.prototype.valueOf=of.prototype.toString;nf.De=of;nf.$b={};nf.kf=function(a){return new of(a)};var pf={};nf.hg=function(a,b){var c=yc();pf[c]=[a,b];return c};nf.td=function(a){var b=a?0:1;return function(a){var c=pf[a];if(c&&"function"===typeof c[b])c[b]();pf[a]=void 0}};nf.Nf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};nf.Yf=function(a){if(a===nf.nb)return a;var b=yc();nf.$b[b]=a;return'google_tag_manager["'+D.o+'"].macro('+b+")"};nf.Rf=function(a,b,c){a instanceof nf.De&&(a=a.resolve(nf.hg(b,c)),b=la);return{oc:a,H:b}};var qf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},rf=function(a){G.hasOwnProperty("autoEventsSettings")||(G.autoEventsSettings={});var b=G.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},sf=
function(a,b,c,d){var e=rf(a),g=Ba(e,b,d);e[b]=c(g)},tf=function(a,b,c){var d=rf(a);return Ba(d,b,c)};var uf=function(){for(var a=La.userAgent+(x.cookie||"")+(x.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(za()/1E3)].join(".")},xf=function(a,b,c,d){var e=vf(b);return hb(a,e,wf(c),d)},vf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},wf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function yf(a,b){var c=""+vf(a),d=wf(b);1<d&&(c+="-"+d);return c};var zf=["1"],Af={},Ef=function(a,b,c,d){var e=Bf(a);Af[e]||Cf(e,b,c)||(Df(e,uf(),b,c,d),Cf(e,b,c))};function Df(a,b,c,d,e){var g;g=["1",yf(d,c),b].join(".");mb(a,g,c,d,0==e?void 0:new Date(za()+1E3*(void 0==e?7776E3:e)))}function Cf(a,b,c){var d=xf(a,b,c,zf);d&&(Af[a]=d);return d}function Bf(a){return(a||"_gcl")+"_au"};var Ff=function(){for(var a=[],b=x.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Nc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Nc]||(g[a[h].Nc]=[]),g[a[h].Nc].push({timestamp:k[1],xf:k[2]}))}return g};function Gf(){for(var a=Hf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function If(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Hf,Jf,Kf=function(a){Hf=Hf||If();Jf=Jf||Gf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Hf[l],Hf[m],Hf[n],Hf[q])}return b.join("")},Lf=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=Jf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Hf=Hf||If();Jf=Jf||
Gf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Mf;function Nf(a,b){if(!a||b===x.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Of=function(){var a=Na("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Pf=/(.*?)\*(.*?)\*(.*)/,Qf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Rf=/^(?:www\.|m\.|amp\.)+/,Sf=/([^?#]+)(\?[^#]*)?(#.*)?/,Tf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Vf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Kf(String(d))))}var e=b.join("*");return["1",Uf(e),e].join("*")},Uf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Mf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Mf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Mf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Xf=function(){return function(a){var b=db(u.location.href),c=b.search.replace("?",""),d=ab(c,"_gl",!0)||"";a.query=Wf(d)||{};var e=C(b,"fragment").match(Tf);a.fragment=Wf(e&&e[3]||
"")||{}}},Wf=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Pf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Uf(k,n)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],t=0;t<r.length;t+=2)q[r[t]]=Lf(r[t+1]);return q}}}}catch(v){}};
function Yf(a,b,c){function d(a){var b=a,c=Tf.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Sf.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Zf(a,b,c){for(var d={},e={},g=Of().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Nf(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Ea(d)){var l=Vf(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,r=0;r<n.length;r++){var t=n[r];if("_gl"===t.name){t.setAttribute("value",l);q=!0;break}}if(!q){var v=x.createElement("input");v.setAttribute("type","hidden");v.setAttribute("name","_gl");v.setAttribute("value",
l);a.appendChild(v)}}else if("post"===m){var w=Yf(l,a.action);Za.test(w)&&(a.action=w)}}}else $f(l,a,!1)}if(!c&&Ea(e)){var A=Vf(e);$f(A,a,!0)}}function $f(a,b,c){if(b.href){var d=Yf(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var ag=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Zf(e,e.hostname,!1)}}catch(h){}},bg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=C(db(b.action),"host");Zf(b,c,!0)}}catch(d){}},cg=function(a,b,c,d){var e=Of();e.init||(y(x,"mousedown",ag),y(x,"keyup",ag),y(x,"submit",bg),e.init=!0);var g={callback:a,domains:b,
fragment:"fragment"===c,forms:!!d};Of().decorators.push(g)},dg=function(){var a=x.location.hostname,b=Qf.exec(x.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Rf,"")===e.replace(Rf,"")},eg=function(a,b){return!1===a?!1:a||b||dg()};var fg=/^\w+$/,gg=/^[\w-]+$/,hg=/^~?[\w-]+$/,ig={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function jg(a){return a&&"string"==typeof a&&a.match(fg)?a:"_gcl"}var lg=function(){var a=db(u.location.href),b=C(a,"query",!1,void 0,"gclid"),c=C(a,"query",!1,void 0,"gclsrc"),d=C(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||ab(e,"gclid",void 0);c=c||ab(e,"gclsrc",void 0)}return kg(b,c,d)};
function kg(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(gg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function mg(a,b,c){function d(a,b){var c=ng(a,e);c&&mb(c,b,h,g,l,!0)}b=b||{};var e=jg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Kd?7776E3:b.Kd;c=c||za();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(a){return["GCL",m,a].join(".")};a.aw&&(!0===b.ah?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var ng=function(a,b){var c=ig[a];if(void 0!==c)return b+c},og=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function pg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var qg=function(a,b,c,d,e){if(oa(b)){var g=jg(e);cg(function(){for(var b={},c=0;c<a.length;++c){var d=ng(a[c],g);if(d){var e=eb(d,x.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},rg=function(a){return a.filter(function(a){return hg.test(a)})},sg=function(a,b){for(var c=jg(b&&b.prefix),d={},e=0;e<a.length;e++)ig[a[e]]&&(d[a[e]]=ig[a[e]]);ta(d,function(a,d){var e=eb(c+d,x.cookie);if(e.length){var g=e[0],h=og(g),n={};n[a]=[pg(g)];mg(n,b,h)}})};var tg=/^\d+\.fls\.doubleclick\.net$/;function ug(a){var b=db(u.location.href),c=C(b,"host",!1);if(c&&c.match(tg)){var d=C(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function vg(a,b){if("aw"==a||"dc"==a){var c=ug("gcl"+a);if(c)return c.split(".")}var d=jg(b);if("_gcl"==d){var e;e=lg()[a]||[];if(0<e.length)return e}var g=ng(a,d),h;if(g){var k=[];if(x.cookie){var l=eb(g,x.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=pg(l[m]);n&&-1===qa(k,n)&&k.push(n)}h=rg(k)}else h=k}else h=k}else h=[];return h}
var wg=function(){var a=ug("gac");if(a)return decodeURIComponent(a);var b=Ff(),c=[];ta(b,function(a,b){for(var d=[],e=0;e<b.length;e++)d.push(b[e].xf);d=rg(d);d.length&&c.push(a+":"+d.join(","))});return c.join(";")},xg=function(a,b,c,d,e){Ef(b,c,d,e);var g=Af[Bf(b)],h=lg().dc||[],k=!1;if(g&&0<h.length){var l=G.joined_au=G.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",r=q=q+"?gclid="+h[n]+"&auiddc="+g;La.sendBeacon&&La.sendBeacon(r)||Sa(r);k=l[m]=
!0}}if(k&&g){var t=Bf(b),v=Af[t];v&&Df(t,v,c,d,e)}};var yg;if(3===D.rb.length)yg="g";else{var zg="G";yg=zg}
var Ag={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:yg},Bg=function(a){var b=D.o.split("-"),c=b[0].toUpperCase(),d=Ag[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===D.rb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+D.rb+e};var Ig=!!u.MutationObserver,Jg=void 0,Kg=function(a){if(!Jg){var b=function(){var a=x.body;if(a)if(Ig)(new MutationObserver(function(){for(var a=0;a<Jg.length;a++)z(Jg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;y(a,"DOMNodeInserted",function(){b||(b=!0,z(function(){b=!1;for(var a=0;a<Jg.length;a++)z(Jg[a])}))})}};Jg=[];x.body?b():z(b)}Jg.push(a)};
var Sg=function(){var a=x.body,b=x.documentElement||a&&a.parentElement,c,d;if(x.compatMode&&"BackCompat"!==x.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(a,b){return a&&b?Math.min(a,b):Math.max(a,b)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Tg=function(a){var b=Sg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Ug=function(a){if(x.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!u.getComputedStyle)return!0;var c=u.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),g=Math.min(h,
g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=u.getComputedStyle(d,null))}return!1};
var ah=function(a,b,c){function d(){var b=a();g+=e?(za()-e)*b.playbackRate/1E3:0;e=za()}var e=0,g=0;return{yb:function(e,k,l){var h=a(),n=h.vd,q=void 0!==l?Math.round(l):void 0!==k?Math.round(h.vd*k):Math.round(h.lf),r=void 0!==k?Math.round(100*k):0>=n?0:Math.round(q/n*100),t=x.hidden?!1:.5<=Tg(c);d();var v=qf(c,"gtm.video",[b]);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=e;v["gtm.videoUrl"]=h.url;v["gtm.videoTitle"]=h.title;v["gtm.videoDuration"]=Math.round(n);v["gtm.videoCurrentTime"]=
Math.round(q);v["gtm.videoElapsedTime"]=Math.round(g);v["gtm.videoPercent"]=r;v["gtm.videoVisible"]=t;Ge(v)},jg:function(){e=za()},ac:function(){d()}}};var bh=u.clearTimeout,ch=u.setTimeout,Q=function(a,b,c){if(se()){b&&z(b)}else return Pa(a,b,c)},dh=function(){return new Date},R=function(){return u.location.href},eh=function(a){return C(db(a),"fragment")},fh=function(a){return cb(db(a))},T=function(a,b){return Ic(a,b||2)},gh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ge(a)},hh=function(a,b){u[a]=b},U=function(a,b,c){b&&(void 0===u[a]||c&&
!u[a])&&(u[a]=b);return u[a]},ih=function(a,b,c){return eb(a,b,void 0===c?!0:!!c)},jh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Kd:d},g=lg();mg(g,e);sg(["aw"],e);sg(["dc"],e);},kh=function(a,b,c,d,e){var g=Xf(),h=Of();h.data||(h.data=
{query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(Da(k,l.query),Da(k,l.fragment));for(var m=jg(b),n=0;n<a.length;++n){var q=a[n];if(void 0!==ig[q]){var r=ng(q,m),t=k[r];if(t){var v=Math.min(og(t),za()),w;b:{for(var A=v,E=eb(r,x.cookie),B=0;B<E.length;++B)if(og(E[B])>A){w=!0;break b}w=!1}w||mb(r,t,c,d,0==e?void 0:new Date(v+1E3*(null==e?7776E3:e)),!0)}}}var H={prefix:b,path:c,domain:d};mg(kg(k.gclid,k.gclsrc),H);},lh=function(a,b,c,d,e){
qg(a,b,c,d,e);},mh=function(a,b){if(se()){b&&z(b)}else Ra(a,b)},nh=function(a){return!!tf(a,"init",!1)},oh=function(a){rf(a).init=!0},ph=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":rc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(a,b){b&&(d+="&"+a+"="+encodeURIComponent(b))});Q(K("https://","http://",d))};
var rh=nf.Rf;
var sh=new Aa;function th(a,b){function c(a){var b=db(a),c=C(b,"protocol"),d=C(b,"host",!0),e=C(b,"port"),g=C(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function uh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&oa(c)){for(var d=0;d<c.length;d++)if(uh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=qa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var r=a.ignore_case?"i":void 0;try{var t=String(c)+r,v=sh.get(t);v||(v=new RegExp(c,r),sh.set(t,v));q=v.test(b)}catch(w){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return th(b,c)}return!1};var wh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var xh={},yh=encodeURI,W=encodeURIComponent,zh=Sa;var Ah=function(a,b){if(!a)return!1;var c=C(db(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var X=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};xh.Of=function(){var a=!1;return a};var ji=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},ki=function(){this.c=1;this.e=[];this.p=null};function li(a){var b=G,c=b.gss=b.gss||{};return c[a]=c[a]||new ki}var mi=function(a,b){li(a).p=b},ni=function(a){var b=li(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(a){for(var b=0;b<a.length;b++)try{var d=a[b];d.d?(d.d=!1,e.push(d)):c(d.n,d.t,d.p)}catch(m){}};g(d);g(e)}};var pi=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||sa();return a.hid};var Ei=window,Fi=document,Gi=function(a){var b=Ei._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ei["ga-disable-"+a])return!0;try{var c=Ei.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=eb("AMP_TOKEN",Fi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Fi.getElementById("__gaOptOutExtension")?!0:!1};var Ni=function(a,b,c){Mi(a);var d=Math.floor(za()/1E3);li(a).e.push(new ji(b,d,c,void 0));ni(a)},Oi=function(a,b,c){Mi(a);var d=Math.floor(za()/1E3);li(a).e.push(new ji(b,d,c,!0))},Mi=function(a){if(1===li(a).c){li(a).c=2;var b=encodeURIComponent(a);Pa(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Qi=function(a,b){},Pi=function(a,b){};var Y={a:{}};
Y.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(a){for(var b=[],c=a.split(","),d=0;d<c.length;d++){var e=Number(c[d]);if(isNaN(e))return[];q.test(c[d])||b.push(e)}return b}function c(){var a=0,b=0;return function(){var c=Sg(),d=c.height;a=Math.max(A.scrollLeft+c.width,a);b=Math.max(A.scrollTop+d,b);return{pf:a,qf:b}}}function d(){v=U("self");
w=v.document;A=w.scrollingElement||w.body&&w.body.parentNode;B=c()}function e(a,b,c,d){var e=l(b),g={},h;for(h in e){g.ma=h;if(e.hasOwnProperty(g.ma)){var k=Number(g.ma);a<k||(gh({event:"gtm.scrollDepth","gtm.scrollThreshold":k,"gtm.scrollUnits":c.toLowerCase(),"gtm.scrollDirection":d,"gtm.triggers":e[g.ma].join(",")}),sf("sdl",b,function(a){return function(b){delete b[a.ma];return b}}(g),{}))}g={ma:g.ma}}}function g(){var a=B(),b=a.pf,c=a.qf,d=b/A.scrollWidth*100,g=c/A.scrollHeight*100;e(b,"horiz.pix",
r.pb,t.ld);e(d,"horiz.pct",r.ob,t.ld);e(c,"vert.pix",r.pb,t.pd);e(g,"vert.pct",r.ob,t.pd);rf("sdl").pending=!1}function h(){var b=250,c=!1;w.scrollingElement&&w.documentElement&&v.addEventListener&&(b=50,c=!0);var d=0,e=!1,h=function(){e?d=ch(h,b):(d=0,g(),nh("sdl")&&!a()&&(Ta(v,"scroll",k),Ta(v,"resize",k),rf("sdl").init=!1));e=!1},k=function(){c&&B();d?e=!0:(d=ch(h,b),rf("sdl").pending=!0)};return k}function k(a,c,d){if(c){var e=b(String(a));sf("sdl",d,function(a){for(var b=0;b<e.length;b++){var d=
String(e[b]);a.hasOwnProperty(d)||(a[d]=[]);a[d].push(c)}return a},{})}}function l(a){return tf("sdl",a,{})}function m(a){!H||a.vtp_triggerStartOption?n(a):Ce(function(){n(a)})}function n(b){z(b.vtp_gtmOnSuccess);var c=b.vtp_uniqueTriggerId,e=b.vtp_horizontalThresholdsPixels,l=b.vtp_horizontalThresholdsPercent,m=b.vtp_verticalThresholdUnits,n=b.vtp_verticalThresholdsPixels,q=b.vtp_verticalThresholdsPercent;switch(b.vtp_horizontalThresholdUnits){case r.pb:k(e,c,"horiz.pix");break;case r.ob:k(l,c,"horiz.pct")}switch(m){case r.pb:k(n,
c,"vert.pix");break;case r.ob:k(q,c,"vert.pct")}nh("sdl")?tf("sdl","pending")||(E||(d(),E=!0),z(function(){return g()})):(d(),E=!0,A&&(oh("sdl"),rf("sdl").pending=!0,z(function(){g();if(a()){var b=h();y(v,"scroll",b);y(v,"resize",b)}else rf("sdl").init=!1})))}var q=/^\s*$/,r={ob:"PERCENT",pb:"PIXELS"},t={pd:"vertical",ld:"horizontal"},v,w,A,E=!1,B,H=!1;H=!0;Y.__sdl=m;Y.__sdl.g="sdl";Y.__sdl.h=!0;Y.__sdl.b=0}();
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;fd();Q("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=U("google_trackConversion");if(ma(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=X(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Bg()})||b()}else b()},b)})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(){return uc})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=T("gtm.referrer",1)||x.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?C(db(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):fh(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=qf(b,"gtm.click");gh(d)}}(function(a){Y.__cl=a;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!nh("cl")){var c=U("document");y(c,"click",a,!0);oh("cl")}z(b.vtp_gtmOnSuccess)})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return ih(a.vtp_name,T("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Y.__u=a;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:T("gtm.url",1))||R();var d=b[a("vtp_component")];if(!d||"URL"==d)return fh(String(c));var e=db(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=oa(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=C(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=C(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Y.a.tl=["google"],function(){function a(a){return function(){if(a.yc&&a.Ac>=a.yc)a.qc&&U("self").clearInterval(a.qc);else{a.Ac++;var b=dh().getTime();gh({event:a.O,"gtm.timerId":a.qc,"gtm.timerEventNumber":a.Ac,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.yc,"gtm.timerStartTime":a.Wd,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Wd,"gtm.triggers":a.sg})}}}(function(a){Y.__tl=a;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.b=0})(function(b){z(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={O:b.vtp_eventName,
Ac:0,interval:Number(b.vtp_interval),yc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),sg:String(b.vtp_uniqueTriggerId||"0"),Wd:dh().getTime()};c.qc=U("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;p(X(l.vtp_fieldsToSet,"fieldName","value"),e);p(X(l.vtp_contentGroup,"index","group"),g);p(X(l.vtp_dimension,"index","dimension"),h);p(X(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=p(l);b=p(b,m)}p(X(b.vtp_fieldsToSet,"fieldName","value"),e);p(X(b.vtp_contentGroup,"index",
"group"),g);p(X(b.vtp_dimension,"index","dimension"),h);p(X(b.vtp_metric,"index","metric"),k);var n=md(b.vtp_functionName);if(ma(n)){var q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+yc(),q=r+".");var t={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},w=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];n.apply(window,b)},A=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&w("set",a+c,b[c])},B=function(){
var a=function(a,b,c){if(!Ka(b))return!1;for(var d=Ba(Object(b),c,[]),e=0;d&&e<d.length;e++)w(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=T("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Ka(c))return;c=Object(c);var d=Ba(e,"currencyCode",c.currencyCode);void 0!==d&&w("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){w("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var g="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<g.length;h++){var k=c[g[h]];if(k){a("ec:addProduct",k,"products");w("ec:setAction",g[h],k.actionField);break}}},H=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&t[e]||!c&&void 0===t[e])){var g=v[e]?va(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},V={name:r};H(e,V,!0);n("create",b.vtp_trackingId||
c.trackingId,V);w("set","&gtm",Bg(!0));b.vtp_enableRecaptcha&&w("require","recaptcha","recaptcha.js");(function(a,c){void 0!==b[c]&&w("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",g);E("dimension",h);E("metric",k);var P={};H(e,P,!1)&&w("set",P);var F;b.vtp_enableLinkId&&w("require","linkid","linkid.js");
w("set","hitCallback",function(){var a=e&&e.hitCallback;ma(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(w("require","ec","ec.js"),B());var M={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:A(String,b.vtp_eventLabel||c.label),eventValue:A(ua,b.vtp_eventValue||c.value)};H(F,M,!1);w("send",M);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(w("require","ec","ec.js"),B());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var xa="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","displayfeatures",void 0,{cookieName:xa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var fa=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:fa})}F?w("send","pageview",F):w("send","pageview");}if(!a){var ja=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(ja="internal/"+ja);a=!0;Q(K("https:","http:","//www.google-analytics.com/"+ja,e&&e.forceSSL),function(){var a=kd();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}}else z(b.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();



Y.a.ytl=["google"],function(){function a(){var b=Math.round(1E9*Math.random())+"";return Va(b)?a():b}function b(a,b){if(!a)return!1;for(var c=0;c<r.length;c++)if(0<=a.indexOf("//"+r[c]+"/"+b))return!0;return!1}function c(a){var b=-1!==a.indexOf("?")?"&":"?";if(-1<a.indexOf("origin="))return a+b+"enablejsapi=1";if(!v){var c=U("document");v=c.location.protocol+"//"+c.location.hostname;c.location.port&&(v+=":"+c.location.port)}return a+b+"enablejsapi=1&origin="+encodeURIComponent(v)}function d(a,d){var e=
a.getAttribute("src");if(b(e,"embed/")){if(0<e.indexOf("enablejsapi=1"))return!0;if(d)return a.setAttribute("src",c(e)),!0}return!1}function e(b,c){if(!b.getAttribute("data-gtm-yt-inspected-"+c.Pc)&&(b.setAttribute("data-gtm-yt-inspected-"+c.Pc,"true"),d(b,c.yd))){b.id||(b.id=a());var e=U("YT"),g=e.get(b.id);g||(g=new e.Player(b.id));var k=h(g,c),l={},m;for(m in k)l.Fa=m,k.hasOwnProperty(l.Fa)&&g.addEventListener(l.Fa,function(a){return function(b){return k[a.Fa](b.data)}}(l)),l={Fa:l.Fa}}}function g(a){z(function(){function b(){for(var b=
c.getElementsByTagName("iframe"),d=b.length,g=0;g<d;g++)e(b[g],a)}var c=U("document");b();Kg(b)})}function h(a,b){var c,d;function e(){v=ah(function(){return{url:E,title:ja,vd:A,lf:a.getCurrentTime(),playbackRate:ha}},b.Pc,a.getIframe());A=0;ja=E="";ha=1;return g}function g(c){switch(c){case t.PLAYING:A=Math.round(a.getDuration());E=a.getVideoUrl();if(a.getVideoData){var d=a.getVideoData();ja=d?d.title:""}ha=a.getPlaybackRate();b.df?v.yb("start"):v.ac();B=m(b.ag,b.$f,a.getDuration());return h(c);
default:return g}}function h(){Ja=a.getCurrentTime();jb=dh().getTime();v.jg();w();return k}function k(c){var d;switch(c){case t.ENDED:return n(c);case t.PAUSED:d="pause";case t.BUFFERING:var g=a.getCurrentTime()-Ja;d=1<Math.abs((dh().getTime()-jb)/1E3*ha-g)?"seek":d||"buffering";a.getCurrentTime()&&(b.cf?v.yb(d):v.ac());r();return l;case t.UNSTARTED:return e(c);default:return k}}function l(a){switch(a){case t.ENDED:return n(a);case t.PLAYING:return h(a);case t.UNSTARTED:return e(a);default:return l}}
function n(){for(;d;){var a=c;bh(d);a()}b.bf&&v.yb("complete",1);return e(t.UNSTARTED)}function q(){}function r(){d&&(bh(d),d=0,c=q)}function w(){if(B.length&&0!==ha){var b=-1,e;do{e=B[0];if(e.ka>a.getDuration())return;b=(e.ka-a.getCurrentTime())/ha;if(0>b&&(B.shift(),0===B.length))return}while(0>b);c=function(){d=0;c=q;0<B.length&&B[0].ka===e.ka&&(B.shift(),v.yb("progress",e.Qd,e.Vd));w()};d=ch(c,1E3*b)}}var v,B=[],A,E,ja,ha,Ja,jb,ub=e(t.UNSTARTED);d=0;c=q;return{onStateChange:function(a){ub=ub(a)},
onPlaybackRateChange:function(b){Ja=a.getCurrentTime();jb=dh().getTime();v.ac();ha=b;r();w()}}}function k(a){for(var b=a.split(","),c=b.length,d=[],e=0;e<c;e++){var g=parseInt(b[e],10);isNaN(g)||100<g||0>g||d.push(g/100)}d.sort(function(a,b){return a-b});return d}function l(a){for(var b=a.split(","),c=b.length,d=[],e=0;e<c;e++){var g=parseInt(b[e],10);isNaN(g)||0>g||d.push(g)}d.sort(function(a,b){return a-b});return d}function m(a,b,c){var d=a.map(function(a){return{ka:a,Vd:a,Qd:void 0}});if(!b.length)return d;
var e=b.map(function(a){return{ka:a*c,Vd:void 0,Qd:a}});if(!d.length)return e;var g=d.concat(e);g.sort(function(a,b){return a.ka-b.ka});return g}function n(a){!A||a.vtp_triggerStartOption?q(a):ed(function(){q(a)})}function q(a){var c=!!a.vtp_captureStart,e=!!a.vtp_captureComplete,h=!!a.vtp_capturePause,m=k(a.vtp_progressThresholdsPercent+""),n=l(a.vtp_progressThresholdsTimeInSeconds+""),q=!!a.vtp_fixMissingApi;if(c||e||h||m.length||n.length){var r={df:c,bf:e,cf:h,$f:m,ag:n,yd:q,Pc:void 0===a.vtp_uniqueTriggerId?
"":a.vtp_uniqueTriggerId},v=U("YT"),t=function(){g(r)};z(a.vtp_gtmOnSuccess);if(v)v.ready&&v.ready(t);else{var A=U("onYouTubeIframeAPIReady");hh("onYouTubeIframeAPIReady",function(){A&&A();t()});z(function(){for(var a=U("document"),c=a.getElementsByTagName("script"),e=c.length,g=0;g<e;g++){var h=c[g].getAttribute("src");if(b(h,"iframe_api")||b(h,"player_api"))return}for(var k=a.getElementsByTagName("iframe"),l=k.length,m=0;m<l;m++)if(!w&&d(k[m],r.yd)){Q("https://www.youtube.com/iframe_api");w=!0;
break}})}}else z(a.vtp_gtmOnSuccess)}var r=["www.youtube.com","www.youtube-nocookie.com"],t={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},v,w=!1,A=!1;A=!0;Y.__ytl=n;Y.__ytl.g="ytl";Y.__ytl.h=!0;Y.__ytl.b=0}();

Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(a){Y.__gclidw=a;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=e,h=c,k=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||dg())&&kh(a,g,h,k));jh(e,c,d);xg(!1,e,c,d);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&
b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");lh(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}})}();
Y.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=T(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(R()),d;d=oa(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!Ah(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return C(db(a),"HOST",!0)};(function(a){Y.__aev=a;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return T("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=T("gtm.element",1),m=T("event",1),t=Number(dh());a===l&&b===m&&c>t-250?k=d:(d=k=l?Wa(l):"",a=l,b=m);c=t;return k||e.vtp_defaultValue;case "URL":var v;a:{var w=String(T("gtm.elementUrl",1)||e.vtp_defaultValue||""),A=db(w);switch(e.vtp_component||"URL"){case "URL":v=w;break a;case "IS_OUTBOUND":v=h(w,e);break a;default:v=C(A,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return v;case "ATTRIBUTE":var E;if(void 0===e.vtp_attribute)E=
g(e);else{var B=T("gtm.element",1);E=Ua(B,e.vtp_attribute)||e.vtp_defaultValue||""}return E;default:return g(e)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=p(a),c=b;c[N.ra]=null;c[N.ye]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.hl=["google"],function(){function a(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:R()}function b(b,c){y(b,"hashchange",function(b){var d=a(b);c({source:"hashchange",state:null,url:fh(d),B:eh(d)})})}function c(b,c){y(b,"popstate",function(b){var d=a(b);c({source:"popstate",state:b.state,url:fh(d),B:eh(d)})})}function d(a,b,c){var d=b.history,e=d[a];if(ma(e))try{d[a]=function(b,g,h){e.apply(d,[].slice.call(arguments,0));c({source:a,state:b,url:fh(R()),B:eh(R())})}}catch(n){}}
function e(){var a={source:null,state:U("history").state||null,url:fh(R()),B:eh(R())};return function(b){var c=a,d={};d[c.source]=!0;d[b.source]=!0;if(!d.popstate||!d.hashchange||c.B!=b.B){var e={event:"gtm.historyChange","gtm.historyChangeSource":b.source,"gtm.oldUrlFragment":a.B,"gtm.newUrlFragment":b.B,"gtm.oldHistoryState":a.state,"gtm.newHistoryState":b.state};
a=b;gh(e)}}}(function(a){Y.__hl=a;Y.__hl.g="hl";Y.__hl.h=!0;Y.__hl.b=0})(function(a){var g=U("self");if(!nh("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",g,k);oh("hl")}z(a.vtp_gtmOnSuccess)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=U("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){fd();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Bg()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?T(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),
d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,Q("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.b=0}();
Y.a.bzi=["nonGoogleScripts"],function(){(function(a){Y.__bzi=a;Y.__bzi.g="bzi";Y.__bzi.h=!0;Y.__bzi.b=0})(function(a){try{u._bizo_data_partner_id=a.vtp_id,u._bizo_data_partner_title=a.vtp_title,u._bizo_data_partner_domain=a.vtp_domain,u._bizo_data_partner_company=a.vtp_company,u._bizo_data_partner_location=a.vtp_location,u._bizo_data_partner_employee_range=a.vtp_employeeRange,u._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,u._bizo_data_partner_email=a.vtp_email,Q(K("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){z(a.vtp_gtmOnFailure)}})}();
Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.g="remm";Y.__remm.h=!0;Y.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Y.a.baut=["nonGoogleScripts"],function(){var a=!1;(function(a){Y.__baut=a;Y.__baut.g="baut";Y.__baut.h=!0;Y.__baut.b=0})(function(b){var c=b.vtp_uetqName||"uetq",d=U(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},g=function(a,c){void 0!==b[a]&&(e[c]=b[a])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();
else try{Q("//bat.bing.com/bat.js",function(){var a=wh(U("UET"),{ti:b.vtp_tagId,q:d});u[c]=a;a.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(h){z(b.vtp_gtmOnFailure)}})}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=X(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Y.__twitter_website_tag=a;Y.__twitter_website_tag.g="twitter_website_tag";Y.__twitter_website_tag.h=!0;Y.__twitter_website_tag.b=0})(function(a){(function(a,b){a.twq||(b=a.twq=function(){b.exe?b.exe.apply(b,arguments):b.queue.push(arguments)},b.version="1",b.queue=[],Q("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=X(a.vtp_event_parameters,"param_table_key_column","param_table_value_column");
b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);z(a.vtp_gtmOnSuccess)})}();
Y.a.zone=[],function(){function a(a){for(var b=a.vtp_boundaries||[],c=0;c<b.length;c++)if(!b[c])return!1;return!0}function b(b){var d=D.o,e=d+":"+b.vtp_gtmTagId,g=T("gtm.uniqueEventId")||0,l=Zc(function(){return new k}),m=a(b),n=b.vtp_enableTypeRestrictions?b.vtp_whitelistedTypes.map(function(a){return a.typeId}):null;n=n&&Fa(n,h);if(l.registerZone(e,g,m,n))for(var E=b.vtp_childContainers.map(function(a){return a.publicId}),B=0;B<E.length;B++){var H=String(E[B]);if(l.registerChild(H,d,e)){var V=0!==
H.indexOf("GTM-"),P=0===H.indexOf("SB-")?c():void 0;if(V){var F=function(a,b){gh(arguments)};F("js",new Date);F("config",H)}ph(H,P,V)}}}function c(){var a=ih("_oid")[0];if(a)return{oid:a,namespace:"cookie"}}var d={active:!1,isWhitelisted:function(){return!1}},e={active:!0,isWhitelisted:function(){return!0}},g={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},h={cl:["ecl"],ecl:["cl"]},k=function(){this.tb={};this.Tc={}};k.prototype.checkState=function(a,b){var c=this.tb[a];
if(!c)return e;var g=this.checkState(c.Pd,b);if(!g.active)return d;for(var h=[],k=0;k<c.Sc.length;k++){var l=this.Tc[c.Sc[k]];l.Ta(b)&&h.push(l)}return h.length?{active:!0,isWhitelisted:function(a){if(!g.isWhitelisted(a))return!1;for(var b=0;b<h.length;++b)if(h[b].isWhitelisted(a))return!0;return!1}}:d};k.prototype.unregisterChild=function(a){delete this.tb[a]};k.prototype.registerZone=function(a,b,c,d){var e=this.Tc[a];if(e)return e.fg(b,c),!1;if(!c)return!1;this.Tc[a]=new l(b,d);return!0};k.prototype.registerChild=
function(a,b,c){var d=this.tb[a];if(!d&&G[a]||d&&d.Pd!==b)return!1;if(d)return d.Sc.push(c),!1;this.tb[a]={Pd:b,Sc:[c]};return!0};var l=function(a,b){this.U=[{eventId:a,Ta:!0}];this.Kb=null;if(b){this.Kb={};for(var c=0;c<b.length;c++)this.Kb[b[c]]=!0}};l.prototype.fg=function(a,b){var c=this.U[this.U.length-1];a<=c.eventId||c.Ta!=b&&this.U.push({eventId:a,Ta:b})};l.prototype.Ta=function(a){if(!this.U||0==this.U.length)return!1;for(var b=this.U.length-1;0<=b;b--)if(this.U[b].eventId<=a)return this.U[b].Ta;
return!1};l.prototype.isWhitelisted=function(a){return this.Kb?g[a]||!!this.Kb[a]:!0};var m=function(a){b(a);z(a.vtp_gtmOnSuccess)};Y.__zone=m;Y.__zone.g="zone";Y.__zone.h=!0;Y.__zone.b=0}();
Y.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=x.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Oa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(r){z(h)}}}var b=function(a,b,c){ed(function(){var d,e=G;e.postscribe||(e.postscribe=ec);d=e.postscribe;var g={done:b},m=x.createElement("div");m.style.display="none";m.style.visibility="hidden";x.body.appendChild(m);try{d(m,a,g)}catch(n){z(c)}})};var c=function(d){if(x.body){var e=
d.vtp_gtmOnFailure,g=rh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(x.body,Xa(h),k,e)()}else ch(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();


Y.a.lcl=[],function(){function a(){var a=U("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=Ya(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=tf("lcl",g?"nv.mwt":"mwt",0),m;m=g?tf("lcl","nv.ids",[]):tf("lcl","ids",[]);if(m.length){var n=qf(e,"gtm.linkClick",m);if(b(c,e,a)&&!g&&l&&e.href){var q=U((e.target||"_self").substring(1)),r=!0;if(gh(n,function(){r&&q&&(q.location.href=e.href)},l))r=
!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else gh(n,function(){},l||2E3);return!0}}};y(a,"click",e,!1);y(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=fh(b.href),l=fh(e.location);return k!==l}return!0}(function(a){Y.__lcl=a;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?
!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};sf("lcl","mwt",k,0);e||sf("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};sf("lcl","ids",l,[]);e||sf("lcl","nv.ids",l,[]);nh("lcl")||(a(),oh("lcl"));z(b.vtp_gtmOnSuccess)})}();

var Ri={};Ri.macro=function(a){if(nf.$b.hasOwnProperty(a))return nf.$b[a]},Ri.onHtmlSuccess=nf.td(!0),Ri.onHtmlFailure=nf.td(!1);Ri.dataLayer=Jc;Ri.callback=function(a){wc.hasOwnProperty(a)&&ma(wc[a])&&wc[a]();delete wc[a]};Ri.Ve=function(){G[D.o]=Ri;xc=Y.a;Sb=Sb||nf;Tb=Xc};
Ri.Jf=function(){G=u.google_tag_manager=u.google_tag_manager||{};if(G[D.o]){var a=G.zones;a&&a.unregisterChild(D.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Lb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Ob.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Nb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},r=0;r<n.length;r++)q[n[r][0]]=
Array.prototype.slice.call(n[r],1);Mb.push(q)}Qb=Y;Rb=uh;Ri.Ve();Le();$c=!1;ad=0;if("interactive"==x.readyState&&!x.createEventObject||"complete"==x.readyState)cd();else{y(x,"DOMContentLoaded",cd);y(x,"readystatechange",cd);if(x.createEventObject&&x.documentElement.doScroll){var t=!0;try{t=!u.frameElement}catch(E){}t&&dd()}y(u,"load",cd)}ze=!1;"complete"===x.readyState?Be():y(u,"load",Be);a:{if(!Ld)break a;u.setInterval(Md,864E5);}tc=(new Date).getTime();}};(0,Ri.Jf)();

})()
