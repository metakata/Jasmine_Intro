/* 3. Expectations

Expectations are built with the function expect which takes a 
value, called the actual. It is chained with a Matcher function, 
which takes the expected value.

Matchers

Each matcher implements a boolean comparison between the actual 
value and the expected value. It is responsible for reporting to 
Jasmine if the expectation is true or false. Jasmine will then pass 
or fail the spec.

Any matcher can evaluate to a negative assertion by chaining the 
call to expect with a not before calling the matcher.
*/
describe("3. The 'toBe' matcher compares with ===", function(){
	it("and has a positive case", function(){
		expect(true).toBe(true);
	});
	
	it("and can have a negative case", function(){
		expect(false).not.toBe(true);
	});
});