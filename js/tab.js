// tab栏切换
$.fn.$btnId = function() {
    // console.log("调用函数、、、")
    $(this).children().click(function() {
        $(this).addClass('active').siblings().removeClass('active')
            // console.log($(this).index())
        var $index = $(this).index()
        var $Id = $(this).parent().data('target')
            //  console.log($Id)
        $($Id).children().eq($index).show().siblings().hide()
    })
}
$("[btn='btn']").$btnId()