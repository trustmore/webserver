var outdiv = document.createElement("div");
outdiv.style.cssText = "background: #ffffff;"
    + "box-shadow: -1px 1px 10px #a0a0a0;"
    + "-webkit-box-shadow: -1px 1px 10px #a0a0a0;"
    + "-moz-box-shadow: -1px 1px 10px #a0a0a0;"
    + "-ms-box-shadow: -1px 1px 10px #a0a0a0;"
    + "-o-box-shadow: -1px 1px 10px #a0a0a0;"
    + "width: 240px;"
    + "height: 360px;"
    + "position: absolute;"
    + "right: 0px;"
    + "top: 0px;"
var h2 = "<h2 style='font-size: 18px;text-align: center;margin: 0 auto;margin-top: 36px;width: 100%;height: 28px;>团体服装定制</h2>";
var h3 = "<h3 style='font-size: 14px;text-align: center;margin: 0 auto;margin-top: 6px;width: 100%;height: 20px;>一键搞定 拒绝繁琐</h3>";
var tabox = "<div style='width: 201px;height: 108px;margin: 0 auto;color: #999999;border: 1px solid #CCCCCC;background-color: #fff;>";
var ta = "<textarea id='ta' maxlength='200' placeholder='例：xxx企业年会需要定制200件T恤，前胸印制logo' style='border: none;width: 181px;height: 88px;resize: none;outline: none;line-height: 26px;padding: 10px;font-size: 12px;'></textarea>;</div>"
var btn = "<div style='font-size: 14px;width: 214px;height: 38px;color: rgb(255, 255, 255);text-align: center;line-height: 38px;margin: 0 auto;background: rgb(255, 82, 82);'>立即定制</div>";
var txt = "<p style='font-size: 13px;'>今日已有<span style='color: rgb(255, 82, 82);'>150</span>人定制，总定制人数<span style='rgb(255, 82, 82);'>37130</span>人</p>";
outdiv.innerHtml = h2 + h3 + tabox + ta + btn + txt;
document.getElementsByTagName("body").appendChild(outdiv);
