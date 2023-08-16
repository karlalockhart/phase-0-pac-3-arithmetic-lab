1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2

function add() {
  // we'll fill this in shortly
}

function subtract() {
  // we'll fill this in shortly
}

function multiply() {
  // we'll fill this in shortly
}

function divide() {
  // we'll fill this in shortly
}

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

number = 2;

function increment(n) {
    return (n += 1);
}

number = 2;

function decrement(n) {
    return (n -= 1);
}

function makeInt(a){
    Number = parseInt(a, 10);
    return Number;
  }

  /*
function makeInt(n, base) {
    const parsed = Number.parseInt(n, 10);
    if (Number.isNaN(parsed)) {
      return 0 || NaN;
    }
    return parsed
  }
*/
  function preserveDecimal(a){
    Number = parseFloat(a, 10);
    return Number;
  }

  /*
  function preserveDecimal(n) {
    const parsed = Number.parseFloat("2.222");
    if (Number.isNaN(parsed)) {
        return 0;
    }
    return parsed;
  }
*/

  /*
  function makeInt(n) {
    if (Number.isNaN(n)) {
      return 'Number NaN';
    }
    if (isNaN(n)) {
      return 'NaN';
    }
  }

   if (Number.isNaN(n)) {
        return true;
      }

/*
  function makeInt(n, base) {
    const parsed = Number.parseInt(n, 10);
    if (Number.isNaN(parsed)) {
      return 0;
    }
    return parsed;
  }

  function makeInt(n, base) {
    const parsed = Number.parseInt(n, base);
    if (Number.isNaN(parsed)) {
      return 0;
    }
    return parsed;
  }

/*
function makeInt(n) {
    return parseInt("n", 10);
    }

function makeInt(n) {
    return parseInt("0x2328", 10);
}
*/


/*
function makeInt(n) {
    return parseInt("n", 10);
}
    
*/

/*
function preserveDecimal(string) {
    return parseFloat("80.123999");
}
*/


