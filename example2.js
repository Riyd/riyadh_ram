$(function(){
	
	/*boxs*/
	var imgs=$(".containers .boxs .imgs img");
	var main_imgs=$(".containers .boxs .main-img img");
	main_imgs.prop("src",imgs.eq(0).attr("src"));
	imgs.eq(0).addClass("actives");
	
	var img_margin=.5 *(imgs.length-1);
	
	var img_width=(100-img_margin)/imgs.length;

	imgs.css({
			width:img_width+"%",
			
		});
	imgs.not(":last-child").css({	
			marginRight:".5%",
		});
	imgs.last().css({
		marginRight:0,
	});
	
	imgs.on("click",function(){
		$(this).addClass("actives").siblings().removeClass("actives");
		
		main_imgs.prop("src",$(this).attr("src"));
		
		
	});

	var elem_actives="";
	
	
	$(".containers .boxs .rights").on("click",function(){
			
			elem_actives=$(".containers .boxs .imgs img[class='actives']");
			if(elem_actives.is(":last-child")){
				/*نفس الكود
				imgs.removeClass("actives");
				imgs.eq(0).addClass("actives");
				mains_imgs(imgs.eq(0).attr("src"));
				*/
				imgs.eq(0).click();
				
			}
				
			else{
				/*elem_actives.next().addClass("actives");
				elem_actives.removeClass("actives");
				
				mains_imgs(elem_actives.next().attr("src"));
				*/
				elem_actives.next().click();
			}	
	});
	
	$(".containers .boxs .lefts").on("click",function(){
		
		if($(".containers .boxs .actives").is(":first-child")){
			imgs.last().click();
		}
		else{
			$(".containers .boxs .actives").prev().click();
		}
	});

});