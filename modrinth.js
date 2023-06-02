

// fetch('https://api.modrinth.com/v2/project/gravestones')
//     .then((response) => response.json())
//     .then((json) => console.log(json.downloads))


const fetchNow = async () => {
    const result = await axios.get('https://api.modrinth.com/v2/project/gravestones');
    return result.data;
    console.log(result);
};