/**
 * Created by hasee on 2016/12/12.
 */


window.onload=function(){

    var i = 0;
    var leng = $('#bannerBg ul.pic_list li').length;
    $('a.next').click(function(){
        clickNext();
    })
    $('a.prev').click(function(){
        i--;
        if(i<0){
            i=leng-1;
        }

        $('#bannerBg ul.pic_list li').stop().eq(i).fadeIn().siblings().stop().hide();
        $('#bannerBg ul.btn_list li').eq(i).addClass('checked').siblings().removeClass('checked');
        $('#bannerBg').addClass('bg'+i).removeClass('bg'+((i+1)>4?0:(i+1)));
    });
    $('.banner').hover(function(){

        set = clearInterval(set);
        $('.banner a.next,.banner a.prev').css('display','block');
    },function(){
        $('.banner a.next,.banner a.prev').css('display','none');
        set = setInterval(clickNext,4000)
    })
    $('#bannerBg ul.btn_list li').click(function(){
        i = $(this).index();
        $('#bannerBg ul.pic_list li').stop().eq(i).fadeIn().siblings().stop().hide();
        $(this).addClass('checked').siblings().removeClass('checked');
        $('#bannerBg').addClass('bg'+i).removeClass('bg'+((i+1)>4?0:(i+1)));
    });
    var set = setInterval(clickNext,4000);
    function clickNext(){
        i++;
        if(i>leng-1){
            i=0;
        }
        $('#bannerBg ul.pic_list li').eq(i).fadeIn(600).siblings().hide();
        $('#bannerBg ul.btn_list li').eq(i).addClass('checked').siblings().removeClass('checked');
        $('#bannerBg').addClass('bg'+i).removeClass('bg'+((i-1)<0?4:(i-1)));
    }

    qh();

}

function qh(){
    var i=0;
    //Á½ÕÅÍ¼Æ¬ÇÐ»»
    setInterval(dt,1000);
    function dt(){
        i++;
        if(i>1){
            i=0;
        }
        $(".co3 .co3_1 img").eq(i).fadeIn(1000).siblings().hide();
    }



    setInterval(dd,2000);
    function dd(){
        i++;
        if(i>1){
            i=0;
        }
        $(".cont4 .cont4_d div:nth-child(2) ul li").eq(i).show().siblings().hide();
    }
}
