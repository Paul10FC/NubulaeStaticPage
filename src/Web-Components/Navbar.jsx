function Navbar() {

    return (
        <nav className="sticky top-0 w-full pt-5 pb-5 bg-white border-gray-300 shadow-md">
            <div className={`flex justify-between items-center`}>
                <button className="text-black text-3xl ml-10">Nabulae</button>
                <ul className="flex mr-20 text-lg space-x-10">
                    <li className="text-black font-semibold">
                       <button className="hover:underline">Home</button>
                    </li>
                    <li className="text-black font-semibold">
                       <button className="hover:underline">About</button>
                    </li>
                    <li className="text-black font-semibold">
                       <button className="hover:underline">Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
