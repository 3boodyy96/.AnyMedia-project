function Frame({ w = "auto", h = "auto", items = [] }) {
    return (
        <div id="container" className="relative inline-block" style={{ width: w, height: h }}>
            <img
                src="./src/assets/frame.png"
                alt="Frame"
                style={{ width: w, height: h }}/>
            <div className="absolute inset-0 p-4">
                {items}
            </div>
        </div>
    );
}

export default Frame;