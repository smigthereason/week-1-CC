function checkSpeed() {
    let spd = parseInt(document.querySelector("#spd").value);
    let speedLimit = 70;
    let demeritsPer5km = 1;
    let maxDemeritPoints = 12;

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
    
}