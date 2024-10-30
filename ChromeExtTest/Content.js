// automaticaly update the Currentprice in limitprice
async function autoFilLimitPrice(){
    
    let currentPrice = document.querySelector('.depth_priceGap__d2UP4')?.childNodes[0]?.nodeValue?.trim();
    if(currentPrice != null && currentPrice !=0){
        let currentPriceval = 1;
        if( document.getElementById('pos12Limit')){
            currentPriceval = currentPrice.substring(1,currentPrice.length);
            document.getElementById('pos12Limit').value = Number(currentPriceval);
        }
         console.log(`price applied ${currentPriceval}, currentValue ${document.getElementById('pos12Limit').value}`);
    }
}

setInterval(autoFilLimitPrice,200);