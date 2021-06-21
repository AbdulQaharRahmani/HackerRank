"use strict";
// this is a much better solution in c++ from discussion form
/*
    int main() {
    std::stack<int> st;
    int n, x;
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        int q;
        scanf("%d", &q);

        switch (q)
        {
        case 1:
            scanf("%d", &x);

            if (st.empty()) {
                st.push(x);
            }
            else {
                st.push(max(x, st.top()));
            }
            break;

        case 2:
            if (!st.empty()) {
                st.pop();
            }
            break;

        case 3:
            printf("%d\n", st.top());
            break;

        default:
            break;
        }
    }

    return 0;
}



*/
const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */
class Stack {
  constructor() {
    this.length = 0;
    this.array = [];
  }
  push(value) {
    this.array.push(value);
    this.length++;
  }
  pop() {
    if (!this.isEmpty()) {
      this.length--;
      return this.array.pop();
    }
    return null;
  }
  peak() {
    return this.array[this.length - 1];
  }
  isEmpty() {
    if (this.length <= 0) {
      return true;
    }
    return false;
  }
}
class Node {
  constructor(index, value) {
    this.index = index;
    this.value = value;
  }
  getIndex() {
    return this.index;
  }
  getValue() {
    return this.value;
  }
}
function getMax(operations) {
  // Write your code here
  const result = [];

  const stack = new Stack();
  const node = new Node(-1, Number.MIN_SAFE_INTEGER);
  stack.push(node); // adding minimum number as maximum to stack
  let added = [];
  for (let i = 0; i < operations.length; i++) {
    const str = operations[i].split(" ");
    switch (str[0]) {
      case "1":
        if (Number.parseInt(str[1]) >= stack.peak().getValue()) {
          const temp = new Node(i, Number.parseInt(str[1]));
          stack.push(temp);
          added.push(true);
        } else {
          added.push(false);
        }
        break;
      case "2":
        if (added.pop()) {
          stack.pop();
        }
        break;
      case "3":
        result.push(stack.peak().getValue());
        break;
    }
  }
  console.log(stack);
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let ops = [];

  for (let i = 0; i < n; i++) {
    const opsItem = readLine();
    ops.push(opsItem);
  }

  const res = getMax(ops);

  ws.write(res.join("\n") + "\n");

  ws.end();
}
