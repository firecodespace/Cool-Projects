let car1Rating = 1200;
let car2Rating = 1000;
const K = 30;

function Probability(rating1, rating2) {
    return 1 / (1 + Math.pow(10, (rating2 - rating1) / 400));
}

function updateRatings(winner, loser) {
    const Pa = Probability(car2Rating, car1Rating);
    const Pb = Probability(car1Rating, car2Rating);

    if (winner === 1) {
        car1Rating += K * (1 - Pa);
        car2Rating += K * (0 - Pb);
    } else {
        car1Rating += K * (0 - Pa);
        car2Rating += K * (1 - Pb);
    }

    console.log("Updated Ratings:");
    console.log("Car 1 Rating: " + car1Rating.toFixed(2));
    console.log("Car 2 Rating: " + car2Rating.toFixed(2));
}

function selectCar(selectedCar) {
    const otherCar = selectedCar === 1 ? 2 : 1;
    updateRatings(selectedCar, otherCar);

    // Replace image sources with new images
    document.getElementById('car1').src = '/images/porsche-911-(1).jpeg'; // Replace with actual image path
    document.getElementById('car2').src = '/images/bentley-(1).jpeg'; // Replace with actual image path
}
