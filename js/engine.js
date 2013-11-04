function ensambleOmElements(parent, msjpar, jsona, template, noresults) {
    var txt = "";
    if (jsona!=null) {
        this.got_results = true;
        this.results = jsona;
        for(var i=0;i<jsona.length;i++) {
            var ntem = template;
            var obj = jsona[i];
            
            var title = obj['titulo'];
            var city = obj['ciudad'];
            var thumb = obj['thumbnail_mediano'];
            var link = obj['archivo_url'];
            console.log(title);
            ntem = ntem.replace('%LINK%', link);
            ntem = ntem.replace('%LINK%', link);
            ntem = ntem.replace('%THUMB%', thumb);
            ntem = ntem.replace('%TITLE%', title);
            ntem = ntem.replace('%CITY%', city);
            txt += ntem;
        }

    } else {
        txt += noresults;
    }
    $(parent).html(txt);
    $(msjpar).html('');
}

function ensambleAllRElements(parent, msjpar, json, template, noresults) {
    var txt = "";
    var status_0 = "No iniciado";
    var status_1 = "Elecciones en proceso";
    var status_2 = "En conteo preliminar";
    var status_3 = "Ganador en primera vuelta";
    var status_4 = "A segunda vuelta";
    var status_5 = "Terminado";
    var jsona = json.updates
    if (jsona!=null) {
        var ntem = template;
        var obj = jsona;

        var status = obj['status'];
        var update = obj['lasUpdate'];
        var totalAbs = obj['totalAbs'];
        var totalRel = obj['totalRel'];
        var date_update = update;
        var status_txt = '';
        console.log(status_txt);

        if (status == '0') {
            status_txt = status_0;
            date_update = "";
        } else if (status == '1') {
            status_txt = status_1;
        } else if (status == '2') {
            status_txt = status_2;
        } else if (status == '3') {
            status_txt = status_3;
        } else if (status == '4') {
            status_txt = status_4;
        } else if (status == '5') {
            status_txt = status_5;
        } else if (status == '-1') {
            status_txt = '';
        } else {
            status_txt = status;
        }

        ntem = ntem.replace('%STATUS%', status_txt);
        ntem = ntem.replace('%UPDATED%', date_update);
        ntem = ntem.replace('%COUNTED_ABS%', totalAbs);
        ntem = ntem.replace('%COUNTED_REL%', totalRel);
        ntem = ntem.replace('%COUNTED_REL%', totalRel);
        txt += ntem;

        if (status == '-1') {
            txt = '';
        }


    } else {
        txt += noresults;
    }
    $(parent).append(txt);
    $(msjpar).html('');
}

function ensambleRCandidateElements(parent, msjpar, json, template, noresults) {
    var txt = "";
    var jsona = json.candidates
    if (jsona!=null) {
        this.got_results = true;
        this.results = jsona;
        for(var i=0;i<jsona.length;i++) {
            var ntem = template;
            var obj = jsona[i];
            
            var id = obj['id'];
            var code = obj['code'];
            var partyName = obj['partyName'];
            var partyImage = obj['partyImage'];
            var candidateName = obj['candidateName'];
            var candidateBio = obj['candidateBio'];
            var candidateImage = obj['candidateImage'];
            var candidateLImage = obj['candidateLImage'];
            var votesAbs = obj['votesAbs'];
            var votesRel = obj['votesRel'];
            console.log(candidateName);
            ntem = ntem.replace('%PRES_IMG%', candidateImage);
            ntem = ntem.replace('%PRES%', candidateName);
            ntem = ntem.replace('%ABS%', votesAbs);
            ntem = ntem.replace('%REL%', votesRel);
            ntem = ntem.replace('%REL%', votesRel);
            txt += ntem;
        }

    } else {
        txt += noresults;
    }
    $(parent).append(txt);
    $(msjpar).html('');
}

function ensambleCandidateElements(parent, msjpar, json, template, noresults) {
    var txt = "";
    var jsona = json.candidates
    if (jsona!=null) {
        this.got_results = true;
        this.results = jsona;
        for(var i=0;i<jsona.length;i++) {
            var ntem = template;
            var obj = jsona[i];
            
            var id = obj['id'];
            var pid = parseInt(id);
            var odd = (pid % 2 == 0)?'b':'a';
            var code = obj['code'];
            var partyName = obj['partyName'];
            var partyImage = obj['partyImage'];
            var candidateName = obj['candidateName'];
            var candidateBio = obj['candidateBio'];
            var candidateImage = obj['candidateImage'];
            var candidateLImage = obj['candidateLImage'];
            var votesAbs = obj['votesAbs'];
            var votesRel = obj['votesRel'];
            console.log(candidateName);
            ntem = ntem.replace('%ID%', id);
            ntem = ntem.replace('%PRES_IMG%', candidateImage);
            ntem = ntem.replace('%PRES%', candidateName);
            ntem = ntem.replace('%PARTY_IMG%', partyImage);
            ntem = ntem.replace('%ODD%', odd);
            txt += ntem;
        }

        //EXTRA PAD
        if (jsona.length%2!=0) {
            var extra = '<div class="ui-block-b">&nbsp;</div>';
            txt += extra;
        }


    } else {
        txt += noresults;
    }
    $(parent).html(txt);
    $(msjpar).html('');
}

