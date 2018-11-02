var data=require(process.cwd()+'/src/Utility/AllData.json');
var CustomerLoginPage = function() {

   var home = element(by.buttonText(data.home));
   var names = element.all(by.repeater(data.custNames));
   var login = element(by.buttonText(data.custLog));	
   
   this.goToHome = function() {
	   home.click();
	   return require('./Home.js');
   }
   this.selectCustomer = function(){ 	
	   	element.all(by.repeater(data.custNames)).then(function(data){
	   		data[1].click();
	   	});	
	   	return this;
	   }
  
   this.goTocustPage = function() {
	   login.click();
	   return require('./CustomerPage.js');
   }
	   
   }
   	
 module.exports=new CustomerLoginPage();
	
	
	
	
	
	
	
	
	

	