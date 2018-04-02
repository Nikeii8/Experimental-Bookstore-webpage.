$.getJSON("https://api.myjson.com/bins/udbm5", function (data) {

	console.log(data.books);
	image(data.books);
	$('[data-fancyboc]').fancybox({
		buttons: ['close']



	})

	$("#searchBar").on('keyup', function() {
        myFunction(data);
});

});



function myFunction(data) {
	var input, filter;
		input = document.getElementById("searchBar");
	filter = input.value.toUpperCase();


	console.log(data);
console.log(input);
	
	for (i = 0; i < data.books.length; i++) {


		
		if (data.books[i].descripcion.toUpperCase().indexOf(filter) > -1) {
			
			
			$("#container" + i).show();
		} else {
			$("#container" + i).hide();

		}
	}
}



function image(books) {


	var par = document.getElementById('big-group');



	/*ONC SINGLE FOR LOOP*/
	for (var i = 0; i < books.length; ++i) {


		var container = document.createElement("div");
		container.setAttribute("class", "flip-container");
		container.setAttribute("id", "container" + i);
		container.setAttribute("ontouchstart", "this.classlist.toggle('hover')");


		/*PUTS INSIDE*/
		par.appendChild(container);


		var flipper = document.createElement("div");
		flipper.setAttribute("class", "flipper");


		/*PUTS INSIDE*/
		container.appendChild(flipper);

		/*
		MAIN PART 1
		*/
		var front = (document.createElement("div"));
		front.setAttribute("class", "front")


		/*PUTS INSIDE*/
		flipper.appendChild(front);



		var img = (document.createElement("img"));
		img.setAttribute("class", "inheret")

		/*IMG HAS TO HAVE THE A PART FROM THE jSON ARRAY*/
		img.setAttribute("src", books[i].portada);


		/*( img ) IS ONE OF A KIND, DOES NOT ACT AS A FATHER*/


		/*PUTS INSIDE*/
		front.appendChild(img);



		/*
		  MAIN PART 2
		  */
		var back = (document.createElement("div"));
		back.setAttribute("class", "back")

		/*PUTS INSIDE*/
		flipper.appendChild(back);



		var h4 = (document.createElement("h4"));
		h4.setAttribute("class", "inheret2")
		h4.innerHTML = books[i].titulo;


		back.appendChild(h4);


		var info = (document.createElement("info"));
		/*ANOTHER PART OF THE jSON ARRAY IS USED IN innerHTML*/
		info.innerHTML = books[i].descripcion
		info.setAttribute = ("class", "grow")
		info.setAttribute = ("class", "well")


		/*PUTS INSIDE*/
		back.appendChild(info);




		/*BOTH, THE ( desc ) AND ( details ) GO INTO ( back ) by appendChild*/

		var details = (document.createElement('details'));
		/*YET ANOTHER PART OF THE jSON ARRAY IS USED IN HERE*/
		details.setAttribute("data-fancybox", "gallery");
		details.setAttribute("href", books[i].detalle);

		/*PUTS INSIDE*/
		back.appendChild(details)




		/*BUTTON PART OF THE FUNCTION*/

		var button = document.createElement("button");
		button.setAttribute("type", "button");
		button.setAttribute("class", "btn btn-info");
		button.innerHTML = ("More Info");
		button.setAttribute("class", "abs");

		/*PUTS INSIDE*/
		details.appendChild(button);

	}

}
