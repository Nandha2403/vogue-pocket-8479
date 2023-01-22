let data=JSON.parse(localStorage.getItem("singindata"))||[];

let form=document.querySelector("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let signdata={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
        conpassword:form.confirmPassword.value
    }
    console.log(signdata);
    data.push(signdata);
    localStorage.setItem("singindata",JSON.stringify(data));
})