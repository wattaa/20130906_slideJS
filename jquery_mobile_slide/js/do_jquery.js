/**
 * Created with JetBrains WebStorm.
 * User: shiraishikeigo
 * Date: 2013/08/29
 * Time: 1:12
 * To change this template use File | Settings | File Templates.
 */

$(document).live('pageinit',function(){
    var dispflg = 1;
    $(".ph-swipe").bind("swipe", function(){
        if(dispflg==1){
            $("#slidemenu").css("display","none");
            dispflg=0;
        }else if(dispflg==0){
            $("#slidemenu").css("display","block");
            dispflg=1;
        }
    });
    $(".ph-swipe2").bind("click", function(){
        if(dispflg==1){
            $("#slidemenu").css("display","none");
            dispflg=0;
        }else if(dispflg==0){
            $("#slidemenu").css("display","block");
            dispflg=1;
        }
    });
});

$(function(){
    $("dt#guideHide").click(function(){
        $('dd#guideLinks').toggle();
    });
});
