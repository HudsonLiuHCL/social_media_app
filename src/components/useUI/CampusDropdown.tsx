import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
  
const CampusDropdown = () => {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-4 p-6 text-black">Campus</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link to={"/Dorm"}>
                            Dorm
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link to={"/School"}>
                            School
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
        </DropdownMenu>
    )
    
}

export default CampusDropdown