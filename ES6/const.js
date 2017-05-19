{
	const a = 2;
	console.log( a ); // 2
	a = 3; // TypeError!
}

//The value is not frozen, just the assignment is

{
	const a = [1,2,3];
	a.push( 4 );
	console.log( a ); // [1,2,3,4]
	a = 42; // TypeError!
}