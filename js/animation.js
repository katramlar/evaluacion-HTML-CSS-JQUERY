function login(){
    if(document.getElementById("usuario").value === "admin" & document.getElementById("passwd").value === "admin"){
        onclick="document.getElementById('id01').style.display='none'";
        swal("Ingreso autorizado", "Bienvenido ADMIN usted ha ingresado correctamente", "success");
        return false;
    }
    else{
        onclick="document.getElementById('id01').style.display='none'";
        swal("Ingreso denegado", "Las credenciales que ingreso no son correctas", "error");
        return false;
    }
}

function logout(){
    swal("Te has desconectado", "Nos vemos pronto!", "success")
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }