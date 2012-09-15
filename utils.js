var utils = {
	mkClosure: function(i, fn) {
		return function(evt) {fn(i, evt);};
	},

	deg2rad: function(deg) {
		return deg*Math.PI/180;
	},

	drawLine: function(x1, y1, x2, y2, paper, color) {
		var line = paper.path("M"+x1+','+y1+'L'+x2+','+y2);
		if(color)	line.attr({stroke: color});
		return line;
	},

	drawArrow: function(x1, y1, x2, y2, paper, color, length, h) {
		var line = paper.set();
		line.push(
			paper.path("M"+x1+','+y1+'L'+x2+','+y2),
			paper.path("M"+x2+','+y2+'L'+(x2+length)+','+(y2-h)),
			paper.path("M"+x2+','+y2+'L'+(x2+length)+','+(y2+h))
		);
		if(color)	line.attr({stroke: color});
		return line;
	},

	drawThickCircle: function(center_x, center_y, inner_radius, thickness, paper, color, background_color, stroke1, stroke2) {
		var circle = paper.set();
		var inner = paper.circle(center_x, center_y, inner_radius+thickness);
		circle.push(inner);
		if(color) inner.attr({fill: color});
		if(stroke1) inner.attr({stroke: stroke1});
		inner = paper.circle(center_x, center_y, inner_radius);
		circle.push(inner);
		if(background_color) inner.attr({fill: background_color});
		if(stroke2) inner.attr({stroke: stroke2});
		return circle;
	},

	extend: function(){
		for(var i=1; i<arguments.length; i++)
			for(var key in arguments[i])
				if(arguments[i].hasOwnProperty(key))
					arguments[0][key] = arguments[i][key];
		return arguments[0];
	}
};
