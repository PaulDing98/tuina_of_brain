/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-18 23:11:39
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-20 20:23:39
 * @FilePath: /tuina_of_brain/frontend/src/components/Footer.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
interface FooterProps {
	activeTab?: "train" | "stats" | "profile";
	onTabChange?: (tab: "train" | "stats" | "profile") => void;
}

export function Footer({ activeTab = "train", onTabChange }: FooterProps) {
	const tabs = [
		{ id: "train" as const, icon: "dashboard", label: "训练" },
		{ id: "stats" as const, icon: "insights", label: "统计" },
		{ id: "profile" as const, icon: "person", label: "个人" },
	];

	return (
		<footer className="">
			<span className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-primary/10 flex justify-around items-center h-16 px-4 z-50">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => onTabChange?.(tab.id)}
						className={`flex flex-col items-center justify-center ${
							activeTab === tab.id
								? "text-primary"
								: "text-slate-400"
						}`}>
						<span className="material-symbols-outlined">
							{tab.icon}
						</span>
						<span className="text-[10px] font-bold uppercase">
							{tab.label}
						</span>
					</button>
				))}
			</span>
			<footer className="hidden md:block p-8 text-center text-slate-400 text-sm">
				<p>© 2026 大脑推拿. 卓越认知训练.</p>
			</footer>
		</footer>
	);
}
