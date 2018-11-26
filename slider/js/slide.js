//当前位置
var pos = 0;
//幻灯片数量
var numSlides = $('#slider-wrap ul li').length;
//获取幻灯片宽度
var sliderWidth = $('#slider-wrap').width();
//设置播放间隔时间（可设置）
var time = 1000;

$(document).ready(function(){

	//设置文字排版（可被注释）
	textPosition();

	//容器宽度为幻灯片长度总和
	$('#slider').width(sliderWidth*numSlides);
	
    //下一张	
	$('#next').click(function(){
		slideRight();
	});	
	//上一张
	$('#previous').click(function(){
		slideLeft();
	});
	
	//定时器
	var autoSlider = setInterval(slideRight, time);
	
	//遍历
	$.each($('#slider-wrap ul li'), function() { 
	   //设置背景
	   var c = $(this).attr("data-url");
	   $(this).css("background-image",c);
	   
	   //圆圈标识
	   var li = document.createElement('li');
	   $('#tabs-wrap ul').append(li);	   
	});
	
	countSlides();
	tabs();
	
	//鼠标悬停时暂停&控制按钮隐藏/显示
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
	

});
	
//左滑
function slideLeft(){
	pos--;
	if(pos==-1){ pos = numSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 		
	countSlides();
	tabs();
}
//右滑
function slideRight(){
	pos++;
	if(pos==numSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	countSlides();
	tabs();
}
	
//位置标识
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + numSlides);
}

//小圆圈标识
function tabs(){
	$('#tabs-wrap ul li').removeClass('active');
	$('#tabs-wrap ul li:eq('+pos+')').addClass('active');
}
//文字排版
function textPosition(){
	$('#slider div').addClass('content');
}