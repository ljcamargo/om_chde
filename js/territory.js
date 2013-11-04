function requestTerritory(){ 
    var api_query = 'http://chile-decide.openmultimedia.biz/api.php?content=territory';
    var parent = '#holderRegions';
    var msjpar = '#holderRegionsMsj';
    var errormsj = '<b>Ocurrió un error</b><br/>';
    var noresults = '<b>No hay resultados</b><br/>';
    var wait = '<b>Descargando</b><br/>';
    var lala = '';
    var template = '\
    <div class="ui-btn ui-body-c ui-corner-all ui-shadow" id="_s%ID%" style="display:none;">\
    <div class="div-widget"><img src="%STATE_IMG%" style="width:40%;"></div>\
    <div class="div-widget" style="margin:1em;">\
        <span>%STATE_NAME%</span>\
    </div>\
    <div class="div-widget">\
    <table style="width:100%;">\
    <tr style="background-color:#EAEAEA;">\
        <td colspan="2" width="50%">Candidato</td>\
        <td width="20%">Votos</td><td width="30%">%</td>\
    </tr><tr>\
        <td>&nbsp;</td><td><span>%PRES_NAME%</span></td>\
        <td>%ABS%</td>\
        <td style="text-align: center;">\
            <div style="background-color:#EAEAEA width:100%";>\
            <div style="background-color:#888888; width:%REL%%";><b>%REL%%</b></div>\
        </div></td>\
    </tr>\
    </table></div></div></div>';

    requestJSONTerritory(api_query, parent, msjpar, errormsj, noresults, wait, template);

};

var currTerr = 1;
var maxTerr = 0;

function jumpNext() {
    if (maxTerr>1) {
        $( "#_s"+currTerr).hide();
        if (currTerr<maxTerr) {
            currTerr += 1;
        } else {
            currTerr = 1;
        }
        console.log("jumped to "+currTerr);
        $( "#_s"+currTerr).show();    
    }    
}

function jumpPre() {
    if (maxTerr>1) {
        $( "#_s"+currTerr).hide();
        if (currTerr>2) {
            currTerr -= 1;
        } else {
            currTerr = maxTerr;
        }
        console.log("jumped to "+currTerr);
        $( "#_s"+currTerr).show();    
    }    
}




