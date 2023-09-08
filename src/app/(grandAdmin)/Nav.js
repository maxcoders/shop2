import { AiOutlineHome, AiOutlineAppstore, AiFillShop } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BiCog, BiImage } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { LuMessagesSquare } from "react-icons/lu";

import { FiUsers } from "react-icons/fi";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="fc h-full ps t0 leftmenu bg10">
      <div>
        <Link href="/maxcoder">
          <AiOutlineHome />
        </Link>
      </div>
      <div>
        <Link href="/maxcoder/companies">
          <AiFillShop />
        </Link>
      </div>
      <div>
        <Link href="/maxcoder/orders" title="orders">
          <BsTruck />
        </Link>
      </div>
      <div>
        <Link href="/maxcoder/messages" title="messages">
          <LuMessagesSquare />
        </Link>
      </div>
      <div className="mta">
        <Link href="/maxcoder/settings">
          <BiCog />
        </Link>
      </div>
      <div>
        <Link href="logout" title="log out">
          <RiLogoutBoxRLine />
        </Link>
      </div>
    </div>
  );
}
