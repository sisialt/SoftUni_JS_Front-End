/*function solve() {
  const areaElement = document.getElementById('input');
  const outputElement = document.getElementById('output');

  const areaTextAsArr = areaElement.value.split('.');
  const output = [];

  for (let i = 0; i < areaTextAsArr.length; i += 3) {
    let textInParagraph = `${areaTextAsArr[i]}.`;

    if (areaTextAsArr[i + 1]) {
      textInParagraph += `${areaTextAsArr[i + 1]}.`
    }

    if (areaTextAsArr[i + 2]) {
      textInParagraph += `${areaTextAsArr[i + 2]}.`
    }

    const outputText = `<p>${textInParagraph}</p>`;

    output.push(outputText);
  }

  outputElement.innerHTML = output.join('\n');
} not working */

function solve() {
  const outputElement = document.getElementById('output');
  const textareaElement = document.getElementById('input');
  
  const text = textareaElement.value;

  // Convert to paragraphs
  const result = text
      .split('.')
      .filter(sentence => !!sentence)
      .reduce((result, sentence, i) => {
          const resultIndex = Math.floor(i / 3);
          if (!result[resultIndex]) {
              result[resultIndex] = []
          }

          result[resultIndex].push(sentence.trim());

          return result;
      }, [])
      .map(sentences => `<p>${sentences.join('. ')}.</p>`)
      .join('\n');

  // Append to output element
  outputElement.innerHTML = result;
}

