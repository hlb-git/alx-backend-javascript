function calculateNumber(type, a, b) {
    const first = Math.round(a);
    const second = Math.round(b);
    let result = 0;
    switch (type) {
    case 'SUM':
	result = first + second;
	break;
    case 'SUBTRACT':
	result = first - second;
	break;
    case 'DIVIDE':
      if (second === 0) {
            result = "Error";
      } else {
            result = first / second;
      }
      break;
    }
    return result;
}

module.exports = calculateNumber;
