document.getElementById('btn-mobile-minus').addEventListener('click',function(){
    const mobilecounter = document.getElementById('mobile-input');
    const counterString= mobilecounter.value;
    const counter = parseInt(counterString);
    
    const newCounterValue = counter - 1;
    mobilecounter.value = newCounterValue;
    
    const previusmobileTotal = document.getElementById('mobile-total');
    const previusmobileTotalString= previusmobileTotal.innerText;
    const mobileTotalValue = parseInt(previusmobileTotalString);
    
    const newmobileTotal = 1200 * newCounterValue ;
     previusmobileTotal.innerText = newmobileTotal;
    
    
    })
    
    document.getElementById('btn-cover-plus').addEventListener('click', function(){
        const covercounter = document.getElementById('cover-input');
        const counterString= covercounter.value;
        const counter = parseInt(counterString);
         
        const newCounterValue = counter + 1;
        covercounter.value = newCounterValue;
        
        const previuscoverTotal = document.getElementById('cover-total');
    const previuscoverTotalString= previuscoverTotal.innerText;
    const coverTotalValue = parseInt(previuscoverTotalString);
    
    const newcoverTotal = 60 * newCounterValue ;
     previuscoverTotal.innerText = newcoverTotal;
    })
    
    