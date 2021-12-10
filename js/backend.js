$(function(){
	'use strict';
	$('[placeholder]').on('focus',function(){
		$(this).attr('data-text',$(this).attr('placeholder'));
		$(this).attr("placeholder","");
	}).on("blur",function(){
			$(this).attr('placeholder',$(this).attr("data-text"));
		});
		//Add asterisk On Required Field
		
		$('input').each(function(){
			if($(this).attr('required')==='required'){
				$(this).after('<span class="asterisk">*</span>');
			}
		});
		$('.show-pass').hover(function(){
			$(".password").attr("type","text");
		},function(){
			$(".password").attr("type","password");
		});
		 //confirm message when delete users
		$('.confirm').click(function(){
			return confirm("DO You Want To Deleted This ?");
		});
});