function generate(){	
	let result = '';
	let placeForPassword = document.getElementById('result');
	
	if(placeForPassword.childElementCount > 0){
		for(let i = 0; i < placeForPassword.children.length; i++){
			placeForPassword.removeChild(placeForPassword.children[i])
		}
		
		let p = document.createElement('p'); 
		p.id = 'pass';	
		let passLen = Number(document.getElementById('select').value);
		let check = document.getElementById('checkbox').checked;	
		let rands = [counts[Math.floor(Math.random() * 10)],
					 bigLetters[Math.floor(Math.random() * 26)],
					 smallLetters[Math.floor(Math.random() * 26)],
					 counts[Math.floor(Math.random() * 10)],
					 smallLetters[Math.floor(Math.random() * 26)],
					 counts[Math.floor(Math.random() * 10)],
					 bigLetters[Math.floor(Math.random() * 26)],
					 counts[Math.floor(Math.random() * 10)],
					 smallLetters[Math.floor(Math.random() * 26)],
					 bigLetters[Math.floor(Math.random() * 26)],
					 counts[Math.floor(Math.random() * 10)],
					 bigLetters[Math.floor(Math.random() * 26)]					
					];		
		
		if(!check){
			if(passLen == 6){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5];
			}
			else if(passLen == 7){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6];
			}
			else if(passLen == 8){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7];
			}		
			else if(passLen == 9){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7] + rands[8];
			}		
			else if(passLen == 10){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7] + rands[8] + rands[9];
			}		
			else if(passLen == 11){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7] + rands[8] + rands[9] + rands[10];
			}		
			else if(passLen == 12){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7] + rands[8] + rands[9] + rands[10] + rands[11];
			}
		}
		else{
			if(passLen == 6){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)];
			}
			else if(passLen == 7){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6];
			}
			else if(passLen == 8){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7];
			}		
			else if(passLen == 9){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7] + rands[8];
			}		
			else if(passLen == 10){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7] + rands[8] + rands[9];
			}		
			else if(passLen == 11){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7] + rands[8] + symbol[Math.floor(Math.random() * 10)] + rands[10];
			}		
			else if(passLen == 12){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7] + rands[8] + symbol[Math.floor(Math.random() * 10)] + rands[10] + rands[11];
			}		
		}	
		
		p.innerHTML = result;	
		placeForPassword.appendChild(p);
	}
	else{
			
		let p = document.createElement('p'); 
		p.id = 'pass';	
		let passLen = Number(document.getElementById('select').value);
		let check = document.getElementById('checkbox').checked;	
		let rands = [counts[Math.floor(Math.random() * 10)],
					 bigLetters[Math.floor(Math.random() * 26)],
					 smallLetters[Math.floor(Math.random() * 26)],
					 counts[Math.floor(Math.random() * 10)],
					 smallLetters[Math.floor(Math.random() * 26)],
					 counts[Math.floor(Math.random() * 10)],
					 bigLetters[Math.floor(Math.random() * 26)],
					 counts[Math.floor(Math.random() * 10)],
					 smallLetters[Math.floor(Math.random() * 26)],
					 bigLetters[Math.floor(Math.random() * 26)],
					 counts[Math.floor(Math.random() * 10)],
					 bigLetters[Math.floor(Math.random() * 26)]					
					];
		
		if(!check){
			if(passLen == 6){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5];
			}
			else if(passLen == 7){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6];
			}
			else if(passLen == 8){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7];
			}		
			else if(passLen == 9){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7] + rands[8];
			}		
			else if(passLen == 10){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7] + rands[8] + rands[9];
			}		
			else if(passLen == 11){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7] + rands[8] + rands[9] + rands[10];
			}		
			else if(passLen == 12){
				result = rands[0] + rands[1] + rands[2] + rands[3] + rands[4] + rands[5] + rands[6] + rands[7] + rands[8] + rands[9] + rands[10] + rands[11];
			}
		}
		else{
			if(passLen == 6){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)];
			}
			else if(passLen == 7){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6];
			}
			else if(passLen == 8){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7];
			}		
			else if(passLen == 9){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7] + rands[8];
			}		
			else if(passLen == 10){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7] + rands[8] + rands[9];
			}		
			else if(passLen == 11){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7] + rands[8] + symbol[Math.floor(Math.random() * 10)] + rands[10];
			}		
			else if(passLen == 12){
				result = symbol[Math.floor(Math.random() * 10)] + rands[1] + rands[2] + rands[3] + rands[4] + symbol[Math.floor(Math.random() * 10)] + rands[6] + rands[7] + rands[8] + symbol[Math.floor(Math.random() * 10)] + rands[10] + rands[11];
			}		
		}	
		
		p.innerHTML = result;	
		placeForPassword.appendChild(p);
	}	
}

function copy(){
	let newPassword = document.getElementById('pass').innerHTML;	
	navigator.clipboard.writeText(newPassword);
}

document.getElementById('buttonCreate').addEventListener('click', generate);
document.getElementById('buttonCopy').addEventListener('click', copy);



