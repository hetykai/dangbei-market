$("select").mouseover(function(){
	console.log($(".option"));
  $("this").css("background-color","yellow");
});
$("option").mouseout(function(){
	console.log($(".option"));
  $("this").css("background-color","white");
});
//$("select").change(setColor(this, options[selectedIndex]));
function setColor(_parent, _child) {
	alert(1111)
        for (var i=0; i<_parent.options.length; i++) {
//遍历所有选项
             if (_parent.options[i] == _child) {
                 _parent.options[i].style.color = 'yellow';                 
//颜色
                 _parent.options[i].style.backgroundColor = 'blue';         
//背景色
             } else {
                 _parent.options[i].style.color = '';                       
//取消颜色
                 _parent.options[i].style.backgroundColor = '';             
//取消背景色
             }
        }
        document.body.focus();   //窗体获得焦点
    }