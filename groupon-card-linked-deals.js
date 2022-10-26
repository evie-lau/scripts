// GROUPON card-linked deals

// Log into Groupon, and open "https://www.groupon.com/landing/groupon-plus"
// Expand all deals until everything is shown
// run in JavaScript Console
// make sure to allow all popups for groupon.com

var deals = document.querySelectorAll("figure > a.grpn-dc");

var counter = 0;
var totalCount = deals.length;

var claimNext = function(){
	if (counter >= totalCount) { 
		return;
	}
	var claimUrl = deals[counter].href + "/claim";
	var claimWindow = window.open(claimUrl); 
	claimWindow.addEventListener('load', function() { 
		claimWindow.close();
		counter++;
		claimNext();
	} , false);
}

claimNext();
