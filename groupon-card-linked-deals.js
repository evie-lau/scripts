// GROUPON card-linked deals

// Log into Groupon, and open "https://www.groupon.com/occasion/cash-back-deals"
// Expand all deals until everything is shown
// run in JavaScript Console

var deals = document.querySelectorAll("#result-list figure > a");

var counter = 0;
var totalCount = deals.length;

var claimNext = function(){
	var claimUrl = deals[counter].href + "/claim";
	var claimWindow = window.open(claimUrl); 
	claimWindow.addEventListener('load', function() { 
		claimWindow.close();
		counter++;
		claimNext();
	} , false);
}