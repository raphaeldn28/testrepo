let count = 0;
let reset = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!")
    } else if (count === 20) {
        alert ("Your Instagram post gained 20 followers! Congratulations!")
    }
}

function resetFollowers() {
    document.getElementById('countDisplay').innerHTML=reset;
    alert ("You have lost all your followers")
}