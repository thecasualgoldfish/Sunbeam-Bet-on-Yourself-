

function getAmount()
{
  const values = {
    task: document.getElementById("usersTask").value,
    amount: document.getElementById("usersAmount").value
  };
  localStorage.setItem("betData", JSON.stringify(values));
  console.log(values);
  return values;
}

