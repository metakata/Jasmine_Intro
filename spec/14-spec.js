/* 14. Spies: and.callThrough

By chaining the spy with and.callThrough, the spy will still track 
all calls to it but in addition it will delegate to the actual 
implementation.
*/
describe("14. A spy, when configured to call through", function(){
	var foo, bar, fetchedBar;
 
	beforeEach(function(){
		foo = {
			setBar: function(value){
				bar = value;
			},
			getBar: function(){
				return bar;
			}
		};
		
		spyOn(foo, 'getBar').and.callThrough();
		
		foo.setBar(123);
		fetchedBar = foo.getBar();
	});
	
	it("tracks that the spy was called", function(){
		expect(foo.getBar).toHaveBeenCalled();
	});
	
	it("should not affect other functions", function(){
		expect(bar).toEqual(123);
	});
	
	it("when called returns the requested value", function(){
		expect(fetchedBar).toEqual(123);
	});
});





























