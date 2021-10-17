function enviarDatos() {
    let name = document.getElementById("InputName").value;
    let surname = document.getElementById("InputSurName").value;
    let email = document.getElementById("InputEmail").value;
    let password = document.getElementById("InputPassword").value;
    let repeatPassword = document.getElementById("InputRepeatPassword").value;

    let confirmado
    let iguales

    if (name === "" || surname === "" || email === "" || password === "" || repeatPassword === "") {
        window.alert("Cannot have empty fields")
    } else if (password !== repeatPassword) {
        window.alert("The passwords are different")
        document.getElementById("InputPassword").value="";//limpiamos
        document.getElementById("InputRepeatPassword").value="";//limpiamos
    } else {
        confirmado = window.confirm("Are your details correct?\nName:" + name + "\nSurname: " + surname + "\nEmail: ");
        if (confirmado) {

            window.alert("Wellcome " + name + "!!!")
        } else {
            window.alert("You have canceled")
        }
    }


 
}
        
