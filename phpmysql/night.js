function night(){
    if(document.querySelector('input').value === 'night'){
        document.querySelector('body').style.color='white';
        document.querySelector('body').style.backgroundColor='black';
        document.querySelector('input').value = 'day';
        for(let i=0;i<document.querySelectorAll('a').length;i++){
            document.querySelectorAll('a')[i].style.color='tomato';
        }
    }else if(document.querySelector('input').value === 'day'){
        document.querySelector('body').style.color='black';
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('input').value = 'night';
        for(let i=0;i<document.querySelectorAll('a').length;i++){
            document.querySelectorAll('a')[i].style.color='blue';
        }
    }
} 