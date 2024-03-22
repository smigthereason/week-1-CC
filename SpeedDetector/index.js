function checkSpeed() {
    const inputSpeed = parseInt(document.querySelector(".content").textContent);
    const speedLimit = 70;
    const demeritsPer5km = 1;
    const maxDemeritPoints = 12;

    if (inputSpeed <= speedLimit) {
        document.querySelector(".loader-content").innerHTML = "<p>Ok</p>";
    } else {
        const points = Math.floor((inputSpeed - speedLimit) / 5) * demeritsPer5km;
        if (points >= maxDemeritPoints) {
            document.querySelector(".loader-content").innerHTML = "<p>License suspended</p>";
        } else {
            document.querySelector(".loader-content").innerHTML = "<p>Points: " + points + "</p>";
        }
    }
}
