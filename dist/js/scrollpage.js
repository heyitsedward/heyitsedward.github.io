function scrollPage (e) {
	var delta = e.deltaY || e.wheelDelta,
		dir = (delta > 0) ? -90 : 90;
	if (window.addEventListener && !(window.chrome || window.opera)) {
		dir *= -1;
	}
	window.scrollBy(dir, 0);
    e.returnValue = false;
    if (e.preventDefault) {
        e.preventDefault();
    }
	return false;
}
if (window.addEventListener && (!window.chrome && !window.opera)) {
    window.addEventListener('wheel', scrollPage, false); // IE9+, FF
} else if (window.chrome || window.opera) {
    window.addEventListener('mousewheel', scrollPage, false); // Chrome & Opera
} else {
    document.attachEvent('onmousewheel', scrollPage); // IE8-
}
