function stoimost(){
    let res = /^\d+$/;
    let f1 = document.getElementById("f1");
    let f2 = document.getElementById("f2");
    let rt = document.getElementById("resultat");
    if(res.test(f1.value) && res.test(f2.value)){
        alert(rt.innerHTML = "Стоимость: " + parseInt(f1.value) * parseInt(f2.value) + " руб.");
    } else{
        alert(rt.innerHTML = "Введены некорректные данные!");
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (_event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button_1").addEventListener("click", stoimost);
  });