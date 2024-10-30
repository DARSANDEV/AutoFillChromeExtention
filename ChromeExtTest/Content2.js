// let currentPrice = document.querySelector('.depth_priceGap__d2UP4')?.childNodes[0]?.nodeValue?.trim();
//     if(currentPrice != null && currentPrice !=0){
//         let currentPriceval = 1;
//         if( document.getElementById('pos12Limit')){
//             currentPriceval = currentPrice.substring(1,currentPrice.length);
//             document.getElementById('pos12Limit').value = Number(currentPriceval);
//         }
//          console.log(`price applied ${currentPriceval}, currentValue ${document.getElementById('pos12Limit').value}`);
//     }
let div = '.depth_priceGap__d2UP4', inputCol='pos12Limit';
   
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.executeScript(tabs[0].id, {
              code: `
                const divElement = document.querySelector('${div}')?.childNodes[0]?.nodeValue?.trim();
                const inputElement = document.querySelector('${inputCol}');
      
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' || mutation.type === 'attributes') {
                      inputElement.value = divElement.textContent.substring(1);
                    }
                  });
                });
      
                observer.observe(divElement, { childList: true, attributes: true });
      
                inputElement.value = divElement.textContent;
              `
            }, (result) => {
              if (chrome.runtime.lastError) {
                console.error("Error executing script:", chrome.runtime.lastError);
              } else {
                console.log("Value pasted successfully");
              }
            });
          });

   
