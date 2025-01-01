import Image from "next/image";

function Apply() {
    return(
        <div className="bg-white min-h-screen py-6">
            <div className="text-center shadow-lg mx-56 pt-28 pb-24">
                <h1 className="text-3xl p-10">Before continuing to the application <br />please subscribe on these social <br />media platforms.</h1>
                <div  className="flex justify-center items-center p-10">
                <Image src={"/facebook.png"} alt="logo" height={25} width={25}/>
                </div>
                <div>
                    <button className="bg-blue-800 w-28 h-12 text-white">CONTINUE</button>
                </div>
               
                <p>Already applied?<a href="">Get Admit Card</a></p>
            </div>
            <div>
                <ol className="flex justify-evenly py-24 list-decimal">
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Apply</li>
                </ol>
            </div>
        </div>
    );
}

export default Apply