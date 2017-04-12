var parentDiv = document.getElementById('parentDiv');
var childDivs = parentDiv.getElementsByClassName('childDiv');
for(var i=0; childDivs[i]; i++)
{
	childDivs[i].style.border="1px solid red"
	if(i==2)
	{
		childDivs[i].innerHTML = "<ul><li>I am a dynamic text!</li><li>Eh eh eh ... not just text. HTML markup</li></ul>";
	}
	
}