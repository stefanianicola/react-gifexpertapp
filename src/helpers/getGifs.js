export const getGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=5zedFumxfLh6Njs48EUSiQPqONbsf2ss&q=${encodeURI(category)}&limit=10`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}
