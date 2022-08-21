document.getElementById('btn-mobile-minus').addEventListener('click',function(){
const mobilecounter = document.getElementById('mobile-input');
const counterString= mobilecounter.value;
const counter = parseInt(counterString);

const newCounterValue = counter - 1;
mobilecounter.value = newCounterValue;

const previusMobileTotal = document.getElementById('mobile-total');
const previusMobileTotalString= previusMobileTotal.innerText;
const mobileTotalValue = parseInt(previusMobileTotalString);

const newMobileTotal = 1200 * newCounterValue ;
 previusMobileTotal.innerText = newMobileTotal;


})

document.getElementById('btn-mobile-plus').addEventListener('click', function(){
    const mobilecounter = document.getElementById('mobile-input');
    const counterString= mobilecounter.value;
    const counter = parseInt(counterString);
     
    const newCounterValue = counter + 1;
    mobilecounter.value = newCounterValue;
    
    const previusMobileTotal = document.getElementById('mobile-total');
const previusMobileTotalString= previusMobileTotal.innerText;
const mobileTotalValue = parseInt(previusMobileTotalString);

const newMobileTotal = 1200 * newCounterValue ;
 previusMobileTotal.innerText = newMobileTotal;
})

