let list = document.getElementById("infi-list")
//let fragment = document.createDocumentfragment()
let c = 0;

for(let i=0; i<=10; i++){
	let item = document.createElement("li")
	item.textContent = "Item " + c
	list.appendChild(item)
	//fragment.appendChild(item)
	c+=1
}
//list.appendChild(fragment)

list.addEventListener("scroll", () => {
	if(list.scrollTop + list.clientHeight >= list.scrollHeight-1){
	    let item = document.createElement("li")
	    item.textContent = "Item " + c;
	    list.appendChild(item)
		c++
	}
})