var data=require(process.cwd()+'/src/Utility/AllData.json');
var BankManagerPage = function() {

   var addCust = element(by.partialButtonText(data.addCust));
   var firstName = element(by.model(data.fname));
   var lastName = element(by.model(data.lname));
   var post = element(by.model(data.post));
   var addCust2 = element(by.xpath(data.addCust2));
   var openAcc=element(by.partialButtonText(data.openAcc));
   var names = element.all(by.repeater(data.custNames));
   var currencylist = element(by.model(data.currencyList));
   var process=element(by.buttonText(data.process));
   var customerList=element(by.partialButtonText(data.customerList));
   var cutomersDel=element(by.partialButtonText(data.custDel));
   var deleteCust=element(by.xpath(data.deleteCust));
   var dollar=element(by.options(data.dollar));
   
 	
   
   this.addCustomer = function() {
	   addCust.click();
	   firstName.sendKeys(data.efname);
	   browser.sleep(4000);
	   lastName.sendKeys(data.elname);
	   browser.sleep(5000);
	   post.sendKeys(data.epost);
	   browser.sleep(5000);
	   addCust2.click();
	   browser.sleep(5000);
	   browser.switchTo().alert().accept;
	   browser.sleep(5000);
		return this;
   }
   this.openAccount = function(){ 	
	  openAcc.click();
		element.all(by.repeater(data.custNames)).then(function(data){
	   		data[3].click();
	   	});
		//return this;
   }
   this.selectDropdownByNumber = function() {
	   currencylist.click();
	   browser.sleep(5000);
	    element.all(by.tagName('option'))
	      .then(function(options) {
	        options[1].click();
	      });
	    process.click();
   }
	
	this.deleteCustomer = function(){ 	
		cutomersDel.click();
		browser.sleep(5000);
		deleteCust.click();
	}
		
	this.alertAccept = function(){
		browser.switchTo().alert().accept();
	}
}
   	
 module.exports=new BankManagerPage();
	
	
	
	
	
	
	
	
	

	