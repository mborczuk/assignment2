const getFrequencies = (nums) => {
	let dict = {};
	for(i = 0; i < nums.length; i++) {
		if(!(nums[i] in dict)) {
			dict[nums[i]] = 1;
		}
		else {
			dict[nums[i]]++;
		}
		
	}
	for(var key in dict) {
		let value = dict[key];
		console.log(key + ": " + value);
	}
};

module.exports = getFrequencies;