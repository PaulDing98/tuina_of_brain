import { useRef, useEffect } from "react";
import type { TimerRefProps } from "../types/Timer";
// 秒:毫秒
const formatTime = (milliseconds: number) => {
	// 计算总秒数（向下取整）
	const totalSeconds = Math.floor(milliseconds / 1000);
	// 计算秒数（0-59）
	const secs = totalSeconds.toString().padStart(2, "0");
	// 计算毫秒数（只取前两位，显示00-99）
	const ms = Math.floor((milliseconds % 1000) / 10)
		.toString()
		.padStart(2, "0");
	return `${secs}:${ms}`;
};

export function useTimer({
	startTime,
	penalty,
	gameState,
	endTime,
}: TimerRefProps) {
	const timeRef = useRef<HTMLSpanElement>(null);
	const initialStartTimeRef = useRef<number>(0); // 只在初始渲染时设置一次，后续不变
	useEffect(() => {
		if (
			gameState.status === "playing" &&
			startTime > 0
			// initialStartTimeRef.current === 0
		) {
			initialStartTimeRef.current = startTime;
			console.log("保存初始时间:", startTime);
		}
	}, [gameState.status, startTime]);

	useEffect(() => {
		if (!timeRef.current) return;

		if (gameState.status === "completed") {
			// 游戏结束，显示最终时间
			const elapsed = endTime - initialStartTimeRef.current + penalty;
			timeRef.current.textContent = formatTime(elapsed);
			return;
		}
		if (gameState.status !== "playing") {
			// 游戏未开始，显示初始时间
			timeRef.current.textContent = "00:00";
			return;
		}
		if (gameState.status === "playing") {
			// 游戏进行中：直接操作 DOM
			const interval = setInterval(() => {
				if (timeRef.current) {
					const elapsed = Date.now() - startTime + penalty;
					timeRef.current.textContent = formatTime(elapsed);
				}
			}, 50);
			return () => clearInterval(interval);
		}
	}, [startTime, endTime, penalty, gameState.status]);
	return { timeRef };
}
