// ==UserScript==
// @name         问答 UI 修复
// @namespace    http://tampermonkey.net/
// @version      2024-04-08
// @description  try to take over the world!
// @author       hidu
// @match        *://wenda.baidu.com/ask/question/*
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.4.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fixImg(){
        jQuery("div.left .content img").removeAttr("width").css("width","100%").css("height","100%")
    }

    function fix(){
        jQuery("div.left").before(jQuery("div.right .aside"))
        jQuery(".aside .page-view").css("display","inline-block").css("width","400px").css("height","122px")  // 浏览量
        jQuery(".aside .questioner-info").css("display","inline-block").css("width","400px") // 提问者信息

        jQuery(".view").css("width","95%")
        jQuery("div.left").css("width","100%")

        jQuery("div.right").prepend("<div class='aside clearfix'></div><style>.aside .relevant{width:50%;float:left;} footer{text-align:center}</style><p></p>")
        jQuery("div.right .aside").prepend( jQuery("section.relevant")) // 相关问题

        jQuery("div.right").css("width","100%")

        fixImg()

        // 调整编辑器宽度
        jQuery(".ql-editor").css("width","100%")
    }

    setTimeout(fix,800);

    // 回复部分，需要延迟更长时间处理
    setTimeout(fixImg,3000);
    setTimeout(fixImg,6000);

})();