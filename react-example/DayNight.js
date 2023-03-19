export default function DayNight(){
    if(document.querySelector('#DN').value === 'night'){
        document.querySelector('body').style.backgroundColor="black";
        document.querySelector('body').style.color="white";
    }else if(document.querySelector('#DN').value === 'day'){
        document.querySelector('body').style.backgroundColor="white";
        document.querySelector('body').style.color="black";
    }
}