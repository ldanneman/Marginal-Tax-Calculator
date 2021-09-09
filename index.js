const usBrackets = [{from: 0, to: 9950, rate: 10},{from: 9951, to: 40535, rate: 12}, {from: 40526, to: 86375, rate: 22}, {from: 86376, to: 164926, rate: 24},{from: 164926, to: 209425, rate: 32},{from: 209426, to: 523600, rate: 35},{from: 523600, to: "~", rate: 37}]



document.querySelector(".submit").addEventListener("click", () => { getTaxAmount(document.querySelector(".input").value, usBrackets);
});

function getTaxAmount(sal, brackets) {
  const sBrackets = brackets.sort((a, b) => a.from > b.from && 1 || -1)
  let taxes = 0;
  for(let i = sBrackets.length - 1; i >= 0; i--) {
    if(sBrackets[i].from > sal) {
      continue;
    } else if (sBrackets[i].from < sal) {
      taxes += Math.round((sal-(sBrackets[i].from)) * (sBrackets[i].rate / 100));
      sal -= (sal - sBrackets[i].from);
    }
  }
  document.querySelector(".result").innerText = taxes
}

