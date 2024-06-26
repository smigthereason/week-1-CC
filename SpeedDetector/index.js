//Creates a function that prints out expected results.
function checkSpeed() {

    //Creates a class for speedInput to be selected
    let spdInput = document.querySelector(".data");
    spdInput.classList.add("hide");

    //Assigns variables to each Element
    let spd = parseInt(document.querySelector("#spd").value);
    let speedLimit = 70;
    let demeritsPer5km = 1;
    let maxDemeritPoints = 12;

    
    document.querySelector("button").classList.add("hide");
    document.querySelector(".loader").classList.remove("hide");
    
    setTimeout(() => {
        if (spd <= speedLimit) {
            document.querySelector("#result").innerText = "Ok";
        } else {
            const Points = Math.floor((spd - speedLimit) / 5) * demeritsPer5km;
            if (Points >= maxDemeritPoints) {
                document.querySelector("#result").innerText = "License suspended";
            } else {
                document.querySelector("#result").innerText = "Points: " + Points;
               
            }
        }
    //hides input and button as it processes the function
        spdInput.classList.remove("hide");
        document.querySelector("button").classList.remove("hide");
        document.querySelector(".loader").classList.add("hide");
        },2000);
    
}