function Footer() {
    return(
        <footer>
        <div className="flex justify-between mt-14 px-12 bg-neutral-200 h-64">
            <div className="">
           <h3 className="text-xl font-bold pt-4"> Coure Courses</h3>
            <ul>
            
                <li><a>Programming Foundamentals</a></li>
                <li><a>Web2 Using Next Js</a></li>
                <li><a>Earn_As_You_Learn</a></li>
            </ul>
            </div>
            <div>
           <h3 className="text-xl font-bold pt-1"> Advance Courses</h3>
            <ul>
                <li><a>Artificial Intelligence</a></li>
                <li><a>Web 3 and Metaverse</a></li>
                <li><a>Cloud-Native Computing</a></li>
                <li>  <a>Genonics and Bioinformatics</a></li>
                <li><a>Network Programmability</a></li>
            </ul>
            </div>
            <div>
            <ul>
                <li><p className="text-xl font-bold pt-1">Social Links</p></li>
                <li><a href="facebook.com">Facebook</a></li>
                <li><a href="Instagram">Instagram</a></li>
                <li><a href="Whatsapp">Whatsapp</a></li>
                <li></li><a href="mailto:education@governorsindh.com">education@governorsindh.com</a>
            </ul>
            </div>
        </div>
    </footer>
    );
}
export default Footer