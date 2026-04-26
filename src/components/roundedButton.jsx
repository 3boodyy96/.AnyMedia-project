function RoundedButton({ imgSrc, altText = "Button Icon"}) {
  return (
    <div id="container">
      <div
        id="button-light"
        className="
          w-f h-fit
          bg-radial-[at_50%_100%]  from-white to-80% to-transparent
          rounded-full
          absolute top-5 left-0
          z-10
          hover:brightness-125 transition duration-500
          "
          >
      <button
        className="
        flex
        w-50 h-50
        text-white text-lg
        bg-radial-[at_50%_100%] from-green-400 to-green-800 to-80%
        rounded-full
        cursor-pointer
        items-center justify-center before:absolute before:top-2 before:h-1/3 before:w-40 before:bg-gradient-to-b before:from-white/40 before:to-transparent before:rounded-t-full before:rounded-b-sm before:content-[''] after:justify-center after:items-center after:absolute after:inset-x-0 after:top-1/2 after:h-1/3 after:w-40 after:bg-gradient-to-t after:from-white/20 after:to-transparent after:rounded-b-full after:content-[''] break-after-all
        "
      >
        <img src={imgSrc} alt={altText} className="size-25 ml-4 hover:brightness-125 transition duration-300 cursor-pointer
"/>
      </button>
    </div>
  </div>
  );
}

export default RoundedButton;