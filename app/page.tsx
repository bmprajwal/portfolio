import Image from "next/image";
import AnimatedMap from "./ui/components/AnimatedMap";
import Link from "next/link";
import MailIcon from "./ui/components/MailIcon";
import Skills from "./ui/components/Skills";
import TypingHighlight from "./ui/components/TypingHighlight";

export default function Page() {
	return (
		<div>
			<div className=" relative">
				<AnimatedMap />
				<div className=" h-16 bg-gradient-to-t from-[#060606] to-transparent absolute bottom-0 w-full "></div>
			</div>
			<div className=" flex w-full mb-6 gap-5 items-center">
				<div className=" border-2 rounded-full border-gray-500 relative">
					<Image
						src="/profilePic.jpeg"
						alt="Profile Pic"
						height={70}
						width={70}
						className=" rounded-full p-1"
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
					I like to develop full-stack web applications, write backend
					logics & love to explore to make my hands dirty on the
					technologies!
				</p>
			</div>
			<Skills />
			<div className=" my-16">
				<div className=" text-xs inline-block px-3 py-1 text-zinc-400 bg-zinc-700 rounded">
					Fun
				</div>
				<TypingHighlight />
			</div>
			<div className=" my-16">
				<div className=" text-xs inline-block px-3 py-1 text-zinc-400 bg-zinc-700 rounded">
					Recent Projects
				</div>
			</div>
		</div>
	);
}
