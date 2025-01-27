import { useState } from "react";

export function CloseSVG({ className, fill = "#69707D", onClick }) {
    const [hoverFill, setHoverFill] = useState(fill);
    const handleHover = (e) => {
        switch (e.type) {
            case "mouseenter":
                setHoverFill("#f97316");
                break;
            case "mouseleave":
                setHoverFill(fill);
                break;
            default:
                setHoverFill(fill);
        }
    };
    return (
        <svg
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={onClick}
            className={className}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill={hoverFill}
                fillRule="evenodd"
            />
        </svg>
    );
}
