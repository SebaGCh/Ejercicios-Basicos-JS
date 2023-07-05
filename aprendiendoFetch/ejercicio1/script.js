
// funcion para consultar los datos
let itemsContainer = document.getElementById("users");

function fetchDatos() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.data.length; i++) {
                addUser(json.data[i]);
            }
        })
        .catch(err => console.log("solicitud fallida", err));
}
// inyectar datos en el html (DOM)
function addUser(user) {
    const inyectarHTML = 
    `<div class="col-lg-2">
        <div class="card">
            <img src="${user.avatar}" class="card-img-top" alt="Avatar">
            <div class="card-body" data_id="${user.id}">
                <h3 class="card-title"> ${user.first_name} ${user.last_name} </h3>
                <p class="card-text"> ${user.email} </p>
            </div>
        </div>
    </div>
    <br/>`;
     
    itemsContainer.innerHTML += inyectarHTML;

}