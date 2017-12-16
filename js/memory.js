
var cards = [	"card-1",
"card-2",
"card-3",
"card-4",
"card-5",
"card-6",
"card-7",
"card-8",
"card-9",
"card-10",
"card-11",
"card-12"];


var temp_cards = cards.slice(0);


var game_cards = [];
var paired_cards = 8;
var matched_cards = [];


function random(range) {
return Math.floor(Math.random() * range);
}


function randomize() {
return random(3) - 1;
}


for (var i = 0; i < paired_cards; i++) {
var r = random(temp_cards.length);
var card = temp_cards.splice(r, 1);
game_cards = game_cards.concat(card);
game_cards = game_cards.concat(card);
}


game_cards.sort(randomize);

var giphy_images = new Array();

$(".back").each(function(i) {
$(this).addClass(game_cards[i]);
$(this).parent().attr("data-name", game_cards[i]);
});

console.log("GOTTA MATCH 'EM ALL! GOTTA MATCH 'EM ALL!")

var firstPick;
var secondPick;

$(".box").click(function() {
	

if ($(this).hasClass("flip") || $(this).hasClass("matched")) {
return;
}

$(this).addClass("flip");

if (firstPick === undefined) {
	firstPick = $(this);

} else {
secondPick = $(this);

if (firstPick.attr("data-name") === secondPick.attr("data-name")) {
	firstPick.addClass("matched")
	secondPick.addClass("matched")
	console.log("It's super effective!");
	
	matched_cards.push($(firstPick));
	matched_cards.push($(secondPick));
	
	winGame();
	
} else {
	
	var x = firstPick;
	var y = secondPick;
	setTimeout(function(){
		x.removeClass("flip");
		y.removeClass("flip");
	}, 1000);
	console.log("It's not very effective..");
}

firstPick = undefined;
secondPick = undefined;
}
if(matched_cards.length==16){
 modalgg(1);
}
});

function winGame() {
if (matched_cards.length === game_cards.length) {
console.log("YOU MATCHED 'EM ALL!")
}
}



//$("#open-button").click(function(event){
 //$(".box").addClass("flip");
 //$(".box").each(function(i){
//	 var box = $(this);
	// setTimeout(function(){
	//	 box
	// }, 400 * i);
	// });
 //});
//$("#close-button").click(function(event){
//$(".box").removeClass("flip");	

//});




/*function openWin() {
    var myWindow = window.open("", "myWindow", "width=200, height=100");
    myWindow.document.write("<p>This is 'myWindow'</p>");
    setTimeout(function(){ myWindow.close() }, 3000);
}
*/

$("#open-button").click(function(event)
		{
		$(".box").addClass("flip");
		setTimeout(function() {
    $('.box').removeClass('flip');
}, 3000);
		  
		  /* $(".box").each(function(i){
			   var box = $(this);
			   set Timeout(function(){
				   box.removeClass("flip");
			   }, 10 * i );
		   });*/
		
		});
		
		//$("#close-button").click(function(event)
		//{
		//$(".box").removeClass("flip");
		/*$(".box").each(function(i){
			   var box = $(this);
			   set Timeout(function(){
				   box.removeClass("flip");
			   }, 300 * i );
		   });*/
		//});


var xhr = $.get("http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=cats");
xhr.done(function(data) { console.log("Success, got GIPHY data", data); });
