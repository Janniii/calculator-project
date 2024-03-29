
const bodyColor = document.querySelector("body");
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
          row.id = "NM";

          addMoon(row); 
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


const buttons = document.querySelectorAll("button");
const operatorBox = document.querySelector(".box");


buttons.forEach(button => button.addEventListener("click", iWasClicked));

function iWasClicked() {

  document.getElementById(this.id).blur();

    if ((this.id >= 0 && this.id <= 9) || (this.id == "." && equation.split(".").length-1 == 0)) {

      if (equalToggle == 1) {

        num1 = 0;
        num2 = 0;
        num3 = 0;
        firstNum = 0;
        if (currentOperand != ``) {
        prevChoice = document.getElementById(currentOperand);
        prevChoice.classList.remove("select");
      }
        currentOperand = ``;
        operatorBox.textContent = currentOperand;

      }


    equation += this.id;

    if (this.id == ".") {
      display.textContent = equation;

    }

    if (this.id != ".") {
      display.textContent = Number(equation);
    }
    equal = 0;
    equalToggle = 0;
  }

     

     else if (first == 0 && (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/")) {
       if (currentOperand != ``  && this.id != currentOperand) {
         prevChoice = document.getElementById(currentOperand);
         prevChoice.classList.remove("select");
         
       }


       this.classList.add("select");
       equalToggle = 0;
      
      if (firstNum == 0) {
         num1 = Number(equation);
        }
      equation = ``;
      first = 1;
      firstOperand = this.id;
      currentOperand = this.id;
      operatorBox.textContent = currentOperand;
      equal = 0;
      num3 = num1;
     }

     else if ((equation.length == 0 && first == 1) && (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/")) {
       if (currentOperand != ``  && this.id != currentOperand) {
         prevChoice = document.getElementById(currentOperand);
         prevChoice.classList.remove("select");
        
      }

       this.classList.add("select");
       equalToggle = 0;
       
       firstOperand = this.id
       currentOperand = this.id;
       operatorBox.textContent = currentOperand;
       equal = 0;
       num3 = num1;

      }

     else if ((equation.length >= 1 && first == 1) && (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/")) {
       if (currentOperand != ``  && this.id != currentOperand) {
         prevChoice = document.getElementById(currentOperand);
         prevChoice.classList.remove("select");
       }

       
       this.classList.add("select");
       equalToggle = 0;

      num2 = Number(equation);
      equation = ``;
      secondOperand = this.id;

      num1 = operate(num1, num2, firstOperand);
      num3 = num1;
      display.textContent = num1;
      firstOperand = secondOperand;
      currentOperand = this.id;
      operatorBox.textContent = currentOperand;
      equal = 0;

    }

    else if (this.id == "=") {
      equalToggle = 1;

      if (currentOperand == `` && equation != ``) {
        num1 = Number(equation);
      }

      if (equal == 1) {
        num1 = operate(num1, num2, currentOperand);
        display.textContent = num1;

      }

      else if (equation == `` && equal == 0 && (num1 == 0 && num2 == 0)) {
        display.textContent = 0;
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

    if (currentOperand != ``  && this.id != currentOperand) {
      prevChoice = document.getElementById(currentOperand);
      prevChoice.classList.remove("select");
    }

    num1 = 0;
    num2 = 0;
    num3 = 0;
    equation = ``;
    firstOperand = ``;
    secondOperand = ``;
    equal = 0;
    first = 0;
    firstNum = 0;
    currentOperand = ``;
    operatorBox.textContent = currentOperand;
    equalToggle = 0;
    display.textContent = 0;

  }

  else if (this.id == "+/-" && equation != ``) {
    equalToggle = 0;

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
    equalToggle = 0;

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
    equalToggle = 0;
  }

  else if (this.id == "%" && equation == ``) {
    num1 = num1 / 100;
    display.textContent = num1;
    equalToggle = 0;
  }

  else if (this.id == "NM") {
    equalToggle = 0;
    activateNightMode();

  }

}

let prevChoice = ``;
let equalToggle = 0;
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
    button.style.backgroundColor = "rgba(180, 180, 180, 0.85)";
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

const leftCircle = document.querySelector(".left");
const rightCircle = document.querySelector(".right");
rightCircle.classList.add("select2");
const rows = document.querySelectorAll(".row");
const displayContainer = document.querySelector("#display-container");

function activateNightMode() {

  if (nmToggle == 0) {

    bodyColor.style.backgroundColor = "#100000";
    operatorBox.style.color = "white";
    leftCircle.classList.add("select2");
    rightCircle.classList.remove("select2");

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

      bodyColor.style.backgroundColor = "rgb(255, 239, 213)";
      operatorBox.style.color = "black";
      rightCircle.classList.add("select2");
      leftCircle.classList.remove("select2");
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
          button.style.backgroundColor = "rgba(180, 180, 180, 0.85)";
          button.style.color = "SteelBlue";
          button.style.fontSize = "20px";
      }});

      nmToggle = 0;
    }

};



function addMoon(row) {

  row.style.display = "flex";
  row.style.justifyContent = "center";
  row.style.alignItems = "center";

  const circle = document.createElement("div");
  const left = document.createElement("div");
  const line = document.createElement("div");
  const right = document.createElement("div");
  circle.classList.add("circle");
  left.classList.add("left");
  line.classList.add("line");
  right.classList.add("right");
  circle.appendChild(left);
  circle.appendChild(line)
  circle.appendChild(right)
  row.appendChild(circle);
  

}

const plus = document.getElementById("+");
const minus = document.getElementById("-");
const multiplication = document.getElementById("*");
const division = document.getElementById("/");
const equals = document.getElementById("=");
const dot = document.getElementById(".");
const clear = document.getElementById("AC");
const nmButton = document.getElementById("NM");
const percentage = document.getElementById("%");
const plusMinus = document.getElementById("+/-");


window.addEventListener("keydown", (e) => {
  
  if ((e.keyCode == 48 || e.keyCode == 49 || e.keyCode == 50 || e.keyCode == 51 || e.keyCode == 52 ||
    e.keyCode == 53 || e.keyCode == 54 || e.keyCode == 55 || e.keyCode == 56 || e.keyCode == 57) 
    && e.shiftKey == false && e.ctrlKey == false) {
      ClickityClick(e)

      if (equalToggle == 1) {
          num1 = 0;
          num2 = 0;
          num3 = 0;
          firstNum = 0;
          equal = 0;
          equalToggle = 0;
          if (currentOperand != ``) {
          prevChoice = document.getElementById(currentOperand);
          prevChoice.classList.remove("select");
        }

          currentOperand = ``;
          equation = ``;
          operatorBox.textContent = currentOperand;
          equation += e.key;
          display.textContent = Number(equation);

      }

      else {

      equation += e.key;
      display.textContent = Number(equation);
      }
    }

    else if (e.keyCode == 190 && equation.split(".").length-1 == 0) {
      ClickityClick(e);
      equation += e.key;
      display.textContent = equation;

      if (equalToggle == 1) {
        num1 = 0;
        num2 = 0;
        num3 = 0;
        equal = 0;
        firstNum = 0;
        currentOperand = ``;
        equalToggle = 0;
        equation = ``;
        operatorBox.textContent = currentOperand;
        equation += e.key;
        display.textContent = equation;
      }
    }

  else if (e.keyCode == 187 && e.shiftKey == false && e.ctrlKey == false) {
    plus.click()

  }

  else if (e.keyCode == 189 && e.shiftKey == false && e.ctrlKey == false) {
    minus.click();
  }

  else if (e.shiftKey == true && e.keyCode == 187 && e.ctrlKey == false) {
    multiplication.click();
  }


  else if (e.shiftKey == true && e.keyCode == 55) {
    division.click();
  }

  else if (e.keyCode == 13) {
    ClickityClick(e)
    equals.click();

  }

  else if (e.keyCode == 67 || e.keyCode == 27) {
    ClickityClick(e)
    clear.click();
  }

  else if (e.shiftKey == true && e.keyCode == 53) {
    ClickityClick(e)
    percentage.click();
  }

  else if (e.shiftKey == true && e.keyCode == 189 && e.ctrlKey == false) {
    ClickityClick(e)
    plusMinus.click();
  }

  else if (e.keyCode == 78) {
    ClickityClick(e)
    nmButton.click();
  }

  else if (e.keyCode == 76) {

    if (container.className != "containerLight") {
      light2.classList.add("on2")
      light2.style.borderStyle = "solid";
      container.classList.add("containerLight");
    }

    else {
      container.classList.remove("containerLight");
      light2.classList.remove("on2")
      light2.style.borderStyle = "inset";
    }
  }

  else if (e.keyCode == 82) {
    intervalToggle++;

    if (x.length == 0) {

      light.classList.add("on")
      light.style.borderStyle = "solid";
      x = setInterval(newColors, 180);
    }

      if (intervalToggle % 2 == 0) {
        light.classList.remove("on");
        light.style.borderStyle = "inset";
        clearInterval(x);
        x = ``;

        if (nmToggle == 0) {
          nmToggle = 1;
        }

          else if (nmToggle == 1) {
            nmToggle = 0;
          }
        activateNightMode();


      }

  }

});

let x = ``;


const light = document.querySelector(".light");
const light2 = document.querySelector(".light2");
let redValue = Math.floor(Math.random() * 256);
let greenValue = Math.floor(Math.random() * 256);
let blueValue = Math.floor(Math.random() * 256);
let opacityValue = 1.0;
let selectionTrail = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue})`;
let intervalToggle = 0;

function newColors() {

  opacityValue+=0.1;
  display.style.borderColor = selectionTrail;
  container.style.borderColor = selectionTrail;
  redValue = Math.floor(Math.random() * 256);
  greenValue = Math.floor(Math.random() * 256);
  blueValue = Math.floor(Math.random() * 256);
  selectionTrail = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${opacityValue})`;

}

let hotkeyActive = false;
function ClickityClick(e) {

  if(!hotkeyActive) {
      hotkeyActive = true;
      console.log("HELLO", e.key, typeof e.key);

      switch (e.key) {
        case "Enter":
          demo = equals;
          break;

        case ".":
          demo = dot;
          break;

        case "c":
          demo = clear;
          break;
        
        case "Escape":
          demo = clear;
          break;
        
        case "_":
          demo = plusMinus;
          break;

        case "%":
          demo = percentage;
          break;

        case "n":
          demo = nmButton;
          break;

        default:
          demo = document.getElementById(e.key);
          break;

    }


      demo.classList.add("active");
      let keyupHandler = function (event) {
          hotkeyActive = false;
          demo.className = '';
          window.removeEventListener('keyup', keyupHandler, false);
      };
      window.addEventListener('keyup', keyupHandler, false);
  }
}
