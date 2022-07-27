// Calculates numbers from class items, returns result
function listLinks(prefix, classname)
{
	var result = 0;
	var prices = document.getElementsByClassName(classname);

	for(i = 0; i < prices.length; i++){
		console.log(prefix + prices[i].href);
	}
}

listLinks('', 'pull-request-title')
