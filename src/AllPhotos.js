import { createApi } from "unsplash-js";

const AllPhotos = async () => {
    const unsplash = createApi({
        accessKey: process.env.REACT_APP_ACCESS_KEY,
    });

    var photos = null;

  try {
    photos = await unsplash.photos.getRandom({
      count: 24,
    });
    if (photos.status !== 200) throw Error("wrong data");
  } catch (err) {
    console.log(err.message);
    // sending random images from data.json  beacuse upsplash allows us to make 50 calls in an hour :(
    photos = require(`./components/data.json`);
  }
  return photos.response;
};

export default AllPhotos;
