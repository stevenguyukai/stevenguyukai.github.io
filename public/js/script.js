let wholeContentDiv;
document.addEventListener('DOMContentLoaded', () => {
	wholeContentDiv = document.getElementById('wholeContent');

	wholeContentDiv.addEventListener('scroll', function() {


		const vh = wholeContentDiv.scrollHeight / 1050;
		const scrolled = (wholeContentDiv.scrollTop + wholeContentDiv.clientHeight) / vh;

		if (scrolled >= 105 && scrolled <= 315){
			document.getElementById("homeLink").style.color = "#52b4ED"
			document.getElementById("homeLinkMobile").style.color = "#52b4ED"
			document.getElementById("educationLink").style.color = "#EEEFF2"
			document.getElementById("educationLinkMobile").style.color = "#EEEFF2"
			document.getElementById("projectsLink").style.color = "#EEEFF2"
			document.getElementById("projectsLinkMobile").style.color = "#EEEFF2"
			document.getElementById("skillsLink").style.color = "#EEEFF2"
			document.getElementById("skillsLinkMobile").style.color = "#EEEFF2"
			document.getElementById("contactLink").style.color = "#EEEFF2"
			document.getElementById("contactLinkMobile").style.color = "#EEEFF2"
		} else if (scrolled >= 315 && scrolled <= 525){
			document.getElementById("homeLink").style.color = "#EEEFF2"
			document.getElementById("homeLinkMobile").style.color = "#EEEFF2"
			document.getElementById("educationLink").style.color = "#52b4ED"
			document.getElementById("educationLinkMobile").style.color = "#52b4ED"
			document.getElementById("projectsLink").style.color = "#EEEFF2"
			document.getElementById("projectsLinkMobile").style.color = "#EEEFF2"
			document.getElementById("skillsLink").style.color = "#EEEFF2"
			document.getElementById("skillsLinkMobile").style.color = "#EEEFF2"
			document.getElementById("contactLink").style.color = "#EEEFF2"
			document.getElementById("contactLinkMobile").style.color = "#EEEFF2"
		} else if (scrolled >= 525 && scrolled <= 735){
			document.getElementById("homeLink").style.color = "#EEEFF2"
			document.getElementById("homeLinkMobile").style.color = "#EEEFF2"
			document.getElementById("educationLink").style.color = "#EEEFF2"
			document.getElementById("educationLinkMobile").style.color = "#EEEFF2"
			document.getElementById("projectsLink").style.color = "#52b4ED"
			document.getElementById("projectsLinkMobile").style.color = "#52b4ED"
			document.getElementById("skillsLink").style.color = "#EEEFF2"
			document.getElementById("skillsLinkMobile").style.color = "#EEEFF2"
			document.getElementById("contactLink").style.color = "#EEEFF2"
			document.getElementById("contactLinkMobile").style.color = "#EEEFF2"
		} else if (scrolled >= 735 && scrolled <= 945){
			document.getElementById("homeLink").style.color = "#EEEFF2"
			document.getElementById("homeLinkMobile").style.color = "#EEEFF2"
			document.getElementById("educationLink").style.color = "#EEEFF2"
			document.getElementById("educationLinkMobile").style.color = "#EEEFF2"
			document.getElementById("projectsLink").style.color = "#EEEFF2"
			document.getElementById("projectsLinkMobile").style.color = "#EEEFF2"
			document.getElementById("skillsLink").style.color = "#52b4ED"
			document.getElementById("skillsLinkMobile").style.color = "#52b4ED"
			document.getElementById("contactLink").style.color = "#EEEFF2"
			document.getElementById("contactLinkMobile").style.color = "#EEEFF2"
		} else if (scrolled >= 945 && scrolled <= 1050){
			document.getElementById("homeLink").style.color = "#EEEFF2"
			document.getElementById("homeLinkMobile").style.color = "#EEEFF2"
			document.getElementById("educationLink").style.color = "#EEEFF2"
			document.getElementById("educationLinkMobile").style.color = "#EEEFF2"
			document.getElementById("projectsLink").style.color = "#EEEFF2"
			document.getElementById("projectsLinkMobile").style.color = "#EEEFF2"
			document.getElementById("skillsLink").style.color = "#EEEFF2"
			document.getElementById("skillsLinkMobile").style.color = "#EEEFF2"
			document.getElementById("contactLink").style.color = "#52b4ED"
			document.getElementById("contactLinkMobile").style.color = "#52b4ED"
		}
		if(scrolled >= 210 && scrolled <= 420){
			// This is the range from first page to second page
			// while scrolling, the animation will be triggered
			document.getElementById("educationBox").style.setProperty("--progress", (scrolled - 210) / 210)
			document.getElementById("majorBox").style.setProperty("--progress", (scrolled - 210) / 210)
		} else if (scrolled >= 420 && scrolled <= 630){
			// This is the range from second page to third page
			// while scrolling, the animation will be triggered
			document.getElementById("projectBox").style.setProperty("--progress", (scrolled - 420) / 210)
			document.getElementById("projectsText").style.setProperty("--progress", (scrolled - 420) / 210)
		}  else if (scrolled >= 630 && scrolled <= 840){
			// This is the range from third page to fourth page
			// while scrolling, the animation will be triggered
			document.getElementById("workText").style.setProperty("--progress", (scrolled - 630) / 210)
			let courseCards = document.querySelectorAll('#courseBox .courseCard');
			for (let i = 0; i < courseCards.length; i++) {
				courseCards[i].style.setProperty("--progress", (scrolled - 630) / 210)
			}
		}
	});
});


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
	smoothScrollTo(wholeContentDiv, vhToPixels(200), 1000);
}
function educationBtn(){
	smoothScrollTo(wholeContentDiv, vhToPixels(100), 1000);
}
function workBtn(){
	smoothScrollTo(wholeContentDiv, vhToPixels(300), 1000);
}
function contactBtn(){
	smoothScrollTo(wholeContentDiv, vhToPixels(400), 1000);
}

