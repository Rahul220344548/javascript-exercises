const findTheOldest = function (people) {

    let sorted = people.sort((a, b) => {
        const lastPersonAge = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
        const nextPersonAge = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;

        return nextPersonAge - lastPersonAge;
    });
    return sorted[0];
    
    
};

// Do not edit below this line
module.exports = findTheOldest;

