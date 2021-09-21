
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=HRuaimwIgGDAP5F40j7GUrRNfRufawbd`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(images => {
        return {
            id: images.id,
            title: images.title,
            url: images.images.downsized_medium.url
        }
    });

    return gifs;

}