import React, { useState, useEffect} from "react";
import "./styles.css";

const Scroller = ({ images, pos, closingFunction }) => {
    const [idx, setIdx] = useState(pos);
    const [imageLoading, loadImg] = useState(true);
    const [btn, setBtn] = useState(false);
    const [nxtbtn, setnxtBtn] = useState(false);

    useEffect(() => {
        loadImg(true);
        setBtn(true);
        setnxtBtn(true);

        if (idx <= 0) setBtn(true);
        else setBtn(false);
        if (idx + 1 >= images.length) setnxtBtn(true);
        else {
            setnxtBtn(false);
        }

        // eslint-disable-next-line
    }, [idx]);

    return (
        <div className="wrapper">
            <div className="photo-scroller">

                <button onClick={closingFunction} className="photocross">
                    &#10008;
                </button>

                <button
                    className="prev"
                    onClick={() => setIdx((val) => val - 1)}
                    disabled={btn}
                >
                    &#10096;
                </button>

                <button
                    className="next"
                    onClick={() => setIdx((val) => val + 1)}
                    disabled={nxtbtn}
                >
                    &#10097;
                </button>

                <div className="scroller-photo-wrapper">
                    <img
                        src={images[idx].urls.full}
                        alt={images[idx].urls.alt_description}
                        style={{
                            display: imageLoading ? "none" : "block",
                            objectFit: "contain",
                        }}
                        onLoad={(e) => {
                            loadImg(false);
                        }}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Scroller;
