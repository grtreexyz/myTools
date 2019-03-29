//cookie操作
_cookie = {
    set: function(key, val, time) { //设置cookie方法
        var date = new Date(); //获取当前时间
        if (time)
            var expiresDays = time; //将date设置为n天以后的时间
        else
            var expiresDays = 2;
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); //格式化为cookie识别的时间
        document.cookie = key + "=" + val + ";expires=" + date.toGMTString(); //设置cookie
    },
    get: function(key) { //获取cookie方法
        var temp = document.cookie.match(new RegExp("(?:^| )" + key + "=([^;]*)(?:;|$)"));
        if (temp != null) return temp[1];
        else return null;
    },
    getAll: function() {
        var temp = document.cookie.match(/[^= ]*=[^;]*;/g);
        var r = {},
            t;
        for (var i = 0; i < temp.length; i++) {
            t = temp[i].split("=");
            r[t[0]] = t[1];
        }
        return r;
    },
    del: function(key) { //删除cookie方法
        var date = new Date(); //获取当前时间
        date.setTime(date.getTime() - 10000); //将date设置为过去的时间
        document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie
    }
}
