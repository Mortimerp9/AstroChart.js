function deg2rad(deg) {
	return deg*Math.PI/180;
}

function drawLine(x1, y1, x2, y2, paper, color) {
	var line = paper.path("M"+x1+','+y1+'L'+x2+','+y1);
	if(color)	line.attr({stroke: color});
	return line;
}

function drawThickCircle(center_x, center_y, inner_radius, thickness, paper, color) {
	var circle = paper.circle(center_x, center_y, inner_radius+thickness);
	if(color) circle.attr({fill: color});
	circle = paper.circle(center_x, center_y, inner_radius);
	circle.attr({fill: "white"});
	return circle;
}
