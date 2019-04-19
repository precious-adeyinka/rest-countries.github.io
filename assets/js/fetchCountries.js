// Initiate Countries Class
class Countries {
	constructor(){}

	// Add countries to page
	addCountries(countries) {
		let container = document.querySelector('.countries');
		let template = document.querySelector('#template').innerHTML;
		Mustache.parse(template);
		for(var i = 0; i < countries.length; i++){
			let country = Mustache.to_html(template, countries[i]);
			// var arr = [];
			// arr.push(country);
			container.innerHTML += country;
			// console.log(arr.length);
		}
		// console.log(countries);
	}

	// Fecth countries API
	fetchCountries () {
		var url = `https://restcountries.eu/rest/v2/all`;
		/*
			Add async preloader screen 
			to signal async request for countries array data pending
		*/
		$('.preloader-wrapper').addClass('active');
		// $('.spinner').addClass('active');
		fetch(url).then((res)=>{
        	return res.json();
        }).then((data)=>{
        	// console.log(data);
        	this.addCountries(data);
        	/*
        		Remove async preloader screen 
        		to signal async request array data success
        	*/
        	setTimeout(()=>{$('.preloader-wrapper').removeClass('active');},3000);
        	// $('.spinner').removeClass('active');
        }).catch((err)=>{
      		console.log('Request Failed - ', err);  
        });
	}
}

let countriesInstance = new Countries();
countriesInstance.fetchCountries();