$(document).ready(function(){
	player_hits();
	player_stays();
	dealer_hits();
});

function player_hits(){
	$(document).on("click", "form#hit_form input", function(){

		$.ajax({
			type: "POST",
			url: "/game/player/hit"
		}).done(function(html_response){
			$("#game").replaceWith(html_response);
		});

		return false;
	});
}

function player_stays(){
	$(document).on("click", "form#stay_form input", function(){

		$.ajax({
			type: "POST",
			url: "/game/player/stay"
		}).done(function(html_response){
			$("#game").replaceWith(html_response);
		});

		return false;
	});
}

function dealer_hits(){
	$(document).on("click", "form#dealer_hit input", function(){

		$.ajax({
			type: "POST",
			url: "/game/dealer/hit"
		}).done(function(html_response){
			$("#game").replaceWith(html_response);
		});

		return false;
	});
}