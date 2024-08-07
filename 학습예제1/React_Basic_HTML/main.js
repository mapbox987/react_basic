let menu = document.querySelectorAll('nav ul li');
console.log(menu);

// menu[0].addEventListener('click',(e)=>{
//     e.preventDefault();
//     alert('클릭1');
// })

menu.forEach((item,idx)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
            alert(`${idx}번째를 클릭했어요.`);
    })
})