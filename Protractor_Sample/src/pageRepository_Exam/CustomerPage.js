var data=require(process.cwd()+'/src/Utility/AllData.json');
var customerPage = function() {

   var home = element(by.buttonText(data.home));
   var account = element.all(by.options(data.acc));
   var currency = element(by.xpath(data.currency));
   var deposit1 = element(by.xpath(data.deposit1));
   var amountDep = element(by.model(data.amountDep));
   var deposit2 =  element(by.buttonText(data.deposit2));
   var withdraw1 = element(by.xpath(data.withdraw1));
   var amountWith = element(by.xpath(data.amountWith));
   var withdraw2 =  element(by.buttonText(data.withdraw2));
   var transaction = element(by.xpath(data.trans));
   var selectDate = element(by.partialLinkText(data.dateData));
   var tableData = element.all(by.repeater(data.table));
   var reset = element(by.buttonText(data.reset));
   var logout = element(by.buttonText(data.logout));
   
   this.goToHome = function() {
	   home.click();
	   return require('./Home.js');
   }
   this.selectAccount = function(op) {
	   account.then(function(text) {
		   text[op].click();   
	   });
	   return this;
	   }
   this.viewCurrency = function() {
	   currency.getText();
	   //console.log(text);   
	   return this
   }
   this.depositMoney = function() {
	   deposit1.click();
	   amountDep.sendKeys(data.depoEnter);
	   deposit2.click();
	   return this;
   }
   this.withdrawMoney = function() {
	   withdraw1.click();
	   amountWith.sendKeys(data.withEnter);
	   withdraw2.click().getText();
	  // console.log();
	   return this;
   }
   this.viewTransaction = function() {
	   transaction.click();
	   selectDate.click();
	  /* tableData.then(function(data1){
			for(i=0;i<data1.length;i++){
				data1[i].getText().then(function(text){
					console.log(text);
				});
			}
		});
	 reset.click();*/
	    return this;
   }
   this.logoutUser = function() {
	   logout.click();
	   return require('./Customer_Login.js');
   }
	
	this.alertAccept = function(){
		browser.switchTo().alert().accept();
	}
   
}
 
 module.exports=new customerPage();
	


	