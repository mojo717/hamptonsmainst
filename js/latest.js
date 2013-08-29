$(document).on('pageshow', '#latestPage', function(latest) {
	showLatest();
});

function showLatest() {
	cururl=serviceURL + 'getlatest.php';
	//alert('cururl=' + cururl);
	$.getJSON(cururl, function(data){
		$('#latestDisplay li').remove();
		items = data.items;
		$.each(items, function(index, curlatest) {
			//alert('title=' + curlatest.title);
			//$('#fileName').text(curlatest.fileName);
			//$('#fileCopy').text(curlatest.fileCopy);
			//$('#url').text(curlatest.url);
			$('#latestDisplay').append('<li data-theme="a"><a href="' + curlatest.url + '">' +
				'<h4>' + curlatest.fileName + '</h4>' +
				'<p>' + curlatest.fieldCopy + '</p>' +
				'</a></li>');
		})
		$('#latestDisplay').listview('refresh');
		$('#latestDisplay').fadeIn('slow');
	});
}
