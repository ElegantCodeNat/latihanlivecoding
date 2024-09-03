// Latihan 1: Buatlah fungsi bernama checkNumber yang menerima satu parameter number. Fungsi ini harus mengembalikan:

// "Positive" jika number lebih besar dari 0,
// "Negative" jika number kurang dari 0,
// "Zero" jika number sama dengan 0.

function checkNumber(number){
    if (number > 0){
        return "Positif";
    }else if (number < 0){
        return "Negatif";
    }else {
        return "Zero";
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-5)); 
console.log(checkNumber(0)); 

// Latihan 2: Buatlah fungsi bernama getGrade yang menerima satu parameter score. Fungsi ini harus mengembalikan:

// "A" jika score antara 90 dan 100,
// "B" jika score antara 80 dan 89,
// "C" jika score antara 70 dan 79,
// "D" jika score antara 60 dan 69,
// "F" jika score kurang dari 60.

function getGrade(score){
    if (score >= 90 && score <= 100){
        return "A";
    }else if (score >= 80 && score < 90){
        return "B";
    }else if (score >= 70 && score < 80){
        return "C";
    }
    else if (score >= 60 && score < 70){
        return "D";
    }
    else {
        return "F";
    }
}

console.log(getGrade(95)); //A
console.log(getGrade(80)); //B
console.log(getGrade(79)); //C
console.log(getGrade(65)); //D
console.log(getGrade(50)); //F