import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
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
        <Link href="/sellercenter">
          <AiOutlineHome />
        </Link>
      </div>
      <div>
        <Link href="/sellercenter/products">
          <AiOutlineAppstore />
        </Link>
      </div>
      <div>
        <Link href="/sellercenter/orders" title="orders">
          <BsTruck />
        </Link>
      </div>
      <div>
        <Link href="/sellercenter/galery" title="galery">
          <BiImage />
        </Link>
      </div>
      <div>
        <Link href="/sellercenter/users" title="users">
          <FiUsers />
        </Link>
      </div>
      <div>
        <Link href="/sellercenter/messages" title="messages">
          <LuMessagesSquare />
        </Link>
      </div>
      <div className="mta">
        <Link href="/sellercenter/settings">
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
