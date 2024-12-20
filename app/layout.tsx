import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import Link from "next/link";
import ParticlesBackground from "./ui/components/ParticlesBackground";
import TextLogo from "./ui/components/TextLogo";
import Footer from "./ui/components/Footer";

export const metadata: Metadata = {
	title: "B M Prajwal - Portfolio",
	description: "Full Stack Developer, Blockchain Enthusiast",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased text-white`}>
				<ParticlesBackground>
					<main className=" mt-6 px-8 max-w-xl mx-auto  z-10 w-full">
						<aside className=" flex justify-between items-center w-full gap-10 mt-8 mb-16">
							<div className="text-2xl font-bold">
								<Link href={"/"}>
									<TextLogo />
								</Link>
							</div>
							<nav className=" flex gap-3 ">
								<Link className="px-2 py-1 " href={"/blogs"}>
									blogs
								</Link>
								<Link className=" px-2 py-1" href={"/projects"}>
									projects
								</Link>
								<Link className=" px-2 py-1" href={"/visitors"}>
									visitors
								</Link>
							</nav>
						</aside>
						{children}
						<Footer />
					</main>
				</ParticlesBackground>
			</body>
		</html>
	);
}
