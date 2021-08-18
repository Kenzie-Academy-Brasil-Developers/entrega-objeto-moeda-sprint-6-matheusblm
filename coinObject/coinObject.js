const coin = {
	state: 0,
      
	flip: function () {
		let random = (Math.random() >= 0.5) ? 1 : 0;
		this.state = random
		return this.state
	  // Use "this.state" para acessar a propriedade "state".
	  // Configure de forma randômica a propriedade “state” do
	  // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
	},
      
	toString: function () {
		let str = this.state === 0 ? "Heads" : "Tails"
		return str
	  // Se o valor de "state" for 0, retorne "Heads"
	  // Se o valor de "state" for 1, retorne "Tails"
	},
      
	toHTML: function () {
	  const image = document.createElement("img");
	  if(this.state === 0){
		image.src = "./images/cara.jpg"
	  }else{
		image.src = "./images/coroa.jpg"
	  }
	  return image;
	},
      };

function display20Flips(){
	let result = []
	let div = document.createElement("div")
	div.classList.add("table1")
	document.body.appendChild(div)
	
	for(let i = 0; i < 20; i++){
		coin.flip()
		let resultFlip = coin.toString()
		let newFlip = document.createElement("div")
		newFlip.classList.add("flip")
		newFlip.innerText = coin
		div.appendChild(newFlip)
		result.push(resultFlip)
	}
return console.log(result)
}

function display20Images(){
	let result = []
	let div = document.createElement("div")
	div.classList.add("table2")
	document.body.appendChild(div)
	for(let i = 0; i < 20; i++){
		coin.flip()
		let resultFlip = coin.toString()
		appendImage(3)
		result.push(resultFlip)
	}
return console.log(result)
}

function appendImage (){
	let div = document.getElementsByClassName("table2")[0]
	let img = coin.toHTML()
	div.appendChild(img)
}


//test
function TestOneFlip(){
	let coin = coin.flip()
	let result = coin === 1 ? true : coin === 0 ? true : false
	let expected = true;
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testString(){
	let face = coin.toString()
	let result = face === "Heads" ? true : face === "Tails" ? true : false
	let expected = true;
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

display20Flips()
display20Images()
