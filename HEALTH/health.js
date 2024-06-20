// health.js

function calculateBMI() {
    const height = document.getElementById('bmi-height').value;
    const weight = document.getElementById('bmi-weight').value;
    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let comment;
        if (bmi < 18.5) {
            comment = 'Underweight';
        } else if (bmi < 24.9) {
            comment = 'Normal weight';
        } else if (bmi < 29.9) {
            comment = 'Overweight';
        } else {
            comment = 'Obese';
        }
        document.getElementById('bmi-result').innerText = `Your BMI is ${bmi} (${comment})`;
    } else {
        document.getElementById('bmi-result').innerText = 'Please enter valid height and weight';
    }
}

function calculateBMR() {
    const age = document.getElementById('bmr-age').value;
    const gender = document.getElementById('bmr-gender').value;
    const height = document.getElementById('bmr-height').value;
    const weight = document.getElementById('bmr-weight').value;

    let bmr;
    let comment;

    if (age > 0 && height > 0 && weight > 0) {
        if (gender === 'male') {
            bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
            comment = bmr > 2500 ? 'High' : bmr > 2000 ? 'Moderate' : 'Low';
        } else {
            bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
            comment = bmr > 2000 ? 'High' : bmr > 1500 ? 'Moderate' : 'Low';
        }
        document.getElementById('bmr-result').innerText = `Your BMR is ${bmr.toFixed(2)} calories/day (${comment})`;
    } else {
        document.getElementById('bmr-result').innerText = 'Please enter valid age, height, and weight';
    }
}

function calculateIdealWeight() {
    const height = document.getElementById('ideal-height').value;
    if (height > 0) {
        const idealWeightMale = 50 + 0.91 * (height - 152.4);
        const idealWeightFemale = 45.5 + 0.91 * (height - 152.4);
        document.getElementById('ideal-weight-result').innerText = `Ideal weight for men: ${idealWeightMale.toFixed(2)} kg\nIdeal weight for women: ${idealWeightFemale.toFixed(2)} kg`;
    } else {
        document.getElementById('ideal-weight-result').innerText = 'Please enter valid height';
    }
}

function calculateBodyFat() {
    const age = document.getElementById('body-fat-age').value;
    const gender = document.getElementById('body-fat-gender').value;
    const weight = document.getElementById('body-fat-weight').value;
    const waist = document.getElementById('body-fat-waist').value;
    const neck = document.getElementById('body-fat-neck').value;
    const hip = document.getElementById('body-fat-hip').value;

    let bodyFatPercentage;
    let comment;

    if (age > 0 && weight > 0 && waist > 0 && neck > 0 && (gender === 'male' || (gender === 'female' && hip > 0))) {
        if (gender === 'male') {
            bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
            if (bodyFatPercentage < 6) {
                comment = 'Essential fat';
            } else if (bodyFatPercentage < 14) {
                comment = 'Athletes';
            } else if (bodyFatPercentage < 18) {
                comment = 'Fitness';
            } else if (bodyFatPercentage < 25) {
                comment = 'Average';
            } else {
                comment = 'Obese';
            }
        } else {
            bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
            if (bodyFatPercentage < 16) {
                comment = 'Essential fat';
            } else if (bodyFatPercentage < 24) {
                comment = 'Athletes';
            } else if (bodyFatPercentage < 31) {
                comment = 'Fitness';
            } else if (bodyFatPercentage < 36) {
                comment = 'Average';
            } else {
                comment = 'Obese';
            }
        }
        document.getElementById('body-fat-result').innerText = `Your body fat percentage is ${bodyFatPercentage.toFixed(2)}% (${comment})`;
    } else {
        document.getElementById('body-fat-result').innerText = 'Please enter all required values';
    }
}

document.getElementById('body-fat-gender').addEventListener('change', function() {
    const gender = document.getElementById('body-fat-gender').value;
    const hipGroup = document.getElementById('hip-group');
    if (gender === 'female') {
        hipGroup.style.display = 'block';
    } else {
        hipGroup.style.display = 'none';
    }
});

function calculateCaloricNeeds() {
    const age = document.getElementById('caloric-age').value;
    const gender = document.getElementById('caloric-gender').value;
    const height = document.getElementById('caloric-height').value;
    const weight = document.getElementById('caloric-weight').value;
    const activityLevel = document.getElementById('caloric-activity').value;

    let bmr;

    if (age > 0 && height > 0 && weight > 0) {
        if (gender === 'male') {
            bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
        } else {
            bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
        }
        const dailyCaloricNeeds = bmr * activityLevel;
        document.getElementById('caloric-needs-result').innerText = `Your daily caloric needs are ${dailyCaloricNeeds.toFixed(2)} calories/day`;
    } else {
        document.getElementById('caloric-needs-result').innerText = 'Please enter valid age, height, weight, and activity level';
    }
}
