function HomePageBtn({scale=scale,url=url}) {
    return (
        <div id="container">
            <div className="flex flex-row items-center justify-center hover:brightness-110 transition duration-500">
                <a href={`${url}`}>
                    <img src="../src/assets/home-page-btn.png" alt="Website Icon" className={`${scale ?? ''}`}/>
                </a>
            </div>
        </div>
    )
}

export default HomePageBtn;