/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-18 23:11:39
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-23 17:09:15
 * @FilePath: /tuina_of_brain/frontend/src/components/Header.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
	title?: string;
	showBack?: boolean;
	onBack?: () => void;
}

export function Header({ title, showBack = false, onBack }: HeaderProps) {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.classList.toggle("dark");
	};

	const navigate = useNavigate();
	return (
		// flex items-center justify-between border-b border-primary/10 bg-background-light dark:bg-background-dark px-6 py-4 lg:px-40
		<header className="flex items-center justify-between border-b border-primary/10 bg-background-light dark:bg-background-dark px-6 py-4 lg:px-40">
			{/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 py-4 lg:px-40 bg-background-light dark:bg-background-dark bg-white dark:bg-background-dark/50 sticky top-0 z-50"> */}
			<div className="flex items-center gap-3">
				<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
					<span className="material-symbols-outlined text-2xl">
						psychology
					</span>
				</div>
				<h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
					{title || "大脑推拿"}
				</h2>
				{showBack && (
					<button
						onClick={onBack}
						className="flex items-center justify-center rounded-full w-10 h-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
						<span className="material-symbols-outlined">
							arrow_back
						</span>
					</button>
				)}
			</div>
			<div className="flex gap-3">
				<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
					<span className="material-symbols-outlined text-xl">
						leaderboard
					</span>
				</button>
				<button
					onClick={toggleTheme}
					className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
					<span className="material-symbols-outlined text-xl">
						{isDark ? "light_mode" : "dark_mode"}
					</span>
				</button>
				<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
					<span
						onClick={() => navigate("/settings")}
						className="material-symbols-outlined text-xl"
						data-icon="settings">
						settings
					</span>
				</button>
			</div>
		</header>
	);
}
