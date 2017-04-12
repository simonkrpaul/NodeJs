var infoForm = document.getElementById('infoForm');
var leftPos = 0;
completeForm();
infoForm.addEventListener('submit',function(e){
	e.preventDefault();
	var puzzleList = mainConfig.puzzles;
	var puzzleListHTML = '';
	var i = 0;
	for(i=0; puzzleList[i]; i++)
	{
		puzzleListHTML += '<li><h2>'+puzzleList[i]['title']+'</h2><img src="img/riddles/'+puzzleList[i].mainImage+'.jpg"/><div class="selectBtn"><input type="button" class="primary" value="Select" class="selectPuzzle" onclick="selectPuzzle('+i+')"/></div></li>'
	}
	var uname = document.querySelector('input[name="uname"]').value;
	var puzzleList = document.getElementsByClassName('puzzleList')[0];
	puzzleList.style.width = i*800+'px';
	puzzleList.innerHTML = puzzleListHTML;
	document.getElementById('infoForm').className="noDisplay";
	document.getElementById('mainPuzzle').className="";
	document.getElementById('mainPuzzle').getElementsByTagName('h2')[0].innerHTML = "Great "+uname+"! Select a puzzle you'd like to solve:"
	//return false;
})
function selectPuzzle(i){
	var puzzleHTML = "<div class='puzzle' style='background-image:url(img/riddles/"+mainConfig.puzzles[i].mainImage+".jpg)'><div><h2>"+mainConfig.puzzles[i]['title']+"</h2><p>"+mainConfig.puzzles[i]['description']+"</p><p><answers></p></div></div>";
	var options = "<ul>";
	for(var j=0; mainConfig.puzzles[i]['options'][j]; j++)
	{
		options += '<li><input type="radio" name="puzzleAnswer" value=j onclick="checkAnswer('+i+','+j+')"/> '+mainConfig.puzzles[i]['options'][j]+'</li>';
	}
	options+='</ul>';
	puzzleHTML = puzzleHTML.replace("<answers>", options);
	var puzzleContainer = document.getElementById('puzzleContainer');
	puzzleContainer.className="";
	puzzleContainer.innerHTML=puzzleHTML;
	document.getElementById('mainPuzzle').className="noDisplay";
}
function checkAnswer(i,j){
	if(mainConfig.puzzles[i].answer == j)
		displayVerdict("Well, let's just say - you are a genius!");
	else
		displayVerdict("Uh oh! Too confident, are we?");
}
function displayVerdict(msg){
	var overlayContainer = document.getElementsByClassName('overlay');
	var closeBtn = '<div class="closeOverlay" onclick="hideOverlay()">X</div>'
	document.getElementById('overlayMsg').innerHTML = closeBtn + msg;
	overlayContainer[0].className = (overlayContainer[0].className).split(" ")[0];
}
function hideOverlay(){
	var overlayContainer = document.getElementsByClassName('overlay')[0];
	overlayContainer.className = overlayContainer.className+ " noDisplay";	
}
function slide(dir){
	var puzzleList = document.getElementsByClassName('puzzleList')[0];
	var wd = puzzleList.style.width;
	wd = parseInt(wd.substr(0, wd.length-2));
	leftPos = (wd>(-1*(leftPos-800)) && dir>0) || (leftPos>0 && dir<0)?leftPos+800*-1*dir:0;
	puzzleList.style.left = leftPos+'px'
}
function matchPattern(field){
	var el = document.querySelector('input[name='+field+']');
	switch(field){
		case 'uname':
		var digitPattern = /\d/g;
		var digit = digitPattern.test(el.value);
		console.log(el.value);
		if(!digit && el.value.length>2)
		{
			el.style.borderColor = '#ccc';
			var errDiv = el.parentNode.getElementsByTagName('div')[0];
			errDiv.innerHTML = "Valid value :)";
			errDiv.className = 'success';
			return true
		}
		else
		{
			el.style.borderColor = 'red';
			var errDiv = el.parentNode.getElementsByTagName('div')[0];
			errDiv.innerHTML = "Value required. Value should not contain a digit" 
			errDiv.className = 'error'
		}
		break;
		case 'email':
		var emailPattern = /[A-Z0-9._]+@[A-Z0-9]+.[A-Z]{2}/igm;//https://www.sitepoint.com/javascript-validate-email-address-regex/
		var email = emailPattern.test(el.value);
		
		break;
	}
}
function completeForm(){
	var inputs = document.getElementsByTagName('input');
	console.log(inputs)
	for(var i=0; inputs[i]; i++)
	{
		if(inputs[i].hasAttribute('required'))
			{
				var divErr = document.createElement('div');
				var mandatoryStar = document.createTextNode('*')
				inputs[i].parentNode.appendChild(mandatoryStar);
				inputs[i].parentNode.appendChild(divErr);
			};
	}
}
// function showPuzzleList(){
// 	var puzzleList = mainConfig.puzzles;
// 	for(var i=0; puzzleList[i]; i++)
// 	{
// 		puzzleListHTML += '<li><img src="../img/'+puzzleList[i].mainImage+'.jpg"/><h2>'+puzzleList[i]['title']+'</h2></li>'
// 	}
// 	document.getElementById('mainPuzzle').innerHTML = puzzleListHTML;
// 	document.getElementById('infoForm').className="noDisplay";
// 	document.getElementById('mainPuzzle').className="";
// 	return false;
// }