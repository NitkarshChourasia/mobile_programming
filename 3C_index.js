onDeviceReady: function() {
document.getElementById("takePic").addEventListener
("click", camFun);
then add the following code before
 app.initialize();
function camFun() {
navigator.camera.getPicture( onSuccess, onFail, {
quality: 50,
destinationType: Camera.DestinationType.DATA_URL
}
 );
function onSuccess(imageData) {
var image = document.getElementById('myPhoto');
image.src = "data:image/jpeg;base64," + imageData;
}
function onFail(message) {
alert('Failed because: ' + message);
}
};