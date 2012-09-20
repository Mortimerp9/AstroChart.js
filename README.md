AstroChart.js
=============

A javascript tool to draw natal charts, inspired by astrowin's php code

Usage
-----

You can draw a chart by calling `drawNataChart` method:
```javascript
		  drawNatalChart(containerID, radius, params, options);
```

The arguments are as follow:
* containerID, the id of the html container for the chart
* radius, the radius of the wheel
* params, an array of parameters for the chart:
    * `longitude`, an array of object representing the position of the astros, of the form `{planet: 0, angle: 179.33, house: 10}`. The order of the array is not important.
    * `houses`, an array of longitudes for the houses. Houses have to be passed in order and indexed from 1.
    * `south`, if the person was born in the Southern Hemisphere, then the chart is drawn in the other direction
* options are optional settings described bellow.

Check out `index.html` for a basic example. `debug.js`, `debug2.js`, `debug3.js` provide different astros' positions to test configurations.

If now list of house positions is provided, we assume that the time of birth is unknown and we draw a whole sign chart without the moon/MH/Ascendant. The 1st house is taken as being the sun's sign.

Dependencies
------------

AstroChart.js relies on [Raphael.js](raphaeljs.com) for the plotting. You have to include it before calling the `drawNatalChart` method.

AstroChart.js also relies on the Cufon font HanburgSymbols, which is provided with AstroChart.js, Cufon.js is not required as Raphael.js deals with the drawing of the glyphs.

The test in index.js uses jquery and bootstrap, but they are not required for the core features.

Configuration
-------------

You can set these following customization variables when drawing the chart:

* red
* green
* orange
* blue
* outer_color the color of the outer circle
* outer_text_color the color of the text within the outer circle
* outer_text_stroke color of the stroke around the house glyphs, this is useful if you have issue with contrast
* outer_line is the color of the fixed house marker
* inner_color the color of the inner circle
* inner_text_color ...
* inner_text_stroke color of the stroke around the house numbers
* outer_background_color the background color within the outside circle
* inner_background_color the background color within the inner circle
* outer_stroke1 the stroke color on the outside of the outer circle
* outer_stroke2 the stroke color on the inside
* inner_stroke1 ...
* inner_stroke2 ...
* text_color the text color in the inner wheel
* line_color color for the house dividers
* ascendant_color color for the ascendant arrow

Events
------

You can set event callbacks for the hover actions on different pieces of the chart.

* houserHover callback for hovering on the houses glyphs
* planetHover callback for hovering on the planet glyphs
* conjunctionHover callback for hovering on the conjunction lines

Finding Elements
----------------

You can find elements in the chart using either ID selectors (in jquery for instance) or directly calling the `getById()` method on the Raphael's paper returned by the drawing method.

* Houses get an id of the form: `houser-0` where 0 is replaced by the house index. Hover zones for houses get ids of the form `houser-hover-0`.
* Planets get an id of the formç `planet-0` where 0 is replaced by the index of the planet. Hover zones follow the same rule as for houses.
* Aspect lines get an id of the form `conjunction0t1` where 0 and 1 are index of the linked planets.
* By default, glyphs are drawn for each aspects, in the center of the chart, but with an opacity of 0. You can use them for mouse hovers for instance. Their id follow the usual pattern: `aspect-0`.


License
-------

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affedo General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
