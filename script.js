function savevals() {
  const inputs = document.querySelectorAll("input");

  const dict = {};
  inputs.forEach(input => {
    if (input.id) {
      dict[input.id] = input.value;
    }
  });

  localStorage.setItem("allInputs", JSON.stringify(dict));
  console.log(dict);
  return dict;
}
