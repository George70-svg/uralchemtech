'use strict'

//landing page initialization
function startLanding() {
	startProblemCard()
	startScheme()
	startAccordion()
	startMenu()
}

startLanding()

//function for clicking the button-arrow in the "problem" card
function startProblemCard() {
	const arrowsButton = document.querySelectorAll('.arrow')
	const arrowsContainer = document.querySelectorAll('.arrowWrapper')
	const problemMainText = document.querySelectorAll('.mainText')
	const problemSecondText = document.querySelectorAll('.secondText')
	const problemCardContainer = document.querySelectorAll('.problem')

	//variable "pageWidth" from scriptWave.js
	if(pageWidth < 1024) {
		problemSecondText.forEach(text => {
			text.classList.remove('hide')
			text.classList.add('startShow');
		})

		arrowsContainer.forEach(button => {
			button.style.transform = 'translateY(0px) rotate(180deg)'
		})
	} else {
		//Initial function call to round corners in "problem" card
		toogleBorderRadiusForMainText()
		let heightDownText
		if(pageWidth >= 1900) {
			heightDownText = 100
		} else {
			heightDownText = 70
		}

		for(let i = 0; i < problemCardContainer.length; i++) {
			problemCardContainer[i].addEventListener('click', () => {
				if(problemSecondText[i].classList.contains('hide')) {
					showProblemText(problemSecondText[i], arrowsContainer[i])
				} else if(problemSecondText[i].classList.contains('show')) {
					hideProblemText(problemSecondText[i], arrowsContainer[i])
				}
			})

			problemCardContainer[i].addEventListener('mouseenter', () => {
				showProblemText(problemSecondText[i], arrowsContainer[i])
			})

			problemCardContainer[i].addEventListener('mouseleave', () => {
				hideProblemText(problemSecondText[i], arrowsContainer[i])
			})

		}

		/*for(let i = 0; i < arrowsButton.length; i++) {
			arrowsButton[i].addEventListener('click', () => {
				if(problemSecondText[i].classList.contains('hide')) {
					showProblemText(problemSecondText[i], arrowsContainer[i])
				} else if(problemSecondText[i].classList.contains('show')) {
					hideProblemText(problemSecondText[i], arrowsContainer[i])
				}
			})
		}*/

		function showProblemText(text, button) {
			text.style.transform = `translateY(0px)`
			button.style.transform = `translateY(0px) rotate(180deg)`
			text.classList.add('show')
			text.classList.remove('hide')
			toogleBorderRadiusForMainText()
		}

		function hideProblemText(text, button) {
			text.style.transform = `translateY(-${heightDownText}px)`
			button.style.transform = `translateY(-${heightDownText}px) rotate(360deg)`
			text.classList.add('hide')
			text.classList.remove('show')
			text.classList.remove('startShow')
			toogleBorderRadiusForMainText()
		}

		//function for rounding corners in the "problem" card
		function toogleBorderRadiusForMainText() {
			for(let i = 0; i < problemCardContainer.length; i++) {
				if(problemCardContainer[i].children[2].classList.contains('hide')) {
					problemMainText[i].classList.remove('showCard')
					problemMainText[i].classList.add('hideCard')
				} else {
					problemMainText[i].classList.remove('hideCard')
					problemMainText[i].classList.add('showCard')
				}
			}
		}
	}
}


