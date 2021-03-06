const html = document.documentElement
var isShowQrCode = false


document.addEventListener("scroll", (e) => {
	const html = document.documentElement
	const span_i = document.querySelectorAll('span i');
	const mark = document.querySelectorAll('mark');
	const video = document.getElementById('brainGamePic');
	const area2 = document.querySelectorAll(".secondText");
	const area3 = document.querySelectorAll(".thirdText");
	const area4 = document.querySelectorAll(".forthText");

	// scrolled 数值是从0～420的数字，总共包含420vh的高度，其中有4个100vh高度的元素和1个20vh高度的底边   
	var vh = html.scrollHeight / 420
	var scrolled = (html.scrollTop + html.clientHeight) / vh

	if (scrolled < 200) {
		if (scrolled <= 110) {
			hideQrCode()
		} else {
			if (scrolled <= 190) {
				video.style.setProperty("--progress", (scrolled - 110) / 80)
				for (var i = 0; i < area2.length; i++) {
					area2[i].style.setProperty("--progress", (scrolled - 110) / 80)
				}
			}
		}

		if (scrolled >= 160) {
			for (var i = 0; i < 2; i++) {
				document.getElementsByClassName("brainGameItem")[i].style.color = "#FF7818"
				document.getElementsByClassName("newKnowledgeItem")[i].style.color = "white"
				document.getElementsByClassName("logItem")[i].style.color = "white"
			}
		} else {
			for (var i = 0; i < 2; i++) {
				document.getElementsByClassName("brainGameItem")[i].style.color = "white"
			}
		}

		// 第一个100vh元素
		for (var i = 0; i < span_i.length; i++) {
			span_i[i].style.setProperty("--progress", (scrolled - 100) / 100)
		}
		for (var i = 0; i < mark.length; i++) {
			if (i == 2 || i == 3 || i == 4) {
				continue
			} else {
				mark[i].style.setProperty("--progress", (scrolled - 90) / 100)
			}
		}
		document.getElementById("introPic").style.setProperty("--progress", (scrolled - 100) / 100)
		document.getElementById("clubActivityPic").style.setProperty("--progress", (scrolled - 200) / 100)
		document.getElementById("clubActivityShow").style.setProperty("--progress", (scrolled - 200) / 100)
	} else if (scrolled >= 200 && scrolled < 300) {
		// 第二个100vh元素
		for (var i = 0; i < area3.length; i++) {
			area3[i].style.setProperty("--progress", (scrolled - 200) / 100)
		}
		if (scrolled <= 270) {
			for (var i = 0; i < 2; i++) {
				document.getElementsByClassName("newKnowledgeCard")[i].style.setProperty("--progress", (scrolled - 170) / 100)
			}
		}
		if (scrolled >= 260) {
			for (var i = 0; i < 2; i++) {
				document.getElementsByClassName("brainGameItem")[i].style.color = "white"
				document.getElementsByClassName("newKnowledgeItem")[i].style.color = "#FF7818"
				document.getElementsByClassName("logItem")[i].style.color = "white"
			}
		} else {
			for (var i = 0; i < 2; i++) {
				document.getElementsByClassName("newKnowledgeItem")[i].style.color = "white"
			}
		}

	} else if (scrolled >= 300 && scrolled < 400) {
		hideQrCode()
		document.getElementById("logArticles").style.setProperty("--progress", (scrolled - 300) / 100)
		// 第三个100vh元素
		if (scrolled >= 320 && scrolled <= 380) {
			for (var i = 0; i < area4.length; i++) {
				area4[i].style.setProperty("--progress", (scrolled - 320) / 60)
			}
		}

		for (var i = 0; i < mark.length; i++) {
			if (i == 0 || i == 1 || i == 2) {
				continue
			} else {
				mark[i].style.setProperty("--progress", (scrolled - 300) / 100)
			}
		}
		if (scrolled >= 360) {
			for (var i = 0; i < 2; i++) {
				document.getElementsByClassName("brainGameItem")[i].style.color = "white"
				document.getElementsByClassName("newKnowledgeItem")[i].style.color = "white"
				document.getElementsByClassName("logItem")[i].style.color = "#FF7818"
			}
		} else {
			for (var i = 0; i < 2; i++) {
				document.getElementsByClassName("logItem")[i].style.color = "white"
			}
		}

	} else if (scrolled >= 410) {
		// 第四个100vh元素
		for (var i = 0; i < 2; i++) {
			document.getElementsByClassName("brainGameItem")[i].style.color = "white"
			document.getElementsByClassName("newKnowledgeItem")[i].style.color = "white"
			document.getElementsByClassName("logItem")[i].style.color = "white"
		}
	}

})


