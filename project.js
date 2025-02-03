const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.textContent = 'Please provide a valid height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.textContent = 'Please provide a valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let c = "";
        if (bmi <= 18.6) {
            c = `You are Under Weight.`;
        } else if (bmi > 18.6 || bmi == 24.9) {
            c = `Great! You are Normal Range.`;
        } else if (bmi > 24.9) {
            c = `You are Overweight.`;
        }
        result.innerHTML = `Your BMI is ${bmi} <br /> ${c}`;
    }
});