import Link from 'next/link';

const SignIn = () => {
    return (
        <div className="h-full">
            <body className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
                <main className="w-full max-w-md mx-auto p-6">
                    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                                <p className="mt-2 text-sm text-gray-600  dark:text-gray-400">
                                    Dont have an account yet?
                                    <Link href="/signup"
                                    className="text-blue-600 p-2 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Sign up here
                                    
                                    </Link>
                                </p>
                            </div>

                            <div className="mt-5">
                                <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    {/* Google Sign-in SVG Icon Here */}
                                    Sign in with Google
                                </button>

                                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                                {/* Form */}
                                <form>
                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                        <div className="relative">
                                            <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                        </div>
                                    </div>

                                    {/* Password Input */}
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                            <Link href="/forgotpass"
                                                 className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Forgot password?
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required />
                                        </div>
                                    </div>

                                    {/* Checkbox */}
                                    <div className="flex items-center">
                                        {/* Checkbox Input Here */}
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" className="w-full py-3 px-4 mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg">
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </div>
    );
}

export default SignIn;
