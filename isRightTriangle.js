const isRightTriangle = (a, b, c) => {
	var hypotenuse = 0;
	var leg0 = 0;
	var leg1 = 0;
	if(c > a && c > b) {
		hypotenuse = c;
		leg0 = a;
		leg1 = b;
	} else if (b > a && b > c) {
		hypotenuse = b;
		leg0 = a;
		leg1 = c;
	} else {
		hypotenuse = a;
		leg0 = b;
		leg1 = c;
	}
	if((Math.pow(leg0, 2) + Math.pow(leg1, 2)) === Math.pow(hypotenuse, 2)) {
		return true;
	} 
	return false;
};
module.exports = isRightTriangle;