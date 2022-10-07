 function
onDeviceReady(){
document.getElementById('save').addEventListener('click', getContact);
document.getElementById('find').addEventListener('click', findContact);
document.getElementById('delete').addEventListener('click',deleteCon);

function getContact(){
var myContact = navigator.contacts.create({"displayName": "Cordova Contact"});
var phoneNumbers = [];
phoneNumbers[0] = new ContactField('work', '8840926059', false);
phoneNumbers[1] = new ContactField('mobile', '7304121104', true); // preferred number
myContact.phoneNumbers = phoneNumbers;
myContact.save(onSuccess,onError);
};
function onSuccess(myContact) {
alert("Save Success");
};
function onError(myContactError) {
alert("Error = " + myContactError.code);
};
function findContact(){
var options = new ContactFindOptions();
options.filter = "Cordova Contact";
options.multiple = true;
options.desiredFields = [navigator.contacts.fieldType.id];
options.hasPhoneNumber = true;
var fields
 = [navigator.contacts.fieldType.displayName,
navigator.contacts.fieldType.name];
navigator.contacts.find(fields, onfind, onError, options);
};
function onfind(contacts) {
alert('Found ' + contacts.length + ' contacts.');
};
function deleteCon() {
var options = new ContactFindOptions();
options.filter = "Cordova Contact";
options.multiple = false;
fields = ["displayName"];
navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
function contactfindSuccess(contacts) {
var contact = contacts[0];
contact.remove(contactRemoveSuccess, contactRemoveError);
function contactRemoveSuccess(contact) {
alert("Contact Deleted");
};
function contactRemoveError(message) {
alert('Failed because: ' + message);
};
};
function contactfindError(message) {
alert('Failed because: ' + message);
};
};