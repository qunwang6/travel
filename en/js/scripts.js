$(window).load(function(){
    
    $("form.jqtransform").jqTransform();
    
    $('figure a').fancybox({
        'overlayColor'  :   '#091f2d',
        'transitionIn'	:	'elastic',
       	'transitionOut'	:	'elastic',
    	'speedIn'		:	500, 
    	'speedOut'		:	300
     });
     
     $('figure > a > span').css({top:'-150px'});
     $('figure > a').hover(function()
     {
         $(this).find('span').stop().animate({top:'0px'}, 350,'easeOutCubic')					   
     }, function(){
       	 $(this).find('span').stop().animate({top:'-150px'}, 350,'easeOutCubic')						   
     })
    
    // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
    
    if($.browser.msie && $.browser.version<9)
    {
        aniButtonDuration = 0;
        ie = true;
    }
    
    $('#description .counter .total').text($('.jCarouselLite li').length);
    $('#description .info li').css({left:'-700px', display:'none'});
    
    var nextBtn = $('#bgSelector .next');
    var prevBtn = $('#bgSelector .prev');
        
    $(".thumbNav .jCarouselLite").jCarouselLite({
        btnNext: nextBtn,
        btnPrev: prevBtn,
        vertical: true,
        easing: 'easeOutSine',
        speed: 300,
        visible: $('.jCarouselLite li').length
    });
    
    
	$('#bgStretch')
	.bgStretch({
		navigs:$('.thumbNav').navigs()
	}).sImg({
		spinner:$('.gall_spinner').hide()
	})
    
    $('#bgSelector .prev, #bgSelector .next, #description .info a, #icon1, #icon2, #icon3')
	.sprites({
		method:'simple',
		duration:400,
		easing:'easeOutCubic',
		hover:true
	})
    
    $('.thumbNav li').each(function(){
        if(!$(this).hasClass('active')){
            $(this).find('a span').css({ opacity:0});
        }
    })
    $('.thumbNav li a').hover(function()
    {
        if(!$(this).parent().hasClass('active')){
            $(this).find('span').stop().animate({ opacity:1}, aniButtonDuration,'easeOutCubic');
        }					   
    }, function(){
        if(!$(this).parent().hasClass('active')){
    	    $(this).find('span').stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic');
        }						   
    });
    
    
    //resize
   	var mainDIV = $('.main');
   	var privacy = $('#privacy');
    var subMenu = $('.submenu_1');

    $(window).resize(function()
    {
       resizeContent(500); 
    });
    
    function resizeContent(_animationSpeed)
    {
       var window_W = $(window).width();
       var mainDIV_W = 960;
       var leftOffset = ~~((window_W - mainDIV_W)/2);
         
       if (window_W > mainDIV_W) {
            if(leftOffset < 137){
	            mainDIV.stop().animate({paddingLeft: leftOffset}, _animationSpeed, 'easeOutCubic');
	            privacy.stop().animate({paddingLeft: leftOffset}, _animationSpeed, 'easeOutCubic');
            } else {
                mainDIV.stop().animate({paddingLeft: 137}, _animationSpeed, 'easeOutCubic');
                privacy.stop().animate({paddingLeft: 137}, _animationSpeed, 'easeOutCubic');
            }	
       } else {
	       mainDIV.stop().animate({paddingLeft:0}, _animationSpeed, 'easeOutCubic');
            privacy.stop().animate({paddingLeft: 0}, _animationSpeed, 'easeOutCubic');	
	   }

       if($('.jCarouselLite').height() < $('body').height() - 100){
            nextBtn.fadeOut();
            prevBtn.fadeOut();
        } else {
            nextBtn.fadeIn();
            prevBtn.fadeIn();
        }
        
        if(window_W < 1235){
           subMenu.css({left:'-143px'})
        } else {
           subMenu.css({left:'143px'})
        }
    }
    
    resizeContent(0);
    
    
    $('.scroll, .scrol2, .scrol3').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle',
	})
        
    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content'),
        menuHolder = $('.navigation .menu'),
        menu = $('#menu'),
        menuOpen = false,
        navText = $('#menu_button span').text(),
        navTextHolder = $('#menu_button span'),
	    nav=$('.menu'),
        menuBtn = $('#menu_button'),
        menuArr = $('#menu_button strong');
        
    var menuH = menu.height() + 5;  
    menu.css({top: -menuH, display:'none'});
    
    menuBtn.click(function(){
        if(!menuOpen){
            showMenu()
        } else {
            hideMenu();
            menuArr.stop().animate({opacity:1}, aniButtonDuration,'easeOutCubic');
        }
    }) 
    
    function showMenu(){
        menuOpen = true;
        menu.css({display:'block'}).stop().animate({top:'0px'}, 450, 'easeOutCubic', function(){
            menuHolder.css({overflow:'visible'});
        });
    }
    function hideMenu(){
        menuOpen = false;
        menuHolder.css({overflow:'hidden'});
        menu.stop().animate({top:-menuH}, 400, 'easeInCubic', function(){
            menu.css({display:'none'});
        });
        menuArr.stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic');
    }     
    
    menuArr.animate({opacity:0}, 0);
    menuBtn.hover(function()
    {
        menuArr.stop().animate({opacity:1}, aniButtonDuration,'easeOutCubic');					   
    }, function(){
        if(!menuOpen){
            menuArr.stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic');
        }	
    })
    
    $('#menu > li a b').each(function(){
        $(this).animate({opacity:0}, 0);
    })
    
    $('ul#menu').superfish({
      delay:       700,
      animation:   {height:'show'},
      speed:       700,
      autoArrows:  false,
      dropShadows: false
    });
    
    $('.submenu_1 li a').each(function(){
        $(this).hover(function()
        {
            $(this).find('b').stop().animate({opacity:1},aniButtonDuration, 'easeOutCubic');
            $(this).find('span').stop().animate({color:'#000'},aniButtonDuration, 'easeOutCubic'); 				   
        }, function(){
            $(this).find('b').stop().animate({opacity:0},aniButtonDuration, 'easeOutCubic');
            $(this).find('span').stop().animate({color:'#FFF'},aniButtonDuration, 'easeOutCubic');	
        })
    })
    
    nav.navs({
		useHash:true,
        defHash:'#!/',
        defFunc:function(li){
            $('a b',li).stop().animate({opacity:0},aniButtonDuration, 'easeOutCubic');                 
        },    
		hoverIn:function(li){
		    $('>a b',li).stop().animate({opacity:1},aniButtonDuration, 'easeOutCubic');
            $('>a span',li).stop().animate({color:'#000'},aniButtonDuration, 'easeOutCubic'); 
		},
		hoverOut:function(li){
            if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
    		    $('>a b',li).stop().animate({opacity:0},aniButtonDuration, 'easeOutCubic');
                $('>a span',li).stop().animate({color:'#FFF'},aniButtonDuration, 'easeOutCubic');
            }
		}				
    })	
    
    content.tabs({
		preFu:function(_)
        {
			_.li.css({display:'none', left:'-750px'});			
		}
		,actFu:function(_)
        {
            if(_.n != 0 && _.pren > 0){
                aniDelay = 450;
            }else{
                 aniDelay = 450;
            }
			if(_.curr){
				_.curr
					.stop()
					.delay(aniDelay).css({display:'block'}).animate({left:'0px'}, 450,'easeOutCubic');
            }
			if(_.prev){
				_.prev
					.stop()
					.animate({left:'-750px'}, 400,'easeInSine', function(){
					     $(this).css({display:'none'});
					})
            }
		}
	})
        
    nav.navs(function(n, _){
		content.tabs(n);
        hideMenu()
        if(_.n > -1){
            navTextHolder.text(_.curr.find('>a span').text());
        } else {
            navTextHolder.text(navText);
        }
	})

      
 
})