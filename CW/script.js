var mModule = ( function()
	{
		let a;
		let b;
		let p;
		
		function getval()
		{
			a = parseInt(document.getElementById("A").value, 10);
			b = parseInt(document.getElementById("B").value, 10);
		}
		function mult()
		{
			getval();
			p = document.createElement("div");
			if(isNaN(a) || isNaN(b))
				p.innerHTML = "Error"
			else		
				p.innerHTML = a +" * "+ b +" = " + (a*b);
			document.getElementById("answers").appendChild(p);
		}
		function divide()
		{
			getval();
			p = document.createElement("div");
			if(isNaN(a) || isNaN(b))
				p.innerHTML = "Error"
			else
				p.innerHTML = a +" / "+ b +" = " + (a/b);
			document.getElementById("answers").appendChild(p);
		}
		function plus()
		{
			getval();
			p = document.createElement("div");
			if(isNaN(a) || isNaN(b))
				p.innerHTML = "Error"
			else
				p.innerHTML = a +" + "+ b +" = " + (a+b);
			document.getElementById("answers").appendChild(p);
		}
		function minus()
		{
			getval();
			p = document.createElement("div");
			if(isNaN(a) || isNaN(b))
				p.innerHTML = "Error"
			else
				p.innerHTML = a +" - "+ b +" = " + (a-b);
			document.getElementById("answers").appendChild(p);
		}
		return {
			plus: plus,
			minus: minus,
			mult: mult,
			divide: divide
		};
	}())
		
document.getElementById("plus").addEventListener("click", mModule.plus);
document.getElementById("minus").addEventListener("click", mModule.minus);
document.getElementById("mult").addEventListener("click", mModule.mult);
document.getElementById("divide").addEventListener("click", mModule.divide);