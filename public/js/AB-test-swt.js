<!-- Piwik -->
//http://www.65650000.com/
var _paq = _paq || [];
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.65650000.com"]);
_paq.push(["setDomains", ["*.www.65650000.com"]]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u = "//algalon.meiqia.com/";
    _paq.push(['setTrackerUrl', u + 'piwik.php']);
    _paq.push(['setSiteId', 2]);
    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'piwik.js';
    s.parentNode.insertBefore(g, s);
})();
<!-- End Piwik Code -->

(function() {
    function getCookie(name) {
        if (document.cookie.length > 0) {
            start = document.cookie.indexOf(name + "=")
            if (start != -1) {
                start = start + name.length + 1
                end = document.cookie.indexOf(";", start)
                if (end == -1) end = document.cookie.length
                return unescape(document.cookie.substring(start, end))
            }
        }
        return '';
    }

    function setCookie(name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    }

    var chatPlan = getCookie('CHAT_PLAN');
    if (chatPlan) {
        if (chatPlan === 'Meiqia') {
            plan_meiqia();
        } else {
            plan_swt();
        }
    } else {
        setChatPlan();
    }

    function setChatPlan() {
        var test_id = 1 % Math.ceil(2 * Math.random());
        if (test_id) {
            _paq.push(['setCustomDimension',
                customDimensionId = 1,
                customDimensionValue = 'Meiqia'
            ]);
            setCookie('CHAT_PLAN', 'Meiqia', 30);
            plan_meiqia();
        } else {
            _paq.push(['setCustomDimension',
                customDimensionId = 1,
                customDimensionValue = 'swt'
            ]);
            setCookie('CHAT_PLAN', 'swt', 30);
            plan_swt();
        }
    }
})();

var _CustomAddEventListener = window.addEventListener ? 'addEventListener' : 'attachEvent';

function callWidget() {
    var chatPlan = getCookie('CHAT_PLAN');
    if (chatPlan === 'Meiqia') {
        _MEIQIA('showPanel');
    } else if (chatPlan === 'swt') {
        openZoosUrl();
    }
    _paq.push(['trackEvent', chatPlan, 'chatBtnClick']);
}

function allSetMeiqia() {
    _paq.push(['trackEvent', 'Meiqia', 'widgetLoadSuccess']);
}
/**
* [swt all set]
* @param {number} deviceType [1: pc, 2: mobile]
*/
function allSetSwt(deviceType) {
    _paq.push(['trackEvent', 'swt', 'widgetLoadSuccess']);
}

function plan_meiqia() {
    (function(m, ei, q, i, a, j, s) {
        m[a] = m[a] || function() {
            (m[a].a = m[a].a || []).push(arguments)
        };
        j = ei.createElement(q),
            s = ei.getElementsByTagName(q)[0];
        j.async = true;
        j.charset = 'UTF-8';
        j.src = i + '?v=' + new Date().getUTCDate();
        s.parentNode.insertBefore(j, s);
    })(window, document, 'script', '//static.meiqia.com/dist/meiqia.js', '_MEIQIA');
    _MEIQIA('entId', 30027);
    _MEIQIA('allSet', allSetMeiqia);
}

function plan_swt() {
    (function() {
        var _swt_code = document.createElement("script");
        _swt_code.src = "http://pft.zoosnet.net/JS/LsJS.aspx?siteid=PFT80759913&float=1&lng=cn";
        _swt_code.language = "javascript";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(_swt_code, s);
    })();

    var _swtTimeout;
    var _swtIsReady = false;

    function checkReady() {
        _swtTimeout = setTimeout(function() {
            clearTimeout(_swtTimeout);
            if (_swtIsReady) {
                clearTimeout(_swtTimeout);
            } else {
                if (document.getElementById('LR_miniframe')) {
                    _swtIsReady = true;
                    allSetSwt(1);
                }
            }
        }, 100);
    }
    checkReady();
}
