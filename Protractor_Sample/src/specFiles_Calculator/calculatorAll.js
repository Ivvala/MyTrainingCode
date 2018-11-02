describe('Calculator Functional Test Scripts', function() {
   beforeEach(function(){
	   browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
   });
   afterEach(function(){
	   console.log("Test Executed")
   });
 it('Addition', function() {
	 
	element(by.model("first")).sendKeys(2);
	
	element.all(by.options("value for (key, value) in operators")).then(function(data){
		data[0].click();
	});
	element(by.model("second")).sendKeys(4);
	element(by.partialButtonText("Go")).click();
	var res=element(by.binding("latest")).getText();
 
	expect(res).toBe('6');
  
	
	});
 it('subtraction', function() {
	   
	element(by.model("first")).sendKeys(10);
	element.all(by.options("value for (key, value) in operators")).then(function(data){
		data[4].click();
	});

	element(by.model("second")).sendKeys(5);
	
	element(by.partialButtonText("Go")).click();
	var res=element(by.binding("latest")).getText();
 
	expect(res).toBe('5');
  
	
	});
 it('Multiplication', function() {
	     
	element(by.model("first")).sendKeys(4);
	element.all(by.options("value for (key, value) in operators")).then(function(data){
		data[3].click();
	});

	element(by.model("second")).sendKeys(4);
	element(by.partialButtonText("Go")).click();
	var res=element(by.binding("latest")).getText();
 
	expect(res).toBe('16');
  
	
	});

 });
