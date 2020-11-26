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
	return dict;
};

module.exports = getFrequencies;
