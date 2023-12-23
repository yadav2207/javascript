// let antarctic=document.createElement('img')

// antarctic.setAttribute('src','image/antarctic.jpeg')
// antarctic.setAttribute('height','500px')
// antarctic.setAttribute('width','400px')
// antarctic.setAttribute('border','10px black')

// document.body.appendChild(antarctic)

// console.log(antarctic)

// let days=document.createElement('d2')

// days.setAttribute('day3' ,'wednesday') 
// days.setAttribute('day4' ,' thursday')
// days.setAttribute('day5' ,' Friday')
// days.setAttribute('day6' ,' saturday')
// days.setAttribute('day7' ,' sunday')

// document.body.appendChild(days)

// console.log(days)

function appendLi(){
    var ul = document.getElementById('lang')
    var li =document.createElement('li')
    var text =document.createTextNode('wednesday'); 
   

    li.appendChild(text);
    ul.appendChild(li);
    var ul = document.getElementById('lang')
    var li =document.createElement('li')
    var text =document.createTextNode('thursday');    
    li.appendChild(text);
    ul.appendChild(li);

    var ul = document.getElementById('lang')
    var li =document.createElement('li')
    var text =document.createTextNode('friday');    
    li.appendChild(text);
    ul.appendChild(li);

    var ul = document.getElementById('lang')
    var li =document.createElement('li')
    var text =document.createTextNode('saturday');    
    li.appendChild(text);
    ul.appendChild(li);

    var ul = document.getElementById('lang')
    var li =document.createElement('li')
    var text =document.createTextNode('sunday');    
    li.appendChild(text);
    ul.appendChild(li);

}