function startBrainGame() {
	document.getElementById("brainGamePic").style.left = "100vw";
	document.getElementById("gameIntro").style.left = "-100vw";
	document.getElementById("qrCodeBox").style.opacity = "1";
	isShowQrCode = true
}

function hideQrCode() {
	if (isShowQrCode) {
		document.getElementById("brainGamePic").style.left = "calc(80vw * ((1 - var(--progress))))";
		document.getElementById("gameIntro").style.left = "5vw";
		document.getElementById("qrCodeBox").style.opacity = "0";
		isShowQrCode = false
	}
}


function directToFirstArticle() {
	window.open(
		"https://mp.weixin.qq.com/s?__biz=Mzg3MzExOTE0NA==&mid=2247484979&idx=1&sn=d75491ed41e2af95422f5274bc6eddf5&chksm=cee5aaf4f99223e26ca4d1fffb3221d23e2286c0c784c498b47d313f633edebfc40019de848d&scene=178&cur_album_id=1340019331715088384#rd"
	);
}


function directToThirdArticle() {
	window.open(
		"https://mp.weixin.qq.com/s?__biz=Mzg3MzExOTE0NA==&mid=2247484226&idx=1&sn=09958592101e51232d0789342ceeb185&chksm=cee5af85f99226937b722966c77bd91967cc695b9aae0d2e82c1f9715a113a0fb06b5065489f&scene=178&cur_album_id=1340019331715088384#rd"
	);
}

function miniprogramLog() {
	window.open(
		"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg3MzExOTE0NA==&action=getalbum&album_id=1586402538164191232&scene=173&from_msgid=2247485125&from_itemidx=1&count=3#wechat_redirect"
	);
}

function htmlLog() {
	window.open(
		"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg3MzExOTE0NA==&action=getalbum&album_id=1773365432213700612&scene=173&from_msgid=2247485399&from_itemidx=1&count=3#wechat_redirect"
	);
}


function brainGameBtn() {
	$("body,html").animate({
		scrollTop: $(secondScene).offset().top
	}, 1000);

	document.getElementById("introPic").style.setProperty("--progress", 1)
	hideQrCode()
}

function newKnowledgeBtn() {
	$("body,html").animate({
		scrollTop: $(thirdIndex).offset().top
	}, 1000);
}

function logBtn() {
	$("body,html").animate({
		scrollTop: $(forthScene).offset().top * 0.98
	}, 1000);
}


function gotoGithub() {
	window.open(
		"https://github.com/stevenguyukai/P.R.O."
	);
}

function showAlert() {
	// window.open(
	// 	"https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg3MzExOTE0NA==&subscene=0#wechat_redirect"
	// );
	document.getElementById("alertBox").style.zIndex = 5
	document.getElementById("alertBox").style.opacity = 1
}

function hideAlert() {
	document.getElementById("alertBox").style.zIndex = -5
	document.getElementById("alertBox").style.opacity = 0
}

function extend(){
	document.getElementById("extentButtonPic1").style.opacity = 0
	document.getElementById("extentButtonPic1").style.zIndex = 2
	
	document.getElementById("extentButtonPic2").style.opacity = 1
	document.getElementById("extentButtonPic2").style.zIndex = 3
	
	document.getElementById("extentBox").style.right = "0vw"
}

function closeExtend(){
	document.getElementById("extentButtonPic1").style.opacity = 1
	document.getElementById("extentButtonPic1").style.zIndex = 3
	
	document.getElementById("extentButtonPic2").style.opacity = 0
	document.getElementById("extentButtonPic2").style.zIndex = 2
	
	document.getElementById("extentBox").style.right = "-60vw"
}