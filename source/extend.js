function extend(target, options) {
        var src,copy;
        for (name in options) {
            src = target[name];
            copy = options[name];
            // Prevent never-ending loop
            if (target === copy) {
                continue;
            }
            if (copy instanceof Array) {
                if(src instanceof Array)
                    target[name] = arguments.callee(src, copy);
                else
                    target[name] = arguments.callee([], copy);
            } else if (Object.prototype.toString.call(copy)=="[object Object]") {
                if(Object.prototype.toString.call(src)=="[object Object]")
                    target[name] = arguments.callee(src, copy);
                else
                    target[name] = arguments.callee({}, copy);
            } else {
                target[name] = copy;
            }
        }
        return target;
    }