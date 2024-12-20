import Image from "next/image";
import Source from "./buttons/Source";
import Visit from "./buttons/Visit";
import { ProjectInterface, projects } from "@/app/lib/utils";
import Link from "next/link";

export default function Project() {
	return (
		<div className=" mt-8">
			{projects.map((project: ProjectInterface) => (
				<div className=" mb-16" key={project.title}>
					<Link href={project.sourceLink}>
						<div
							className={`group rounded-lg  bg-gradient-to-b from-zinc-800/70 hover:from-${project.gradientColor}-400/45 to-black/50 px-6 pt-4 overflow-hidden`}
						>
							<Image
								src={project.image}
								alt="Portfolio"
								width={320}
								height={100}
								priority
								className=" w-full rounded-t-lg translate-y-3 group-hover:-translate-y-4 transition-all duration-500"
							/>
						</div>
					</Link>
					<h1 className=" text-xl font-semibold mt-3">
						{project.title}
					</h1>
					<p className=" mt-2 text-sm text-zinc-400">
						{project.description}
					</p>
					<div className="flex items-center space-x-4 mt-5">
						<Source sourceLink={project.sourceLink} />
						<Visit deploymentLink={project.deploymentLink} />
					</div>
				</div>
			))}
		</div>
	);
}
