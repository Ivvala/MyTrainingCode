describe('Calculator Functional Test Scripts', function() {
 
 it('Addition', function() {
   
     browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	browser.sleep(5000);  
	element(by.model("first")).sendKeys(2);
	element(by.model("second")).sendKeys(4);
	element(by.partialButtonText("Go")).click();
	var res=element(by.binding("latest")).getText();
 
	expect(res).toBe('6');
  
	
	});


 });
