$("li").click(function(event) {
	var text = $(this).children('span:first').text();
	console.log(text);
	alert(text);
	event.stopPropagation();
});