function directToGithub() {
	window.open("https://github.com/stevenguyukai","_blank" );
}

function directToLinkedIn(){
	window.open("https://www.linkedin.com/in/yukai-gu-125bb3292","_blank" );
}

function directToLocation(){
	window.open("https://maps.app.goo.gl/aGGAj2QwTjqiZqqG7","_blank" );

}

function directToEmail(){
	window.open("mailto:yukaig1@uci.edu","_blank" );
}

function directToPhone(){
	window.open("tel:9495929418","_blank" );
}

function openResumeModal() {
	document.getElementById('resumeModalOverlay').style.display = 'block';
	document.body.style.overflow = 'hidden';
}
function closeResumeModal() {
	document.getElementById('resumeModalOverlay').style.display = 'none';
	document.body.style.overflow = '';
}
function overlayClick(e) {
	// Close only when clicking the dimmed area, not the modal itself
	if (e.target && e.target.id === 'resumeModalOverlay') {
		closeResumeModal();
	}
}
// Close on Escape key
document.addEventListener('keydown', function(e){
	if (e.key === 'Escape') closeResumeModal();
});

document.addEventListener('DOMContentLoaded', () => {
	// 1) 缓存 Modal 节点
	const modal = document.getElementById('projectModal');
	const modalImg = document.getElementById('projModalImg');
	const modalTitle = document.getElementById('projModalTitle');
	const modalDesc = document.getElementById('projModalDesc');
	const modalLink = document.getElementById('projModalLink');
	const modalCloseBtns = modal ? modal.querySelectorAll('.projModal__close, .projModal__close--secondary') : [];

	const wholeContent = document.getElementById('wholeContent'); // 你的滚动容器

	// 2) 事件委派：点击任何 .projectCard 打开弹窗
	const projectsArea = document.getElementById('projectsArea');
	if (projectsArea && modal) {
		projectsArea.addEventListener('click', (e) => {
			const card = e.target.closest('.projectCard');
			if (!card) return;

			const title = card.dataset.title || card.querySelector('.projectTitle')?.textContent?.trim() || '';
			const desc  = card.dataset.desc  || '';
			const img   = card.dataset.img   || card.querySelector('img')?.getAttribute('src') || '';
			const link  = card.dataset.link  || '';

			modalTitle.textContent = title;
			modalDesc.textContent  = desc;
			modalImg.src           = img;
			modalImg.alt           = title ? (title + ' preview') : 'project image';

			if (link) {
				modalLink.href = link;
				modalLink.style.display = '';
			} else {
				modalLink.removeAttribute('href');
				modalLink.style.display = 'none';
			}

			modal.classList.add('is-open');
			modal.setAttribute('aria-hidden', 'false');

			// 锁定背景滚动（你的页面用 wholeContent 滚动）
			if (wholeContent) wholeContent.style.overflow = 'hidden';

			// 可选：把焦点放到关闭按钮上，便于键盘操作
			modal.querySelector('.projModal__close')?.focus();
		});
	}

	// 3) 关闭弹窗（按钮、遮罩、ESC）
	function closeModal(){
		if (!modal) return;
		modal.classList.remove('is-open');
		modal.setAttribute('aria-hidden', 'true');
		if (wholeContent) wholeContent.style.overflow = ''; // 恢复滚动
	}

	modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));

	modal?.addEventListener('click', (e) => {
		if (e.target === modal) closeModal(); // 点击遮罩关闭
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && modal?.classList.contains('is-open')) closeModal();
	});
});