async function currencyConverter(e) {
  e.preventDefault();
  const c1 = document.querySelector(".from").value.toUpperCase();
  const c2 = document.querySelector(".to").value.toUpperCase();
  const amnt = Number(document.querySelector(".num").value);
  const result = document.querySelector(".display");

  if (c1 === "" || c2 === "" || amnt <= 0) {
    result.textContent = "Enter the correct data";
    return;
  }
  try {
    const url = `http://apilayer.net/api/live?access_key=1ba8ef925d64291c5b338234ef37dca1&currencies=${c2}&source=${c1}&format=1`;
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.success === true) {
      const value = data.quotes[c1 + c2];
      const convertedValue = amnt * value;
      result.textContent = `Converted amount is:${convertedValue} ${c2}`;
    } else {
      result.textContent = "couldn't convert the currency";
    }
  } catch {
    result.textContent = "conversion cannot be done";
  }
}
document.querySelector(".convert").addEventListener("click", currencyConverter);
