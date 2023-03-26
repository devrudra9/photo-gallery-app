import React, { useState } from "react";
import { useQuery } from "react-query";
import getArrayOfPhotos from "../AllPhotos";
import Photos from "./Photos";
import PhotoScroller from "./Scroller";
import "./styles.css";

const PhotoGallery = () => {
    const { data } = useQuery(
        "getRandomPhotos",
        getArrayOfPhotos,
        { refetchIntervalInBackground: false }
    );

    const [scrollerPosition, setScrollerPosition] = useState(-1);
    const onClickOnImage = (pos) => setScrollerPosition(pos);


    if (data) {
        if (scrollerPosition !== -1)
            return (
                <PhotoScroller
                    images={data}
                    pos={scrollerPosition}
                    closingFunction={() => setScrollerPosition(-1)}
                />
            );

        return (
            <div className="gallery">
                {data.map((image, idx) => (
                    <Photos
                        key={image.id}
                        src={image.urls.small}
                        onClick={() => onClickOnImage(idx)}
                    />
                ))}
            </div>
        );
    }
};

export default PhotoGallery;
