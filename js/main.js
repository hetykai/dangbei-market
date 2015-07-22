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