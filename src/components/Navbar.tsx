import Link from "next/link"
import Profile from "./Profile"


const Navbar = () => {

    return (
        <div className="flex relative justify-between items-center ">
            <Link href='/'>
               <h1 className="text-xl font-bold">Logo</h1>
            </Link>
              <Profile/>
        </div>
    )

}

export default Navbar