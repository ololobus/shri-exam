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

    var j1 = [ 0, 'link_photo' ];

    var j2 = [ 0, 'first_name' ];

    var j3 = [ 0, 'last_name' ];

    var j4 = [ 0, 'id' ];

    var j5 = [ 0, 'city' ];

    var j6 = [ 0, 'link_gihub' ];

    var j7 = [ 0, 'link_vk' ];

    var j8 = [ 0, 'link_facebook' ];

    var j9 = [ 0, 'link_yaru' ];

    var j10 = [ 0, 'about' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "member-card" + "\">";
        r0 += "<div class=\"" + "member-card__avatar" + "\">";
        r0 += "<img src=\"" + nodeset2attrvalue( ( selectNametest('link_photo', c0, []) ) ) + "\" class=\"" + "member-card__avatar__photo" + "\"/>";
        r0 += "</div>";
        r0 += "<div class=\"" + "member-card__name" + "\">";
        r0 += nodeset2xml( ( selectNametest('first_name', c0, []) ) ) + " " + nodeset2xml( ( selectNametest('last_name', c0, []) ) );
        r0 += "<a href=\"" + "#/students/" + nodeset2attrvalue( ( selectNametest('id', c0, []) ) ) + "/edit" + "\" class=\"" + "member-card__name__edit-button link" + "\">" + "edit" + "</a>";
        r0 += "</div>";
        r0 += "<div class=\"" + "member-card__city" + "\">" + nodeset2xml( ( selectNametest('city', c0, []) ) ) + "</div>";
        r0 += "<div class=\"" + "member-card__social-links" + "\">";
        if (!(cmpSN("", selectNametest('link_gihub', c0, [])))) {
            r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('link_gihub', c0, []) ) ) + "\" class=\"" + "member-card__social-links__link" + "\" target=\"" + "_blank" + "\">";
            r0 += "<div class=\"" + "social-icon social-icon_set_github" + "\"></div>";
            r0 += "</a>";
        }
        if (!(cmpSN("", selectNametest('link_vk', c0, [])))) {
            r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('link_vk', c0, []) ) ) + "\" class=\"" + "member-card__social-links__link" + "\" target=\"" + "_blank" + "\">";
            r0 += "<div class=\"" + "social-icon social-icon_set_vk" + "\"></div>";
            r0 += "</a>";
        }
        if (!(cmpSN("", selectNametest('link_facebook', c0, [])))) {
            r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('link_facebook', c0, []) ) ) + "\" class=\"" + "member-card__social-links__link" + "\" target=\"" + "_blank" + "\">";
            r0 += "<div class=\"" + "social-icon social-icon_set_facebook" + "\"></div>";
            r0 += "</a>";
        }
        if (!(cmpSN("", selectNametest('link_yaru', c0, [])))) {
            r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('link_yaru', c0, []) ) ) + "\" class=\"" + "member-card__social-links__link" + "\" target=\"" + "_blank" + "\">";
            r0 += "<div class=\"" + "social-icon social-icon_set_yaru" + "\"></div>";
            r0 += "</a>";
        }
        r0 += "</div>";
        r0 += "<div class=\"" + "member-card__about" + "\">" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</div>";
        r0 += "</div>";

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

    yr.register('student', M);

})();
