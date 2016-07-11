// http://ecademy.agnesscott.edu/~lriddle/ifs/kcurve/kcurve.htm

function generate(iterations) {
    var text = "F--F--F--"
    for (var i = 0; i < iterations; i++) {
	text = text.replace(/F/g, "F+F--F+F");
    }
    return text;
}


function draw(iterations) {
    var canvas_element = document.getElementById("draw-on-me");
    var ctx = canvas_element.getContext('2d');

    text = generate(iterations);

    ctx.translate(500, 0);
    ctx.scale(5 * (iterations / 2) , 5 * (iterations / 2));
    
    ctx.lineWidth = 0.3 / iterations;
    
    for(var i = 0; i < text.length; i++) {
	switch(text[i]) {
	case 'F':
	    ctx.beginPath();
	    ctx.moveTo(0, 0);
	    ctx.lineTo(0, 1);
	    ctx.stroke();
	    ctx.translate(0, 1);
	    break;
	case '+':
	    ctx.rotate(Math.PI / 3);
	    break;
	case '-':
	    ctx.rotate(-Math.PI / 3);
	    break;
	}
    }
}
