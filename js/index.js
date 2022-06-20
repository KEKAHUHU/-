window.addEventListener('load', function() {
    //获取元素
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    var w = focus.offsetWidth;
    //执行操作，自动轮播
    var timer = 0;
    var index = 0;
    var flag = false;

    timer = this.setInterval(function() {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)'
    }, 2000);
    //等着我们过渡完成之后，再去判断监听过渡完成的事件transitionend
    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0;
            // console 。1og( index) ;
            //去掉过渡效果这样让我们的ul快速的跳到月标位置
            ul.style.transition = 'none';
            //再来一次
            var translatex = -index * w;
            // ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';

        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            //再来一次
            var translatex = -index * w;
            // ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';

        }

        // 3.小圆点跟随变化
        //把ol里面li带有current类名的选出来去掉类名remove
        ol.querySelector('.current').classList.remove('current');
        //当前索引值添加current
        ol.children[index].classList.add('current');
    });
    // 4.手指滑动轮播图
    //触摸元素touchstart:获取于指初始坐标
    var starX = 0;
    var moveX = 0;
    ul.addEventListener('touchstart', function(e) {
        starX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    //移动手指touchmove:计算手指的滑动距离，并且移动
    ul.addEventListener('touchmove', function(e) {
        //计算移动的距离盒子原来的位置+ f指移动的距离

        moveX = e.targetTouches[0].pageX - starX;

        var translatex = -index * w + moveX;
        // ul.style.transition = 'all .3s';
        //    不需要缓冲动画//手指拖动的时候，不需要动画效果所以要取消过渡效果

        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
        e.preventDefault();
    });

    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就是 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左滑就是 播放下一张 moveX 是负值
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // (2) 如果移动距离小于50像素我们就回弹
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        // 手指离开的时候就重新开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });

    // 返回顶部的部分
    var goback = this.document.querySelector('.goBack');
    var nav = this.document.querySelector('.nav');
    this.window.addEventListener('scroll', function() {
        if (this.window.pageYOffset >= nav.offsetTop) {
            goback.style.display = 'block';
        } else {
            goback.style.display = 'none';
        }
    });
    goback.addEventListener('click', function() {
        window.scroll(0, 0);
    });

})