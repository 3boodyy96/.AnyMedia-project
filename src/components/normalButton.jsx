function NormalButton({ width = width, height = height }) {
    return (
        <div
            id="container"
            className="
            relative
        "
        >
            <button
                className="
                normalButton
                w-${width} h-${height}
                p-3
                text-white text-lg break-after-all
                bg-radial-[at_50%_100%] from-green-400 to-green-800 to-80%
                rounded-lg
                cursor-pointer
                items-center
                justify-center
                hover:brightness-125 
                transition duration-500 
                after:justify-center after:items-center after:absolute after:inset-x-0 after:top-1/5 after:h-1/3 after:w-full after:bg-gradient-to-t after:from-white/20 after:to-transparent after:rounded-b-full after:content-['']
            "
            >
                im a button
            </button>
        </div>
    );
}

export default NormalButton;
