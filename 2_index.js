function onDeviceReady() {
document.addEventListener("volumeupbutton", upFun, false);
document.addEventListener("volumedownbutton", dwFun, false);
document.addEventListener("backbutton", bkFun, false);
and in the same file add the following code before app.initialize();
function upFun(){
alert("You Press Volume Up Button ");
};
function dwFun(){
alert("You Press Volume Down Button" );
};
function bkFun(e){
e.preventDefault(); // Will not close the App
alert("You Press Back Button");
};