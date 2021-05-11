// import axios from 'axios';
// axios.get('');
// import _ from 'lodash';
//console.log(_.shuffle([1, 2, 3, 4]))
var myApp;
(function (myApp) {
    var hello = 'hello in namespace';
    myApp.name = 'Quill';
})(myApp || (myApp = {}));
var hello = myApp.name;
