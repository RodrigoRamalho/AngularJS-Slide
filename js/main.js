$(document).ready(function(){
	indicePage = 0;

	$("ol").attr("start","0");

	trava = true;

	var v = 'translatex(-100%)';
	valocidadeTrans = {'-webkit-transform':v,'-moz-transform':v,'-ie-transform':v,'-o-transform':v,'transform': v};
	var v2 = 'translatex(0%)';
	valocidadeTrans2 = {'-webkit-transform':v2,'-moz-transform':v2,'-ie-transform':v2,'-o-transform':v2,'transform': v2};
	valocidadeBarra = 300;

	$("section").each(function(index){
		var dimz = parseInt($("section").eq(index).attr('ordem'));
		$("section").eq(index).css('z-index', dimz*-1);
		$("section").css(valocidadeTrans);
		$("section").eq(indicePage).css(valocidadeTrans2);
	});

	$("#back").click(function(){
		if(indicePage==4) $("section table img").width('350px'); else $("section table img").width('48px');
		if(indicePage>0){
			$("body > span.finalSlide").removeAttr('style');
			$("section").css(valocidadeTrans);
			indicePage = indicePage-1;
			$("section").eq(indicePage).css(valocidadeTrans2);
			$("canvas").animate({width: ((indicePage)/($("section").length))*100+'%'}, valocidadeBarra);
		};
	});

	$("#next").click(function(){
		if(indicePage==2) $("section table img").width('350px'); else $("section table img").width('48px');
		if(indicePage<($("section").length-1)){
			$("section").css(valocidadeTrans);
			indicePage = indicePage+1;
			$("section").eq(indicePage).css(valocidadeTrans2);
			$("canvas").animate({width: ((indicePage)/($("section").length))*100+'%'}, valocidadeBarra);
		}
		else
		if(indicePage=($("section").length-1)){
			$("section").css(valocidadeTrans);
			indicePage = indicePage+1;
			$("canvas").animate({width: ((indicePage)/($("section").length))*100+'%'}, valocidadeBarra);
			$("body > span.finalSlide").animate({opacity: 1}, 'fast');
			$("canvas").css('width','100%');
		}
	});

	$(document).keydown(function(event){
		if(event.keyCode==37){ $("#back").trigger('click'); }
		else
		if(event.keyCode==39){ $("#next").trigger('click'); }
		else
		if(event.keyCode==40){ if(trava) $(".inicial").removeAttr('style'); }
		else
		if(event.keyCode==38)
		{
			var t = 'translatey(-100%)';
			if(trava)
				$(".inicial").css({'background-size':'0%','-webkit-transform':t,'-moz-transform':t,'-ie-transform':t,'-o-transform':t,'transform': t});
		}
		else
		if(event.keyCode==49){if($("section[ordem="+indicePage+"] ol > li").eq(0).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(0).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(0).children('div').slideUp('slow'); }
		else
		if(event.keyCode==50){if($("section[ordem="+indicePage+"] ol > li").eq(1).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(1).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(1).children('div').slideUp('slow'); }
		else
		if(event.keyCode==51){if($("section[ordem="+indicePage+"] ol > li").eq(2).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(2).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(2).children('div').slideUp('slow'); }
		else
		if(event.keyCode==52){if($("section[ordem="+indicePage+"] ol > li").eq(3).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(3).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(3).children('div').slideUp('slow'); }
		else
		if(event.keyCode==53){if($("section[ordem="+indicePage+"] ol > li").eq(4).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(4).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(4).children('div').slideUp('slow'); }
		else
		if(event.keyCode==54){if($("section[ordem="+indicePage+"] ol > li").eq(5).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(5).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(5).children('div').slideUp('slow'); }
		else
		if(event.keyCode==55){if($("section[ordem="+indicePage+"] ol > li").eq(6).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(6).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(6).children('div').slideUp('slow'); }
		else
		if(event.keyCode==56){if($("section[ordem="+indicePage+"] ol > li").eq(7).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(7).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(7).children('div').slideUp('slow'); }
		else
		if(event.keyCode==57){if($("section[ordem="+indicePage+"] ol > li").eq(8).children('div').css('display')=="none") $("section[ordem="+indicePage+"] ol > li").eq(8).children('div').slideDown('slow'); else $("section[ordem="+indicePage+"] ol > li").eq(8).children('div').slideUp('slow'); }
		else
		if(event.keyCode==32){ trava = !trava; }
	});

	$(document).mousemove(function(event) {
		if (parseInt(event.pageY) >= parseInt($(document).height())-5)
		{
			$("div#opcoes").slideDown('fast');
		}
		else
		if (parseInt(event.pageY) <= $(document).height()-$("div#opcoes").height())
		{
			$("div#opcoes").slideUp('fast');
		}
	});
});
