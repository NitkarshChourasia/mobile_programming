onDeviceReady: function() {
document.getElementById("dialogAlert").addEventListener("click", AlertFun);
document.getElementById("dialogConfirm").addEventListener("click", ConfirmFun);
document.getElementById("dialogPrompt").addEventListener("click", PromptFun);
document.getElementById("dialogBeep").addEventListener("click", BeepFun);

app.initialize();
function AlertFun() {
var message = "Dont use phone while on Charging !!";
var title = "ALERT";
var buttonName = "Alert Button";
navigator.notification.alert(message, alertCallback, title, buttonName);
function alertCallback() { alert("Alert is Dismissed!"); }
};
function ConfirmFun() {
var message = "Do You Really wnat to Exittt?";
var title = "CONFIRM";
var buttonLabels = "YES,NO";
navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
function confirmCallback(buttonIndex) { alert("Ok Bye.... "); }
};
function PromptFun() {
var message = "Enter Your Name?";
var title = "PROMPT";
var buttonLabels = ["YES","NO"];
var defaultText = "ABCD"
navigator.notification.prompt(message, promptCallback,
title, buttonLabels, defaultText);
function promptCallback(result) {
 alert("Your Input is : " + result.input1);
}
};
function BeepFun() { navigator.notification.beep(5); //beep(times) times is number of beeps
};