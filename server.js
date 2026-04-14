const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/solve", (req, res) => {
  const question = req.body.question;
  let answer = "Step-by-step solution:\n";

  if (question.includes("+")) {
    let parts = question.split("+");
    let num1 = parseInt(parts[0].trim());
    let num2 = parseInt(parts[1].trim());
    answer += `${num1} + ${num2} = ${num1 + num2}`;
  } else if (question.includes("*")) {
    let parts = question.split("*");
    let num1 = parseInt(parts[0].trim());
    let num2 = parseInt(parts[1].trim());
    answer += `${num1} * ${num2} = ${num1 * num2}`;
  } else {
    answer += "This type of question will be solved using AI (future scope)";
  }

  res.json({ answer });
});

// ✅ VERY IMPORTANT FIX
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
