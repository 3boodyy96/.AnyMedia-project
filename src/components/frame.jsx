function Frame({ w = "auto", h = "auto", items = [], responsive = "" }) {
    return (
        <div
            className={`relative inline-block ${responsive}`}
            style={{ width: w, height: h }}
        >
            <img
                src="./src/assets/frame.png"
                alt="Frame"
                className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                {items}
            </div>
        </div>
    );
}
export default Frame;