

function guardar () {
  var nuevoRegistro = [],
  nombre = '',
  cel = '',
  mail = '',
  mensaje = '';


  nombre = document.getElementById("input-nombre").value;
  cel = document.getElementById("input-cel").value;
  mail = document.getElementById("input-mail").value;
  mensaje = document.getElementById("input-mensaje").value;


  localStorage.setItem("nombre", JSON.stringify(nombre));
  localStorage.setItem("celular", JSON.stringify(cel));
  localStorage.setItem("mail", JSON.stringify(mail));
  localStorage.setItem("mensaje", JSON.stringify(mensaje));

}




Swal.fire({
  title: 'Queres subscribirte a nuestro newsletter?',
  input: 'email',
  inputPlaceholder: 'Ingresa tu direccion de mail',
  confirmButtonText: 'Suscribirme',
  showCancelButton: true,
  cancelButtonText: 'En otra oportunidad'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Bienvenido!', '', 'success')
  } 
})

