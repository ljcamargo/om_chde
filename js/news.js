function requestNews(){ 
    var api_query = 'http://chile-decide.openmultimedia.biz/news.php';
    var parent = '#holderNews';
    var msjpar = '#holderNewsMsj';
    var errormsj = '<b>Ocurrió un error</b><br/>';
    var noresults = '<b>No hay resultados</b><br/>';
    var wait = '<b>Descargando</b><br/>';
    var lala = '';
    var template = '\
    <div class="ui-btn ui-btn-up-c ui-body-c ui-corner-all " \
    data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" \
    data-theme="c" style="padding:1em; text-align:left; margin-bottom: 0.5em;">\
    <a href="javascript:showMessageBox(\'%CONTENT%\');" data-rel="dialog">\
    %TITLE%<br>\
    <span style="font-weight:normal;"><small>%DESCR%</small></span>\
    </a></div>';

    requestJSONNews(api_query, parent, msjpar, errormsj, noresults, wait, template);

};

showMessageBox = function(message) {
    // Create it in memory
    var dlg = $("<div />")
        .attr("data-role", "dialog")
        .attr("id", "dialog");
    var header = $("<div />")
        .attr("data-role", "header")
        .append("<h2>Nota</h2>  ");
    var content = $("<div />")
        .attr("data-role", "content")
        .append($("<span />").html(message));
    content.append("<a href=\"javascript:$('.ui-dialog').dialog('close'); " +
        "return false;\" data-role=\"button\" data-rel=\"back\">Close</a>");

    dlg.append(header);
    dlg.append(content);

    dlg.appendTo($.mobile.pageContainer);

    // show the dialog programmatically
    $.mobile.changePage(dlg, { role: "dialog" });
};