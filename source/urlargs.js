_urlArgs = new function() {
        var search = location.search.substring(1);
        this.get = function(key, isdecode) {
            var temp = search.match(new RegExp("(?:^|&)" + key + "=([^&]*)"));
            if (temp != null) {
                if (typeof isdecode == "undefined" || isdecode == true) {
                    return decodeURIComponent(temp[1]);
                } else {
                    return temp[1];
                }
            } else return null;
        };
        this.getAll = function(isdecode) {
            var args = {};
            var pairs = search.split('&');
            for (var i = 0; i < pairs.length; i++) {
                var pos = pairs[i].indexOf('=');
                if (pos == -1) continue;
                var name = pairs[i].substring(0, pos);
                var value = pairs[i].substring(pos + 1);
                if (typeof isdecode == "undefined" || isdecode == true) {
                    value = decodeURIComponent(value);
                }
                args[name] = value;
            }
            return args;
        }
    }