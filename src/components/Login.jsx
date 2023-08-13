function Login() {
    return(
        <>
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-96">
            <h2 className="text-lg font-bold text-white text-center mb-4">Login</h2>
            <div className="bg-white shadow-lg rounded-md p-6 space-y-4">
                
                <div>
                    <label htmlFor="email" className="block text-sm text-gray-800 mb-2">Email</label>
                    <input id="email" type="text" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none"/>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm text-gray-800 mb-2">Password</label>
                    <input id="password" type="password" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none"/>
                </div>
                
                <div>
                    <button className="w-full text-sm text-white bg-sky-500 hover:bg-sky-600 px-3 py-2 rounded">Login</button>
                </div>

            </div>
        </div>
        </div>
        </>
    )


}

export default Login;