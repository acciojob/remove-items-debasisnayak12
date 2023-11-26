//your JS code here. If required.
const colorSelect = document.querySelector("#colorSelect");
const removeBtn = document.querySelector("input[type='button']");

removeBtn.addEventListener(('click'), () => {
	const options = colorSelect.selectedIndex;
	if(options != -1){
		colorSelect.remove(options);
	}
});
