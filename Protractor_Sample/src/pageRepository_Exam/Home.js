var data=require(process.cwd()+'/src/Utility/AllData.json');
var homePage = function() {

   var home = element(by.buttonText(data.home));
   var customer = element(by.buttonText(data.cust));
   var manager = element(by.buttonText(data.mng));
   
   this.goToHome = function() {
	   home.click();
	   return require('./Home.js');
   }
   this.goToCustomer = function() {
	   customer.click();
	   return require('./Customer_Login.js');
   }
   this.goToManager = function() {
	   manager.click();
	   return require('./BankManagerPage.js');
   }
}
	
 module.exports=new homePage();
		

	