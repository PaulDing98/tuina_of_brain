interface StatsCardProps {
	icon: string;
	label: string;
	value: string;
	unit?: string;
	variant?: "primary" | "default";
}

export function StatsCard({
	icon,
	label,
	value,
	unit,
	variant = "default",
}: StatsCardProps) {
	const isPrimary = variant === "primary";

	return (
		<div
			className={`flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-4 border shadow-sm ${
				isPrimary
					? "border-primary/20 bg-white dark:bg-background-dark"
					: "border-primary/20 bg-white dark:bg-background-dark"
			}`}>
			<div
				className={`flex items-center gap-2 ${isPrimary ? "text-slate-500 dark:text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
				<span
					className={`material-symbols-outlined text-sm ${isPrimary ? "text-primary" : ""}`}>
					{icon}
				</span>
				<p className="text-xs font-semibold uppercase tracking-wider">
					{label}
				</p>
			</div>
			<p
				className={`tracking-tight text-3xl font-bold leading-tight ${
					isPrimary
						? "text-primary"
						: "text-slate-900 dark:text-slate-100"
				}`}>
				{value}
				{unit && (
					<span className="text-lg font-medium text-slate-400 ml-1">
						{unit}??
					</span>
				)}
			</p>
		</div>
	);
}
