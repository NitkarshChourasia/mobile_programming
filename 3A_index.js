function onDeviceReady() {
window.addEventListener("batterystatus", batStatFun, false);
window.addEventListener("batterylow", batLowFun, false);
window.addEventListener("batterycritical", batBatCr, false);
in the same file add the following code before app.initialize();
function batStatFun(info){
alert("BATTERY STATUS "+
"\n Level is "+info.level+
"\n Is Charger Connected "+info.isPlugged
);
 };
function batLowFun(status){
alert(" Battery Low !!!"+
status.level+" % Remaining"+
"\n Charge your Phone !!!! " ) ;
};
function batBatCr(status){
alert("Critical Condition \n Battery about to die"+
status.level+"% charging Left \n Hurry Up");
};