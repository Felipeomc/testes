const URL_USUARIOS =
    'https://jsonplaceholder.typicode.com/users';

async function buscarUsuarios() {
    const resposta = await fetch(URL_USUARIOS);

    if (!resposta.ok) {
        throw new Error('Não foi possível buscar os usuários');
    }

    return resposta.text();
}

module.exports = {
    buscarUsuarios
};
