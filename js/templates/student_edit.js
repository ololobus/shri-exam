var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    var j0 = [ ];

    var j1 = [ 0, 'id' ];

    var j2 = [ 0, 'first_name' ];

    var j3 = [ 0, 'last_name' ];

    var j4 = [ 0, 'city' ];

    var j5 = [ 0, 'about' ];

    var j6 = [ 0, 'link_photo' ];

    var j7 = [ 0, 'link_vk' ];

    var j8 = [ 0, 'link_facebook' ];

    var j9 = [ 0, 'link_gihub' ];

    var j10 = [ 0, 'link_yaru' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<form class=\"" + "form student-form" + "\">";
        if (simpleBoolean('id', c0) && !(cmpSN("", selectNametest('id', c0, [])))) {
            r0 += "<input type=\"" + "hidden" + "\" id=\"" + "student-id" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('id', c0, []) ) ) + "\"/>";
        }
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-first_name" + "\">" + "Имя" + "</label>";
        r0 += "<input class=\"" + "form__input-text" + "\" id=\"" + "student-first_name" + "\" name=\"" + "first_name" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('first_name', c0, []) ) ) + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-last_name" + "\">" + "Фамилия" + "</label>";
        r0 += "<input class=\"" + "form__input-text" + "\" id=\"" + "student-last_name" + "\" name=\"" + "last_name" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('last_name', c0, []) ) ) + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-city" + "\">" + "Город" + "</label>";
        r0 += "<input class=\"" + "form__input-text" + "\" id=\"" + "student-city" + "\" name=\"" + "city" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('city', c0, []) ) ) + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-about" + "\">" + "О себе" + "</label>";
        r0 += "<textarea class=\"" + "form__textarea" + "\" id=\"" + "student-about" + "\" name=\"" + "about" + "\" rows=\"" + "7" + "\" cols=\"" + "65" + "\">" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</textarea>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-link_photo" + "\">" + "URL фото" + "</label>";
        r0 += "<input class=\"" + "form__input-text" + "\" id=\"" + "student-link_photo" + "\" name=\"" + "link_photo" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('link_photo', c0, []) ) ) + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-link_vk" + "\">" + "VK" + "</label>";
        r0 += "<input class=\"" + "form__input-text" + "\" id=\"" + "student-link_vk" + "\" name=\"" + "link_vk" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('link_vk', c0, []) ) ) + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-link_facebook" + "\">" + "facebook" + "</label>";
        r0 += "<input class=\"" + "form__input-text" + "\" id=\"" + "student-link_facebook" + "\" name=\"" + "link_facebook" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('link_facebook', c0, []) ) ) + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-link_gihub" + "\">" + "GitHub" + "</label>";
        r0 += "<input class=\"" + "form__input-text" + "\" id=\"" + "student-link_gihub" + "\" name=\"" + "link_gihub" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('link_gihub', c0, []) ) ) + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        r0 += "<label class=\"" + "form__label" + "\" for=\"" + "student-link_yaru" + "\">" + "ya.ru" + "</label>";
        r0 += "<input class=\"" + "form__input-text" + "\" id=\"" + "student-link_yaru" + "\" name=\"" + "link_yaru" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('link_yaru', c0, []) ) ) + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "form__input-group" + "\">";
        if (simpleBoolean('id', c0) && !(cmpSN("", selectNametest('id', c0, [])))) {
            r0 += "<a href=\"" + "#/students/" + nodeset2attrvalue( ( selectNametest('id', c0, []) ) ) + "\"><div class=\"" + "student-form__cancel button button_color_red" + "\">" + "Отменить" + "</div></a>";
        } else {
            r0 += "<a href=\"" + "#/students" + "\"><div class=\"" + "student-form__cancel button" + "\">" + "Отменить" + "</div></a>";
        }
        r0 += "<div class=\"" + "student-form__submit button" + "\">" + "Сохранить" + "</div>";
        r0 += "</div>";
        r0 += "</form>";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        }
    };
    M.imports = [];

    yr.register('student_edit', M);

})();
