let arr=
        ["https://cdn.shopclues.com/images/banners/2023/Jan/18/HB1_GRDS_Web_NCP_18Jan23.jpg","https://cdn.shopclues.com/images/banners/2023/Jan/15/HB5_Asus_Web_Riya_15Jan22.jpg","https://cdn.shopclues.com/images/banners/2023/Jan/18/Jdd_HB3_Web_Riya_18Jan23.jpg","https://cdn.shopclues.com/images/banners/2023/Jan/18/HB4_JMAX_Web_Esha_18Jan23.jpg"]
        // adslideshow(arr)
function adslideshow(arr){
    let c=0;
    let ads=document.getElementById("imgads");
    let img=document.createElement("img");
    setInterval(()=>{
        if(c==arr.length){
            c=0;
        }
        img.src=arr[c]
        ads.append(img)
            c++;
    },4000)
}

let Electronics=document.getElementById("Electronics");
Electronics.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./Electronics.html";
})

let Men=document.getElementById("Men")
Men.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./men.html";
})
let Women=document.getElementById("Women");
Women.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./women.html";
})

let Kitchen=document.getElementById("Kitchen");
Kitchen.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./Kitchen.html";
})

let Appliances=document.getElementById("Appliances");
Appliances.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./Appliances.html";
})
let Sports=document.getElementById("Sports");
Sports.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./Sports.html";
})

let Essentials=document.getElementById("Essentials");
Essentials.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./Essentials.html";
})

let Offers=document.getElementById("Offers");
Offers.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./Offers.html";
})

let Global=document.getElementById("Global");
Global.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./Global.html";
})


let CartPage=document.getElementById("CartPage");

CartPage.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="./CartPage.html";
})





