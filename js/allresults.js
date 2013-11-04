function requestAllResults(){ 
    var api_query = 'http://chile-decide.openmultimedia.biz/api.php?content=commits';
    var parent = '#tableAllR';
    var msjpar = '#tableAllRMsj';
    var errormsj = '<b>Ocurrió un error</b><br/>';
    var noresults = '<b>No hay resultados</b><br/>';
    var wait = '<b>Descargando...</b><br/>';
    var template = '\
    <table style="width:100%;" id="tableAll">\
    <tr style="background-color:#DDDDDD;">\
    <td colspan="2" width="50%">&nbsp;</td>\
    <td width="20%">Votos</td><td width="30%">%</td></tr>\
    <tr><td colspan="2"><span><b>Votos Contabilizados</b></span></td>\
    <td>%COUNTED_ABS%</td><td style="text-align: center;">\
    <div style="background-color:#EAEAEA width:100%";>\
    <div style="background-color:#88FF88;  width:%COUNTED_REL%%";>\
    <b>%COUNTED_REL%%</b></div></div></td></tr>\
    <tr>\
    <td colspan="2">Estado:</td>\
    <td colspan="2">%STATUS%</td></tr>\
    <tr>\
    <td colspan="2">Actualizado:</td>\
    <td colspan="2"><small>%UPDATED%</small></td></tr>\
    </table>';

    requestJSONAllR(api_query, parent, msjpar, errormsj, noresults, wait, template);

};
