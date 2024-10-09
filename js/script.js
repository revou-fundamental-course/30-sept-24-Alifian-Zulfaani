document.getElementById("convert").addEventListener("click", function () {
  let celcius = document.getElementById("celcius").value;
  if (celcius === "") {
    alert("Masukkan suhu dalam Celsius!");
    return;
  }

  let fahrenheit = (celcius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);

  let calculationText = `${celcius}°C * (9/5) + 32 = ${fahrenheit.toFixed(
    2
  )}°F`;
  document.getElementById("calculation-text").innerText = calculationText;
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("celcius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculation-text").innerText = "";
});

document.getElementById("reverse").addEventListener("click", function () {
  let fahrenheit = document.getElementById("fahrenheit").value;
  if (fahrenheit === "") {
    alert("Masukkan suhu dalam Fahrenheit!");
    return;
  }

  let celcius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celcius").value = celcius.toFixed(2);

  let calculationText = `${fahrenheit}°F - 32 * (5/9) = ${celcius.toFixed(
    2
  )}°C`;
  document.getElementById("calculation-text").innerText = calculationText;
});
