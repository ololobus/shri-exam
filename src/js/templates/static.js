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

    var j1 = [ 0, 'title' ];

    var j2 = [ 0, 'text' ];

    var j3 = [ 0, 'subsections_title' ];

    var j4 = [ 0, 'subsections' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "page__title" + "\">" + nodeset2xml( ( selectNametest('title', c0, []) ) ) + "</div>";
        r0 += "<div class=\"" + "page__text" + "\">" + ( simpleScalar('text', c0) ) + "</div>";
        if (simpleBoolean('subsections_title', c0)) {
            r0 += "<div class=\"" + "page__title" + "\">" + nodeset2xml( ( selectNametest('subsections_title', c0, []) ) ) + "</div>";
        }
        var items0 = selectNametest('subsections', c0, []);
        for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
            var c1 = items0[ i1 ];
            r0 += "<div class=\"" + "page__subsection" + "\">";
            r0 += "<div class=\"" + "page__subsection__title" + "\">" + nodeset2xml( ( selectNametest('title', c1, []) ) ) + "</div>";
            r0 += "<div class=\"" + "page__subsection__text" + "\">" + ( simpleScalar('text', c1) ) + "</div>";
            r0 += "</div>";
        }

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

    yr.register('static', M);

})();
