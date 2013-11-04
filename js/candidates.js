function requestCandidates(){ 
    var api_query = 'http://chile-decide.openmultimedia.biz/api.php?content=candidates';
    var parent = '#gridCandidates';
    var msjpar = '#gridCandidatesMsj';
    var errormsj = '<b>Ocurrió un error</b><br/>';
    var noresults = '<b>No hay resultados</b><br/>';
    var wait = '<b>Descargando</b><br/>';
    var lala = '';
    var template = '\
    <div class="ui-block-%ODD%" style="overflow:hidden;">\
        <a href="#dialog%ID%" data-rel="dialog">\
        <img src="%PRES_IMG%">\
        <img src="%PARTY_IMG%" style="width: 60px; margin-top: -70px;">\
        </a><span>%PRES%</span>\
    </div>';

    requestJSONCandidates(api_query, parent, msjpar, errormsj, noresults, wait, template);

};