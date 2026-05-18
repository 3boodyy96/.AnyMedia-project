import Frame from "../components/frame"
import NormalButton from "../components/normalButton"
import Bg from "../components/bg";

function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Bg />
            <Frame
                w="80%"
                h="90%"
                items={
                    <div className="flex flex-col justify-end w-full h-full 
                        pb-6 px-6
                        sm:pb-8 sm:px-10
                        md:pb-10 md:px-20
                        lg:px-40">
                        <form className="w-full flex flex-col space-y-2 sm:space-y-4 md:space-y-6">
                            <div className="w-full flex flex-col space-y-2 sm:space-y-4 sm:mb-20 md:space-y-16 md:mb-30 ">
                            <div className="w-full">
                                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="someone@example.com"
                                    className="bg-gray-100 border-black border-2 rounded-0 mt-1 block w-full p-1.5 sm:p-2 text-black text-sm sm:text-base"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="7n6&hd8K$ad2zF"
                                    className="p-1.5 sm:p-2 text-sm sm:text-base text-black placeholder:text-gray-400 bg-gray-100 border-black border-2 rounded-0 mt-1 block w-full"
                                />
                            </div>
                            </div>
                            <div className="flex items-center justify-between w-full mt-20 sm:mt-0 md:mt-0">
                                <a href="" className="text-decoration-none">
                                    <h1 className="text-sm sm:text-lg md:text-2xl font-bold underline hover:text-gray-300 transition-colors text-white">
                                        Forget password?
                                    </h1>
                                </a>
                                <NormalButton w="fit-content" h="fit-content" text="sign in/up" />
                            </div>
                        </form>
                    </div>
                }
            />
        </div>
    )
}
export default LoginPage;