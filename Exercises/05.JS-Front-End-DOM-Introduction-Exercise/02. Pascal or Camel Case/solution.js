function solve2() {
  const textElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.querySelector('#result');

  const text = textElement.value;
  const namingConvention = namingConventionElement.value;

  const convertToPascalCase = (text) =>
    text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');

  const convertor = {
    'Pascal Case': convertToPascalCase,
    'Camel Case': (text) => convertToPascalCase(text).charAt(0).toLowerCase() + convertToPascalCase(text).slice(1)
  };

  if (!convertor[namingConvention]) {
    resultElement.textContent = 'Error!';
    return;
  }

  resultElement.textContent = convertor[namingConvention](text);
}


function solve() {
  const textElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.getElementById('result');

  const result = [];
  const text = textElement.value.toLowerCase();  
  const textArr = text.split(' ');

  if (namingConventionElement.value === 'Camel Case') {
    result.push(textArr[0]);
    addChangedTextToResult(1);

  } else if (namingConventionElement.value === 'Pascal Case') {
    addChangedTextToResult(0);
  };

  if (result.length === 0) {
    resultElement.textContent = 'Error!';
  } else {
    resultElement.textContent = result.join('');
  };

  function addChangedTextToResult(startIndex) {
    for (let i = startIndex; i < textArr.length; i++) {
      const word = textArr[i];
      const wordToPush = word.substring(0, 1).toUpperCase() + word.substring(1);

      result.push(wordToPush);
    };
  };
}