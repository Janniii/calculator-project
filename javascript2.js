


const container = document.querySelector("#container");


for (let i = 0; i < 4; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.setAttribute("style", `background-color: red; height: 100px; display: flex; gap: 5px;`)
    columnDiv.classList.add("column");
    container.appendChild(columnDiv)
}


const columnDivs = document.querySelectorAll(".column");


let number = 1;
columnDivs.forEach(col => {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement("button");
        row.setAttribute("style", `background-color: grey; height: 100px; width: ${container.clientWidth / 4}px;`)
        row.classList.add("row")
        col.appendChild(row)

        if (i < 3 && number < 10) {
            row.textContent = number
            row.id = number;
            number++;
        }
          else if (i == 3 && number == 4) {
            row.textContent = "/"
            row.id = "/";
          }

          else if (i == 3 && number == 7) {
            row.textContent = "*"
            row.id = "*";
          }

          else if (i == 3 && number == 10) {
            row.textContent = "-"
            row.id = "-";
            number++;
          }

          else if (i == 3 && number > 10) {
            row.textContent = "+"
            row.id = "+";
          }

          else if (i == 0 && number > 10) {
            row.textContent = 0;
            row.id = "0";
          }

          else if (i == 1 && number > 10) {
            row.textContent = ".";
            row.id = ".";
            row.backgroundColor = "blue";
          }

          else if (i == 2 && number > 10) {
            row.textContent = "=";
            row.id = "=";
          }
    
    }});

container.setAttribute("style", "gap: 5px;")


const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", iWasClicked));


let quickTest = 0;

function iWasClicked() {
    /*console.log(Number(this.id));*/


    if ((this.id >= 0 && this.id <= 9) || (this.id == "." && equation.split(".").length-1 == 0)) {
    equation += this.id;
    display.textContent = equation;
  }

     else if (this.id == "=") {
       if (currentOperand == `` && quickTest == 0) {
         display.textContent = equation;
         quickTest = 1;
       }

         else if (currentOperand != ``) {
           num2 = Number(equation);
           equation = ``;
           num1 = operate(num1, num2, currentOperand)
           display.textContent = num1;
           firstOperand = ``;
           secondOperand = ``;
           
         }
     }

     else if (first == 0 && (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/")) {
       if (equation != ``) {
       num1 = Number(equation);
      }
       equation = ``;
       first = 1;
       firstOperand = this.id;
       currentOperand = this.id;
     }

     else if ((equation.length >= 1 && first == 1) && (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/")) {

      if (firstOperand != ``) {
        secondOperand = this.id;
      }

      if (firstOperand == ``) {
        firstOperand = this.id;
      }
      
      num2 = Number(equation);
      equation = ``;
      //secondOperand = this.id;

      num1 = operate(num1, num2, firstOperand);
      display.textContent = num1;
      //console.log(num1);
      currentOperand = this.id;
      firstOperand = secondOperand;

    }

}

let currentOperand = ``;
let firstOperand = ``;
let secondOperand = ``;
let first = 0;
let num1 = 0;
let num2 = 0;
let result = ``;
let current = ``;
let currentResult = ``;
let equationHidden = ``;
let equationDisplay = ``;
let equation = ``;

const display = document.querySelector("#display");









































function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}





function operate(a, b, operand) {

    switch (operand) {
        case "+":
          return add(a, b);

        case "-":
          return subtract(a, b);

        case "*":
          return multiply(a, b);

        case "/":
          return divide(a, b);
          
    }

}

