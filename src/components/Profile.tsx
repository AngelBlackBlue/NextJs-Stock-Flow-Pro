import Link from "next/link"
import { Button } from "./ui/button"

const Profile = () => {

    return (
        <div>
            <Link href="/auth"> 
               <Button variant='outline'>Singin</Button>
            </Link> 
        </div>
    )


}

export default Profile