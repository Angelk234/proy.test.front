

document.getElementById('loginForm').addEventListener('submit', function () {
  event.preventDefault(); // Evita que el formulario se envíe

  const nombre = document.getElementById("username").value.trim();
  const contrasenia = document.getElementById("password").value.trim();

  // Validar que los campos no estén vacíos
  if (!nombre || !contrasenia) {
    alert('Por favor rellene los campos');
    return;
  }

  fetch('../resources/test.JSON')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al cargar el JSON: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    //console.log("Usuarios cargados:", data);
    data.forEach(element => {
      if (element.contrasenia == contrasenia || element.nombre === nombre) {
        console.log("si");
      } else {
        console.log("no");
      }
    });

  })
  .catch(error => console.error(error));

  
  document.getElementById('loginForm').reset();
});