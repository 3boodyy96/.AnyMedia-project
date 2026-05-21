// VerficationCodePage.jsx
import Checkbox from "../components/checkbox";
import Bg from "../components/bg";
import Frame from "../components/frame";
import NormalButton from "../components/normalButton";

function VerficationCodePage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Bg />
            <Frame
                w="80%"
                h="90%"
                items={
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <h1 className="mb-10 text-2xl font-bold text-white sm:text-4xl md:text-6xl">
                            we have sent a verification <br />
                            code to your email, please <br />
                            enter the code here <br />
                        </h1>
                        <input
                            type="text"
                            id="verification-code"
                            placeholder="6 numbers"
                            className="block w-full mt-1 p-1.5 text-black text-sm bg-gray-100 border-black border-2 rounded-0 sm:p-2 sm:text-base"
                        />
                        <div className="flex mt-10 space-x-4 items-center">
                            <Checkbox name="terms" />
                            <NormalButton
                                w="fit-content"
                                h="fit-content"
                                text="Next"
                                className="pl-9! pr-9! pt-2! pb-2! text-[40px]!"
                            />
                        </div>
                    </div>
                }
            />
        </div>
    );
}
export default VerficationCodePage;