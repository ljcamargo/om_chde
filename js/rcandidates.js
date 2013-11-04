function requestCandidatesResults(){ 
    var api_query = 'http://chile-decide.openmultimedia.biz/api.php?content=candidates';
    var parent = '#tableCandidates';
    var msjpar = '#tableCandidatesMsj';
    var errormsj = '<b>Ocurrió un error</b><br/>';
    var noresults = '<b>No hay resultados</b><br/>';
    var wait = '<b>Descargando</b><br/>';
    var lala = '';
    var template = '\
    <tr><td><img src="%PRES_IMG%" style="width:32px;"></td><td><span>%PRES%</span></td>\
    <td>%ABS%</td><td style="text-align: center;">\
    <div style="background-color:#EAEAEA width:100%";>\
    <div style="background-color:#888888;  width:%REL%%";><b>%REL%%</b>\
    </div></div></td></tr>';

    requestJSONCandidatesR(api_query, parent, msjpar, errormsj, noresults, wait, template);

};
