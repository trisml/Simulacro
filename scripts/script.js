document.getElementById("Boton").addEventListener("click", function (event) {
  const nombre = document.getElementById("nombre");

  const apel = document.getElementById("apel");
  const correo = document.getElementById("correo");
  const contraseña = document.getElementById("contraseña");

 
  const alerta = (nombre, apel, correo, contraseña) => {
    if (
      nombre != "" &&
      apel != "" &&
      correo != "" &&
      contraseña.trim().length >= 8
    ) {
      alert("Has completado correctamente el funcionario");
    } else {
      alert(
        "Tu contraseña es menor de 8 o no has completado correctamente el formulario"
      );
    }
  };
  
  alerta(nombre.value,apel.value , correo.value, contraseña.value)

})