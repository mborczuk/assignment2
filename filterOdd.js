const filterOdd = (nums) => {
	const result = nums.filter(number => (number % 2) == 1);
	return result;
};
module.exports = filterOdd;