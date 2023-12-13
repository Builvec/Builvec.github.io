// Groups of functions
setTimeHeader =()=>{
	setTimeout(() =>{
		const headerTimeDisplay = document.querySelector('.header-main-container-disN');
		headerTimeDisplay.style.display= 'block';
	},4000)
}

setTimeMain =()=>{
	setTimeout(() =>{
		const welcomeContainer = document.querySelector('.welcome-main-container-disN');
		const mainDisplay = document.querySelector('.MAIN-disN');
		mainDisplay.style.display = 'block';
		welcomeContainer.style.display = 'none';
	},4000)
}

onRefresh = ()=>{
	let startInput = document.querySelector('.start-input');
	startInput.value = '';
}

onRefreshMain = ()=>{
	let startInput = document.querySelector('.start-input');
	startInput.value = '';
}

emptyInpStart = ()=>{
	let mainInput = document.querySelector('.main__input');
		mainInput.value = '';
}
	
onDisplayWelcome = (senCaseDone)=>{
	const isSenCase = senCaseDone.toLowerCase();
	const nowSenCase = isSenCase.charAt(0).toUpperCase() + isSenCase.slice(1);
	return nowSenCase;
}


// Starting window
startDisplay = ()=>{
	const startInput = document.querySelector('.start-input');
	const startInputValue = startInput.value;
	const startInputValueToSenCase = onDisplayWelcome(startInputValue)
	const startInputValueWel = document.querySelector('.start-input-value-wel');
	const welcomeContainer = document.querySelector('.welcome-main-container-disN');
	const startContainer = document.querySelector('.start-container-disN');
	
	if(startInputValue.length > 2){
		emptyInpStart();
		startInput.addEventListener('keydown', (event) =>{
			if(event.key === 'Enter'){
				event.preventDefault();
				startContainer.style.display = 'none';
				welcomeContainer.style.display = 'block';
				startInputValueWel.innerText = `${startInputValueToSenCase}`;
				setTimeHeader();
				setTimeMain();
			}
		} )
	}
}


//create an object of member info in array
const builMems = [
	{Name: 'Joseph', Status: 'The CEO of builvec and a Pro Frontend Developer'},
	{Name: 'Peter', Status: 'A UI/UX designer'},
	{Name: 'Bernice', Status: ' A graphic designer'},
	{Name: 'Mark', Status: ' A software developer and freelancer'},
	{Name: 'Tim', Status: 'An Agile Project Manager'},
	{Name: 'Eben', Status: ' A Program Manager'},
	{Name: 'Ernest', Status: ' Head of the design team'},
	{Name: 'Ama', Status: ' Head of the management team'},
	{Name: 'Nana', Status: ' Head of the developer team'}
	] 


	//loop through builMems
const builLoop = ()=>{
	const inpField = document.querySelector('.main__input');
	const inpFieldValue = inpField.value;
	const inpToSenCase = onDisplayWelcome(inpFieldValue);
	const statField = document.querySelector('.main__text-result');

	for(const Mem of builMems){
		const memName = Mem.Name;

	if(inpToSenCase === memName){
		statField.innerText = `${Mem.Status}`;
		statField.style.backgroundColor = 'rgba(149, 149, 149, 0.078)';
		statField.style.color = 'rgb(0, 100, 0)';
		statField.style.display = 'block';
		return true;
		}	
	}	
}

// onclick event
const builCheck =()=>{
	const statField = document.querySelector('.main__text-result');

	if(!builLoop()){
		statField.style.backgroundColor = 'transparent';
		statField.innerText = `Not a member`;
		statField.style.color = 'rgb(220, 0, 0)';
		statField.style.display = 'block';
	}
}


//onkeydown('Enter') event
const builCheckEnter =(event)=>{
	const statField = document.querySelector('.main__text-result');

if(event.key === 'Enter'){
	event.preventDefault();
	if(!builLoop()){
		statField.style.backgroundColor = 'transparent';
		statField.innerText = `Not a member`;
		statField.style.color = 'rgb(220, 0, 0)';
		statField.style.display = 'block';
	}

}
}


// When main-input field is empty or incorrect
const mainInputEmpty =(event)=>{
	const mainInput = document.querySelector('.main__input');
	const statField = document.querySelector('.main__text-result');
	
	if(mainInput.value === '' || !builLoop() || builLoop()){
		statField.innerText = '';
		statField.style.backgroundColor = 'transparent';
	}
	
	if(event.key === ''){
		console.log('done')
	}

}



	



	