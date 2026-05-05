import {
	Cloud,
	Code,
	Cpu,
	Database,
	GitBranch,
	Layers,
	Monitor,
	Server,
	Smartphone,
	Terminal
} from '@lucide/astro'

export const skills = [
	{
		label: 'TypeScript',
		icon: Code,
		tone: 'bg-sky-500/20 text-sky-600 dark:bg-sky-400/25 dark:text-sky-200'
	},
	{
		label: 'AWS',
		icon: Cloud,
		tone: 'bg-amber-500/20 text-amber-600 dark:bg-amber-400/25 dark:text-amber-200'
	},
	{
		label: 'Angular',
		icon: Layers,
		tone: 'bg-rose-500/20 text-rose-600 dark:bg-rose-400/25 dark:text-rose-200'
	},
	{
		label: 'PostgreSQL',
		icon: Database,
		tone: 'bg-indigo-500/20 text-indigo-600 dark:bg-indigo-400/25 dark:text-indigo-200'
	},
	{
		label: 'Flutter',
		icon: Smartphone,
		tone: 'bg-cyan-500/20 text-cyan-600 dark:bg-cyan-400/25 dark:text-cyan-200'
	},
	{
		label: 'Android',
		icon: Smartphone,
		tone: 'bg-lime-500/20 text-lime-700 dark:bg-lime-400/25 dark:text-lime-200'
	},
	{
		label: 'Git & GitHub',
		icon: GitBranch,
		tone: 'bg-slate-500/20 text-slate-600 dark:bg-slate-400/25 dark:text-slate-200'
	},
	{
		label: 'JavaScript',
		icon: Terminal,
		tone: 'bg-yellow-500/20 text-yellow-700 dark:bg-yellow-400/25 dark:text-yellow-200'
	},
	{
		label: 'React',
		icon: Monitor,
		tone: 'bg-sky-500/20 text-sky-600 dark:bg-sky-400/25 dark:text-sky-200'
	},
	{
		label: 'Java',
		icon: Cpu,
		tone: 'bg-emerald-500/20 text-emerald-600 dark:bg-emerald-400/25 dark:text-emerald-200'
	},
	{
		label: 'Spring Boot',
		icon: Server,
		tone: 'bg-green-500/20 text-green-600 dark:bg-green-400/25 dark:text-green-200'
	},
  {
    label: 'Docker',
    icon: Cloud,
    tone: 'bg-blue-500/20 text-blue-600 dark:bg-blue-400/25 dark:text-blue-200'
  }
]
