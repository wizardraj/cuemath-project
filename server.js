const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/solve", (req, res) => {
  const question = req.body.question;
  let answer = "Step-by-step solution:\n";

  // Linear equation
  if (question.includes("x")) {
    answer += "Solving linear equation...\n";
    answer += "Example logic applied\nAnswer: x = 2 (demo)";
  }

  // Addition
  else if (question.includes("+")) {
    try {
      let parts = question.split("+");
      let sum = parseInt(parts[0]) + parseInt(parts[1]);
      answer += `${parts[0]} + ${parts[1]} = ${sum}`;
    } catch {
      answer += "Invalid addition input";
    }
  }

  // Multiplication
  else if (question.includes("*")) {
    try {
      let parts = question.split("*");
      let mul = parseInt(parts[0]) * parseInt(parts[1]);
      answer += `${parts[0]} * ${parts[1]} = ${mul}`;
    } catch {
      answer += "Invalid multiplication input";
    }
  }

  else {
    answer += "This type of question will be solved using AI (future scope)";
  }

  res.json({ answer });
});

app.listen(3000, () => console.log("Server running on port 3000"));