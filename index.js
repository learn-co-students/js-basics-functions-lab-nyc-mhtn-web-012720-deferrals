const distanceFromHqInBlocks = (street) => {
    const hq = 42
    if (street > hq){
    return street - hq
    } else if (street < hq){
        return hq - street
    }
};

const distanceFromHqInFeet = (street) => {
    const blocks = distanceFromHqInBlocks(street)
    return blocks * 264
};

const distanceTravelledInFeet = (start, destination) => {
    if (start > destination) {
        return (start - destination) * 264
    } else if (start < destination){
        return (destination - start) * 264
    }
};

const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400){
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500){
        return 25
    } else if (distance > 2500){
        return 'cannot travel that far'
    }
}
