function solve() {
   const buttonElements = document.querySelectorAll('.add-product');
   const textareaElement = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('.checkout');

   let totalSum = 0;
   const list = [];

   for (const buttonEl of buttonElements) {
      buttonEl.addEventListener('click', (event) => {
         const name = buttonEl.parentElement.parentElement.querySelector('.product-title').textContent;
         const money = Number(buttonEl.parentElement.parentElement.querySelector('.product-line-price').textContent);
         
         totalSum += money;
         
         if (!list.includes(name)) {
            list.push(name);
         }
         
         textareaElement.textContent += `Added ${name} for ${money.toFixed(2)} to the cart.\n`;
      })
   }

   checkoutButtonElement.addEventListener('click', (event) => {
      textareaElement.textContent += `You bought ${list.join(', ')} for ${totalSum.toFixed(2)}.`
      checkoutButtonElement.setAttribute('disabled', 'disabled');

      for (const butEl of buttonElements) {
         butEl.setAttribute('disabled', 'disabled');
      }
   })
}