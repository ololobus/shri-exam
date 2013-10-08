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

    var j1 = [ 0, 'lecture', 0, 'name' ];

    var j2 = [ 0, 'lector', 0, 'id' ];

    var j3 = [ 0, 'lector', 0, 'name' ];

    var j4 = [ 0, 'lector', 0, 'photo_url' ];

    var j5 = [ 0, 'lecture', 0, 'video_url' ];

    var j6 = [ 0, 'lecture', 0, 'slides_url' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lecture" + "\">";
        r0 += "<div class=\"" + "lecture__name" + "\">" + nodeset2xml( ( m.s(j1, c0) ) ) + "</div>";
        r0 += "<div class=\"" + "lecture__lector" + "\">";
        r0 += "<div class=\"" + "lecture__lector__name" + "\">" + "Лектор: " + "<a href=\"" + "#/lectirs/" + nodeset2attrvalue( ( m.s(j2, c0) ) ) + "\" class=\"" + "link" + "\">" + nodeset2xml( ( m.s(j3, c0) ) ) + "</a></div>";
        r0 += "<div class=\"" + "lecture__lector__avatar" + "\">";
        r0 += "<img src=\"" + nodeset2attrvalue( ( m.s(j4, c0) ) ) + "\" class=\"" + "lecture__lector__avatar__photo" + "\"/>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<div class=\"" + "lecture__video" + "\">";
        r0 += "<iframe class=\"" + "player" + "\" width=\"" + "750" + "\" height=\"" + "250" + "\" frameborder=\"" + "0" + "\" src=\"" + nodeset2attrvalue( ( m.s(j5, c0) ) ) + "\"></iframe>";
        r0 += "</div>";
        if (nodeset2boolean( m.s(j6, c0) )) {
            r0 += "<div class=\"" + "lecture__slides" + "\">";
            r0 += "<iframe class=\"" + "player" + "\" width=\"" + "750" + "\" height=\"" + "625" + "\" frameborder=\"" + "0" + "\" src=\"" + nodeset2attrvalue( ( m.s(j6, c0) ) ) + "\"></iframe>";
            r0 += "</div>";
        }
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

    yr.register('lecture', M);

})();
