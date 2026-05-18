function NormalButton({ w, h, text, onClick, id, className, imgSrc }) {
    return (
        <div
            id={id}
            className="
            relative
        "
        >
            <button
                onClick={onClick}
                style={{ width: w, height: h }}
                className={`
                normalButton relative overflow-hidden p-3
        text-white text-lg
        bg-radial-[at_50%_100%] from-green-400 to-green-800 to-80%
        rounded-2 cursor-pointer translate-y-3
        hover:brightness-125 transition duration-500
        after:content-[''] after:absolute after:inset-x-0 after:top-0
        after:h-6/10 after:w-full
        after:bg-gradient-to-b after:from-white/50 after:to-white/0
        after:rounded-t-lg after:pointer-events-none
        transition-all after:duration-500
        ${className ?? ""}
            `}
            >
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt={text}
                        className="
                    mt-2
                "
                    />
                )}
                {text}
            </button>
        </div>
    );
}

export default NormalButton;
