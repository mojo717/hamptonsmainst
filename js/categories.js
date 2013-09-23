var serviceURL = "http://www.hamptons-mainstreet.com/m/php/";

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).on('pageshow', '#categoriesListPage', function(categories) {
	//var m=getParameterByName('m');
	showCategoriesList();
});

function showCategoriesList() {
	$.getJSON(serviceURL + 'getcategories.php', function(data){
		$('#categoriesList li').remove();
		items = data.items;
		$.each(items, function(index, curcategory) {
			$('#categoriesList').append('<li data-theme="a"><a href="videos.html?videoCategoryID=' + curcategory.videoCategoryID + '">' +
					'<h4>' + curcategory.title + '</h4>' +
					'<p>' + curcategory.copy + '</p>' +
					'</a></li>');
		});
		$('#categoriesList').listview('refresh');
		$('#categoriesList').fadeIn('slow');
		
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
