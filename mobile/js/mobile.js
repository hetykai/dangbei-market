$(function(){
	$(".div-downbtn").mouseover(function(){
	  $(this).attr("src","./images/downbtn-active.png");
	});
	$(".div-downbtn").mouseout(function(){
	  $(this).attr("src","./images/downbtn.png");
	});

	$(".div-coursebtn").mouseover(function(){
	  $(this).attr("src","./images/coursebtn-active.png");
	});
	$(".div-coursebtn").mouseout(function(){
	  $(this).attr("src","./images/coursebtn.png");
	});
})
