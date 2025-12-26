import {Hogwarts, Beauxbatons, Durmstrang} from "./schools.js";

const schools = [Hogwarts, Beauxbatons, Durmstrang];

function gobletOfFire(school) {
    const students = school.filter(student => student.age >= 17 || student.name === "Harry Potter");

    if (students.length === 0) {
    return "No eligible champion";
    }
   
    const randomIndex = Math.floor(Math.random() * students.length);
    const champion = students[randomIndex];
    return champion;
}

const schoolChampions = schools.map(gobletOfFire);

console.log(schoolChampions);