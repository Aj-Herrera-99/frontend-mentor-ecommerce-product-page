import { useReducer } from "react";

const quantityReducer = (state, action) => {
    switch (action.type) {
        case "dec":
            if (state === 0) return state;
            return state - 1;
        case "inc":
            return state + 1;
    }
};

function ProductDescComp() {
    const [quantity, dispatchQuantity] = useReducer(quantityReducer, 0);

    return (
        <section className="p-6 md:w-1/2 place-content-center">
            {/* text */}
            <h2 className="uppercase font-bold tracking-widest text-gray-500">
                sneaker company
            </h2>
            <h1 className="mt-3 mb-5 capitalize text-3xl font-bold">
                fall limited edition sneakers
            </h1>
            <p className="text-gray-400 [word-spacing:3px] font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                sed ea, accusantium deleniti soluta rem. Dolorum ullam dolores
                incidunt nostrum.
            </p>
            {/* pricing */}
            <div className="my-6 flex md:flex-col md:items-start gap-2 items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold">$125.00</span>
                    <span className="py-1 px-3 rounded-md bg-black text-white">
                        50%
                    </span>
                </div>
                <s className="text-gray-400 text-lg font-bold">$250.00</s>
            </div>
            {/* add to cart */}
            <div className="flex flex-col md:flex-row gap-5 select-none">
                <div className="bg-gray-200/80 p-4 rounded-lg flex justify-between px-6 items-center font-bold text-xl md:w-2/5">
                    <MinusSVG
                        quantity={quantity}
                        onClick={() => dispatchQuantity({ type: "dec" })}
                    />
                    <span>{quantity}</span>
                    <PlusSVG
                        onClick={() => dispatchQuantity({ type: "inc" })}
                    />
                </div>
                <button
                    onClick={() => dispatchQuantity({ type: "inc" })}
                    className="bg-orange-500 p-4 rounded-lg font-bold text-lg flex items-center justify-center gap-4 md:grow"
                >
                    <CartSVG
                        fill="
                        #000000"
                    />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
}

function MinusSVG({ onClick, quantity }) {
    return (
        <button
            disabled={quantity === 0}
            className={`${
                quantity === 0 && "!cursor-not-allowed"
            } scale-125 cursor-pointer py-2 hover:scale-150`}
            onClick={onClick}
        >
            <svg
                width="12"
                height="4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <defs>
                    <path
                        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                        id="a"
                    />
                </defs>
                <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
        </button>
    );
}

function PlusSVG({ onClick }) {
    return (
        <div
            className="scale-125 cursor-pointer py-2 hover:scale-150"
            onClick={onClick}
        >
            <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <defs>
                    <path
                        d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                        id="b"
                    />
                </defs>
                <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
            </svg>
        </div>
    );
}

function CartSVG({ fill = "#69707D" }) {
    return (
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill={fill}
                fillRule="nonzero"
            />
        </svg>
    );
}

export default ProductDescComp;
