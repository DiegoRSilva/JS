function convertToNumber() {
 var sNum = "1.23e-2";
 document.writeln("<p>" + parseFloat(sNum) + "</p>");
 document.writeln("<p>" + parseInt(sNum) + "</p>");

 var fValue = parseFloat("1.45 inch");
 document.writeln("<p>" + fValue + "</p>");

 var iValue = parseInt("-33.50");
 document.writeln("<p>" + iValue + "</p>");

}
function convertToString() {
   var newNumber = 34.56;
   var newBoolean = true;
   var nothing;
   var newNull = null;

   var strNumber = String(newNumber); var strBoolean = String(newBoolean);
   var strUndefined = String(nothing); var strNull = String(newNull);

   var strOutput = "<p>" + strNumber + " " + strBoolean + " " + strUndefined + " " + strNull + "</p>";
   document.writeln(strOutput);

   var strOutput2 = String(document);
   document.writeln(strOutput2);

}
