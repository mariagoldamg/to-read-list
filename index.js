const inputField = document.querySelector (`.inputField`);
const btn = document.querySelector (`.btn`);
const toRead= document.querySelector (`.toRead`);

btn.addEventListener (`click`, ()=> {

const item = document.createElement (`li`);

item.innerText = inputField.value;
if (inputField.value.length===0) {return false};
toRead.appendChild (item);  


item.innerText
item.classList.add (`toReadAdded`);

toRead.appendChild
inputField.value = '';

item.addEventListener (`click`, ()=> {
    item.classList.add (`finished`);

})

item.addEventListener (`dblclick`, ()=> {
    toRead.removeChild (item);
})


})

gsap.from (".header", {
    y:-400,
    opacity:0,
    delay:.2,
    duration:2
  })

  gsap.from (".container", {
    y:-400,
    opacity:0,
    delay:1,
    duration:2
  })
