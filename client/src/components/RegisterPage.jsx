export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-lg font-mono">
                <p>
                    I was born in{" "}
                    <input
                        type="text"
                        placeholder="________________________"
                        className="bg-transparent border-b border-dotted border-gray-400 focus:outline-none focus:border-white w-40 text-center"
                    />{" "}
                    on{" "}
                    <input
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="bg-transparent border-b border-dotted border-gray-400 focus:outline-none focus:border-red-500 text-red-500 text-center w-28"
                    />{" "}
                    at{" "}
                    <input
                        type="text"
                        placeholder="--:-- --"
                        className="bg-transparent border-b border-dotted border-gray-400 focus:outline-none focus:border-white text-gray-400 text-center w-16"
                    />
                    .
                </p>
                <p className="mt-4">
                    My email is{" "}
                    <input
                        type="text"
                        placeholder="email address"
                        className="bg-transparent border-b border-dotted border-gray-400 focus:outline-none focus:border-white text-center w-40"
                    />
                    .
                </p>
            </div>
        </div>
    );
}
