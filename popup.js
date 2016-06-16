var text, div, date, uid, uidRes, localStorage;
var msgList = JSON.parse(localStorage.msgList);
//	var userInf = JSON.parse(localStorage.userInf);
console.log(msgList);

var i = 1;

// https://new.vk.com/dev/messages
var options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};

		var dialogi = function(){
			var i = 1;
		var body = msgList.response[(i)].body;
		var date = new Date((msgList.response[(i)].date)*1000);
		var dateTime = date.getHours() +":" + date.getMinutes() +":" + date.getSeconds()/*.toLocaleString("ru", options)*/;
		var title = msgList.response[(i)].title;
		var uid = msgList.response[(i)].uid;
		var out = msgList.response[(i)].out;
		var read_state = msgList.response[(i)].read_state;
		text = uid + "<br>" + title + "<br>" + body + "<br><br>" + dateTime;
			div = document.createElement('div');
			div.className = "alert";
			div.innerHTML = "<br>" + text ;
			console.log(i + "\t" + text);
			document.body.appendChild(div);
			content.style.background = "cyan";
			if(out) {
				div.style.background = "#bbb";};
			if(read_state){
				div.style.border = "2px solid grey"
			}else{div.style.border = "2px solid orange"}

			i++;
			if (i < 10)
				dialogi();
		};

setTimeout( function() {
	dialogi();
	console.log("ok");
}, 20);