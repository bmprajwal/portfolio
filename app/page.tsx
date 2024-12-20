import Image from "next/image";
import AnimatedMap from "./ui/components/AnimatedMap";
import Link from "next/link";
import MailIcon from "./ui/components/MailIcon";
import Skills from "./ui/components/Skills";
import TypingHighlight from "./ui/components/TypingHighlight";
import RecentProjects from "./ui/components/RecentProjects";

export default function Page() {
	return (
		<div>
			<div className=" group relative overflow-hidden">
				<Image
					src={"/clouds.png"}
					alt="clouds"
					width={200}
					height={200}
					className=" group-hover:opacity-0 transition-opacity duration-500 size-full absolute top-0 right-0 animate-move-clouds opacity-20"
				/>
				<Image
					src={"/plane.webp"}
					alt="plane"
					width={24}
					height={56}
					className="group-hover:opacity-0 transition-opacity duration-500 absolute animate-plane -bottom-20 -right-20 "
				/>
				<Image
					src={"/plane-shadow.webp"}
					alt="plane"
					width={24}
					height={24}
					className="group-hover:opacity-0 transition-opacity duration-500 absolute animate-plane-shadow  -bottom-24 -right-20 "
				/>
				<AnimatedMap />

				<div className=" h-16 bg-gradient-to-t from-[#060606] to-transparent absolute bottom-0 w-full "></div>
			</div>
			<div className=" flex w-full mb-6 gap-5 items-center">
				<div className=" group border-2 rounded-full border-gray-500 relative cursor-pointer">
					<Image
						src="/profilePic.jpeg"
						alt="Profile Pic"
						height={70}
						width={70}
						className=" rounded-full p-1"
					/>
					<Image
						src="/glasses.png"
						alt="glasses"
						height={70}
						width={70}
						className=" absolute size-8 top-2 right-[18px] rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</div>
				<div className="space-y-1">
					<div className=" font-bold text-center text-2xl">
						Hey, I&apos;m Prajwal &#128075;
					</div>
					<Link
						href={"mailto:prajwalbm2003@gmail.com"}
						className=" flex items-center gap-1.5"
					>
						<div className=" size-2 bg-green-500 rounded-full"></div>
						<div className=" relative cursor-pointer overflow-hidden">
							<p className=" group text-gray-500 text-base">
								<span className=" group-hover:-translate-y-full flex flex-col border-b border-dashed border-gray-800 transition-all duration-1000 ease-in-out">
									Available for work{" "}
									<span className=" invisible h-0">
										{" "}
										Reach out
									</span>
								</span>
								<span className=" group-hover:-translate-y-full absolute top-full flex items-center transition-all duration-1000 ease-in-out">
									Reach out <MailIcon />{" "}
								</span>
							</p>
						</div>
					</Link>
				</div>
			</div>
			<div>
				<p>
					I&apos;m a full-stack web developer who loves to explore new
					tech and get my hands dirty with it. Blockchain fascinates
					me, and when I&apos;m not coding, I find inspiration in
					movies.
				</p>
			</div>
			<Skills />
			<div className=" my-16">
				<div className=" text-xs inline-block px-3 py-1 text-zinc-300 bg-zinc-700 rounded">
					Fun
				</div>
				<TypingHighlight />
			</div>
			<RecentProjects/>
		</div>
	);
}
