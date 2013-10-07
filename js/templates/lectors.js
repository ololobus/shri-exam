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

    var j1 = [ 0, 'lectors' ];

    var j2 = [ 0, 'id' ];

    var j3 = [ 0, 'photo_url' ];

    var j4 = [ 0, 'name' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "page__title" + "\">" + "Лекторы" + "</div>";
        r0 += "<div class=\"" + "people-list" + "\">";
        var items0 = selectNametest('lectors', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "people-list__member" + "\">";
            r0 += "<a href=\"" + "#/lectors/" + nodeset2attrvalue( ( selectNametest('id', c1, []) ) ) + "\">";
            r0 += "<div class=\"" + "people-list__member__avatar" + "\">";
            r0 += "<img class=\"" + "people-list__member__avatar__photo" + "\" src=\"" + nodeset2attrvalue( ( selectNametest('photo_url', c1, []) ) ) + "\"/>";
            r0 += "</div>";
            r0 += "<div class=\"" + "people-list__member__name" + "\">" + nodeset2xml( ( selectNametest('name', c1, []) ) ) + "</div>";
            r0 += "</a>";
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

    yr.register('lectors', M);

})();
