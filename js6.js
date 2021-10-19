function getPrice(kol, type) 
{
	let result = document.getElementById("result");
	if (kol != 0) {
		result.innerHTML = type * kol + " рублей";
	} else {
		result.innerHTML = "введите корректные данные";
	}
}

function getPriceOptions(kol, type, option) {
	let result = document.getElementById("result");
	if (kol == 0) {
		result.innerHTML = "введите корректные данные";
	} else {
		switch (option) {
			case "1":
				result.innerHTML = ((type + 13500) * kol) + " рублей";
				break;
			case "2":
				result.innerHTML = ((type + 16700) * kol) + " рублей";
				break;
			case "3":
				result.innerHTML = ((type + 25000) * kol) + " рублей";
				break;
		}
	}
}

window.addEventListener('DOMContentLoaded', function(event) {
	console.log("DOM fully loaded and parsed");
  	let radioListener = "";
	let kol = 0;
	let typeAll = [1546000, 0, 78900];
	let type = typeAll[0];
  	let f1 = true, f2=true, f3=true;
	let result = document.getElementById("result");
	result.innerHTML = "введите данные";

	let re = /^\d+$/;

	let kolHTML = document.getElementById("kol");
	kolHTML.addEventListener("change", function(event) 
  	{
		if (re.test(event.target.value)) 
    	{
			kol = parseInt(event.target.value);
            if(f1 && f2) 
			{
		        getPrice(kol, type);
            } 
			else if(!f1) 
			{
              	getPriceOptions(kol, type, radioListener);
              	f1 = true;
            } 
            else if(!f2 && !f3)
            {
                result.innerHTML = (type - 60995) * kol;
                f2 = true;
		        f3 = true;
            } 
            else if(f3)
            {
		        getPrice(kol, type);
		    }

            let k = document.getElementsByName("type");
	        k[0].addEventListener("change", function(event) 
          	{
		        let select = event.target;
		        let radios = document.getElementById("options");
		        let checkbox = document.getElementById("property");
		      	if (select.value == "TV") 
          	{
			    radios.style.display = "none";
			    checkbox.style.display = "none";
			    type = typeAll[0];
			    getPrice(kol, type);
		    } 
          	else if (select.value == "telephone") 
          	{
			    radios.style.display = "none";
			    checkbox.style.display = "block";
			    type = typeAll[2];
			    getPrice(kol, type);
		    } 
          	else 
          	{
			    radios.style.display = "block";
				checkbox.style.display = "none";
			    type = typeAll[1];
			    getPrice(kol, type);
		    }
		    k[0].blur();
          	});

          	let radioHTML = document.querySelectorAll(".options input[type=radio]");
	        radioHTML.forEach(function(radio) 
          	{
		        radio.addEventListener("change", function(event) 
            	{
			    	radioListener = event.target.value;
			    	getPriceOptions(kol, type, radioListener);
              		f1 = false;
		    	});
	        });

          	let o = document.getElementsByName("property");
	        o[0].addEventListener("change", function(event)   
          	{
		        if (event.target.checked && kol != 0) 
            	{
			        result.innerHTML = (type - 60995) * kol + " рублей";
              		f2 = false;
					f3 = false;
		        } 
            	else 
            	{
			        getPrice(kol, type);
					f3 = true;
		        }
	        });

		} 
    else 
    {
		quantity = 0;
		result.innerHTML = "введите корректные данные";
	}
	quantityHTML.blur();
	});

});