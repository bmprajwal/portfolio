import Image from "next/image";
import Link from "next/link";

export default function RecentProjects(){
  return (
		<div className=" my-16">
			<div className=" text-xs inline-block px-3 py-1 text-zinc-300 bg-zinc-700 rounded">
				Recent Projects
			</div>
			<div className=" grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
				<div className="w-full mt-4 max-w-2xl rounded-lg p-5 border border-zinc-700  shadow-inside hover:shadow-inside-hover transition-all duration-500">
					<Link href={"https://bmprajwal.vercel.app"}>
						<Image
							src={"/projects/portfolio.png"}
							alt="portfolio project"
							width={320}
							height={100}
							className=" border border-zinc-700 rounded-md"
						/>
						<h1 className=" text-lg mt-1">Portfolio</h1>
						<p className=" text-sm mt-1.5">
							A simple portfolio website with some interactions
						</p>
					</Link>
				</div>
				<div className="w-full mt-4 max-w-2xl rounded-lg p-5 border border-zinc-700  shadow-inside hover:shadow-inside-hover transition-all duration-500">
					<Link href={"https://acme-dash.vercel.app"}>
						<Image
							src={"/projects/dashboard.png"}
							alt="dashboard project"
							width={320}
							height={130}
							className=" border border-zinc-700 rounded-md"
						/>
						<h1 className=" text-lg mt-1">Acme Dashboard</h1>
						<p className=" text-sm mt-1.5">
							A dashboard for invoices with CRUD
						</p>
					</Link>
				</div>
			</div>
			<div className=" mt-3 group hover:text-zinc-300">
				<Link href={"/projects"}>
					<div className=" flex items-center gap-1">
						<p className=" text-sm font-semibold">More Projects</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-5  transition-all group-hover:translate-x-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
					</div>
				</Link>
			</div>
		</div>
  );
}