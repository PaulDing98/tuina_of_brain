/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-18 23:13:45
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-22 20:29:32
 * @FilePath: /tuina_of_brain/frontend/src/pages/Schulte.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
// import { Header } from "../components/Header";
// import { use } from "react";
import { StatsCard } from "../components/StatsCard";
import { useSchulte } from "../hooks/useSchulte";
// TODO: 逻辑实现
// 参考 stitch 文件夹中的 code.html

export function Schulte() {
	const {
		numbers,
		currentTarget,
		gameState,
		elapsedTime,
		displayTime,
		wrongClicks,
		startGame,
		clickNumber,
		reset,
	} = useSchulte();
	// console.log(numbers);
	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60)
			.toString()
			.padStart(2, "0");
		const secs = (seconds % 60).toString().padStart(2, "0");
		return `${mins}:${secs}`;
	};

	// <div className="p-4">
	// 	{/* 状态栏 */}
	// 	<div className="flex gap-4 mb-4 text-lg">
	// 		<div>⏱️ {formatTime(displayTime)}</div>
	// 		<div>🎯 目标: {currentTarget}</div>
	// 		<div>❌ 错误: {wrongClicks}</div>
	// 	</div>

	// 	{/* 游戏控制 */}
	// 	{gameState.status === "idle" && (
	// 		<button
	// 			onClick={startGame} // ✅ 调用开始游戏
	// 			className="px-4 py-2 bg-blue-500 text-white rounded">
	// 			开始游戏
	// 		</button>
	// 	)}

	// 	{gameState.status === "completed" && (
	// 		<div className="mb-4">
	// 			<p className="text-green-600 text-xl">
	// 				🎉 完成！用时 {formatTime(displayTime)}
	// 			</p>
	// 			<button
	// 				onClick={reset} // ✅ 调用重置
	// 				className="px-4 py-2 bg-gray-500 text-white rounded mt-2">
	// 				再来一局
	// 			</button>
	// 		</div>
	// 	)}

	// 	{/* 5x5 网格 */}
	// 	<div className="grid grid-cols-5 gap-2 max-w-md">
	// 		{numbers.map((num) => (
	// 			<button
	// 				key={num}
	// 				onClick={() => clickNumber(num)} // ✅ 调用点击数字
	// 				disabled={gameState.status !== "playing"}
	// 				className={`
	//           w-14 h-14 rounded-lg font-bold text-xl
	//           ${num < currentTarget ? "bg-green-300" : "bg-white border-2"}
	//           ${gameState.status === "playing" ? "hover:bg-blue-100 cursor-pointer" : "opacity-50"}
	//         `}>
	// 				{num}
	// 			</button>
	// 		))}
	// 	</div>
	// </div>;

	return (
		<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
			<main className="flex flex-1 justify-center py-8 px-4 lg:px-40">
				<div className="layout-content-container flex flex-col max-w-[600px] flex-1 gap-6">
					{/* TODO: 统计栏 */}
					<div className="flex flex-wrap gap-4">
						<StatsCard
							icon="timer"
							label="计时器"
							value={formatTime(displayTime)}
							variant="primary"
						/>
						<StatsCard
							icon="checklist"
							label="当前进度"
							value={currentTarget + "/ 25"}
						/>
						<div className="flex py-2">
							<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 flex-1 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">
								<span className="material-symbols-outlined mr-2">
									play_arrow
								</span>
								<span
									className="truncate uppercase tracking-wider"
									onClick={startGame}>
									开始训练
								</span>
							</button>
						</div>
					</div>
					{/* TODO: 5x5 网格 */}
					<div className="bg-white dark:bg-slate-800/50 p-4 rounded-2xl shadow-xl border border-primary/10">
						<div className="grid grid-cols-5 gap-2 sm:gap-3 aspect-square">
							{/* TODO: 生成 25 个格子 */}
							{numbers.map((num) => (
								<div
									key={num}
									onClick={() => clickNumber(num)}
									className="
                  flex flex-1 aspect-square rounded-lg border-2 border-primary/5 bg-background-light dark:bg-slate-700 items-center justify-center cursor-pointer hover:border-primary hover:scale-[0.98] active:bg-primary active:text-white transition-all duration-150 shadow-sm group">
									<span
										className="text-slate-900 dark:text-slate-100
									group-active:text-white text-xl sm:text-2xl
									font-bold">
										{num}
									</span>
								</div>
							))}
						</div>
					</div>
					{/* TODO: 历史表现 */}
					{/* flex items-center justify-center rounded-lg bg-primary/10
					text-primary text-lg font-bold cursor-pointer
					hover:bg-primary/20 transition-colors */}
				</div>
			</main>
		</div>
	);
}
