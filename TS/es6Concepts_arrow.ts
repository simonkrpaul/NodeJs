//Arrow function

function foo(x,y) {
return x + y;
}
// versus
var foo = (x,y) => x + y;

//Variations
var f1 = () => 12;
var f2 = x => x * 2;
var f3 = (x,y) => {
var z = x * 2 + y;
y++;
x *= 3;
return (x + y + z) / 2;
};

//this operator

//old way
var controller = {
	makeRequest: function(..){
		var self = this;
		btn.addEventListener( "click", function(){
			// ..
			self.makeRequest(..);
		}, false );
	}
};

//new way
var controller = {
	makeRequest: function(..){
		btn.addEventListener( "click", () => {
			// ..
			this.makeRequest(..);
		}, false );
	}
};

//Not valid
var controller = {
	makeRequest: () => {
		console.log(this);
		//this.helper();
	},
	helper: () => {
		console.log("Hi!")
	}
};
controller.makeRequest();