var calci = function(a,b,op){
element(by.model("first")).sendKeys(a);
	
	element.all(by.options("value for (key, value) in operators")).then(function(data){
		data[op].click();
	});
	element(by.model("second")).sendKeys(b);
	element(by.partialButtonText("Go")).click();
}

describe('Calculator Functional Test Scripts', function() {
 
 xit('Printing all result data to console', function() {
   
     browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	calci(2,4,0);
	calci(10,5,2);
	calci(4,2,3);
	calci(50,25,4);
	element.all(by.repeater("result in memory")).then(function(data){
		for(i=0;i<data.length;i++){
			data[i].getText().then(function(text){
				console.log(text);
			});
		}
	});

	browser.sleep(10000); 
	
	});
 it('Printing single row result to console', function() {
	   
     browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	calci(2,4,0);
	calci(10,5,2);
	calci(4,2,3);
	calci(50,25,4);
	element.all(by.repeater("result in memory").row(1)).getText().then(function(data){
				console.log(data);
			
		
	});

	browser.sleep(10000); 
	
	});
 

 });
