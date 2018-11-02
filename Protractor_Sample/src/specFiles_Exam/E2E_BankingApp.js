var data=require(process.cwd()+'/src/Utility/AllData.json');
var home=require(process.cwd()+'/src/pageRepository_Exam/Home.js');
var login = require(process.cwd()+'/src/pageRepository_Exam/Customer_Login.js');
var customerPage = require(process.cwd()+'/src/pageRepository_Exam/CustomerPage.js');
var managerPage = require(process.cwd()+'/src/pageRepository_Exam/BankManagerPage.js');

describe('E2E Automation of Banking Application', function() {
 
 it('E2E functionalities', function() {
   
    browser.get(data.url);
	browser.sleep(5000);  
	console.log("Browser entered");
	browser.sleep(5000);
	var manager=home.goToManager();
	browser.sleep(5000);
	console.log("Manager page Oepned");
	manager.addCustomer();
	manager.alertAccept();
	console.log("New customer added");
	browser.sleep(5000);
	manager.openAccount();
    browser.sleep(5000);
	manager.selectDropdownByNumber();
	browser.sleep(5000);
	console.log("currency: Dollar selected for customer");
	manager.alertAccept();
	manager.deleteCustomer();
	var home1=home.goToHome();
	var customer=home1.goToCustomer();
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
	var custLogin=custPage.logoutUser();
   
	});


 });
