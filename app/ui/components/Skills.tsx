import skills from "@/app/lib/utils";
import Image from "next/image";

export default function Skills(){
  return (
		<div className=" grid grid-cols-4 my-6 gap-2 cursor-pointer">
			{skills.map((skill) => (
				<div
					key={skill.name}
					className=" group flex flex-col gap-3 items-center justify-center py-3 px-3 border rounded-lg border-zinc-800 hover:"
				>
					<Image
						src={skill.icon}
						alt={skill.name}
						width={24}
						height={24}
						className=" size-5 transform transition-transform ease-in group-hover:-translate-y-1"
					/>
					<p className=" text-xs text-gray-400">{skill.name}</p>
				</div>
			))}
		</div>
  );
}