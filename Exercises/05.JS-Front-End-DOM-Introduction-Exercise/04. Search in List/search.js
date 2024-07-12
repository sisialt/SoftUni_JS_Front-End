function search() {
   const townsElements = document.querySelectorAll('#towns li');
   const searchedTextElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   let matches = 0;
   const searchText = searchedTextElement.value;

   for (const el of townsElements) {
      el.style.textDecoration = 'none';
      el.style.fontWeight = 'normal';

      if (el.textContent.includes(searchText)) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         matches += 1;
      };
   };

   resultElement.textContent = `${matches} matches found`;
}
