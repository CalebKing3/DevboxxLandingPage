if (typeof(sharethis) == "undefined" || typeof(sharethis) == undefined) {
    window.sharethis = window.sharethis || {};
    sharethis.widgets = sharethis.widgets || {};
    sharethis.utilities = sharethis.utilities || {};
    sharethis.globals = sharethis.globals || {};
    var hbType = 1;
    sharethis.globals = function () {
        this._stFpc = function () {
            if (!document.domain) {
                return false
            }
            var g = this._stGetFpc("__unam");
            if (g == false) {
                var c = Math.round(Math.random() * 2147483647);
                c = c.toString(16);
                var h = (new Date()).getTime();
                h = h.toString(16);
                var e = "";
                var a = this._stGetD();
                a = a.split(/\./)[1];
                e = this._stdHash(a) + "-" + h + "-" + c + "-1";
                g = e;
                this._stSetFpc(g)
            } else {
                var b = g;
                var f = b.split(/\-/);
                if (f.length == 4) {
                    var d = Number(f[3]);
                    d++;
                    b = f[0] + "-" + f[1] + "-" + f[2] + "-" + d;
                    g = b;
                    this._stSetFpc(g)
                }
            }
            return g
        };
        this._stSetFpc = function (g) {
            var a = "__unam";
            var c = new Date;
            var j = c.getFullYear();
            var f = c.getMonth() + 9;
            var h = c.getDate();
            var d = a + "=" + escape(g);
            if (j) {
                var b = new Date(j, f, h);
                d += "; expires=" + b.toGMTString()
            }
            var e = this._stGetD();
            d += "; domain=" + escape(e) + ";path=/";
            document.cookie = d
        };
        this._stGetD = function () {
            var b = document.domain.split(/\./);
            var a = "";
            if (b.length > 1) {
                a = "." + b[b.length - 2] + "." + b[b.length - 1]
            }
            return a
        };
        this._stGetFpc = function (b) {
            var a = document.cookie.match("(^|;) ?" + b + "=([^;]*)(;|$)");
            if (a) {
                return (unescape(a[2]))
            } else {
                return false
            }
        };
        this._stdHash = function (a) {
            var e = 0, d = 0;
            for (var c = a.length - 1; c >= 0; c--) {
                var b = parseInt(a.charCodeAt(c));
                e = ((e << 8) & 268435455) + b + (b << 12);
                if ((d = e & 161119850) != 0) {
                    e = (e ^ (d >> 20))
                }
            }
            return e.toString(16)
        };
        this.dbrInfo = function () {
            var a = document.referrer;
            if (a && a.length > 0) {
                var c = /(http:\/\/)(.*?)\/.*/i;
                var b = /(^.*\?)(.*)/ig;
                var f = "";
                var e = a.replace(c, "$2");
                if (e.length > 0) {
                    f += "&refDomain=" + e
                } else {
                    return false
                }
                var d = a.replace(b, "$2");
                if (d.length > 0) {
                    f += "&refQuery=" + encodeURIComponent(d)
                }
                return f
            } else {
                return ""
            }
        };
        this.initialize = function () {
            if (typeof(SHARETHIS) == "undefined") {
                this.sessionID_time = (new Date()).getTime().toString();
                this.sessionID_rand = Number(Math.random().toPrecision(5).toString().substr(2)).toString();
                this.sessionID = this.sessionID_time + "." + this.sessionID_rand;
                this.fpc = this._stFpc();
                this.pageViewLogged = false
            } else {
                this.fpc = SHARETHIS.fpc;
                this.sessionID = SHARETHIS.sessionID;
                this.pageViewLogged = true
            }
            this.hostname = location.host;
            this.location = location.pathname;
            this.rurl = this.dbrInfo();
            this.pURL = encodeURIComponent(document.location.href);
            this.ref = document.referrer;
            this.adNum = 0;
            this.discoveryNum = 0;
            this.barPageDoneLoading = 0;
            this.hoverbuttonsNum = 0;
            this.sharebarNum = 0;
            this.pulldownbarNum = 0;
            this.serviceWidgetNum = 0
        };
        this.initialize()
    };
    sharethis.globals = new sharethis.globals();
    sharethis.widgets.discovery = function (b, c, f) {
        f = (typeof(f) != "undefined") ? f : false;
        if (typeof(stLight) == "undefined" && typeof(SHARETHIS) == "undefined") {
            var a = "";
            if (!typeof(stLight) == "undefined") {
                a = "buttons.js"
            } else {
                if (!typeof(SHARETHIS) == "undefined") {
                    a = "sharethis.js"
                }
            }
            var e = "//l.sharethis.com/pview?event=pview&product=TrendingWidget&version=" + a + "&fpc=" + sharethis.globals.fpc + "&sessionID=" + sharethis.globals.sessionID + "&hostname=" + sharethis.globals.hostname + "&location=" + encodeURIComponent(sharethis.globals.location) + "&publisher=" + c.publisher + "&shareHash=&incomingHash=&refDomain=&refQuery=&url=" + sharethis.globals.pURL + "&sharURL=&source=&title=&ts" + new Date().getTime() + ".0";
            var d = new Image(1, 1);
            d.src = e;
            d.onload = function () {
                return
            }
        } else {
        }
        this.location = "//sd.sharethis.com/disc/index.9b47df47f8aa407aa8aa08dc2b1fff2c.html";
        if (f) {
            this.location = "//sd.sharethis.com/disc/index-barebones.html"
        }
        this.settings = c;
        this.settings.hostname = sharethis.globals.hostname;
        this.settings.location = sharethis.globals.location;
        this.createQueryString = function () {
            var j = new Array("viewType", "sort", "width", "height", "domain", "type", "src", "topic", "category", "defaultSelection", "theme", "sessionID", "fpc", "pURL", "publisher", "hostname", "location", "ref", "defaultImgUrl", "openContentInNewWindow", "showNoThumbnailArticle");
            var n = new Array("visible", "text");
            var s = new Array("visible");
            var k = new Array("numResults", "maxResults");
            var q = new Array("line0", "line1", "line2");
            var h = new Array("visible");
            var l = new Array();
            var m = new Array("widgetFontFamily", "articleLinkFontSize", "sourceLinkFontSize", "snippetFontSize");
            if (f) {
                j.push("specialStyle");
                h.push("align");
                var g = new Array("visible", "align");
                var u = new Array("everyoneLoadRange");
                var p = new Array("widgetBackgroundColor", "widgetBorder", "articleLinkColor", "sourceLinkColor");
                var r = new Array("visible", "size");
                for (i = 0; i < r.length; i++) {
                    if (this.settings.visualRank != undefined && this.settings.visualRank[r[i]] != undefined) {
                        l.push("visualRank." + r[i] + "=" + encodeURIComponent(this.settings.visualRank[r[i]]))
                    }
                }
                for (i = 0; i < g.length; i++) {
                    if (this.settings.headline != undefined && this.settings.headline[g[i]] != undefined) {
                        l.push("headline." + g[i] + "=" + encodeURIComponent(this.settings.headline[g[i]]))
                    }
                }
            } else {
                var u = new Array("everyoneLoadRange", "friendLoadRange", "autoRefreshSpeed", "fetchUpdateSpeed", "firstFetchUpdateSpeed");
                var t = new Array("images", "intAd");
                var p = new Array("headerBackgroundColor", "headerTextColor", "widgetBackgroundColor", "widgetBorder", "articleLinkColor", "sourceLinkColor", "conversationBackgroundColor", "signInPromptBackgroundColor", "signInPromptBorder");
                var o = new Array("like", "comment");
                for (i = 0; i < t.length; i++) {
                    if (this.settings.ad != undefined && this.settings.ad[t[i]] != undefined) {
                        l.push("ad." + t[i] + "=" + encodeURIComponent(this.settings.ad[t[i]]))
                    }
                }
                for (i = 0; i < o.length; i++) {
                    if (this.settings.socialFeatures != undefined && this.settings.socialFeatures[o[i]] != undefined) {
                        l.push("socialFeatures." + o[i] + "=" + encodeURIComponent(this.settings.socialFeatures[o[i]]))
                    }
                }
            }
            for (i = 0; i < j.length; i++) {
                if (this.settings[j[i]] != undefined) {
                    l.push(j[i] + "=" + encodeURIComponent(this.settings[j[i]]))
                }
            }
            for (i = 0; i < n.length; i++) {
                if (this.settings.header != undefined && this.settings.header[n[i]] != undefined) {
                    l.push("header." + n[i] + "=" + encodeURIComponent(this.settings.header[n[i]]))
                }
            }
            for (i = 0; i < s.length; i++) {
                if (this.settings.footer != undefined && this.settings.footer[s[i]] != undefined) {
                    l.push("footer." + s[i] + "=" + encodeURIComponent(this.settings.footer[s[i]]))
                }
            }
            for (i = 0; i < u.length; i++) {
                if (this.settings.realtime != undefined && this.settings.realtime[u[i]] != undefined) {
                    l.push("realtime." + u[i] + "=" + encodeURIComponent(this.settings.realtime[u[i]]))
                }
            }
            for (i = 0; i < k.length; i++) {
                if (this.settings.resultList != undefined && this.settings.resultList[k[i]] != undefined) {
                    l.push("resultList." + k[i] + "=" + encodeURIComponent(this.settings.resultList[k[i]]))
                }
            }
            for (i = 0; i < q.length; i++) {
                if (this.settings.metadata != undefined && this.settings.metadata[q[i]] != undefined) {
                    l.push("metadata." + q[i] + "=" + encodeURIComponent(this.settings.metadata[q[i]]))
                }
            }
            for (i = 0; i < h.length; i++) {
                if (this.settings.image != undefined && this.settings.image[h[i]] != undefined) {
                    l.push("image." + h[i] + "=" + encodeURIComponent(this.settings.image[h[i]]))
                }
            }
            for (i = 0; i < p.length; i++) {
                if (this.settings.customColors != undefined && this.settings.customColors[p[i]] != undefined) {
                    l.push("customColors." + p[i] + "=" + encodeURIComponent(this.settings.customColors[p[i]]))
                }
            }
            for (i = 0; i < m.length; i++) {
                if (this.settings.customStyling != undefined && this.settings.customStyling[m[i]] != undefined) {
                    l.push("customStyling." + m[i] + "=" + encodeURIComponent(this.settings.customStyling[m[i]]))
                }
            }
            return l.join("&")
        };
        this.initialize = function (g, h) {
            try {
                this.frame = document.createElement('<iframe name="stw_discovery' + sharethis.globals.discoveryNum + '" allowTransparency="true" style="body{background:transparent;},display=inline"></iframe>')
            } catch (j) {
                this.frame = document.createElement("iframe");
                this.frame.allowTransparency = "true";
                this.frame.setAttribute("allowTransparency", "true")
            }
            this.frame.id = "stw_discovery" + sharethis.globals.discoveryNum;
            this.frame.className = "stw_discovery";
            this.frame.name = "stw_discovery" + sharethis.globals.discoveryNum;
            this.frame.frameBorder = "0";
            this.frame.scrolling = "no";
            this.frame.width = this.settings.width + "px";
            this.frame.height = this.settings.height + "px";
            this.frame.src = this.location + "#" + this.createQueryString() + "&cs";
            g.appendChild(this.frame);
            try {
                window.frames[this.frame.name].location.replace(this.frame.src)
            } catch (j) {
            }
            sharethis.globals.discoveryNum++
        };
        this.initialize(b, c)
    };
    sharethis.widgets.sharebar = function (a) {
        this.initialize = function () {
            if (sharethis.globals.sharebarNum == 0) {
                try {
                    var b = sharethis.utilities.getInternetExplorerVersion();
                    if (b > -1 && b < 7) {
                        return
                    }
                    a.hostname = sharethis.globals.hostname;
                    a.location = sharethis.globals.location;
                    sharethis.globals.sharebarOptions = a;
                    if (sharethis.utilities.domUtilities.addListenerCompatible(window, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1
                        }) == false) {
                        sharethis.utilities.domUtilities.addListenerCompatible(document, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1
                        })
                    }
                    stLight.options({
                        publisher: a.publisher,
                        autoPosition: "center",
                        onhover: false,
                        loadedFromBar: true
                    });
                    sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/bar.063710b50056a153b27845a5970365c7.css", "css", "head", "");
                    sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/sharebar.73b1e3e8ba081b4de5c4b572479e2354.js", "js", "head", "")
                } catch (c) {
                    console.log(c)
                }
                sharethis.globals.sharebarNum = 1
            }
        };
        this.initialize()
    };
    sharethis.widgets.hoverbuttons = function (a) {
        this.initialize = function () {
            if (sharethis.globals.hoverbuttonsNum == 0) {
                try {
                    var c = sharethis.utilities.getInternetExplorerVersion(), e, b = 0;
                    if (c > -1 && c < 7) {
                        return
                    }
                    a.hostname = sharethis.globals.hostname;
                    a.location = sharethis.globals.location;
                    sharethis.globals.hoveringButtonsOptions = a;
                    if (sharethis.utilities.domUtilities.addListenerCompatible(window, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1
                        }) == false) {
                        sharethis.utilities.domUtilities.addListenerCompatible(document, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1
                        })
                    }
                    stLight.options({publisher: a.publisher, autoPosition: "center", onhover: false});
                    e = setInterval(function () {
                        if (isEsiLoaded) {
                            clearInterval(e);
                            if (showHoverbarReskinned) {
                                sharethis.utilities.abTestingSamplation()
                            } else {
                                sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/hoverbuttons.6eab8de2ee93b309873157b6d3f977fe.css", "css", "head", "");
                                sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/hoverbuttons.035267d71d894482eb413e5bea488ff5.js", "js", "head", "")
                            }
                        }
                        b += 500;
                        if (b >= 5000) {
                            clearInterval(e);
                            sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/hoverbuttons.6eab8de2ee93b309873157b6d3f977fe.css", "css", "head", "");
                            sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/hoverbuttons.035267d71d894482eb413e5bea488ff5.js", "js", "head", "")
                        }
                    }, 500)
                } catch (d) {
                    console.log(d)
                }
                sharethis.globals.hoverbuttonsNum = 1
            }
        };
        this.initialize()
    };
    sharethis.widgets.serviceWidget = function (a) {
        this.initialize = function () {
            if (sharethis.globals.serviceWidgetNum == 0) {
                try {
                    var b = sharethis.utilities.getInternetExplorerVersion();
                    if (b > -1 && b < 7) {
                        return
                    }
                    a.hostname = sharethis.globals.hostname;
                    a.location = sharethis.globals.location;
                    sharethis.globals.serviceWidgetOptions = a;
                    if (sharethis.utilities.domUtilities.addListenerCompatible(window, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1
                        }) == false) {
                        sharethis.utilities.domUtilities.addListenerCompatible(document, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1
                        })
                    }
                    stLight.options({publisher: a.publisher, autoPosition: "center", onhover: false});
                    sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/serviceWidget-" + a.service + ".css", "css", "head", "");
                    sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/serviceWidget.js", "js", "head", "")
                } catch (c) {
                    console.log(c)
                }
                sharethis.globals.serviceWidgetNum = 1
            }
        };
        this.initialize()
    };
    sharethis.widgets.pulldownbar = function (a) {
        this.initialize = function () {
            if (sharethis.globals.pulldownbarNum == 0) {
                try {
                    var b = sharethis.utilities.getInternetExplorerVersion();
                    if (b > -1 && b < 7) {
                        return
                    }
                    a.hostname = sharethis.globals.hostname;
                    a.location = sharethis.globals.location;
                    sharethis.globals.pulldownbarOptions = a;
                    if (sharethis.utilities.domUtilities.addListenerCompatible(window, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1
                        }) == false) {
                        sharethis.utilities.domUtilities.addListenerCompatible(document, "load", function () {
                            sharethis.globals.barPageDoneLoading = 1
                        })
                    }
                    stLight.options({publisher: a.publisher, autoPosition: "center", onhover: false});
                    sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/pulldownbar.063710b50056a153b27845a5970365c7.css", "css", "head", "");
                    sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/pulldownbar.563f805066c86e220f7fa3df63b0da80.js", "js", "head", "")
                } catch (c) {
                    console.log(c)
                }
                sharethis.globals.pulldownbarNum = 1
            }
        };
        this.initialize()
    };
    sharethis.utilities.loadfile = function (a, b, d, e) {
        var c;
        if (b == "js") {
            c = document.createElement("script");
            c.setAttribute("type", "text/javascript");
            c.setAttribute("src", a)
        } else {
            if (b == "css") {
                c = document.createElement("link");
                c.setAttribute("rel", "stylesheet");
                c.setAttribute("type", "text/css");
                c.setAttribute("href", a)
            }
        }
        if (e != "" && typeof(e) == "function") {
            c.onload = e;
            c.onreadystatechange = function () {
                if (c.readyState == "loaded" || c.readyState == "complete") {
                    e()
                }
            }
        }
        if (typeof c != "undefined") {
            if (d == "head") {
                document.getElementsByTagName("head")[0].appendChild(c)
            } else {
                document.getElementsByTagName("body")[0].appendChild(c)
            }
        }
    };
    sharethis.utilities.domUtilities = function () {
        function a(d, c, b) {
            if (d == "null" || typeof(d) == "null" || typeof(d) == "undefined" || d === "") {
                return document.getElementById(c)
            } else {
                return d
            }
        }

        return {
            addListenerCompatible: function (d, b, c) {
                if (typeof(d.addEventListener) != "undefined") {
                    d.addEventListener(b, c, false);
                    return true
                } else {
                    if (typeof d.attachEvent != "undefined") {
                        d.attachEvent("on" + b, c);
                        return true
                    }
                }
                return false
            }, removeListenerCompatible: function (d, b, c) {
                if (typeof(d.removeEventListener) != "undefined") {
                    d.removeEventListener(b, c, false);
                    return true
                } else {
                    if (typeof d.detachEvent != "undefined") {
                        d.detachEvent("on" + b, c);
                        return true
                    }
                }
                return false
            }, trimString: function (b) {
                return b.replace(/^\s+|\s+$/g, "")
            }, removeClass: function (d, c, b) {
                var e = a(d, c, b);
                e.className = e.className.replace(b, "");
                e.className = sharethis.utilities.domUtilities.trimString(e.className)
            }, addClass: function (d, c, b) {
                var e = a(d, c, b);
                if (e.className == "") {
                    e.className = b
                } else {
                    e.className += " " + b
                }
            }, hasClass: function (c, b) {
                if (typeof(c) == "undefined" || c == null) {
                    return false
                }
                if (typeof(c.className) != "undefined") {
                    return c.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"))
                } else {
                    return false
                }
            }, removeClassIfPresent: function (d, c, b) {
                var e = a(d, c, b);
                if (sharethis.utilities.domUtilities.hasClass(e, b)) {
                    sharethis.utilities.domUtilities.removeClass(e, "", b)
                }
            }, addClassIfNotPresent: function (d, c, b) {
                var e = a(d, c, b);
                if (!sharethis.utilities.domUtilities.hasClass(e, b)) {
                    sharethis.utilities.domUtilities.addClass(e, "", b)
                }
            }
        }
    }();
    sharethis.utilities.getInternetExplorerVersion = function () {
        var c = -1;
        if (navigator.appName == "Microsoft Internet Explorer") {
            var a = navigator.userAgent;
            var b = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (b.exec(a) != null) {
                c = parseFloat(RegExp.$1)
            }
        }
        return c
    };
    sharethis.utilities.isAndroid = function () {
        var a = navigator.userAgent.toLowerCase(), b = null;
        if (b === null) {
            b = a.indexOf("android") > -1
        }
        return b
    };
    sharethis.utilities.isIOs = function isIOs() {
        var a = navigator.userAgent.toLowerCase(), b = null;
        if (b === null) {
            b = (a.indexOf("ipad") > -1) || (a.indexOf("ipod") > -1) || (a.indexOf("iphone") > -1)
        }
        return b
    };
    sharethis.utilities.getOGTags = function (a) {
        var e = document.getElementsByTagName("meta");
        var d = {};
        var b = new Array();
        for (var c = 0; c < e.length; c++) {
            if (e[c].getAttribute("property") == "og:title") {
                b.push("og:title=" + encodeURIComponent(e[c].getAttribute("content")));
                if (a) {
                    d.ogtitle = e[c].getAttribute("content")
                }
            } else {
                if (e[c].getAttribute("property") == "og:description") {
                    b.push("og:description=" + encodeURIComponent(e[c].getAttribute("content")));
                    if (a) {
                        d.ogdescription = e[c].getAttribute("content")
                    }
                } else {
                    if (e[c].getAttribute("name") == "description" || e[c].getAttribute("name") == "Description") {
                        b.push("name:description=" + encodeURIComponent(e[c].getAttribute("content")));
                        if (a) {
                            d.ogaltdescription = e[c].getAttribute("content")
                        }
                    } else {
                        if (e[c].getAttribute("name") == "keywords" || e[c].getAttribute("name") == "Keywords") {
                            b.push("name:keywords=" + encodeURIComponent(e[c].getAttribute("content")));
                            if (a) {
                                d.ogkeywords = e[c].getAttribute("content")
                            }
                        } else {
                            if (e[c].getAttribute("property") == "og:type") {
                                if (a) {
                                    d.ogtype = e[c].getAttribute("content")
                                }
                            } else {
                                if (e[c].getAttribute("property") == "og:url") {
                                    if (a) {
                                        d.ogurl = e[c].getAttribute("content")
                                    }
                                } else {
                                    if (e[c].getAttribute("property") == "og:image") {
                                        if (a) {
                                            d.ogimg = e[c].getAttribute("content")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (a) {
            return d
        } else {
            return b.join("&")
        }
    };
    sharethis.utilities.prepareShareData = function (c) {
        var f = {};
        var e = sharethis.utilities.getOGTags(true);
        var b = e.ogurl ? e.ogurl : document.location.href;
        f.url = c.st_url ? c.st_url : b;
        var h = e.ogtitle ? e.ogtitle : document.title;
        f.title = c.st_title ? c.st_title : h;
        var g = e.ogimg ? e.ogimg : "";
        f.image = g;
        var a = e.ogdescription ? e.ogdescription : "";
        f.summary = e.ogaltdescription ? e.ogaltdescription : a;
        var d = e.ogtype ? e.ogtype : "";
        f.type = d;
        return f
    };
    sharethis.utilities.initGA = function (b, d, a, c) {
        if ((/sharethis\.com/).test(document.domain) && stlib.cookie.getCookie("st_optout") !== false) {
            return
        }
        if (typeof(_gat) == "undefined") {
            var e = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
            sharethis.utilities.loadfile(e + "google-analytics.com/ga.js", "js", "head", function () {
                sharethis.utilities.initGACallBack(b, d, a, c)
            })
        } else {
            sharethis.utilities.initGACallBack(b, d, a, c)
        }
    };
    sharethis.utilities.initGACallBack = function (c, e, a, d) {
        try {
            sharethis.widgets.pageTracker = _gat._createTracker("UA-1645146-14");
            sharethis.utilities.gaLog(c, e, a, d)
        } catch (b) {
        }
    };
    sharethis.utilities.gaLog = function (b, d, a, c) {
        if ((/sharethis\.com/).test(document.domain) && stlib.cookie.getCookie("st_optout") !== false) {
            return
        }
        if (typeof(sharethis.widgets.pageTracker) != "undefined" && sharethis.widgets.pageTracker != null) {
            sharethis.widgets.pageTracker._trackEvent(b, d, a, c)
        }
    };
    sharethis.utilities.abTestingSamplation = function () {
        if (sharethis.utilities.getInternetExplorerVersion() == 8) {
            sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/hoverbuttons_reskin.1581f73092bf0aeddc0bb88d0aaa31d0.css", "css", "head", "");
            sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/hoverbuttons_reskin.3bc05701d07578cfb4db9517abf2dbc2.js", "js", "head", "");
            return
        }
        var b = ("https:" == document.location.protocol) ? "https://sd.sharethis.com" : "http://sd.sharethis.com";
        sharethis.utilities.createIframe(b + "/abtest.d0be1bac1a23ac98ce053e1dd08cc781.html?cookieType=get&name=" + document.domain);
        var c = window.addEventListener ? "addEventListener" : "attachEvent";
        var a = c == "attachEvent" ? "onmessage" : "message";
        window[c](a, function (d) {
            if (d.data.indexOf("#fromGet") != -1) {
                var g = d.data.split("&"), f = document.getElementById("abhb");
                if ("false" == g[2] && ("false" == g[1] || g[1] == 0)) {
                    hbType = 1;
                    sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/hoverbuttons_reskin.1581f73092bf0aeddc0bb88d0aaa31d0.css", "css", "head", "");
                    sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/hoverbuttons_reskin.3bc05701d07578cfb4db9517abf2dbc2.js", "js", "head", "")
                } else {
                    if ("false" == g[2] && g[1] == 1) {
                        hbType = 0;
                        sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/hoverbuttons.6eab8de2ee93b309873157b6d3f977fe.css", "css", "head", "");
                        sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/hoverbuttons.035267d71d894482eb413e5bea488ff5.js", "js", "head", "")
                    } else {
                        if ("false" != g[2] && g[1] == 1) {
                            hbType = 1;
                            sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/hoverbuttons_reskin.1581f73092bf0aeddc0bb88d0aaa31d0.css", "css", "head", "");
                            sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/hoverbuttons_reskin.3bc05701d07578cfb4db9517abf2dbc2.js", "js", "head", "")
                        } else {
                            hbType = 0;
                            sharethis.utilities.loadfile("//sd.sharethis.com/disc/css/hoverbuttons.6eab8de2ee93b309873157b6d3f977fe.css", "css", "head", "");
                            sharethis.utilities.loadfile("//sd.sharethis.com/disc/js/hoverbuttons.035267d71d894482eb413e5bea488ff5.js", "js", "head", "")
                        }
                    }
                }
                if ("false" == g[2]) {
                    f.contentWindow.postMessage("#toSet&" + document.domain + "=" + hbType, f.src)
                }
            }
        }, false)
    };
    sharethis.utilities.createIframe = function (c) {
        try {
            var a = document.createElement('<iframe name="abhb" ></iframe>')
        } catch (b) {
            a = document.createElement("iframe")
        }
        a.id = "abhb";
        a.name = "abhb";
        a.src = c;
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.visibility = "hidden";
        document.body.appendChild(a)
    }
}
;