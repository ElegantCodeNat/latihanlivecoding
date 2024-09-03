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

