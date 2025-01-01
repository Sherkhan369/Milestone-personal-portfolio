

function Result() {
    return (
        <div className="bg-white min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
              Grand Entrance Exam Result
            </h1>
            
            <div className="flex justify-center">
              <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                <form>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold" htmlFor="name">
                      Registration Number*
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=" Registration Number"
                      required
                    />
                  </div>
    
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold" htmlFor="email">
                      CNIC or B-Form Number*
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                     
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder=" CNIC or B-Form Number"
                      required
                    />
                  </div>
    
                 
    
                  <button
                    type="submit"
                    className=" w-full py-3 bg-[#044E83]  text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    GET RESULT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } 


export default Result