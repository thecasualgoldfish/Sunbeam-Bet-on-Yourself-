function main()
{
  let moneybet;
  let taskbet;
}
function getTask() 
{
  const input = document.getElementById("usersTask");
  taskbet = input.value; // save for later
  localStorage.setItem("savedInput", taskbet); // optional: keeps it after refresh
  return taskbet;
}

function getAmount() {
  const input = document.getElementById("usersTask");
  moneybet = input.value; // save for later
  localStorage.setItem("savedInput", moneybet); // optional: keeps it after refresh
  return moneybet;
}