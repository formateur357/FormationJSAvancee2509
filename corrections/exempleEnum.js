// une enumeration utilisant des objets litteraux

const DaysOfWeek = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    SUNDAY: 7
};

function findDayByValue(value) {
    for (const day in DaysOfWeek) {
        if (DaysOfWeek[day] === value) {
            return day;
        }
    }
    return null;
}

const valueToFind = 3;
const dayFound = findDayByValue(valueToFind);

console.log(dayFound);

const today = DaysOfWeek.TUESDAY;
console.log(today);


// utilisation de variables contantes pour creer l'enumeration.
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;
const SUNDAY = 7;