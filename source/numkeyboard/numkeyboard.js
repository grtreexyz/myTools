;
$(function(){
	var $c=$('.nk-content');
	var content=$c.text();
	$('.numkeyboard button').click(function(){
		var text=$(this).text();
		if(!/\d/.test(text)){
			content=content.substr(0,content.length-1);
		}else{
			content+=text;
		}
			$c.html(content);
	});
	$('.nk-close').click(function(){
		$('#nk-fixeddialog').hide();
	});
});