import { useRef, useState } from "react";
import { CloseSVG } from "./CloseSVG";

const emptyValArr = Array.from({ length: 4 });

function ProductImagesComp() {
    const [imgSelected, setImgSelected] = useState(1);
    const lightboxRef = useRef(null);

    const changeImageArrow = (type) => {
        switch (type) {
            case "prev":
                if (imgSelected === 1) {
                    setImgSelected(4);
                } else {
                    setImgSelected((curr) => curr - 1);
                }
                break;
            case "next":
                if (imgSelected === 4) {
                    setImgSelected(1);
                } else {
                    setImgSelected((curr) => curr + 1);
                }
                break;
            default:
                console.error("image not found");
        }
    };

    const foregroundClick = () => {
        lightboxRef.current.classList.add("md:flex");
    };

    return (
        <>
            <section className="md:w-1/2 md:p-16 w-full">
                <ImageForeground
                    onClick={foregroundClick}
                    imgSelected={imgSelected}
                    showArrow="false"
                    changeImage={changeImageArrow}
                />
                <Thumbnails
                    imgSelected={imgSelected}
                    setImgSelected={setImgSelected}
                />
                <Lightbox
                    lightboxRef={lightboxRef}
                    imgSelected={imgSelected}
                    setImgSelected={setImgSelected}
                    changeImageArrow={changeImageArrow}
                />
            </section>
        </>
    );
}

function ImageForeground({
    imgSelected,
    changeImage,
    onClick,
    className,
    showArrow,
}) {
    return (
        <div
            onClick={onClick}
            className={`${className} h-[340px] md:max-w-[450px] md:h-auto  relative cursor-zoom-in`}
        >
            <IconArrow
                onClick={() => changeImage("prev")}
                className={`rotate-180 md:!-left-6 !left-4 ${
                    showArrow && "md:hidden"
                }`}
            />
            <img
                className="object-cover w-full h-full md:rounded-3xl select-none"
                src={`/images/image-product-${imgSelected}.jpg`}
                alt={`image-product-1`}
            />
            <IconArrow
                className={`${showArrow && "md:hidden"} md:!-right-6`}
                onClick={() => changeImage("next")}
            />
        </div>
    );
}

function Thumbnails({ imgSelected, setImgSelected }) {
    return (
        <div className="hidden md:flex max-w-[450px] mt-6 gap-6 cursor-pointer">
            {emptyValArr.map((el, i) => (
                <div
                    key={i}
                    onClick={() => setImgSelected(i + 1)}
                    className={`${
                        imgSelected === i + 1 && "border-2 border-orange-500"
                    } relative rounded-xl overflow-hidden`}
                >
                    <div
                        className={`${
                            imgSelected === i + 1 && " !opacity-100"
                        } absolute bg-white/50 inset-0 opacity-0 hover:opacity-100`}
                    ></div>
                    <img
                    className="select-none"
                        src={`/images/image-product-${i + 1}-thumbnail.jpg`}
                        alt={`image-product-${i + 1}-thumbnail`}
                    />
                </div>
            ))}
        </div>
    );
}

function Lightbox({
    lightboxRef,
    imgSelected,
    setImgSelected,
    changeImageArrow,
}) {
    const closeLightbox = () => {
        lightboxRef.current.classList.remove("md:flex");
    };
    return (
        <div
            ref={lightboxRef}
            className="hidden bg-black/80 fixed inset-0 justify-center flex-col items-center z-10"
        >
            <CloseSVG
                className={
                    "cursor-pointer box-content p-2 translate-x-[245px] mb-3"
                }
                onClick={closeLightbox}
                fill="#ffffff"
            />
            <ImageForeground
                className={"!max-w-[500px] !cursor-default"}
                imgSelected={imgSelected}
                changeImage={changeImageArrow}
            />
            <Thumbnails
                imgSelected={imgSelected}
                setImgSelected={setImgSelected}
            />
        </div>
    );
}

function IconArrow({ className, onClick }) {
    const [stroke, setStroke] = useState("#1D2026");

    const handleHover = (e) => {
        switch (e.type) {
            case "mouseenter":
                setStroke("#f97316");
                break;
            case "mouseleave":
                setStroke("#1D2026");
                break;
            default:
                setStroke("#1D2026");
        }
    };

    return (
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={onClick}
            className={`${className} bg-white w-12 h-12 flex items-center justify-center rounded-full absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer scale-90 hover:scale-100`}
        >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m2 1 8 8-8 8"
                    stroke={stroke}
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                />
            </svg>
        </div>
    );
}

export default ProductImagesComp;
