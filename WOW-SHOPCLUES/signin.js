let data=JSON.parse(localStorage.getItem("singindata"));
let form=document.querySelector("form");
form.addEventListener("submit",submit)
    
    function submit(event){
        event.preventDefault();
    let email=form.email.value;
    let password=form.password.value;
    console.log(email,password);
    function submit(data){
        data.forEach((el) => {
            if(el.email==email && el.password==password){
                alert("Login Success")
                window.location.href="./index.html"
                
            }else{
                alert("Wrong Credentials")
                window.location.href="./signin.html"
            }
        });
    }
    submit(data)
    }