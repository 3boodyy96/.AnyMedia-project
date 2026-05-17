function AudioCard({ ChannelLink, AudioLink, Thumbnail, AudioName, ChannelName }) {
    return (
        <div id='container' className="flex items-center justify-center">
            <div className="card rounded-bottom-5 rounded-top-2 bg-gradient-to-b from-zinc-500 to-zinc-400 w-72 overflow-hidden shadow-lg">
                <div id='card-content' className="flex flex-col justify-center pt-3.5 p-2.5">
                    {/* Clicking thumbnail opens audio */}
                    <a href={AudioLink} target="_blank" rel="noreferrer" className="text-decoration-none">
                        <img src={Thumbnail} className="card-img-top aspect-square object-cover w-full rounded-4 bg-neutral-800" alt="Thumbnail" />
                    </a>
                    <div className="card-body text-left flex flex-col">
                        <a href={AudioLink} target="_blank" rel="noreferrer" className="text-decoration-none">
                            <p className="font-semibold text-white m-0" id="Audio-name">{AudioName}</p>
                        </a>
                        <a href={ChannelLink} target="_blank" rel="noreferrer" className="text-decoration-none">
                            <p className="text-sm text-zinc-200 m-0" id="Channel-name">{ChannelName}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AudioCard