//function to open a text box when hovering over an element in the technological scheme
function startScheme() {
	const schemeContainer = document.querySelector('.scheme')
	const blocks = document.querySelectorAll('.block')
	const textBoxIfo = [
		{//crusher
			coordinates: [25, 302],
			style: 'textFrame1',
			text: 'Дробление и измельчение сильвинитной руды',
		},

		{//suspension
			coordinates: [210, 302],
			style: 'textFrame1',
			text: 'Приготовление рудной суспензии',
		},

		{//mixture2
			coordinates: [155, 30],
			style: 'textFrame3',
			text: 'Приготовление раствора реагентов',
		},

		{//flotation1
			coordinates: [212, 250],
			style: 'textFrame2',
			text: 'Флотомашина (шламовая флотация)',
		},

		{//ultrasound
			coordinates: [370, 110],
			style: 'textFrame3',
			text: 'УЗ-обработка реагентов (активация реагентов, снижение расхода реагентов)',
		},

		{//flotation2
			coordinates: [156, 120],
			style: 'textFrame5',
			text: 'Флотомашина (сильвиновая флотация)',
		},

		{//mixture1
			coordinates: [470, 180],
			style: 'textFrame2',
			text: 'Приготовление раствора реагентов',
		},

		{//dryer
			coordinates: [490, 20],
			style: 'textFrame4',
			text: 'Обезвоживание и сушка флотоконцентрата',
		},

		{//product
			coordinates: [590, 170],
			style: 'textFrame4',
			text: 'Готовый продукт KCl',
		},
	]

	//show text box: the loop adds a "mouseover" event listener for each schema element
	for(let i = 0; i < blocks.length; i++) {
		blocks[i].addEventListener('mouseenter', () => {
			let element = document.createElement("div")
			element.className = `textFrame ${textBoxIfo[i].style}`
			element.style.transform = `translate(${textBoxIfo[i].coordinates[0]}px, ${textBoxIfo[i].coordinates[1]}px)`
			element.innerHTML = `<p>${textBoxIfo[i].text}</p>`
			schemeContainer.appendChild(element)
			schemeContainer.classList.add('schemeDark')
			blocks[i].classList.add('blockLight')
		})
	}

	//hide text box: the loop adds a "dismiss mouse" event listener for each schema element
	for(let i = 0; i < blocks.length; i++) {
		blocks[i].addEventListener('mouseleave', () => {
			let elements = document.querySelectorAll('.textFrame')
			elements.forEach(item => {item.remove()})
			schemeContainer.classList.remove('schemeDark')
			blocks[i].classList.remove('blockLight')
		})
	}
}


//function for clicking on the "accordion" card
function startAccordion() {
	const accordionCards = document.querySelectorAll('.image-block');

	//loop for adding an active class to each card (opening the card) on click
	accordionCards.forEach((card) => {
	    card.addEventListener('click', () => {
	        removeActiveClass();
	        card.classList.add('active')
	    });
	});

	//function to remove the active class from all cards
	function removeActiveClass() {
	    accordionCards.forEach(card => {
	        card.classList.remove('active')
	    });
	}
}


//function clicking on burger menu button in mobile header
function startMenu() {
	const closeButton = document.getElementById('closeButton')
	const menuButtons = document.querySelectorAll('.menuButton')
	const hideHeaderContent = document.getElementById('hideHeaderContent')
	const mainContainer = document.getElementById('main')
	//variable to remember at what height of the page the menu was opened
	let curentLayerYPage;

	//burger menu button click event
	closeButton.addEventListener('click', (event) => {
		closeButton.classList.toggle('openButton') //changes the form of the button
		hideHeaderContent.classList.toggle('showHeaderContent') //opens/closes the menu
		main.classList.toggle('hideAllContent') //opens/closes all site content

		if(closeButton.classList.contains('openButton')) {
			//remember at what height of the page if menu was open
			curentLayerYPage = event.pageY;
		} 	//scroll the page to the place where the menu was opened if menu was close
			else {
			window.scroll(0, curentLayerYPage - 40)
		}
	})

	//loop for add event for button clicks in the menu
	for(let i = 0; i <= menuButtons.length; i++) {
		menuButtons[i].addEventListener('click', () => {
			closeButton.classList.toggle('openButton') //changes the form of the button
			hideHeaderContent.classList.toggle('showHeaderContent') //opens/closes the menu
			main.classList.toggle('hideAllContent') //opens/closes all site content
		})
	}
}
