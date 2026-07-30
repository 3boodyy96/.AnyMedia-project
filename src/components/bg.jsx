function Bg({className}) {
    return (
    <div
        className={`
        w-full h-full
        bg-[url('/src/assets/background.png')] bg-cover bg-center bg-no-repeat
        absolute inset-0
        ${className ?? ""}
    `}
    />
    );
}

export default Bg;
