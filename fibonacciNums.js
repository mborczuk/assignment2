const fibonacciNums = (n) => {
	let a = [0, 1];
	if(n <= 0) {
		a = [];
	}
	if(n == 1) {
		a = [0];
	}
	if(n > 2) {
		counter = 2;
		while(!(counter >= n)) {
			a.push(a[counter-1] + a[counter-2]);
			counter++;
		}
	}
	return a;
};
module.exports = fibonacciNums;
