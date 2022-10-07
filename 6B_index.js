function
onDeviceReady(){
document.getElementById('vib').addEventListener('click', VibrateFun);
6. Add Function VibrateFun at ending of the file
function VibrateFun(){
navigator.vibrate(5000); // navigator.vibrate(5000) means 5 sec vibration
};