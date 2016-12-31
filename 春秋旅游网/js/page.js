/**
 * Created by hasee on 2016/12/15.
 */

$(function (){

    //选项卡切换
    $(".cont7_head li").click(function(){
        $(".cont7_head li").attr("class","");
        $(this).attr("class","act");
        $(".cont7 div:nth-child(2) ul").eq($(this).index()).css("display","block").siblings("ul").css("display","none");
    });

    $(".cont8_head li").click(function(){
        $(".cont8_head li").attr("class","");
        $(this).attr("class","act_8");
        $(".cont8 div:nth-child(2) ul").eq($(this).index()).css("display","block").siblings("ul").css("display","none");
    });

    $(".cont7_head li").click(function(){
        $(".cont7_head li").attr("class","");
        $(this).attr("class","act");
        $(".cont77 div:nth-child(2) ul").eq($(this).index()).css("display","block").siblings("ul").css("display","none");
    });

    $(".cont8_head li").click(function(){
        $(".cont8_head li").attr("class","");
        $(this).attr("class","act_8");
        $(".cont88 div:nth-child(2) ul").eq($(this).index()).css("display","block").siblings("ul").css("display","none");
    });

    //邮轮游轮播
    var i=0;
        $(".cont100_right").click(function () {
            if(i<4){
                ++i;
                $(".cont100_left").css('background','#89c2ed');
                $(".cont100_right").css('background','#89c2ed');
            }else{
                i=4;
                $(".cont100_right").css('background','gray');
            }
            var j = i * 390;
            if(j<=1560) {
                $(".animets").animate({left: -j + 'px'}, 1000);
            }
        });

    $(".cont100_left").click(function () {
        if(i<=0){
            i=0;
            $(".cont100_left").css('background','gray');

        }else{
            i-=1;
            $(".cont100_right").css('background','#89c2ed');
            $(".cont100_left").css('background','#89c2ed');
        }
        var m = i * 390;
        if(m>=0) {
            $(".animets").animate({left:- m + 'px'}, 1000);
        }
    });

//全部下拉菜单
    $(".header .co2 .co2_1 span:nth-child(2)").click(function(){
        $(".header .co2 .co2_1 ul").css('display','block');
    });
    $(".header .co2 .co2_1 ul li").click(function(){
        $(".header .co2 .co2_1 span:nth-child(2) b").text($(this).text());
        $(".header .co2 .co2_1 ul").css('display','none');
    })


    //更改下拉菜单
    $(".header .co1 .col_2 div span:nth-child(2)").click(function(){
        $(".header .co1 .col_2 div ul").css('display','block');
    });
    $(".header .co1 .col_2 div ul li").click(function(){
        $(".header .co1 .col_2 div span:nth-child(1) b").text($(this).text());
        $(".header .co1 .col_2 div ul").css('display','none');
    })

});
