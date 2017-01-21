// GROUPON card-linked deals

// Log into Groupon, and open "https://www.groupon.com/occasion/card-linked-deals"
// run in JavaScript Console

var deals = document.getElementsByClassName("three-up");

for (i=0; i < deals[0].children.length; i++) {
	var deal = deals[0].children[i].children[0].children[0].getAttribute("href") + "/claim";
	window.open(deal);
}