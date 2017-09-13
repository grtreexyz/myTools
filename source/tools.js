/**
     * 创建CSS样式表
     * @param css
     * @param cssDoc
     */
    function createStyle(css) {
        var style = document.createElement("style");
        style.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(style);
        if (style.styleSheet)
            style.styleSheet.cssText = css;
        else
            style.appendChild(document.createTextNode(css));
    }