document.querySelector("#main").addEventListener('click' ,(e)=>{
console.log(e.target.id)
window.location.href="/"+e.target.id
})