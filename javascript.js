


const container = document.querySelector("#container");


for (let i = 0; i < 4; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.setAttribute("style", `background-color: white; height: 100px; display: flex;`)
    columnDiv.classList.add("column");
    container.appendChild(columnDiv)
}


const columnDivs = document.querySelectorAll(".column");


let number = 1;
columnDivs.forEach(col => {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement("button");
        row.setAttribute("style", `background-color: grey; height: 100px; width: ${container.clientWidth / 4}px; border-style: solid transparent; border-color: teal; border-radius: 10px; font-size: 20px; border-width: 2.5px;`)
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
          row.style.fontFamily = "Times New Roman"
    
    }});

//container.setAttribute("style", "gap: 5px;")


const buttons = document.querySelectorAll("button");


buttons.forEach(button => button.addEventListener("click", iWasClicked));


let quickTest = 0;

function iWasClicked() {


    if ((this.id >= 0 && this.id <= 9) || (this.id == "." && equation.split(".").length-1 == 0)) {
    equation += this.id;
    display.textContent = equation;
    console.log("hello");
    console.log(equation);
    equal = 0;
  }

     

     else if (first == 0 && (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/")) {
      
      if (firstNum == 0) {
         num1 = Number(equation);
        }
      equation = ``;
      first = 1;
      firstOperand = this.id;
      currentOperand = this.id;
      equal = 0;
      num3 = num1;
     }

     else if ((equation.length == 0 && first == 1) && (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/")) {
       firstOperand = this.id
       currentOperand = this.id;
       equal = 0;
       num3 = num1;

      }

     else if ((equation.length >= 1 && first == 1) && (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/")) {

      console.log("ACTIVATE ME PLEASE");


      num2 = Number(equation);
      console.log(num2, "hi");
      equation = ``;
      secondOperand = this.id;

      num1 = operate(num1, num2, firstOperand);
      num3 = num1;
      console.log("IM NUM 3 YOYOYO");
      display.textContent = num1;
      firstOperand = secondOperand;
      currentOperand = this.id;
      equal = 0;

    }

    else if (this.id == "=") {

      console.log(currentOperand, "do it now", equation);

      if (currentOperand == ``) {
        num1 = Number(equation);
      }



      
      if (equal == 1) {
        num1 = operate(num1, num2, currentOperand);
        display.textContent = num1;
        console.log("TEEEEEEEEEST");

      }

      else if (equation == `` && equal == 0) {
        num1 = operate(num1, num3, currentOperand);

        display.textContent = num1;
        console.log("AAAAAAAAAAAAAAAAa");
        console.log(num1, num2, num3, currentOperand);
      }
      


      else if (currentOperand != ``) {
      num2 = Number(equation);
      console.log(equation);
      console.log("hello");
      console.log(num1, num2, firstOperand);
      num1 = operate(num1, num2, firstOperand);
      console.log(num1);
      display.textContent = num1;
      first = 0;
      firstNum = 1;
      firstOperand = ``;
      secondOperand = ``;
      equation = ``;
      equal = 1;
      console.log("BBBBBBBBBBBBBBBBBBB");
    }
    }
  
    console.log("HELLO THERE YO,", equation, num1, num2, num3);

}


let firstEqual = 0;
let equal = 0;
let currentOperand = ``;
let firstNum = 0;
let firstOperand = ``;
let secondOperand = ``;
let first = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let result = ``;
let current = ``;
let currentResult = ``;
let equationHidden = ``;
let equationDisplay = ``;
let equation = ``;

const display = document.querySelector("#display");
display.setAttribute("style", "font-size: 30px;")









































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

