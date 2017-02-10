var playList = [
  'apple',
  'orange',
  'egg',
  'watermallon',
  'papaya',
  'fish'
];
var playList1 = [
  'bread',
  'biscute',
  'milk',
  'butter',
  'pizza',
  'cake'
];
var instock = playList.concat(playList1);
var search;
while(true){
	search = prompt("search for a product in our store. type 'list' to show all type 'quit' to rest");
	search = search.toLowerCase();
	if(search === 'quit'){
		break;
	}else if(search === 'list'){
		document.write(instock.join(', '));
	}else{
		if(instock.indexOf(search) > -1){
			document.write('Yes! we have ' + search + ' in the store');
		}else{
			document.write('Sorry  we have not ' + search + ' in the store');
		}
	}
}