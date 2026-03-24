/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-22 20:23:03
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-24 18:58:28
 * @FilePath: /tuina_of_brain/frontend/src/pages/Setting.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */

// TODO: 实现训练完成页面
// 参考 stitch 文件夹中的 code.html
import { useNavigate } from "react-router-dom";
import { useSettingStore } from "../store/useSettingStore";
import {
	FONT_COLOR_OPTIONS,
	BORDER_COLOR_OPTIONS,
	PENALTY_TIME_MIN,
	PENALTY_TIME_MAX,
	PENALTY_TIME_STEP,
} from "../constants/Settings";
export function Settings() {
	const navigate = useNavigate();
	const { schulte, sequence, updateSchulte, updateSequence } = useSettingStore();
	return (
		<div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
			<main className="max-w-4xl mx-auto px-6 py-8">
				{/* Introduction / Context */}
				<div className="mb-10">
					<h2 className="text-3xl font-headline font-bold text-slate-900 mb-2">
						个性化您的锻炼
					</h2>
					<p className="text-slate-500 font-body">
						根据您的认知水平调整模块参数，以达到最佳训练效果。
					</p>
				</div>
				{/* Setting Wrapper */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Schulte Table Settings */}
					<section className="space-y-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
								<span
									className="material-symbols-outlined text-primary"
									data-icon="grid_view">
									grid_view
								</span>
							</div>
							<h3 className="text-xl font-headline font-bold text-tertiary">
								舒尔特表设置
							</h3>
						</div>
						<div className="bg-white p-5 rounded-2xl shadow-sm border border-orange-500/5 flex items-center justify-between">
							<div>
								<p className="font-bold text-slate-900">
									正确提示
								</p>
								<p className="text-sm text-slate-500">
									点击后是否停止高亮显示
								</p>
							</div>
							<label className="relative inline-flex items-center cursor-pointer">
								<input
									checked={schulte.highlightOnCorrect}
									value={
										schulte.highlightOnCorrect
											? "true"
											: "false"
									}
									onChange={() =>
										updateSchulte({
											highlightOnCorrect:
												!schulte.highlightOnCorrect,
										})
									}
									className="sr-only peer"
									type="checkbox"
								/>
								<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
							</label>
						</div>
						<div className="bg-white p-5 rounded-2xl shadow-sm border border-orange-500/5">
							<div className="flex justify-between items-center mb-4">
								<p className="font-bold text-slate-900">
									惩罚时间
								</p>
								<span className="bg-orange-50 text-primary px-3 py-1 rounded-lg text-sm font-bold">
									{schulte.penaltyTime / 1000}s
								</span>
							</div>
							<input
								className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-primary"
								max={PENALTY_TIME_MAX / 1000}
								min={PENALTY_TIME_MIN / 1000}
								step={PENALTY_TIME_STEP / 1000}
								type="range"
								value={schulte.penaltyTime / 1000}
								onChange={(e) =>
									updateSchulte({
										penaltyTime:
											Number(e.target.value) * 1000,
									})
								}
							/>
							<div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
								<span>{PENALTY_TIME_MIN / 1000}s</span>
								<span>{PENALTY_TIME_MAX / 1000}s</span>
							</div>
						</div>
						<div className="bg-white p-5 rounded-2xl shadow-sm border border-orange-500/5">
							<p className="font-bold text-slate-900 mb-4">
								字体颜色
							</p>
							<div className="grid grid-cols-4 gap-2 bg-slate-50 p-1 rounded-xl">
								{FONT_COLOR_OPTIONS.map((option) => (
									<button
										className={
											option === schulte.fontColor
												? "py-2 text-sm font-medium rounded-lg text-slate-900 bg-white shadow-sm ring-1 ring-slate-200 transition-all"
												: "py-2 text-sm font-medium rounded-lg text-slate-500 hover:text-slate-700 transition-all"
										}
										key={option}
										onClick={() =>
											updateSchulte({ fontColor: option })
										}>
										{option}
									</button>
								))}
							</div>
						</div>
						<div className="bg-white p-5 rounded-2xl shadow-sm border border-orange-500/5">
							<p className="font-bold text-slate-900 mb-4">
								边框颜色
							</p>
							<div className="grid grid-cols-3 gap-2 bg-slate-50 p-1 rounded-xl">
								{BORDER_COLOR_OPTIONS.map((option) => (
									<button
										className={
											option === schulte.borderColor
												? "py-2 text-sm font-medium rounded-lg text-slate-900 bg-white shadow-sm ring-1 ring-slate-200 transition-all"
												: "py-2 text-sm font-medium rounded-lg text-slate-500 hover:text-slate-700 transition-all"
										}
										key={option}
										onClick={() =>
											updateSchulte({
												borderColor: option,
											})
										}>
										{option}
									</button>
								))}
							</div>
						</div>
					</section>
					{/* Sequence Memory Settings */}
					<section className="space-y-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
								<span
									className="material-symbols-outlined text-primary"
									data-icon="psychology">
									psychology
								</span>
							</div>
							<h3 className="text-xl font-headline font-bold text-tertiary">
								序列记忆设置
							</h3>
						</div>

						<div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-500/5 relative overflow-hidden group">
							<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
								<span
									className="material-symbols-outlined text-6xl"
									data-icon="timer">
									timer
								</span>
							</div>
							<div className="relative z-10">
								<div className="flex justify-between items-center mb-6">
									<div>
										<p className="font-bold text-slate-900">
											物品数量
										</p>
										<p className="text-sm text-slate-500">
											单次训练中需要记忆的物品数量
										</p>
									</div>
									<span className="text-2xl font-black text-primary">
										{sequence.sequenceLength}
										<small className="text-xs ml-1 font-medium text-slate-400">
											个
										</small>
									</span>
								</div>
								<input
									className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-primary"
									max={15}
									min={5}
									step={1}
									type="range"
									value={sequence.sequenceLength}
									onChange={(e) =>
										updateSequence({
											sequenceLength: Number(e.target.value),
										})
									}
								/>
								<div className="flex justify-between mt-3 text-[10px] tracking-wider uppercase text-slate-400 font-bold">
									<span>5个</span>
									<span>15个</span>
								</div>
							</div>
						</div>

						<div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-500/5 relative overflow-hidden group">
							<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
								<span
									className="material-symbols-outlined text-6xl"
									data-icon="timer">
									timer
								</span>
							</div>
							<div className="relative z-10">
								<div className="flex justify-between items-center mb-6">
									<div>
										<p className="font-bold text-slate-900">
											呈现时间
										</p>
										<p className="text-sm text-slate-500">
											每个序列显示的持续长度
										</p>
									</div>
									<span className="text-2xl font-black text-primary">
										{(sequence.displayTime / 1000).toFixed(1)}
										<small className="text-xs ml-1 font-medium text-slate-400">
											s
										</small>
									</span>
								</div>
								<input
									className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-primary"
									max={3.0}
									min={0.1}
									step={0.1}
									type="range"
									value={sequence.displayTime / 1000}
									onChange={(e) =>
										updateSequence({
											displayTime: Number(e.target.value) * 1000,
										})
									}
								/>
								<div className="flex justify-between mt-3 text-[10px] tracking-wider uppercase text-slate-400 font-bold">
									<span>极速模式</span>
									<span>专注模式</span>
								</div>
							</div>
						</div>
						<div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-500/5 relative overflow-hidden group">
							<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
								<span
									className="material-symbols-outlined text-6xl"
									data-icon="space_bar">
									space_bar
								</span>
							</div>
							<div className="relative z-10">
								<div className="flex justify-between items-center mb-6">
									<div>
										<p className="font-bold text-slate-900">
											间隔时间
										</p>
										<p className="text-sm text-slate-500">
											序列之间的缓冲时段
										</p>
									</div>
									<span className="text-2xl font-black text-primary">
										{(sequence.intervalTime / 1000).toFixed(1)}
										<small className="text-xs ml-1 font-medium text-slate-400">
											s
										</small>
									</span>
								</div>
								<input
									className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-primary"
									max={2.0}
									min={0.1}
									step={0.1}
									type="range"
									value={sequence.intervalTime / 1000}
									onChange={(e) =>
										updateSequence({
											intervalTime: Number(e.target.value) * 1000,
										})
									}
								/>
								<div className="flex justify-between mt-3 text-[10px] tracking-wider uppercase text-slate-400 font-bold">
									<span>瞬时</span>
									<span>宽松</span>
								</div>
							</div>
						</div>
						<div className="bg-tertiary-container text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
							<div className="relative z-10">
								<h4 className="text-lg font-bold mb-2">
									专家建议
								</h4>
								<p className="text-sm text-blue-100/80 leading-relaxed">
									减少“间隔时间”可以有效提升大脑处理瞬时信息的压力，有助于锻炼高强度的短时记忆。
								</p>
							</div>
							<div className="absolute -bottom-4 -right-4 opacity-20 transform rotate-12">
								<span
									className="!text-8xl material-symbols-outlined"
									data-icon="lightbulb">
									lightbulb
								</span>
							</div>
						</div>
					</section>
				</div>
				{/* Save Button */}
				<div
					className="fixed bottom-0 left-0 bg- w-full p-6 bg-transparent backdrop-blur-xl z-50 
				border-t border-orange-500/10
                ">
					<div className="max-w-4xl mx-auto">
						<button
							onClick={() => navigate(-1)}
							className="w-full h-14 bg-primary text-white font-headline font-bold text-lg rounded-2xl amber-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
							<span>保存并返回</span>
							<span
								className="material-symbols-outlined"
								data-icon="check_circle">
								check_circle
							</span>
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
