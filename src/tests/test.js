describe("homework-3-js", function() {	

	describe("splitAndMerge", function() {

		it("adds space between letters of each word", function() {
			assert.equal(splitAndMerge("My name is John"," "), "M y n a m e i s J o h n");
		});

		it("adds specified separator between letters of each word", function() {
	    	assert.equal(splitAndMerge("Hello World!",","), "H,e,l,l,o W,o,r,l,d,!");
		});

	});

	describe("convert", function() {

		it("converts an object into an array", function() {
			assert.deepEqual(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}), [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]);
		});

	});

	describe("toCamelCase", function() {

		it("converts dash delimited words into camel casing. capitalize every word except first", function() {
			assert.equal(toCamelCase("the-stealth-warrior"), "theStealthWarrior");
		});

		it("converts underscore delimited words into camel casing. first word also capitalized, cause original word was", function() {
			assert.equal(toCamelCase("The_Stealth_Warrior"), "TheStealthWarrior");
		});
	});

	describe("reverseWords", function() {

		it("takes a sentence (string) and reverses each word in it", function() {
			assert.equal(reverseWords("A fun little challenge!"), "A nuf elttil !egnellahc");
		});
	});

	describe("stringExpansion", function() {

		it("empty strings should return an empty string.", function() {
			assert.equal(stringExpansion(""), "");
		});

		it("the first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.", function() {
			assert.equal(stringExpansion("3D2a5d2f"), "DDDaadddddff");
		});

		it("if there are two consecutive numeric characters the first one is ignored.", function() {
			assert.equal(stringExpansion("3d332f2a"), "dddffaa");
		});

		it("if there are two consecutive alphabetic characters then the first character has no effect on the one after it.", function() {
			assert.equal(stringExpansion("abcde"), "abcde");
		});
	});
});
