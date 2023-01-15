const form=document.querySelector('form')
const input=document.querySelector('input')
const image=document.querySelector('img')
const select=document.querySelector('select')
// const ima=document.querySelector('.first')
// console.log(size.value)

form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let size=select.value
    const response=await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${input.value}`)
    const data= response.url
    // console.log(data)
    showdata(data);
})

function showdata(data){
     image.setAttribute('src',data);
    // let im=document.createElement('img')
    // im.setAttribute("src",data);
    // ima.appendChild(im)


    console.log(data)

}