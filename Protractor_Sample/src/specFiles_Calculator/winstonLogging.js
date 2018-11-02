var winston = require('winston');
winston.add(new winston.transports.File({
	  filename: './Reports/info.log',
	  handleExceptions: true
	}));

describe('Calculator Functional Test Scripts', function() {
   it('Addition', function() {
     
     browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	browser.sleep(5000);  
	element(by.model("first")).sendKeys(2);
	element(by.model("second")).sendKeys(4);
	element(by.partialButtonText("Go")).click();
	var res=element(by.binding("latest")).getText();
 
	expect(res).toBe('6');
	winston.log('silly','http://www.way2automation.com/angularjs-protractor/calc/');
	winston.log('info','TestScript Executed');
  
	
	});


 });
