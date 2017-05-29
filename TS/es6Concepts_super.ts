//super is applied on prototype properties
class Base {
	log() { console.log('hello world'); }
}
class Child extends Base {
	log() { super.log() };
}
//It cannot be used on member properties. Throws an error
module quz {
	class Base {
		log = () => { console.log('hello world'); }
	}
	class Child extends Base {
		logWorld() { super.log() };
	}
}
//in case of member function, use this
class Base01 {
log = () => { console.log('hello world'); }
}
class Child01 extends Base01 {
logWorld() { this.log() };
}