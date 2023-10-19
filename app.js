

const search=document.getElementsByClassName('nput')[0]


const storydiv=document.getElementsByClassName('postwritin')[0]


const botmposst=document.getElementsByClassName('img')[0]

const post=document.getElementsByClassName('poste')[0]

const photo=document.querySelector('#photo')

const postbtn=document.getElementsByClassName('none')[0]

postbtn.addEventListener('click',()=>{
    const input=post.value;

    const h2=document.createElement('h2')

    h2.classList.add('hh2')
    h2.innerHTML=input;

    storydiv.appendChild(h2)

    post.value=""

})

// let index = 0
photo.addEventListener('click',()=>{
    const card = photo.parentElement.parentElement;

    const imgtag=document.createElement('img')

    imgtag.classList.add('images')

    imgtag.src= URL.createObjectURL(photo.files[0]) 

    botmposst.appendChild(imgtag)
    // botmposst.style.backgroundImage = `url(${URL.createObjectURL(photo.files[0])})` 

    



    

  
})




