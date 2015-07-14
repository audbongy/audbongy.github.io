$(function(){


	var locations = [
	    	{name: 'Whole Foods Bowery', address: '95 East Houston Street, NEW YORK, NY 10002', lat: 40.724009, lng: -73.992188},
	    	{name: 'Whole Foods Union Square', address: '44 East 14th Street, NEW YORK, NY 10003', lat: 40.735037, lng: -73.991215},
	    	{name: 'Life Thyme Food', address: '410 Avenue of the Americas, NEW YORK, NY 10011', lat: 40.737702, lng: -73.999194},
	    	{name: 'Westerly Natural Market', address: '911 8th Avenue, NEW YORK, NY 10019', lat: 40.765239, lng: -73.984394},
	    	{name: 'Fairway Market Harlem', address: '2328 12th Avenue, NEW YORK, NY 10027', lat: 40.821167, lng: -73.959680},
	    	{name: 'Fairway Market 86th Street', address: '240 East 86th Street, NEW YORK, NY 10028', lat: 40.778504, lng: -73.952407},
	    	{name: 'Commodities Natural Market', address: '165 1st Avenue, NEW YORK, NY 10003', lat: 40.729045, lng: -73.984262},
	    	{name: 'Watkins Products', address: '46 West 125th Street, NEW YORK, NY 10027', lat: 40.807150, lng: -73.944074},
  	 ];

	function initialize() {

        var mapOptions = {
          center: { lat: 40.775573, lng: -73.966999},
          zoom: 12,
          scrollwheel: false
        };

    	var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        
     	locations.forEach(function(element, index, array){
	   		 var marker, content;

	    	marker = createMarker(element);
	  		content = createInfoWindow(element, marker);
  		});

  		function createMarker(element){
	    	var coordinates = new google.maps.LatLng(element.lat, element.lng); 

	    	var marker = new google.maps.Marker({
		      	position: coordinates,
		      	map: map,
		      	title: element.name,
	   		});

	    	return marker;
  		};

  		 function createInfoWindow(element, marker){
		    var contentString;

		    contentString = "<div class='window'><span>" + element.name + "</span></div><div>" + element.address + "</div>";

		    var infoWindow = new google.maps.InfoWindow({
		      content: contentString,
		      maxWidth: 150
		    });

		    google.maps.event.addListener(marker, 'click', function(){
		      infoWindow.open(map, marker);
		    });
		 }

    }
 
    google.maps.event.addDomListener(window, 'load', initialize);

    $.each(locations, function (number, item) {
    	var location = locations [number]
    	// console.log (location);
    	$('#chooseStore').append('<option value="store">' +location.name+  '</option>');
    });

	$('#stores').hide();

	$("input[name='options']").on("change", function() {

		if (this.value === 'pickup'){
			$('#stores').show();
			$('#address').hide();
		}else{
			$('#stores').hide();
			$('#address').show();
		}
	});

	$('#next').click(function() {
		$('html, body').animate({scrollTop: $("#bundle-header").offset().top - 100}, 300);
	})   

	$('#about-link').click(function() {
		$('html, body').animate({scrollTop: $("#footer").offset().top - 50}, 300);
	})


	var recipes = [

	  {dish_name: "Roasted Cauliflower Gratin", cook_time: "30 mins", percent_ready: "75%", 'class_name': "sharing"},
	  {dish_name: "Guacamole and Homemade Chips",cook_time: "25 mins",percent_ready: "95%", 'class_name': "sharing"},
	  {dish_name: "Summer Salad",cook_time: "15 mins",percent_ready: "80%", 'class_name': "quick-dinner"},
	  {dish_name: "Curry Noodle Soup",cook_time: "25 mins",percent_ready: "60%", 'class_name': "quick-dinner"},
	  {dish_name: "Veggie Egg Muffins",cook_time: "30 mins",percent_ready: "90%", 'class_name': "sharing"},
	  {dish_name: "Mushroom Bruschetta",cook_time: "15 mins",percent_ready: "100%", 'class_name': "appetizers sharing"},
	  {dish_name: "Sweet Green Juice with Fennel",cook_time: "15 mins",percent_ready: "100%", 'class_name': "juice"},
	  {dish_name: "Stuffed Peppers", cook_time:"45 mins",percent_ready: "75%", 'class_name': "quick-dinner"},
	  {dish_name: "Lemon Parsley Potato Salad", cook_time:"60 mins",percent_ready: "90%", 'class_name': "sharing"},
	  {dish_name: "Tomato Baked Eggs", cook_time:"45 mins",percent_ready: "75%", 'class_name': "sharing"},
	  {dish_name: "Chive Biscuits", cook_time:"45 mins",percent_ready: "50%", 'class_name': "sharing appetizers"},
	  {dish_name: "Dill and Cucumber Salad With Yogurt", cook_time:"25 mins",percent_ready: "100%", 'class_name': "quick-dinner"},
	  {dish_name: "Penne With Butternut Squash", cook_time:"35 mins",percent_ready: "75%", 'class_name': "quick-dinner"},
	  {dish_name: "Coconut Yogurt Fruit Salad", cook_time:"15 mins",percent_ready: "50%", 'class_name': "sharing"},
	  {dish_name: "Vegetable Fried Rice", cook_time:"35 mins",percent_ready: "75%", 'class_name': "sharing"},
	  {dish_name: "Cream of Asparagus Soup (Vegan)", cook_time:"45 mins",percent_ready: "65%", 'class_name': "quick-dinner"},
	  {dish_name: "Cauliflower Mac N Cheese", cook_time:"60 mins",percent_ready: "75%", 'class_name': "sharing"},
	  {dish_name: "Portobello Mushroom Burger", cook_time:"30 mins",percent_ready: "80%", 'class_name': "quick-dinner"},
	  {dish_name: "Pineapple Kale Juice", cook_time:"15 mins",percent_ready: "65%", 'class_name': "juice"},
	  {dish_name: "Zucchini Pasta Pasta", cook_time:"45 mins",percent_ready: "75%", 'class_name': "quick-dinner"},
	]

	$.each( $('.bundle'), function(number, item){
		var recipe = recipes[number];

		$(item).addClass(recipe.class_name);
		$(item).append('<h5 class="bundle-title">' + recipe.dish_name + '</h5>');
		$(item).append('<p class="bundle-time">' + recipe.cook_time + '</p>');
		$(item).append('<p class="bundle-percent">' + recipe.percent_ready + '</p>');
		$(item).append('<a href="#" class="bundle-details">' + 'Details' + '</a>');
		$(item).append('<button class="add-to-cart">' + '+ cart' + '</button>');
	})

    $(window).scroll(function () {
    	if ($(this).scrollTop() > 200) {
    		$('#slug').text('Avoid food waste. Be a good bean.');
    		$('#slug').addClass("animated bounceInDown");
    	 } else if ($(this).scrollTop() < 200) {
    	 	$('#slug').text('Avoid food waste.')
    	 	$('#slug').addClass("animated bounceInUp")
    	 }
	});

  	$('#bundles').mixItUp();

})


// add map markers
// hide #shopping-cart until something is purchased
// hide .shopping-items until #shopping-cart expand is triggered
// #shopping-cart #total should show in nav by default if #shopping-cart is exposed

//how to trigger bundles when options are submitted?
//trigger be great in header when scrolling by
//USE flashcards from class 19, mix it up jquery plug in to sort recommendations
