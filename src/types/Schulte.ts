/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-22 14:43:29
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-24 10:11:25
 * @FilePath: /tuina_of_brain/frontend/src/types/Schulte.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
export type GameState =
	| { status: "idle" }
	| { status: "playing"; startTime: number }
	| { status: "completed"; endTime: number };

interface SchulteState {
	numbers: number[]; // 1-25 的数字，随机排列
	currentTarget: number; // 当前需要点击的数字，初始为 1
	gameState: GameState;
	elapsedTime: number; // 已经用的时间，单位毫秒
	wrongClicks: number; // 错误点击次数
	penalty: number; // 惩罚时间，单位毫秒
}

type SchulteAction =
	| { type: "START_GAME" }
	| { type: "CLICK_NUMBER"; payload: number } // payload 是用户点击的数字
	| { type: "TICK"; payload: number } // payload 是当前时间戳，用于计算 elapsedTime
	| { type: "RESET" };

export type { SchulteState, SchulteAction };
