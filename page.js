setTimeout( function() {
	console.log("ok");
	console.log(localStorage.x);
}, 50);
// var localStorage;


var _false = function _fals(){ window.setTimeout (function() {
	divs = document.createElement('div');
	divs.innerHTML = '';
var list = document.getElementsByTagName("BODY")[0];
//list.insertBefore(divs, list.children/*[0]*/);
list.insertBefore(divs, list.children[0]);
console.log("false");
console.log(localStorage.x);
}, 5);
};

var _true = function _tru (){window.setTimeout (function() {
	divs = document.createElement('div');
divs.innerHTML = '<div class="myTabi" style="\
    position: fixed;\
    right: 0;\
    height: 100%;\
    background: #333;\
    width: 50px;\
    z-index: 99999;\
    top: 0px;\
"></div>';
var list = document.getElementsByTagName("BODY")[0];
//list.insertBefore(divs, list.children/*[0]*/);
list.insertBefore(divs, list.children[0]);
console.log("true");
console.log(localStorage.x);
}, 5);
};

/*window.setInterval(function(){
if (localStorage.x == 1){
	_true();
}
else {
	_false();
};
}, 100);*/