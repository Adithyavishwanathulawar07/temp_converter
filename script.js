const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempselected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempselected.
    selectedIndex].value;

    //calsius to fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }
    // fahrenheit to celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celTefah
        (inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel
        (inputTemp) + "&#176; celsius";
    }
}