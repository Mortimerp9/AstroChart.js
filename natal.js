var radius = 260;
var outer2_radius=300;
var outer2_thick = 40;
var inner_radius = 150;
var inner_thick = 20;

var red = "red";
var green = "green";
var orange = "organge";
var blue="blue";

var size = 2*(outer2_radius+outer2_thick);
var center_x = size/2;
var center_y = size/2;

var paper = Raphael("chart", size,size);

var hamburg = paper.getFont("HamburgSymbols");

drawThickCircle(center_x, center_y, outer2_radius, outer2_thick, paper, "yellow");

drawThickCircle(center_x, center_y, inner_radius,inner_thick, paper, "green");

var x1 = center_x-inner_radius-inner_thick;
var x2 = outer2_thick;

drawLine(x1, center_y, x2, center_y, paper, red);

//houses
var i;
var last_angle = 360;
var sign_pos = Math.floor(hc[1]/30)+1;
paper.print(center_x-outer2_radius-30,center_y, sign_glyph[sign_pos], hamburg);
for(i=2; i<=12;i++) {
	var angle = (Ascendant-hc[i]);
	var sign_pos = Math.floor(hc[i]/30)+1;
	if(angle < 0) angle = angle+360;
	var midAngle;
	if(i==2) {
		midAngle = last_angle+(360+angle)/2;
		paper.text(center_x-inner_radius-10,center_y, 1)
			.attr({stroke: "white"})
			.transform("r"+midAngle+","+center_x+","+center_y+"r-"+(midAngle));
	}
	midAngle = angle+(angle-last_angle)/2;
	drawLine(x1,center_y,x2,center_y, paper, "grey").transform("r"+angle+","+center_x+","+center_y);
	console.log(i,midAngle, last_angle);
	last_angle=angle;
	paper.text(center_x-inner_radius-10,center_y, i)
		.attr({stroke: "white"})
		.transform("r"+midAngle+","+center_x+","+center_y+"r-"+(midAngle));
	paper.print(center_x-outer2_radius-30,center_y, sign_glyph[sign_pos], hamburg).transform("r"+angle+","+center_x+","+center_y+"r-"+(angle));
}

//MC

var angle = Ascendant-hc[10];
var distMC = angle;
if(distMC < 0) distMC = angle+360;
