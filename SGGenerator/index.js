// // Creates a form validation function
// function validateFormGrader() {
//     let ht = document.querySelector("#ht").value;
//     let css = document.querySelector("#css").value;
//     let js = document.querySelector("#js").value;

//     //Checks if the input fields are empty
//     if (ht === "" || css === "" || js === ""){
//         document.getElementById("error").innerText = "Input Values Required.;
//     return false;
//     }

//     // Checks if the values are within range
//     if (ht < 0 || ht > 100 || css < 0 || css > 100 || js < 0 || js > 100) {
//         document.getElementById.innerText = "Values must be within 0 and 100";
//         return false;
//     }

//     // Clears any errors when all checks pass
//     document.getElementById("error").innerText = "";
//     return false;
// }
// Create a function to calculate and display the result based on input
function show_result() {
    // Get the values of HTML, CSS, and JS scores 
    let ht = document.querySelector("#ht").value;
    let css = document.querySelector("#css").value;
    let js = document.querySelector("#js").value;

    //  // Check if inputs are within valid range (0-100)
     if (isNaN(ht) || ht === "" || ht < 0 || ht > 100 || isNaN(css) || css === "" || css < 0 || css > 100 || isNaN(js) || js === "" || js < 0 || js > 100) {
        document.getElementById("error").innerText = "Please enter valid marks between 0 and 100.";
        return false;
    }
    //  // Validate inputs to limit to 100
    //  ht = Math.min(ht, 100);
    //  css = Math.min(css, 100);
    //  js = Math.min(js, 100);

  // Calculate the total marks by converting input values to numbers and adding them
    let totalMarks = parseFloat(ht) + parseFloat(css) + parseFloat(js);
    let maxTotalMarks = 300;
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
  