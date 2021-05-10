
function removeTags(str) {
	if ((str===null) || (str===''))
		return false;
	else
		str = str.toString();
		

	return str.replace( /(<([^>]+)>)/ig, '');
}
document.write(removeTags(
	'<p><em><strong>Skillsanta assignments</strong></em></p>'));;
				
