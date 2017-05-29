//A combined example
interface Person{
	name: string;
	age: number;
}
class MyClass {
	
	name: string;
	sayHello(){
		console.log("Hello "+name);
	}
}
function sortByName(a: Person[]){
	var result = a.slice(0);
	result.sort((x,y)=>{
		return x.name.localeCompare(y.name);
	});
	return result;
}
var names = sortByName([{name:'Akash', age: 33}, {name:'Akshay', age: 22}, {name:'Melvin', age: 26}]);