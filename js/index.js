// 轮播图
let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    // autoplay: 3000,//可选选项，自动滑动
    autoplayDisableOnInteraction: false,
    pagination: '.swiper-pagination',
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    slidesPerView:'auto',
    loopedSlides:8,
});
// 回到顶部
$('#js-go_top').gotoTop({
    offset : 500, //距离顶部的位置
    speed : 300, //移动到顶部的速度
    /*     iconSpeed : 300, //icon动画样式的速度*/
    animationShow : {
        'transform' : 'translate(0,0)',
        'transition': 'transform .5s ease-in-out'
    }, //icon动画样式显示时
    animationHide : {
        'transform' : 'translate(80px,0)',
        'transition': 'transform .5s ease-in-out'
    } //icon动画样式隐藏时
});

// 顶部替换货币
$(function(){
    let priceUnit = $('.price-unit');
    $('.money-ul').children().each(function(){
        let moneylis = $(this).text().substr(2);
        $(this).click(function(){
            priceUnit.text(moneylis);
        })
    })
    // console.log(priceUnit);
})
// 替换语言
$(function(){
    let langSpan = $('.lang-span');
    $('.lang-ul').children().each(function(){
        let langlis = $(this).text().substr(1);
        $(this).click(function(){
            langSpan.text(langlis);
        })
    })
    // console.log(priceUnit);
})

// 下拉菜单被点击
$(function(){

    $('#cssmenu').on('click',function(){
        $('body').css('overflow','hidden');
        $('#mask').show();
    });
    $('.cd').on('click',function(){
        // console.log($('#mask').get(0));
        // $('#mask').get(0).style.display = 'none';
        // console.log('haha');

        $('.menu-ul').hide();
        // $('#cssmenu').unbind();
        // $('#cssmenu').hide();
        $('body').css('overflow','visible');
    })    
})



