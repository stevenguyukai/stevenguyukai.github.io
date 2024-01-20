const html = document.documentElement

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