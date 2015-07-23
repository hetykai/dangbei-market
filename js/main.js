var url = location.search;
url = url.substr(1);
var bs={
        versions:function(){
           var u = navigator.userAgent, app = navigator.appVersion;
           return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1 //是否iPad                
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
    } 
    if(bs.versions.mobile && url!='mobile'){
        if(bs.versions.android||bs.versions.iPhone||bs.versions.iPad||bs.versions.ios){
            window.location.href="./mobile/mobile.html";
        }
    }
$(function(){
    appendBrand();
    $("#brand").change(function(){
        var tid=$("#brand option:selected").val();
        appendVersion(tid);
    });
    
    $("#version").change(function(){
        var aid=$("#version option:selected").val();
        $('#surebtn').attr("href","http://jc.znds.com/plus/view.php?aid="+aid);
    });


    function appendBrand(){
        var url="action/getJc.php";
        result=getData(url);
        $('#brand').html('<option value="">品牌</option>');
        $.each(result,function (i, v) {
            $('#brand').append('<option value="'+v.id+'">'+v.typename+'</option>')
        });
    }

    function appendVersion(tid){
        var url="action/getJc.php";
        result=postData(url,tid);
        $('#version').html('<option value="">型号</option>');
        $.each(result,function (i, v) {
            $('#version').append('<option value="'+v.id+'">'+v.title+'</option>')
        });
    }

    function getData(url){
        var result;
        $.ajax({
            url:url,
            type:'GET',
            async:false,
            success:function(data,status){
                data=eval(data);
                result=data;
            }
        });
        return result;
    }
    
    function postData(url,data){
        var result;
        $.ajax({
            url:url,
            type:'POST',
            async:false,
            data:{data:data},
            success:function(data,status){
                data=eval(data);
                result=data;
            }
        });
        return result;
    }

})