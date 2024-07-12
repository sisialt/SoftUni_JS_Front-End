/*function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchFieldElement = document.getElementById('searchField');
      const tableElements = document.querySelectorAll('table tbody td');

      const searchedText = searchFieldElement.value;
      
      for (const el of tableElements) {
         if (el.textContent.includes(searchedText)) {
            el.parentElement.classList.add('select');
         };
      };
   };
} ne razmarkira */ 

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('table.container tbody tr');
      const searchFieldElement = document.getElementById('searchField');
      const searchText = searchFieldElement.value;
      
      for (const trElement of trElements) {
         const tdElements = trElement.querySelectorAll('td');
         let isSelected = false;

         trElement.classList.remove('select');
         
         for (const tdElement of tdElements) {
            // TODO: Check case sensitivity
            if (tdElement.textContent.includes(searchText)) {
               isSelected = true;
               break;
            }
         }

         if (isSelected) {
            trElement.className = 'select';
            // trElement.classList.add('select');
         }
      }
      
      // Clear old data
      searchFieldElement.value = '';
   }
}