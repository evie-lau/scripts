// GROUPON card-linked deals

// Log into Groupon, and open "https://www.groupon.com/occasion/cash-back-deals"
// Expand all deals until everything is shown
// run in JavaScript Console

var deals = document.querySelectorAll("#result-list figure > a");
deals.forEach(
	function(deal) { 
		console.log(deal.href) 
		var claimUrl = deal.href + "/claim";
		window.open(claimUrl);
	}
);