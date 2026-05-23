import Frame from "./components/frame"
import NormalButton from "./components/normalButton"
import Bg from "./components/bg";
function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            {/*  */}
            <Bg />
            <Frame
                w="70%"
                h="80%"
                items={
                    <div className="flex flex-col justify-end w-full h-full pb-10 px-10 pr-70 pl-70">
                        <form className="w-full flex flex-col space-y-4">
                            <div className="w-full mb-15">
                                <label htmlFor="email" className=" block text-sm font-medium text-white">Email</label>
                                <input type="email" id="email" placeholder="someone@example.com" className="bg-gray-100 border-black border-2 rounded-0 mt-1 block w-full p-2 text-black" />
                            </div>
                            <div className="w-full mb-30">
                                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                                <input type="password" id="password" placeholder="7n6&hd8K$ad2zF" className="p-2 text-black placeholder:text-gray-400 bg-gray-100 border-black border-2 rounded-0 mt-1 block w-full" />
                            </div>
                            <div className="flex items-center justify-between w-full mb-4">
                                <a href="">
                                    <h1 className="text-2xl font-bold underline hover:text-gray-300 transition-colors text-white">Forget password?</h1>
                                </a>
                                <NormalButton w="100px" h="40px" text="sign in/up" />
                            </div>
                        </form>
                    </div>
                }
            />
        </div>
    )
}
export default LoginPage;