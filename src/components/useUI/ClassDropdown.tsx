import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
  
const ClassDropdown = () => {
    return(
        <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-4 p-6 items-center text-black">
            Classes
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to={"/SchoolYear"}>
                    School Year
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link to={"/SpringAndSummer"}>
                    Spring/Fall
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link to={"/Online"}>
                    Online
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )

}

export default ClassDropdown