// constants/Settings.ts
import type { SettingsWrapper } from "../types/Settings";

// 默认设置（使用 as const 获得精确类型 + Object.freeze 防止修改）
export const DEFAULT_SETTINGS = Object.freeze({
	schulte: {
		highlightOnCorrect: true,
		borderColor: "default",
		fontColor: "default",
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
	"default",
	"color3",
	"color5",
	"color7",
] as const;

export const BORDER_COLOR_OPTIONS = ["default", "color3", "color5"] as const;

export const PENALTY_TIME_MIN = 0;
export const PENALTY_TIME_MAX = 5000;
export const PENALTY_TIME_STEP = 500;
