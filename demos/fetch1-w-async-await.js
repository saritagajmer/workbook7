async function loadUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
}
loadUser()