function ensambleTerritoryElements(parent, msjpar, json, template, noresults) {
    var txt = "";
    var jsona = json.territory
    if (jsona!=null) {
        this.got_results = true;
        this.results = jsona;
        maxTerr = jsona.length;
        for(var i=0;i<jsona.length;i++) {
            var ntem = template;
            var obj = jsona[i];
            
            var id = obj['id'];
            var stateName = obj['stateName'];
            var stateImage = obj['stateImage'];
            var stateFlag = 'f' + id + '.png';
            var partyName = obj['partyName'];
            var partyImage = obj['partyImage'];
            var candidateName = obj['headingName'];
            var candidateId = obj['headingCode'];
            var candidateImage = obj['headingImage'];
            var votesAbs = obj['votesAbs'];
            var votesRel = obj['votesRel'];
            var voters = obj['voters'];
            var voted = obj['voted'];
            console.log(stateName);
            ntem = ntem.replace('%ID%', id);
            ntem = ntem.replace('%STATE_IMG%', stateImage);
            ntem = ntem.replace('%STATE_FLAG%', stateFlag);
            ntem = ntem.replace('%STATE_NAME%', stateName);
            ntem = ntem.replace('%PRES_IMG%', candidateImage);
            ntem = ntem.replace('%PRES_NAME%', candidateName);
            ntem = ntem.replace('%ABS%', votesAbs);
            ntem = ntem.replace('%REL%', votesRel);
            ntem = ntem.replace('%REL%', votesRel);
            txt += ntem;
        }

    } else {
        txt += noresults;
    }
    $(parent).html(txt);
    $(msjpar).html('');
    if (jsona.length>0) {
        $( "#_s1").show();  
    }
}

function ensambleNewsElements(parent, msjpar, json, template, noresults) {
    var txt = "";
    var jsona = json;
    if (jsona!=null) {
        this.got_results = true;
        this.results = jsona;
        for(var i=0;i<jsona.length;i++) {
            var ntem = template;
            var obj = jsona[i];
            
            var title = obj['title'];
            var descr = obj['description'];
            var trimdescr = (descr.length>=80)?(descr.substr(0,79)+'...'):descr;
            var precontent = obj['content'];
            var link = obj['moblink'];
            var content = '<h2>'+title+'</h2>';
            content += '<p><small><i>'+descr+'</i></small></p><br>';
            content += '<p>'+precontent+'</p><br>';
            console.log(title);
            ntem = ntem.replace('%CONTENT%', content);
            ntem = ntem.replace('%TITLE%', title);
            ntem = ntem.replace('%DESCR%', trimdescr);
            txt += ntem;
        }

    } else {
        txt += noresults;
    }
    $(parent).html(txt);
    $(msjpar).html('');
}

function requestFailed(msjpar, errormsj) {
    $(msjpar).html(errormsj);
}


function requestOmJSON(api_query, parent, msjpar, errormsj, noresults, template) {
    console.log(api_query);
    $.ajax({
     type : "GET",
     dataType : "json",
     url : api_query
    })
    .done(function(data) { 
         console.log('gotten');
         console.log(JSON.stringify(data));
         ensambleOmElements(parent, msjpar, data, template, noresults);
    })
    .fail(function() { 
        console.log('error');
        requestFailed(msjpar, errormsj);
    })
    ;
}

function requestJSONAllR(api_query, parent, msjpar, errormsj, noresults, wait, template) {
    $(msjpar).html(wait);
    console.log(api_query);
    $.ajax({
     type : "GET",
     dataType : "json",
     url : api_query
    })
    .done(function(data) { 
         console.log('gotten');
         console.log(JSON.stringify(data));
         ensambleAllRElements(parent, msjpar, data, template, noresults);
    })
    .fail(function() { 
        console.log('error');
        requestFailed(msjpar, errormsj);
    })
    ;
}

function requestJSONCandidatesR(api_query, parent, msjpar, errormsj, noresults, wait, template) {
    $(msjpar).html(wait);
    console.log(api_query);
    $.ajax({
     type : "GET",
     dataType : "json",
     url : api_query
    })
    .done(function(data) { 
         console.log('gotten');
         console.log(JSON.stringify(data));
         ensambleRCandidateElements(parent, msjpar, data, template, noresults);
    })
    .fail(function() { 
        console.log('error');
        requestFailed(msjpar, errormsj);
    })
    ;
}

function requestJSONCandidates(api_query, parent, msjpar, errormsj, noresults, wait, template) {
    $(msjpar).html(wait);
    console.log(api_query);
    $.ajax({
     type : "GET",
     dataType : "json",
     url : api_query
    })
    .done(function(data) { 
         console.log('gotten');
         console.log(JSON.stringify(data));
         ensambleCandidateElements(parent, msjpar, data, template, noresults);
    })
    .fail(function() { 
        console.log('error');
        requestFailed(msjpar, errormsj);
    })
    ;
}

function requestJSONTerritory(api_query, parent, msjpar, errormsj, noresults, wait, template) {
    $(msjpar).html(wait);
    console.log(api_query);
    $.ajax({
     type : "GET",
     dataType : "json",
     url : api_query
    })
    .done(function(data) { 
         console.log('gotten');
         console.log(JSON.stringify(data));
         ensambleTerritoryElements(parent, msjpar, data, template, noresults);
    })
    .fail(function() { 
        console.log('error');
        requestFailed(msjpar, errormsj);
    })
    ;
}

function requestJSONNews(api_query, parent, msjpar, errormsj, noresults, wait, template) {
    $(msjpar).html(wait);
    console.log(api_query);
    $.ajax({
     type : "GET",
     dataType : "json",
     url : api_query
    })
    .done(function(data) { 
         console.log('gotten');
         console.log(JSON.stringify(data));
         ensambleNewsElements(parent, msjpar, data, template, noresults);
    })
    .fail(function() { 
        console.log('error');
        requestFailed(msjpar, errormsj);
    })
    ;
}