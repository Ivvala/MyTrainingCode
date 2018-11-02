var XLSX=require('xlsx');
describe("data driven testing",function() {
	
	it ("reading cell",function() {
		var workbook = XLSX.readFile('./src/Utility/test.xlsx');
		var sheet = workbook.SheetNames[0];
		var worksheet = workbook.Sheets[sheet];
		var cell = worksheet['A1'];
		var res = cell.v;
		console.log("value of cell b1="+res);
	});
	
	it ("Writing to cell",function() {
		var workbook = XLSX.readFile('./src/Utility/test.xlsx');
		var sheet = workbook.SheetNames[0];
		var worksheet = workbook.Sheets[sheet];
		var cell = worksheet['A1'];
		var res = cell.v;
		console.log("value of cell b1="+res);
		
		worksheet['A1'].v = "Hello Tekarch";
		
	    XLSX.writeFile(workbook,'./src/Utility/test.xlsx');
	});
	
	it ("reading all data",function() {
		var workbook = XLSX.readFile('./src/Utility/test.xlsx');
		var allSheetNames = workbook.SheetNames[1];
		allSheetNames.forEach(function(sheetName) {
			var sheet = workbook.Sheets[sheetName];
			for (cells in sheet) {
				if (cells[0] === '!')
					continue;
				console.log(sheetName + " and " + cells + " data="+ sheet[cells].v);
				
			}
			
			});
		});
});