
  export default function NoticeAddForm() {
    return (
        <div>
            <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Title
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="block w-full h-12 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="desc"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Description
                            </label>
                            <div className="flex flex-col items-start">
                                <textarea
                                    type="text"
                                    name="desc"
                                    className="block w-full h-44 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="doc"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Doc Link
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="doc"
                                    className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        {/* <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Add
                            </button>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
  }