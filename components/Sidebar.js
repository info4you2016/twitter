import Image from "next/image";
import SidebarMenuItem from "../components/SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
	BellIcon,
	BookmarkIcon,
	ClipboardIcon,
	EllipsisHorizontalCircleIcon,
	EllipsisHorizontalIcon,
	HashtagIcon,
	InboxIcon,
	UserIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
	return (
		<div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
			{/* Twitter Logo */}
			<div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
				<Image
					width="50"
					height="50"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png"
				></Image>
			</div>

			{/* Menu */}
			<div className="mt-4 mb-2.5 xl:items-start">
				<SidebarMenuItem Text="Home" Icon={HomeIcon} active />
				<SidebarMenuItem Text="Explore" Icon={HashtagIcon} />
				<SidebarMenuItem Text="Notifications" Icon={BellIcon} />
				<SidebarMenuItem Text="Messages" Icon={InboxIcon} />
				<SidebarMenuItem Text="BookMark" Icon={BookmarkIcon} />
				<SidebarMenuItem Text="Lists" Icon={ClipboardIcon} />
				<SidebarMenuItem Text="Profile" Icon={UserIcon} />
				<SidebarMenuItem Text="More" Icon={EllipsisHorizontalCircleIcon} />
			</div>

			{/* Button */}

			<button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
				Tweet
			</button>

			{/* Mini-Profile */}

			<div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
				<img
					width="50px"
					height="50px"
					src="avataaars.png"
					alt=""
					className="h-10 w-10 rounded-full xl:mr-2"
				/>
				<div className="leading-5 hidden xl:inline">
					<h4 className="font-bold">Sahand Ghavidel</h4>
					<p className="text-gray-500">@codewithsahand</p>
				</div>
				<EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
			</div>
		</div>
	);
}
