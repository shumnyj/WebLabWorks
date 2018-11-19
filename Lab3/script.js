var hintModule = ( function()
		{
			let lib;
			function loadDoc(param) 
			{
				return new Promise(function(resolve, reject)
				{
					let xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
							
							resolve( [param, xhttp.response]);
							//Promise не видає callback більше 1 параметра, callback не бачить контексту батьківського promise
							//R1( param,xhttp.response);
						}
					};					  
					xhttp.open('POST', "hintList.txt", true);
					xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					xhttp.send();
				})
			}
			function writeHint(param) 
			{
				var xhttp = new XMLHttpRequest();
				/*xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
							//something
					}
				};		*/		
				xhttp.open('POST', 'pushHint', true);
				xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhttp.send(param);
			}
			function hintPush()
			{			
				let f = document.getElementById("field1")
				let param = 'hint=' + f.value;
				writeHint(param);
			}
			
			function R1(res)//callback for response
			{
				let lst = document.getElementById('hint')
				let p;				
				console.log(res[1]);
				
				//let hints=[];
				//let i=0;
				let npos=0;
				let	pos=0;	
				while(lst.hasChildNodes())
				{
					lst.removeChild(lst.firstChild)
				}				
				while (npos!=-1 && pos!=-1)
				{
					pos=res[1].indexOf(res[0],npos);
					npos=res[1].indexOf("\n",pos);
					//hints.push(res[1].slice(pos,npos));
					p = document.createElement('li')
					//p.innerHTML = hints[i];
					p.innerHTML = res[1].slice(pos,npos);
					lst.appendChild(p)
					//i++;
				}
				return res;
			}
			
			function hintPop()
			{
				let h = document.getElementById('help')
				let f = document.getElementById("field2").value
				
				h.innerHTML=f							
				if(f!="")
				{
					 loadDoc(f).then(R1)
				}

			}
			return {
			hintPush: hintPush,
			hintPop: hintPop
			};
		}())	