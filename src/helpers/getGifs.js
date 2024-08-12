export const getGifs = async (category) => {
  const key = "64AjUT58z60bBghHQi0NfSME3RCXHX4N";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log("data", data);
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized.url,
  }));

  return gifs;
};
