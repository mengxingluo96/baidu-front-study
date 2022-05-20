/**
 * @description 获取cookie
 * @method getCookie
 * @param {String} name cookie的键名
 * @return {String} 返回对应的cookie值，如果没找到，则返回 undefined
 */

function getCookie(name) {
    //your complement
    name = name + "="
    let curCookie = document.cookie.split(";");
    for (let index = 0; index < curCookie.length; index++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return undefined;
}

/**
 * @description 设置cookie
 * @method setCookie
 * @param {string} name cookie的键名
 * @param {string} value cookie的键值
 * @param {object} [option] cookie其他项，比如过期日期、安全策略等
 */

function setCookie(name, value, options = {}) {
    let now = new Date();
    let expires = "expires=" + now.setMinutes(now.getMinutes() + 5)
    if (options.secure) {
        expires = "expires=" + options["max-age"];
    }
    document.cookie = name + "=" + value + "; " + expires;
}

// 使用范例：
setCookie("student", "Amy", { secure: true, "max-age": 3600 });

/**
 * @description 删除cookie
 * @method deleteCookie
 * @param {String} name cookie的键名
 * @return {Bool} 删除成功返回true，删除失败，返回false
 */

function deleteCookie(name) {
    // 删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}