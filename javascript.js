


const container = document.querySelector("#container");


for (let i = 0; i < 5; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.setAttribute("style", `background-color: white; height: 80px; display: flex;`)
    columnDiv.classList.add("column");
    container.appendChild(columnDiv)
}


const columnDivs = document.querySelectorAll(".column");


let number = -3;
columnDivs.forEach(col => {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement("button");
        row.setAttribute("style", `background-color: grey; height: 80px; width: ${container.clientWidth / 4}px; border-style: solid transparent; border-color: teal; border-radius: 10px; font-size: 20px; border-width: 2.5px;`)
        row.classList.add("row")
        col.appendChild(row)

        if (number == -3) {
          row.textContent = "AC";
          row.id = "AC";
          number++;
        }

        else if (number == -2) {
          row.textContent = "+/-";
          row.id = "+/-";
          number++
        }

        else if (number == -1) {
          row.textContent = "%";
          row.id = "%";
          number++
        }

        else if (number == 0) {
          row.textContent = "NM";
          row.id = "NM";
          number++
        }


        else if (i < 3 && number < 10) {
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

      num2 = Number(equation);
      equation = ``;
      secondOperand = this.id;

      num1 = operate(num1, num2, firstOperand);
      num3 = num1;
      display.textContent = num1;
      firstOperand = secondOperand;
      currentOperand = this.id;
      equal = 0;

    }

    else if (this.id == "=") {

      if (currentOperand == ``) {
        num1 = Number(equation);
      }



      
      if (equal == 1) {
        num1 = operate(num1, num2, currentOperand);
        display.textContent = num1;

      }

      else if (equation == `` && equal == 0) {
        num1 = operate(num1, num3, currentOperand);

        display.textContent = num1;
      }
      


      else if (currentOperand != ``) {
      num2 = Number(equation);
      num1 = operate(num1, num2, firstOperand);
      display.textContent = num1;
      first = 0;
      firstNum = 1;
      firstOperand = ``;
      secondOperand = ``;
      equation = ``;
      equal = 1;
    }
    }




  else if (this.id == "AC") {
    num1 = 0;
    num2 = 0;
    num3 = 0;
    equation == ``;
    firstOperand = ``;
    secondOperand = ``;
    equal = 0;
    first = 0;
    firstNum = 0;
    currentOperand = ``;
    display.textContent = 0;
  }

  else if (this.id == "+/-" && equation != ``) {

    if (equation > 0) {
    equation = -equation;
    display.textContent = equation;
    }

      else if (equation <= 0) {
        equation = Math.abs(equation);
        display.textContent = equation;
      }
  }


  else if (this.id == "+/-" && equation == ``) {

    if (num1 > 0) {
    num1 = -num1;
    display.textContent = num1;
    }

      else if (num1 <= 0) {
        num1 = Math.abs(num1);
        display.textContent = num1;
      }
  }


  else if (this.id == "%" && equation != ``) {
    equation = equation / 100;
    display.textContent = equation;
  }

  else if (this.id == "%" && equation == ``) {
    num1 = num1 / 100;
    display.textContent = num1;
  }

  else if (this.id == "NM") {
    activateNightMode();

  }

}

let nmToggle = 0;
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
display.textContent = 0;




buttons.forEach(button => {
  if (button.id == "=" || button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/") {
    button.style.backgroundColor = "lightgrey";
    button.style.color = "teal";
    button.style.fontSize = "25px";
  }

  else if (button.id == "AC" || button.id == "+/-" || button.id == "%" || button.id == "NM") {
    button.style.backgroundColor = "rgba(180, 180, 180, 0.25)";
    button.style.color = "SteelBlue";
    button.style.fontSize = "20px";
}});



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



const rows = document.querySelectorAll(".row");
const displayContainer = document.querySelector("#display-container");


function activateNightMode() {
  if (nmToggle == 0) {


    container.style.backgroundColor = "black";
    container.style.borderColor = "hsl(180, 7%, 51%)";
    displayContainer.style.backgroundColor = "silver"; 
    display.style.backgroundColor = "black";
    display.style.borderColor = "hsl(180, 7%, 51%)";
    display.style.color = "white";


    columnDivs.forEach(col => col.style.backgroundColor = "silver");


    rows.forEach(row => {
    row.style.backgroundColor = "black";
    row.style.borderColor = "hsl(180, 7%, 51%)";
    
  });

    buttons.forEach(button => {
      button.style.color = "white";
      if (button.id == "=" || button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/") {
        //button.style.backgroundColor = "lightgrey";
        button.style.backgroundColor = "grey";
        button.style.color = "white";
        button.style.fontSize = "25px";
      }
    
      else if (button.id == "AC" || button.id == "+/-" || button.id == "%" || button.id == "NM") {
        button.style.backgroundColor = "teal";
        button.style.color = "white";
        button.style.fontSize = "20px";
    }});

    nmToggle = 1;
  }
  

    else if (nmToggle == 1) {

      container.style.backgroundColor = "white";
      container.style.borderColor = "teal";
      displayContainer.style.backgroundColor = "white";
      display.style.backgroundColor = "grey";
      display.style.borderColor = "teal";
      display.style.color = "black";


      columnDivs.forEach(col => col.style.backgroundColor = "white");




      rows.forEach(row => {
      row.style.backgroundColor = "grey";
      row.style.borderColor = "teal";
      });

      buttons.forEach(button => {
        button.style.color = "black";
        if (button.id == "=" || button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/") {
          button.style.backgroundColor = "lightgrey";
          button.style.color = "teal";
          button.style.fontSize = "25px";
        }
      
        else if (button.id == "AC" || button.id == "+/-" || button.id == "%" || button.id == "NM") {
          //button.style.backgroundColor = "teal";
          button.style.backgroundColor = "rgba(180, 180, 180, 0.25)";
          button.style.color = "SteelBlue";
          button.style.fontSize = "20px";
      }});

      nmToggle = 0;
    }

}

