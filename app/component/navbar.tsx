import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return(
        <div>
        <header className="w-f bg-[#044E83] flex justify-between items-center text-white px-10 h-20">
        <Image src={"/logo.png"} alt="logo" height={110} width={80} className="mt-12"/>
    <h2 className="text-2xl font-bold hidden sm:hidden md:v">Tuition Free Education Program On Latest Technologies</h2>
    <nav className="flex gap-5">
        <Link href={"app"}>Home</Link>
       <Link href={"/apply"}>Apply</Link>
        <Link href={"/job"}>Jobs</Link>
        <Link href={"/result"}> Result</Link>
        
        <select className="bg-transparent">
        
            <option> Courses</option>
            <div>
            <option>Artificial Intelligence</option>
            <option>Web 3 and Metaverse</option>
            <option>Cloud-Native Computing</option>
            <option>Genonics and Bioinformatics</option>
            <option>Network Programmability</option>
            </div>
        </select>
        
    </nav>
</header>
    </div>
        
    )
}

export default Navbar