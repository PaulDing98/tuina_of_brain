/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-22 18:46:08
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-26 15:06:41
 * @FilePath: /tuina_of_brain/frontend/src/hooks/useSchulte.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { useReducer } from "react";
import type { SchulteState, SchulteAction } from "../types/Schulte";
import fisherYates from "../utils/shuffle";
import { INITIAL_STATE } from "../constants/Schulte";
import { useSettingStore } from "../store/useSettingStore";
function schulteReducer(
	state: SchulteState,
	action: SchulteAction,
	penaltyTime: number,
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
					penalty: state.penalty + penaltyTime, // 每次错误点击增加2秒惩罚时间
				};
			}
			return state;
		case "RESET":
			return INITIAL_STATE;
		default:
			throw new Error(`Unknown action type: ${(action as any).type}`);
	}
}
export function useSchulte() {
	const { schulte } = useSettingStore();
	const penaltyTime = schulte.penaltyTime;
	const [state, dispatch] = useReducer(
		(state, actions) => schulteReducer(state, actions, penaltyTime),
		INITIAL_STATE,
	);

	const startGame = () => dispatch({ type: "START_GAME" });
	const clickNumber = (num: number) =>
		dispatch({ type: "CLICK_NUMBER", payload: num });
	const reset = () => dispatch({ type: "RESET" });

	return {
		...state,
		startGame,
		clickNumber,
		reset,
	};
}
