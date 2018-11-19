var toDo = ( function()
	{
		let p;
		let el;
		let lst = document.getElementById("container");
		function removeEntry()
		{
			p = this.parentElement;
			lst.removeChild(p);
		}
		function createEntry()
		{
			p=document.createElement("div");		
			p.id="ent"+ (lst.childElementCount-3)+"box";
			el = document.createElement("input");
			el.type="checkbox";
			p.appendChild(el);
			el = document.createElement("div");
			el.innerHTML = document.getElementById("newe").value;
			p.appendChild(el);
			el = document.createElement("button");
			el.id="ent"+ (lst.childElementCount-3);
			el.innerHTML = "Remove"
			el.addEventListener("click", removeEntry)
			p.appendChild(el);
			p.class = "entry";
			lst.insertBefore(p, document.getElementById("newe"));
		}
		return {
			createEntry: createEntry
		};
	}())
document.getElementById("addBtn").addEventListener("click", toDo.createEntry);