var slideIndex = 1;
showImgs(slideIndex);

function plusImgs(n) {
	plusImgs(slideIndex += n);
}

function showImgs(n) {
	var i;
	var x = document.getElementsByClassName("moonphase");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}
