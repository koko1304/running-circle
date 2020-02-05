(function(global, factory) {
	"use strict";

	var mouseX = 0,
		mouseY = 0;
	var circleX = 0,
		circleY = 0;
	var circle = document.querySelector(".circle");

	function changeCirclePosition(a, b) {
		circle.style.left = a + "px";
		circle.style.top = b + "px";
	}

	function circleRunFun() {
		setInterval(function() {
			if (circleX < mouseX) {
				circleX += 1;
			} else if (circleX > mouseX) {
				circleX -= 1;
			}

			if (circleY < mouseY) {
				circleY += 1;
			} else if (circleY > mouseY) {
				circleY -= 1;
			}

			changeCirclePosition(circleX, circleY);
		}, 1);
	}

	document.addEventListener("mousemove", function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});

	circleRunFun();
})(window, document);
