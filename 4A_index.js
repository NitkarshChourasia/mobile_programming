onDeviceReady: function() {
document.getElementById("btnDiv").addEventListener("click", divFun);
and before app.initialize();
function divFun(){
alert("Android version : " + device.version + "\n" +
"Device model : " + device.model + "\n" +
"Device platform : " + device.platform + "\n" +
"Device UUID : " + device.uuid + "\n" +
"Cordova version : " + device.cordova + "\n" +
"Device Manufacturer: " + device.manufacturer+ "\n" +
"Is Device Virtual : " + device.isVirtual + "\n" +
"Device Serial No. : " + device.serial);
};