import Link from "next/link";

export default function Footer(){
  const formattedDateFull = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const formattedDateNum = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })

  return (
		<div className=" my-16 flex justify-between items-center text-zinc-400">
			<ul className=" flex gap-4 ">
				<Link href={"https://github.com/bmprajwal"}>
					<li className=" flex gap-2 items-center hover:text-white">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
							></path>
						</svg>
						<span className=" hidden sm:block">GitHub</span>
					</li>
				</Link>
				<Link href={"mailto:prajwalbm2003@gmail.com"}>
					<li className=" flex gap-2 items-center hover:text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="size-4"
						>
							<rect
								width="20"
								height="16"
								x="2"
								y="4"
								rx="2"
							></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
						<span className=" hidden sm:block">Contact</span>
					</li>
				</Link>
			</ul>
			<div className="flex">
				Last Updated:&nbsp;
				<span className=" hidden sm:block">{formattedDateFull}</span>
				<span className=" sm:hidden">{formattedDateNum}</span>
			</div>
		</div>
  );
}