import { useState } from "react";
import Checkbox from "../components/checkbox";
import Bg from "../components/bg";
import Frame from "../components/frame";
import NormalButton from "../components/normalButton";

function VerficationCodePage() {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckbox(value) {
        setIsChecked(value);
        console.log(value ? "checked" : "unchecked");
    }

    return (
        <div className="flex h-svh w-screen overflow-auto z-0 relative p-4">
            <Bg/>
            <Frame
                id="verfPageFrame"
                responsive="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] h-[100%] md:h-[85vh] mx-auto my-auto
                
                "
                items={
                    <div className="flex flex-col gap-6 md:gap-8 px-4 py-8 sm:px-8 md:px-12 w-full h-full items-center justify-center text-center md:text-left">
                        
                        <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug w-full max-w-md">
                            We have sent a verification <br className="hidden sm:inline" />
                            code to your email, please <br className="hidden sm:inline" />
                            enter the code here
                        </h1>

                        <input
                            type="text"
                            id="verification-code"
                            placeholder="6 numbers"
                            maxlength={6}
                            className="block w-full max-w-md mt-2 p-2.5 text-black text-base bg-gray-100 border-black border-2 rounded-md tracking-widest text-center md:text-left"
                        />

                        <div className="flex flex-col sm:flex-row items-center w-full max-w-md justify-between gap-4 bg-black/10 p-3 rounded-lg">
                            <h2 className="text-white text-sm sm:text-base md:text-lg font-medium text-center sm:text-left leading-tight">
                                I have read and <br className="hidden sm:inline" />
                                accept the privacy policy <br className="hidden sm:inline" />
                                and Terms of Use
                            </h2>
                            <div className="flex-shrink-0">
                                <Checkbox onChange={handleCheckbox} />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center w-full max-w-md justify-between gap-4 mt-2">
                            <h2 className="text-white text-lg sm:text-xl font-bold opacity-80">
                                Captcha 🥀✌
                            </h2>
                            
                            <NormalButton
                                w="fit-content"
                                h="fit-content"
                                text="Next"
                                onClick={() => console.log('hi')}
                                disabled={!isChecked}
                                className={`w-full sm:w-auto px-8 py-2 text-xl font-bold rounded-md transition duration-300 ${
                                    isChecked 
                                        ? "brightness-100 hover:brightness-125 cursor-pointer " 
                                        : "brightness-50 cursor-not-allowed"
                                }`}
                            />
                        </div>

                    </div>
                }
            />
        </div>
    );
}

export default VerficationCodePage;