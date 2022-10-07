onDeviceReady: function() {
document.getElementById("btnInfo").addEventListener("click", NetFun);
document.addEventListener("offline", offFun, false);
document.addEventListener("online", onFun, false);


app.initialize();
function NetFun(){
var networkState = navigator.connection.type;
var states = {};
states[Connection.UNKNOWN] = 'Unknown connection';
states[Connection.ETHERNET] = 'Ethernet connection';
states[Connection.WIFI]
 = 'WiFi connection';
states[Connection.CELL_2G] = 'Cell 2G connection';
states[Connection.CELL_3G] = 'Cell 3G connection';
states[Connection.CELL_4G] = 'Cell 4G connection';
states[Connection.NONE]
 = 'No network connection';
alert('Connection type: ' + states[networkState]);
};
function offFun(){
alert('You are now offline!');
};
function onFun(){
alert('You are now online!');
};