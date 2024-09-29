// ! navbar
const navSlide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')
	const navLinks = document.querySelectorAll('.nav-links li')
	const navLinksAncor = document.querySelectorAll('.nav-links li a')
	// Toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active')
		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 5 + 0.3
				}s`
			}
		})
		//burger animation
		burger.classList.toggle('toggle')
	})
	navLinksAncor.forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-active')
			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = ''
				}
			})
			burger.classList.remove('toggle')
		})
	})
}

navSlide()

function openCity(evt, cityName) {
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName('tabcontent')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}
	tablinks = document.getElementsByClassName('tablinks')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '')
	}
	document.getElementById(cityName).style.display = 'block'
	evt.currentTarget.className += ' active'
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
const links = document.querySelectorAll('.tablinks')
links[0].click()
var clickVar = 1
setInterval(() => {
	links[clickVar].click()
	if (clickVar < links.length - 1) {
		clickVar++
	} else {
		clickVar = 0
	}
}, 2000)

// ! form submit

function submmitit() {
	var xhttp = new XMLHttpRequest()
	var formDataPair = []
	var formData = ''
	formDataPair.push('content1' + '=' + document.getElementById('fname').value)
	formDataPair.push('content2' + '=' + document.getElementById('lname').value)
	formDataPair.push(
		'content3' + '=' + document.getElementById('phnumber').value
	)
	formDataPair.push('content4' + '=' + document.getElementById('email').value)
	formDataPair.push('content5' + '=' + document.getElementById('message').value)
	formData = formDataPair.join('&').replace(/%20/g, '+')
	xhttp.open('POST', 'https://rainmakerba.com/phpmailer/index.php')
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
	xhttp.send(formData)
	console.log('submitted')
	document.querySelector('.form-submit-btn').innerHTML = 'Submitted'
	setTimeout(() => {
		window.location.reload()
	}, 1000)
}

// spy scroll

const makeNavLinksSmooth = () => {
	const navLinks = document.querySelectorAll('.nav-link')

	for (let n in navLinks) {
		if (navLinks.hasOwnProperty(n)) {
			navLinks[n].addEventListener('click', (e) => {
				e.preventDefault()
				document.querySelector(navLinks[n].hash).scrollIntoView({
					behavior: 'smooth',
				})
			})
		}
	}
}

const spyScrolling = () => {
	const sections = document.querySelectorAll('.hero-bg')

	window.onscroll = () => {
		const scrollPos =
			document.documentElement.scrollTop || document.body.scrollTop

		for (let s in sections)
			if (
				sections.hasOwnProperty(s) &&
				sections[s].offsetTop * 0.9 <= scrollPos
			) {
				const id = sections[s].id
				document.querySelector('.active').classList.remove('active')
				document
					.querySelector(`a[href*=${id}]`)
					.parentNode.classList.add('active')
			}
	}
}

makeNavLinksSmooth()
spyScrolling()

// made by @adarshsingh87
