
let i = 0;
let text1 = "အချစ်​ရေ...";
let text2 = "တစ်သက်လုံးအတူတူရှိကြမယ်​နော်"
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	  }, function(err) {
		console.log('ServiceWorker registration failed: ', err);
	  });
	});
  }
  