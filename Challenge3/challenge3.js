// function to calculate payee

//takes in pay and calculates the payee based on the conditions
function payee(pay) {
  if (pay <= 24000) {
    return console.log(pay * 0.1);
  } else if (pay >= 24001 && pay <= 32333) {
    return console.log(pay * 0.25);
  } else if (pay >= 32334 && pay <= 500000) {
    return console.log(pay * 0.3);
  } else if (pay >= 500001 && pay <= 800000) {
    return console.log(pay * 0.325);
  } else if (pay >= 800000) {
    return console.log(pay * 0.35);
  } else {
    return console.log("invalid value");
  }
}
payee(500200);

// function to calculate nssf deductions
function rates(tier) {
  if (tier <= 6000) {
    return console.log("tier1:", tier * 0.06);
  }
  if (tier >= 6001 && tire <= 18000) {
    return console.log("tier2:", tier * 0.06);
  }
}
rates(3000);
