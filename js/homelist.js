var serviceURL = "http://www.hamptons-mainstreet.com/m/php/";

var homelist;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//$('#homeListPage').bind('pageshow', function(event) {
$(document).on('pageshow', '#homeListPage', function() {
	getHomeList();
});

function getHomeList() {
	$('#contentlist li').remove();
	$('#contentlist').append('<li><a href="latest.html">LATEST VIDEOS</a></li><li><a href="categories.html">CATEGORIES</a></li><li><a href="#about">ABOUT</a></li>');
	$('#contentlist').listview('refresh');
	$('#contentlist').fadeIn('slow');
}