interface Skill {
  name: string;
  icon: string;
}

export interface ProjectInterface {
  title: string,
  description: string,
  image: string,
  sourceLink: string,
  deploymentLink?: string,
  gradientColor?: string,
}

const skills: Skill[] = [
	{
    icon: '/java.svg',
    name: 'Java'
  },
  {
    icon: '/react.svg',
    name: 'React'
  },
  {
    icon: '/nextjs.svg',
    name: 'Next.js'
  },

  {
    icon: '/typescript.svg',
    name: 'TypeScript'
  },
  {
    icon: '/postgresql.svg',
    name: 'PostgreSQL'
  },
  {
    icon: '/docker.svg',
    name: 'Docker'
  },
  {
    icon: '/aws.svg',
    name: 'AWS'
  },
  {
    icon: '/git.svg',
    name: 'Git'
  },

];


export default skills;


export const projects: ProjectInterface[] = [
	{
		title: "Portfolio",
		description: "A simple portfolio website with some interactions",
		image: "/projects/portfolio.png",
		sourceLink: "https://github.com/bmprajwal/portfolio",
		deploymentLink: "https://bmprajwal.vercel.app",
		gradientColor: "purple",
	},

	{
		title: "Medium Stories",
		description:
			"A blogging website built with a React frontend and a Cloudflare Workers backend, offering seamless functionality.",
		image: "/projects/medium.png",
		sourceLink: "https://github.com/bmprajwal/blog",
		deploymentLink: "https://mediumstories.vercel.app",
		gradientColor: "blue",
	},
	{
		title: "Swiftpay 2.0",
		description:
			"Financial platform using Next.js and Express.js with secure transactions and user authentication via Next Auth.",
		image: "/projects/swiftpay.png",
		sourceLink: "https://github.com/bmprajwal/swiftpay2.0",
		gradientColor: "orange",
	},
	{
		title: "Acme Dashboard",
		description: "A dashboard for invoices with CRUD",
		image: "/projects/dashboard.png",
		sourceLink: "https://github.com/bmprajwal/acme-dashboard",
		deploymentLink: "https://acme-dashboard.vercel.app",
		gradientColor: "green",
	},
];