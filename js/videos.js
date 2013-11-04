function requestOmVideos(){ 
    var api_query = 'http://multimedia.tlsur.net/api/clip/?tema=elecciones-chile-2013&primero=1&ultimo=10';
    var parent = '#div_videos';
    var msjpar = '#msj_videos';
    var errormsj = '<b>Ocurrió un error</b><br/>';
    var noresults = '<b>No hay resultados</b><br/>';
    var lala = '';
    var template = '<div class="ui-btn ui-btn-up-c ui-body-c ui-corner-all " data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" \
    data-icon="arrow-r" data-iconpos="right" data-theme="c" style="padding:1em; \
    text-align:left; margin-bottom: 0.5em;"><a href="#" onclick="playVideo(\'%LINK%\');">\
    <img src="%THUMB%" style="width:100%;"><br>\
    %TITLE%<br><span style="font-weight:normal;">%CITY%</span>\
    </a></div>';

    requestOmJSON(api_query, parent, msjpar, errormsj, noresults, template);

};

function playVideo(vidUrl) {
    window.open(vidUrl);
    //window.plugins.videoPlayer.play(vidUrl);
}
