<!-- Piwik -->
var _paq = _paq || [];
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.tedu.cn"]);
_paq.push(["setDomains", ["*.www.tedu.cn", "*.m.tedu.cn"]]);
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
            plan_53();
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
                customDimensionValue = '53'
            ]);
            setCookie('CHAT_PLAN', '53', 30);
            plan_53();
        }
    }
})();

var _CustomAddEventListener = window.addEventListener ? 'addEventListener' : 'attachEvent';

function callWidget() {
    var chatPlan = getCookie('CHAT_PLAN');
    if (chatPlan === 'Meiqia') {
        _MEIQIA('showPanel');
    } else if (chatPlan === '53') {
        max_from_company_mini();
    }
    _paq.push(['trackEvent', chatPlan, 'chatBtnClick']);
}

function allSetMeiqia() {
    _paq.push(['trackEvent', 'Meiqia', 'widgetLoadSuccess']);
    document.getElementById('MEIQIA-BTN-HOLDER') && (document.getElementById('MEIQIA-BTN-HOLDER')[_CustomAddEventListener]('click', function() {
        _paq.push(['trackEvent', 'Meiqia', 'chatBtnClick']);
    }));
}
/**
* [53 all set]
* @param {number} deviceType [1: pc, 2: mobile]
*/
function allSet53(deviceType) {
    _paq.push(['trackEvent', '53', 'widgetLoadSuccess']);
    if (deviceType === 1) {
        document.getElementById('iconDivMain1') && (document.getElementById('iconDivMain1')[_CustomAddEventListener]('click', function() {
            _paq.push(['trackEvent', '53', 'chatBtnClick']);
        }));
    } else {
        document.getElementById('toolbar') && (document.getElementById('toolbar').getElementsByTagName('li')[2][_CustomAddEventListener]('click', function() {
            _paq.push(['trackEvent', '53', 'chatBtnClick']);
        }));
    }
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
    _MEIQIA('entId', 19438);
    _MEIQIA('allSet', allSetMeiqia);
}

function plan_53() {
    (function() {
        var _53code = document.createElement("script");
        _53code.src = "//tb.53kf.com/code/code/10120883/1";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(_53code, s);
    })();

    var _53timeout;
    var _53IsReady = false;

    function checkReady() {
        _53timeout = setTimeout(function() {
            clearTimeout(_53timeout);
            if (_53IsReady) {
                clearTimeout(_53timeout);
            } else {
                if (document.getElementById('iframe_company_mini')) {
                    _53IsReady = true;
                    allSet53(1);
                }
                if (document.getElementById('iframe_mobile_chat')) {
                    _53IsReady = true;
                    allSet53(2);
                }
                checkReady();
            }
        }, 100);
    }
    checkReady();
}
