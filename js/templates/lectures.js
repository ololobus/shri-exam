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

    var j1 = [ 0, 'lectures' ];

    var j2 = [ 0, 'id' ];

    var j3 = [ 0, 'name' ];

    var j4 = [ 0, 'lector', 0, 'id' ];

    var j5 = [ 0, 'lector', 0, 'name', 0, 'first_char' ];

    var j6 = [ 0, 'lector', 0, 'name', 0, 'last_chars' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "page__title" + "\">" + "Лекции" + "</div>";
        r0 += "<div class=\"" + "lectures-list" + "\">";
        var items0 = selectNametest('lectures', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "lectures-list__lecture" + "\">";
            r0 += "<div class=\"" + "lectures-list__lecture__marker" + "\"></div>";
            r0 += "<div class=\"" + "lectures-list__lecture__name" + "\">";
            r0 += "<a href=\"" + "#/lectures/" + nodeset2attrvalue( ( selectNametest('id', c1, []) ) ) + "\" class=\"" + "link" + "\">" + nodeset2xml( ( selectNametest('name', c1, []) ) ) + "</a>";
            r0 += "</div>";
            r0 += "<div class=\"" + "lectures-list__lecture__lector" + "\">";
            r0 += "<a href=\"" + "#/lectors/" + nodeset2attrvalue( ( m.s(j4, c1) ) ) + "\" class=\"" + "lectures-list__lecture__lector__link" + "\">";
            r0 += "<span class=\"" + "red" + "\">" + nodeset2xml( ( m.s(j5, c1) ) ) + "</span>";
            r0 += nodeset2xml( ( m.s(j6, c1) ) );
            r0 += "</a>";
            r0 += "</div>";
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

    yr.register('lectures', M);

})();
