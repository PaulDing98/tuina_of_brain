/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-22 18:46:08
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-25 22:58:51
 * @FilePath: /tuina_of_brain/frontend/src/hooks/useSchulte.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { useReducer } from "react";
import type { SchulteState, SchulteAction } from "../types/Schulte";
import fisherYates from "../utils/shuffle";
import { INITIAL_STATE } from "../constants/Schulte";
function schulteReducer(
	state: SchulteState,
	action: SchulteAction,
): SchulteState {
	switch (action.type) {
		case "START_GAME":
			return {
				...INITIAL_STATE,
				numbers: fisherYates(
					Array.from({ length: 25 }, (_, i) => i + 1),
				),
				currentTarget: 1,
				gameState: { status: "playing", startTime: Date.now() },
				penalty: 0,
				wrongClicks: 0,
			};
		case "CLICK_NUMBER":
			if (state.gameState.status !== "playing") {
				return state; // 游戏未开始或已结束，点击无效
			}
			if (action.payload === state.currentTarget) {
				if (state.currentTarget === 25) {
					console.log(
						"游戏完成",
						state.gameState.startTime,
						Date.now(),
					);
					// 游戏完成
					return {
						...state,
						currentTarget: state.currentTarget + 1,
						gameState: { status: "completed", endTime: Date.now() },
					};
				}
				// 点击正确
				return {
					...state,
					currentTarget: state.currentTarget + 1,
				};
			}
			// 点击错误，增加惩罚时间
			if (state.gameState.status === "playing") {
				return {
					...state,
					wrongClicks: state.wrongClicks + 1,
					penalty: state.penalty + 2000, // 每次错误点击增加2秒惩罚时间
				};
			}
			return state;
		case "TICK":
			if (state.gameState.status !== "playing") {
				return state; // 只有在游戏进行中才更新时间
			}
			if (state.gameState.status === "playing") {
				return {
					...state,
					// elapsedTime:
					// 	now - state.gameState.startTime + state.penalty, // 更新时间时也要加上惩罚时间
				};
			}
		case "RESET":
			return INITIAL_STATE;
		default:
			throw new Error(`Unknown action type: ${(action as any).type}`);
	}
}
export function useSchulte() {
	const [state, dispatch] = useReducer(schulteReducer, INITIAL_STATE);

	// 计时器副作用
	// useEffect(() => {
	// 	if (state.gameState.status !== "playing") return;

	// 	const interval = setInterval(() => {
	// 		dispatch({ type: "TICK", payload: Date.now() });
	// 	}, 100);

	// 	return () => clearInterval(interval);
	// }, [state.gameState.status]);

	const startGame = () => dispatch({ type: "START_GAME" });
	const clickNumber = (num: number) =>
		dispatch({ type: "CLICK_NUMBER", payload: num });
	const reset = () => dispatch({ type: "RESET" });

	// 显示时间（含惩罚）
	const displayTime = Math.floor(state.elapsedTime / 1000);

	return {
		...state,
		displayTime,
		startGame,
		clickNumber,
		reset,
	};
}
