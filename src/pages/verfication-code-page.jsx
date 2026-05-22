import { useState } from "react";
import Checkbox from "../components/checkbox";
import Bg from "../components/bg";
import Frame from "../components/frame";
import NormalButton from "../components/normalButton";

function VerficationCodePage() {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckbox(value) {
        setIsChecked(value);
        console.log(value ? "checked" : "unchecked")
        if (value) {
            // enable the button
            document.querySelector(".next-button").classList.add("brightness-100!");
            document.querySelector(".next-button").classList.add("hover:brightness-125!");
        } else {
            // disable the button
            document.querySelector(".next-button").classList.remove("brightness-100!");
            document.querySelector(".next-button").classList.remove("hover:brightness-125!");
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <Bg />
            <Frame
                w="40%"
                h="80%"
                items={
                    <div className="flex flex-col mt-20 gap-5 w-full h-full items-center justify-center">
                        <h1 className="text-6xl mr-30 gap-0 font-bold text-white sm:text-4xl md:text-6xl translate-y-7">
                            we have sent a verification <br />
                            code to your email, please <br />
                            enter the code here <br />
                        </h1>
                        <input
                            type="text"
                            id="verification-code"
                            placeholder="6 numbers"
                            className="block w-[85%] mt-1 p-1.5 text-black text-sm bg-gray-100 border-black border-2 rounded-0 sm:p-2 sm:text-base gap-0"
                        />
                        <div className="flex  space-x-4 items-center w-10/12 justify-between">
                            <h1 className="text-white text-xl font-bold">
                                i have read and <br />
                                accept the privacy policy<br />
                                and Terms of Use<br />
                            </h1>
                            <Checkbox onChange={handleCheckbox} />
                        </div>
                        <div className="flex items-center w-10/12 justify-between">
                            <h1 className="text-white text-xl font-bold mr-10 mt-4">
                                captcha 🥀✌
                            </h1>
                            <NormalButton
                                w="fit-content"
                                h="fit-content"
                                text="Next"
                                onClick={() => console.log('hi')}
                                disabled={!isChecked}
                                className="
                                pl-9! pr-9! pt-2! pb-2! text-[50px]! translate-x-5
                                next-button brightness-50! hover:none! transition duration-300"
                            />
                        </div>
                    </div>
                }
            />
        </div>
    );
}
export default VerficationCodePage;