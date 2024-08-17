import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";
import { Loader } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import ClassDropdown from "../useUI/ClassDropdown";
import CampusDropdown from "../useUI/CampusDropdown";
const TopbarExpand = () => {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  if ( pathname === '/Online' || pathname === '/SchoolYear' || pathname === '/SpringAndSummer') {
    pathname='/Classes'
  }
  if ( pathname === '/Dorm' || pathname === '/School' ) {
    pathname='/Campus'
  }
  const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();

  const { mutate: signOut } = useSignOutAccount();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };

  return (
    <nav className="TopbarExpand">
      <div className="flex flex-row gap-7 bg-white">
        <Link to="/" className="flex gap-8 items-center">
          <img
            src="\assets\images\Sharron.png"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>

        {/* {isLoading || !user.email ? (
          <div className="h-14">
            <Loader />
          </div>
        ) : (
          <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold">{user.name}</p>
              <p className="small-regular text-light-3">@{user.username}</p>
            </div>
          </Link>
        )} */}
 


        <ul className="flex flex-row gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-blue-500"
                }`}>
                {link.label==="Classes"?(
                    <ClassDropdown/>
                ) : link.label==="Campus"? (
                    <CampusDropdown/>
                ): (
                  <NavLink
                    to={link.route}
                    className="flex gap-4 items-center p-6 ">
                    <img
                      src={link.imgURL}
                      alt={link.label}
                      className={`group-hover:invert-white ${
                        isActive && "invert-white"
                      }`}
                    />
                    <div className="flex text-black">
                      {link.label}
                    </div>
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
        <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={(e) => handleSignOut(e)}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium text-black">Logout</p>
      </Button>
      </div>

   

    </nav>
  );
};

export default TopbarExpand;
