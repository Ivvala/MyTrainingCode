describe('nonAngularjs homepage', function() {
 
 it('should enter the login credentials', function() {
   
	 browser.ignoreSynchronization=true;
     browser.get('https://login.salesforce.com/');
     element(by.id('username')).sendKeys('user@gmail.com');
 
	});


 });
