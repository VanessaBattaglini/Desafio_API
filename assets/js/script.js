//Se hace la llamada a la API
const urlApi = 'https://jsonplaceholder.typicode.com/posts'
let ul = document.getElementById('post-data');

let getPosts = async () => {
    try {
        const respuesta = await fetch(urlApi);
        const data = await respuesta.json();

        let mostrarData = '';
        data.forEach(post => {
            mostrarData += `
            <li><span><b>${post.title}</b></span><span>${post.body}</span></li>
            `

        });
    
        ul.innerHTML = mostrarData;
        
    } catch (e) {
        console.log(e)
    }

};

