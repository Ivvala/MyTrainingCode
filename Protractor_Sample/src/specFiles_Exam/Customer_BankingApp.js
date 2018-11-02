
var data=require(process.cwd()+'/src/Utility/AllData.json');
var home=require(process.cwd()+'/src/pageRepository_Exam/Home.js');
var login = require(process.cwd()+'/src/pageRepository_Exam/Customer_Login.js');
var customerPage = require(process.cwd()+'/src/pageRepository_Exam/CustomerPage.js');

describe('Customer Profile Of Banking App Automation', function() {
 
 it('customer functionalities', function() {
   
    browser.get(data.url);
	browser.sleep(5000);  
	console.log("Browser entered");
	browser.sleep(5000);
	var customer= home.goToCustomer();
	browser.sleep(5000);
	customer.selectCustomer();
   	var custPage=login.goTocustPage();	
   	custPage.selectAccount(1);
   	browser.sleep(5000);
   	custPage.viewCurrency();
   	custPage.depositMoney();
   	browser.sleep(5000);
   	custPage.withdrawMoney();
	browser.sleep(5000);
    custPage.viewTransaction();
	browser.sleep(5000);
	
   
	});


 });
