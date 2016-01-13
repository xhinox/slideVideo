import jQuery from 'jquery'

class Clima{
	constructor(key){
		this.key = key
		this.baseUrl = 'http://api.openweathermap.org/data/2.5/'
	}

	hasAlgo(){
		console.log(`${this.baseUrl}q=${this.key}`)
	}

}