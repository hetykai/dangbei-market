/*function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#xuanfu_top').show();
	}else{
		$('#xuanfu_top').show();
	}
}*/
$(document).ready(function(e) {
	/*b();*/
	
	$('#xuanfu_top').click(function(){
		$(document).scrollTop(0);	
	})
	$('.flow_left').hide();
	$('#xuanfu_weixin').mouseover(function(){
		$('#tbox').css("width", "255px");
		$('.flow_left').show();	
		
	})
	$('#xuanfu_weixin').mouseout(function(){
		$('#tbox').css("width", "132px");
		$('.flow_left').hide();
		
	})
});
$(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
            e = $(window).height();
            a=$(document).height();
            console.log(d);
            console.log(e);
			console.log(a);
			if(a==(e+d)){
				alert(1111111);
			}
	   });
/*$(window).scroll(function(e){
	b();		
})*/
