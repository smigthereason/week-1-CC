function show_result() {
    let ht = document.querySelector("#ht").value;
    let css = document.querySelector("#css").value;
    let js = document.querySelector("#js").value;
  
    let totalMarks = parseFloat(ht) + parseFloat(css) + parseFloat(js);
    let maxTotalMarks = 100;
    let percentage = (totalMarks / maxTotalMarks) * 100;

    document.querySelector(".Tot").textContent = totalMarks;
    document.querySelector(".per").textContent = percentage.toFixed(2) + "%";
    
    let gradeElement = document.querySelector(".Gra")
    
    if(percentage >= 79) {
        gradeElement.innerHTML = "A";
    }else if(percentage >= 60){
        gradeElement.innerHTML = "B";
    }else if(percentage >=49) {
        gradeElement.innerHTML = "C";
    }else if (percentage >= 40) {
        gradeElement.innerHTML = "D";
    }else {
        gradeElement.innerHTML = "E";
    }

    document.querySelector(".per").innerHTML = percentage;

    if (percentage > 40) {
        document.querySelector(".result h1").innerHTML = "PASS!";
        document.querySelector(".result h1").classList.add("pass");    
    }else {
        document.querySelector(".result h1").innerHTML = "FAIL!";
        document.querySelector(".result h1").classList.add("fail");
    }
}
  