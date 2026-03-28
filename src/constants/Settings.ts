/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-24 10:23:49
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-26 16:05:25
 * @FilePath: /tuina_of_brain/frontend/src/constants/Settings.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
// constants/Settings.ts
import type { SettingsWrapper } from "../types/Settings";

// 默认设置（使用 as const 获得精确类型 + Object.freeze 防止修改）
export const DEFAULT_SETTINGS = Object.freeze({
	schulte: {
		highlightOnCorrect: true,
		borderColor: { value: 0, label: "默认" },
		fontColor: { value: 0, label: "默认" },
		penaltyTime: 2500,
	},
	sequence: {
		sequenceLength: 5,
		displayTime: 800,
		intervalTime: 400,
	},
} as const satisfies SettingsWrapper);

// 设置选项常量
export const FONT_COLOR_OPTIONS = [
	{ value: 0, label: "默认" },
	{ value: 3, label: "三色" },
	{ value: 5, label: "五色" },
	{ value: 7, label: "七色" },
] as const;

export const BORDER_COLOR_OPTIONS = [
	{ value: 0, label: "默认" },
	{ value: 3, label: "三色" },
	{ value: 5, label: "五色" },
	{ value: 7, label: "七色" },
] as const;

export const PENALTY_TIME_MIN = 0;
export const PENALTY_TIME_MAX = 5000;
export const PENALTY_TIME_STEP = 500;
