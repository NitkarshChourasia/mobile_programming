inside function onDeviceReady() {
document.getElementById("cInfo").addEventListener("click", cFun );
document.getElementById("btnBank").addEventListener("click", bankFun );
then add the following code after function onDeviceReady() { };
function cFun(){
alert("C is a general-purpose, procedural computer programming language supporting structured programming
");
};
function bankFun(){
alert( "\n1. Saving Account."+
"\n2. Regular Savings."+
"\n3. Current Account."+
"\n4. Recurring Deposit Account."+
"\n5. Fixed Deposit Account."+
"\n6. DEMAT Account."+
"\n7. NRI Accounts.");
};