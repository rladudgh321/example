let Body = {
    setColor : function (color){
        document.querySelector('body').style.color=color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}

let Link = {
    setColor : function(color){
        for(let i=0;i<document.querySelectorAll('a').length;i++){
            document.querySelectorAll('a')[i].style.color=color;
        }
    }
}

function dayNightHandler(){
    if(this.value==='night'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        this.value = 'day';
        Link.setColor('pink');
    }else{
        Body.setColor('black');
        Body.setBackgroundColor('white');
        this.value = 'night';
        Link.setColor('red');
    }
}