(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(document).ready(function () {
    $('.content1>ul li').click(function () {
        $('.content1>ul li').css({'background': '#bfedca', 'border-right': '1px solid #2a8540'});
        $(this).css({
            'background': 'url(images/tabBtn.png) center no-repeat',
            'background-size': 'cover',
            'border-right': 'none'
        });
        $('.content1>ul li').css({'color': '#888888', 'font-size': '2em'});
        $(this).css({'color': '#fff', 'font-size': '2.1em'});
    });
    $('.content1>ul li:nth-child(1)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费38元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续3个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送15元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>23元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送300M</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>38元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>600M</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>50分钟</a>通话');
    });
    $('.content1>ul li:nth-child(2)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费58元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续3个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送20元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送500M</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>20元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>700M</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>50分钟</a>通话');
    });
    $('.content1>ul li:nth-child(3)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费88元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续3个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送700M</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>30元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>900M</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>120分钟</a>通话');
    });
    $('.content1>ul li:nth-child(4)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费108元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送20元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送1G</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>20元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>1.3G</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>80分钟</a>通话');
    });
    $('.content1>ul li:nth-child(5)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费128元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>多得10元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送1G</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>20元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>1G</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>120分钟</a>通话');
    });
    $('.content1>ul li:nth-child(6)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费158元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送2G</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>30元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>3G</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>90分钟</a>通话');
    });
    $('.content1>ul li:nth-child(7)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费188元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送3G</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>30元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>4G</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>90分钟</a>通话');
    });
    $('.content1>ul li:nth-child(8)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费288元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>70元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送3G</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>100元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>4G</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>400分钟</a>通话');
    });
    $('.content1>ul li:nth-child(9)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费388元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>70元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送3G</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>100元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>5G</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>400分钟</a>通话');
    });
    $('.content1>ul li:nth-child(10)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费588元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>170元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送3G</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>200元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>7G</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>800分钟</a>通话');
    });
    $('.content1>ul li:nth-child(11)').click(function () {
        $('.content1>.right>p:nth-child(2)').html('套餐月费888元');
        $('.content1>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content1>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content1>.right>p:nth-child(5)').html('相当于<a>270元升档!</a>');
        $('.content1>.right>p:nth-child(6)').html('或每月<a>赠送3G</a>流量');
        $('.content1>.right>p:nth-child(7)').html('相当于<a>300元加购</a>');
        $('.content1>.right>p:nth-child(8)').html('<a>13G</a>流量');
        $('.content1>.right>p:nth-child(9)').html('<a>1400分钟</a>通话');
    });

    $('.content2>ul li').click(function () {
        $('.content2>ul li').css({'background': '#bfedca', 'border-right': '1px solid #2a8540'});
        $(this).css({
            'background': 'url(images/tabBtn.png) center no-repeat',
            'background-size': 'cover',
            'border-right': 'none'
        });
        $('.content2>ul li').css({'color': '#888888', 'font-size': '2em'});
        $(this).css({'color': '#fff', 'font-size': '2.1em'});
    });
    $('.content2>ul li:nth-child(1)').click(function () {
        $('.content2>.right>p:nth-child(2)').html('套餐月费30元');
        $('.content2>.right>p:nth-child(3)').html('移动公司连续3个月');
        $('.content2>.right>p:nth-child(4)').html('每月<a>赠送10元</a>话费');
        $('.content2>.right>p:nth-child(5)').html('相当于<a>20元升档!</a>');
        $('.content2>.right>p:nth-child(6)').html('或每月<a>赠送500M</a>流量');
        $('.content2>.right>p:nth-child(7)').html('相当于<a>30元加购</a>');
        $('.content2>.right>p:nth-child(8)').html('<a>1GB</a>流量');
    });
    $('.content2>ul li:nth-child(2)').click(function () {
        $('.content2>.right>p:nth-child(2)').html('套餐月费50元');
        $('.content2>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content2>.right>p:nth-child(4)').html('每月<a>赠送20元</a>话费');
        $('.content2>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content2>.right>p:nth-child(6)').html('或每月<a>赠送1GB</a>流量');
        $('.content2>.right>p:nth-child(7)').html('相当于<a>20元加购</a>');
        $('.content2>.right>p:nth-child(8)').html('<a>1.5GB</a>流量');
    });
    $('.content2>ul li:nth-child(3)').click(function () {
        $('.content2>.right>p:nth-child(2)').html('套餐月70元');
        $('.content2>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content2>.right>p:nth-child(4)').html('每月<a>赠送20元</a>话费');
        $('.content2>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content2>.right>p:nth-child(6)').html('或每月<a>赠送2GB</a>流量');
        $('.content2>.right>p:nth-child(7)').html('相当于<a>20元加购</a>');
        $('.content2>.right>p:nth-child(8)').html('<a>3GB</a>流量');
    });
    $('.content2>ul li:nth-child(4)').click(function () {
        $('.content2>.right>p:nth-child(2)').html('套餐月费100元');
        $('.content2>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content2>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content2>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content2>.right>p:nth-child(6)').html('或每月<a>赠送3GB</a>流量');
        $('.content2>.right>p:nth-child(7)').html('相当于<a>30元加购</a>');
        $('.content2>.right>p:nth-child(8)').html('<a>4GB</a>流量');
    });
    $('.content2>ul li:nth-child(5)').click(function () {
        $('.content2>.right>p:nth-child(2)').html('套餐月费130元');
        $('.content2>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content2>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content2>.right>p:nth-child(5)').html('相当于<a>0元升档!</a>');
        $('.content2>.right>p:nth-child(6)').html('或每月<a>赠送3GB</a>流量');
        $('.content2>.right>p:nth-child(7)').html('相当于<a>30元加购</a>');
        $('.content2>.right>p:nth-child(8)').html('<a>4GB</a>流量');
    });
    $('.content2>ul li:nth-child(6)').click(function () {
        $('.content2>.right>p:nth-child(2)').html('套餐月费180元');
        $('.content2>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content2>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content2>.right>p:nth-child(5)').html('相当于<a>20元升档!</a>');
        $('.content2>.right>p:nth-child(6)').html('或每月<a>赠送3GB</a>流量');
        $('.content2>.right>p:nth-child(7)').html('相当于<a>50元加购</a>');
        $('.content2>.right>p:nth-child(8)').html('<a>5GB</a>流量');
    });
    $('.content2>ul li:nth-child(7)').click(function () {
        $('.content2>.right>p:nth-child(2)').html('套餐月费280元');
        $('.content2>.right>p:nth-child(3)').html('移动公司连续6个月');
        $('.content2>.right>p:nth-child(4)').html('每月<a>赠送30元</a>话费');
        $('.content2>.right>p:nth-child(5)').html('相当于<a>70元升档!</a>');
        $('.content2>.right>p:nth-child(6)').html('或每月<a>赠送3GB</a>流量');
        $('.content2>.right>p:nth-child(7)').html('相当于<a>100元加购</a>');
        $('.content2>.right>p:nth-child(8)').html('<a>8GB</a>流量');
    });

    //按钮事件
    $('.btn.oneL').click(function () {

    });
    $('.btn.oneR').click(function () {

    });
    $('.btn.twoL').click(function () {

    });
    $('.btn.twoR').click(function () {

    });
});
