// Create a function to calculate and display the result based on input
function show_result() {
    // Get the values of HTML, CSS, and JS scores 
    let ht = document.querySelector("#ht").value;
    let css = document.querySelector("#css").value;
    let js = document.querySelector("#js").value;
  // Calculate the total marks by converting input values to numbers and adding them
    let totalMarks = parseFloat(ht) + parseFloat(css) + parseFloat(js);
    let maxTotalMarks = 100;
    let percentage = (totalMarks / maxTotalMarks) * 100;

    document.querySelector(".Tot").textContent = totalMarks;
    document.querySelector(".per").textContent = Math.floor(percentage) + "%";
    
    let gradeElement = document.querySelector(".Gra")
    // Determine the grade based on the percentage and display it
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

    
 // Determine if the student passed or failed and display the result accordingly
    if (percentage > 40) {
        document.querySelector(".result h1").innerHTML = "PASS!";
        document.querySelector(".result h1").classList.add("pass");    
    }else {
        document.querySelector(".result h1").innerHTML = "FAIL!";
        document.querySelector(".result h1").classList.add("fail");
    }
}
  