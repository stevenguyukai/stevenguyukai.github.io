let wholeContentDiv;
document.addEventListener('DOMContentLoaded', () => {
	wholeContentDiv = document.getElementById('wholeContent');

	wholeContentDiv.addEventListener('scroll', function() {

		// Scrolled: [210, 420]
		const vh = wholeContentDiv.scrollHeight / 420;
		const scrolled = (wholeContentDiv.scrollTop + wholeContentDiv.clientHeight) / vh;
		if(scrolled >= 210 && scrolled <= 420){
			// document.getElementById("wholeContent").style.setProperty("--progress", (scrolled - 210) / 210)
		}
	});
});



// whole.addEventListener('scroll', function() {
// 	console.log('Div is being scrolled');
// });

// window.addEventListener("scroll", (e) => {
	// const span_i = document.querySelectorAll('span i');
	// const area2 = document.querySelectorAll(".secondText");
	// const area3 = document.querySelectorAll(".thirdText");
	// const area4 = document.querySelectorAll(".forthText");

	// const vh = html.scrollHeight / 420;
	// const scrolled = (html.scrollTop + html.clientHeight) / vh;

	// console.log(e);

	// if (scrolled < 200) {
	//
	// 	// 第一个100vh元素
	// 	for (var i = 0; i < span_i.length; i++) {
	// 		span_i[i].style.setProperty("--progress", (scrolled - 100) / 100)
	// 	}
	// 	for (var i = 0; i < mark.length; i++) {
	// 		if (i == 2 || i == 3 || i == 4) {
	// 			continue
	// 		} else {
	// 			mark[i].style.setProperty("--progress", (scrolled - 90) / 100)
	// 		}
	// 	}
	// 	document.getElementById("introPic").style.setProperty("--progress", (scrolled - 100) / 100)
	// 	document.getElementById("clubActivityPic").style.setProperty("--progress", (scrolled - 200) / 100)
	// 	document.getElementById("clubActivityShow").style.setProperty("--progress", (scrolled - 200) / 100)
	//
	// } else if (scrolled >= 200 && scrolled < 300) {
	// 	// 第二个100vh元素
	// 	for (var i = 0; i < area3.length; i++) {
	// 		area3[i].style.setProperty("--progress", (scrolled - 200) / 100)
	// 	}
	// 	for (var i = 0; i < 3; i++) {
	// 		document.getElementsByClassName("newKnowledgeCard")[i].style.setProperty("--progress", (scrolled -
	// 			200) / 100)
	// 	}
	// 	if (scrolled >= 260) {
	// 		for (var i = 0; i < 2; i++) {
	// 			document.getElementsByClassName("brainGameItem")[i].style.color = "white"
	// 			document.getElementsByClassName("newKnowledgeItem")[i].style.color = "#FF7818"
	// 			document.getElementsByClassName("logItem")[i].style.color = "white"
	// 		}
	// 	} else {
	// 		for (var i = 0; i < 2; i++) {
	// 			document.getElementsByClassName("newKnowledgeItem")[i].style.color = "white"
	// 		}
	// 	}
	//
	// } else if (scrolled >= 300 && scrolled < 400) {
	// 	// 第三个100vh元素
	// 	hideQrCode()
	// 	if (scrolled >= 320 && scrolled <= 380) {
	// 		for (var i = 0; i < area4.length; i++) {
	// 			area4[i].style.setProperty("--progress", (scrolled - 320) / 60)
	// 		}
	// 	}
	//
	// 	for (var i = 0; i < mark.length; i++) {
	// 		if (i == 0 || i == 1 || i == 2) {
	// 			continue
	// 		} else {
	// 			mark[i].style.setProperty("--progress", (scrolled - 300) / 100)
	// 		}
	// 	}
	// 	if (scrolled >= 360) {
	// 		for (var i = 0; i < 2; i++) {
	// 			document.getElementsByClassName("brainGameItem")[i].style.color = "white"
	// 			document.getElementsByClassName("newKnowledgeItem")[i].style.color = "white"
	// 			document.getElementsByClassName("logItem")[i].style.color = "#FF7818"
	// 		}
	// 	} else {
	// 		for (var i = 0; i < 2; i++) {
	// 			document.getElementsByClassName("logItem")[i].style.color = "white"
	// 		}
	// 	}
	//
	// } else if (scrolled >= 410) {
	// 	// 第四个100vh元素
	// 	for (var i = 0; i < 2; i++) {
	// 		document.getElementsByClassName("brainGameItem")[i].style.color = "white"
	// 		document.getElementsByClassName("newKnowledgeItem")[i].style.color = "white"
	// 		document.getElementsByClassName("logItem")[i].style.color = "white"
	// 	}
	// }

// })


function fadeElement(elementId, duration, fadeOut) {
	const element = document.getElementById(elementId);
  
	if (!element) {
	  console.error(`Element with ID "${elementId}" not found.`);
	  return;
	}
  
	let startOpacity = fadeOut ? 1 : 0;
	let endOpacity = fadeOut ? 0 : 1;
	let opacity = startOpacity;
	const fadeInterval = 50;
  
	const fade = () => {
	  if ((fadeOut && opacity > endOpacity) || (!fadeOut && opacity < endOpacity)) {
		opacity += (fadeOut ? -1 : 1) * fadeInterval / duration;
		element.style.opacity = opacity;
		setTimeout(fade, fadeInterval);
	  } else {
		element.style.opacity = endOpacity;
	  }
	};
  
	fade();
}

function extend(){
	fadeElement("extentButtonPic1", 300, true);
	document.getElementById("extentButtonPic1").style.zIndex = 2
	
	fadeElement("extentButtonPic2", 300, false);
	document.getElementById("extentButtonPic2").style.zIndex = 3

	document.getElementById("extentBoxBackground").style.display = "flex"
	fadeElement("extentBoxBackground", 300, false);
}

function closeExtend(){
	fadeElement("extentButtonPic1", 300, false);
	document.getElementById("extentButtonPic1").style.zIndex = 3
	
	fadeElement("extentButtonPic2", 300, true);
	document.getElementById("extentButtonPic2").style.zIndex = 2

	fadeElement("extentBoxBackground", 300, true);
	setTimeout(function() {
		document.getElementById("extentBoxBackground").style.display = "none"
	  }, 300);
}

function vhToPixels(vh) {
	return Math.round(window.innerHeight / (100 / vh));
}

function smoothScrollTo(element, target, duration) {
	const startPosition = element.scrollTop;
	const distance = target - startPosition;
	let startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		element.scrollTop = ease(timeElapsed, startPosition, distance, duration);

		if (timeElapsed < duration) {
			requestAnimationFrame(animation);
		}
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

function homeBtn(){
	smoothScrollTo(wholeContentDiv, vhToPixels(0), 1000);
}
function projectsBtn(){
	alert('🚧 Under construction!');
}
function educationBtn(){
	smoothScrollTo(wholeContentDiv, vhToPixels(100), 1000);
}
function skillsBtn(){
	alert('🚧 Under construction!');
}
function contactBtn(){
	alert('🚧 Under construction!');
}

