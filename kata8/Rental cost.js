function rentalCarCost(d) {
    let cost = d * 40;
    if (d >= 7) {
        return (d * 40) - 50;
    } else if (d >= 3) {
        return (d * 40) - 20;
    } else {
        return (d * 40);
    }
}

