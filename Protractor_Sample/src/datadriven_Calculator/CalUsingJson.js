var data=require("../../data.json");

describe('Calculator Functional Test Scripts', function() {
 
 it('Addition', function() {
   
     browser.get(data.url);
	browser.sleep(5000);  
	element(by.model("first")).sendKeys(data.Avalue);
	element(by.model("second")).sendKeys(data.Bvalue);
	element(by.partialButtonText("Go")).click();
	var res=element(by.binding("latest")).getText().then(function(text){
		console.log(text);
	});
	
	});


 });
