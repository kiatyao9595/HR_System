//name//
function searchAndHighlight1(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted1').removeClass('highlighted1');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted1'>" + searchTerm + "</span>"));
            if ($('.highlighted1:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted1:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight2(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted2').removeClass('highlighted2');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted2'>" + searchTerm + "</span>"));
            if ($('.highlighted2:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted2:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight3(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted3').removeClass('highlighted3');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted3'>" + searchTerm + "</span>"));
            if ($('.highlighted3:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted3:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight4(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted4').removeClass('highlighted4');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted4'>" + searchTerm + "</span>"));
            if ($('.highlighted4:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted4:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight5(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted5').removeClass('highlighted5');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted5'>" + searchTerm + "</span>"));
            if ($('.highlighted5:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted5:first').position().top);
            }
            return true;
        }
    }
    return false;
}

//country code//
function searchAndHighlight11(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted11').removeClass('highlighted11');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted11'>" + searchTerm + "</span>"));
            if ($('.highlighted11:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted11:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight12(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted12').removeClass('highlighted12');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted12'>" + searchTerm + "</span>"));
            if ($('.highlighted12:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted12:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight13(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted13').removeClass('highlighted13');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted13'>" + searchTerm + "</span>"));
            if ($('.highlighted13:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted13:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight14(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted14').removeClass('highlighted14');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted14'>" + searchTerm + "</span>"));
            if ($('.highlighted14:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted14:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight15(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted15').removeClass('highlighted15');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted15'>" + searchTerm + "</span>"));
            if ($('.highlighted15:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted15:first').position().top);
            }
            return true;
        }
    }
    return false;
}

//address//
function searchAndHighlight21(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted21').removeClass('highlighted21');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted21'>" + searchTerm + "</span>"));
            if ($('.highlighted21:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted21:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight22(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted22').removeClass('highlighted22');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted22'>" + searchTerm + "</span>"));
            if ($('.highlighted22:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted22:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight23(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted23').removeClass('highlighted23');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted23'>" + searchTerm + "</span>"));
            if ($('.highlighted23:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted23:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight24(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted24').removeClass('highlighted24');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted24'>" + searchTerm + "</span>"));
            if ($('.highlighted24:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted24:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight25(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted25').removeClass('highlighted25');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted25'>" + searchTerm + "</span>"));
            if ($('.highlighted25:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted25:first').position().top);
            }
            return true;
        }
    }
    return false;
}

//city//
function searchAndHighlight31(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted31').removeClass('highlighted31');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted31'>" + searchTerm + "</span>"));
            if ($('.highlighted31:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted31:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight32(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted32').removeClass('highlighted32');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted32'>" + searchTerm + "</span>"));
            if ($('.highlighted32:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted32:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight33(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted33').removeClass('highlighted33');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted33'>" + searchTerm + "</span>"));
            if ($('.highlighted33:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted33:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight34(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted34').removeClass('highlighted34');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted34'>" + searchTerm + "</span>"));
            if ($('.highlighted34:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted34:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight35(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted35').removeClass('highlighted35');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted35'>" + searchTerm + "</span>"));
            if ($('.highlighted35:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted35:first').position().top);
            }
            return true;
        }
    }
    return false;
}

//state//
function searchAndHighlight41(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted41').removeClass('highlighted41');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted41'>" + searchTerm + "</span>"));
            if ($('.highlighted41:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted41:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight42(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted42').removeClass('highlighted42');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted42'>" + searchTerm + "</span>"));
            if ($('.highlighted42:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted42:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight43(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted43').removeClass('highlighted43');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted43'>" + searchTerm + "</span>"));
            if ($('.highlighted43:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted43:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight44(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted44').removeClass('highlighted44');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted44'>" + searchTerm + "</span>"));
            if ($('.highlighted44:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted44:first').position().top);
            }
            return true;
        }
    }
    return false;
}
function searchAndHighlight45(searchTerm, selector) {
    if (searchTerm) {
        //var wholeWordOnly = new RegExp("\\g"+searchTerm+"\\g","ig"); //matches whole word only
        //var anyCharacter = new RegExp("\\g["+searchTerm+"]\\g","ig"); //matches any word with any of search chars characters
        var selector = selector || "body";                             //default selector is body if none provided
        var searchTermRegEx = new RegExp(searchTerm, "ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if (matches) {
            $('.highlighted45').removeClass('highlighted45');     //Remove old search highlights
            $(selector).html($(selector).html()
                      .replace(searchTermRegEx, "<span class='highlighted45'>" + searchTerm + "</span>"));
            if ($('.highlighted45:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted45:first').position().top);
            }
            return true;
        }
    }
    return false;
}