function HomePageBtn({scale=scale}) {
    return (
        <div id="container">
            <div className="flex flex-row items-center justify-center">
                <img src="../src/assets/home-page-btn.png" alt="Website Icon" className={`${scale ?? ''}`}/>
            </div>
        </div>
    )
}

export default HomePageBtn;