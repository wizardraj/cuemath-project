function solve() {
  let question = document.getElementById("question").value;

  let result = "Step-by-step solution:\n";

  if (question.includes("+")) {
    let parts = question.split("+");
    let num1 = parseInt(parts[0].trim());
    let num2 = parseInt(parts[1].trim());
    result += `${num1} + ${num2} = ${num1 + num2}`;
  } 
  else if (question.includes("*")) {
    let parts = question.split("*");
    let num1 = parseInt(parts[0].trim());
    let num2 = parseInt(parts[1].trim());
    result += `${num1} * ${num2} = ${num1 * num2}`;
  } 
  else {
    result += "AI integration possible (future scope)";
  }

  document.getElementById("result").innerText = result;
}
