var serviceURL = "http://www.hamptons-mainstreet.com/m/php/";

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


$(document).on('pageshow', '#videoListPage', function(video) {
	var videoCategoryID = getUrlVars()['videoCategoryID'];
	showVideoList(videoCategoryID);
});

function showVideoList(videoCategoryID) {
	$.getJSON(serviceURL + 'getvideos.php?videoCategoryID=' + videoCategoryID, function(data){
		$('#videoList li').remove();
		videos = data.items;
		$.each(videos, function(index, curvideo) {
			$('#videoList').append('<li data-theme="a"><a href="' + curvideo.url + '">' +
					'<h4>' + curvideo.fileName + '</h4>' +
					'<p>' + curvideo.fieldCopy + '</p>' +
					'</a></li>');
		});
		$('#videoList').listview('refresh');
		$('#videoList').fadeIn('slow');
	});
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
