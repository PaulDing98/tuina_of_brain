import { useNavigate } from "react-router-dom";
interface ModuleCardProps {
	icon: string;
	title: string;
	statLabel: string;
	statValue: string;
	onClick?: () => void;
}
function ModuleCard({
	icon,
	title,
	statLabel,
	statValue,
	onClick,
}: ModuleCardProps) {
	return (
		<div
			onClick={onClick}
			className="flex flex-col gap-4 p-4 bg-white dark:bg-background-dark/30 rounded-xl border border-primary/5 hover:border-primary/30 transition-all cursor-pointer group shadow-sm">
			<div className="relative w-full aspect-video bg-primary/5 rounded-lg flex items-center justify-center overflow-hidden">
				<span className="material-symbols-outlined text-5xl text-primary">
					{icon}
				</span>
			</div>
			<div className="flex flex-col">
				<p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-normal">
					{title}
				</p>
				<div className="flex items-center gap-2 mt-1">
					<span className="material-symbols-outlined text-primary text-base">
						trophy
					</span>
					<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
						{statLabel}：
						<span className="text-slate-900 dark:text-slate-100">
							{statValue}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
export function Home() {
	const todayProgress = 80;
	const completedModules = 2;
	const totalModules = 2;

	const navigate = useNavigate();
	const handleModuleClick = (module: string) => {
		// console.log(`Navigate to ${module}`);
		navigate(`/${module}`); // 使用 react-router 导航
	};
	return (
		<div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 sm:px-6 lg:px-0">
			{/* 今日进度 */}
			<div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/30 rounded-xl border border-primary/5 shadow-sm">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="material-symbols-outlined text-primary">
							bolt
						</span>
						<p className="text-slate-900 dark:text-slate-100 text-lg font-semibold leading-normal">
							今日训练进度
						</p>
					</div>
					<p className="text-primary text-lg font-bold leading-normal">
						{todayProgress}%
					</p>
				</div>
				<div className="h-3 w-full rounded-full bg-primary/10 overflow-hidden">
					<div
						className="h-full rounded-full bg-primary transition-all duration-500"
						style={{ width: `${todayProgress}%` }}></div>
				</div>
				<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
					今日已完成 {completedModules}/{totalModules}{" "}
					个模块。继续加油！
				</p>
			</div>

			{/* 模块选择 */}
			<div className="mt-10 mb-6 flex items-center justify-between px-2">
				<h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">
					训练模块选择
				</h2>
				<span className="text-primary text-sm font-semibold cursor-pointer hover:underline">
					查看全部
				</span>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-0">
				<ModuleCard
					icon="grid_on"
					title="舒尔特表"
					statLabel="最佳成绩"
					statValue="18.5s"
					onClick={() => handleModuleClick("schulte")}
				/>
				<ModuleCard
					icon="extension"
					title="序列记忆"
					statLabel="进度"
					statValue="Lv.3"
					onClick={() => handleModuleClick("sequence")}
				/>
			</div>

			{/* 底部按钮 */}
			<div className="mt-12 flex flex-col items-center gap-4 px-4 sm:px-2 w-full max-w-md mx-auto">
				<button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl h-14 bg-primary text-white text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20">
					<span className="material-symbols-outlined">history</span>
					<span>查看历史</span>
				</button>
				<button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl h-14 bg-white dark:bg-background-dark/50 text-slate-900 dark:text-slate-100 border border-primary/20 text-base font-bold hover:bg-primary/5 transition-all active:scale-95">
					<span className="material-symbols-outlined text-primary">
						stars
					</span>
					<span>排行榜</span>
				</button>
			</div>
		</div>
	);
}
