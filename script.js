const active = document.querySelector('.active'),
bad = document.querySelector('.bad'),
divin = document.querySelector('.about')

active.addEventListener('click', () => {
    if(divin.innerHTML !== `<div class="about">
    <p class="about-desc" >Это Саша весёлая</p>
    <img class="first-img" src="photo_2023-02-05_21-20-18.jpg" alt="">
</div>`){
        divin.innerHTML = `<div class="about">
    <p class="about-desc" >Это Саша Грустит</p>
    <img class="first-img" src="photo_2023-02-05_21-19-12.jpg" alt="">
</div>`
    }
   
})
bad.addEventListener('click', () => {
    if(divin !== ''){
        divin.innerHTML = `<div class="about">
    <p class="about-desc" >Это Саша весёлая</p>
    <img class="first-img" src="photo_2023-02-05_21-20-18.jpg" alt="">
</div>`
    }
})

    