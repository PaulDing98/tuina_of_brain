// types/Settings.ts
export interface SchulteSettings {
	highlightOnCorrect: boolean; // 点击正确后是否继续高亮
	borderColor: "default" | "color3" | "color5"; // 边框颜色模式
	fontColor: "default" | "color3" | "color5" | "color7"; // 字体颜色模式
	penaltyTime: number; // 惩罚时间（毫秒）
}
export interface SequenceSettings {
	sequenceLength: number; // 序列长度
	displayTime: number; // 显示时间（毫秒）
	intervalTime: number; // 间隔时间（毫秒）
}

// 组合设置类型
export interface SettingsWrapper {
	schulte: SchulteSettings;
	sequence: SequenceSettings;
}
// 定义 Store 的完整类型（包含 actions）
export interface SettingStore extends SettingsWrapper {
	updateSchulte: (newSettings: Partial<SettingsWrapper["schulte"]>) => void;
	updateSequence: (newSettings: Partial<SettingsWrapper["sequence"]>) => void;
	setSettingsFromLocal: (newSettings: SettingsWrapper) => void;
}
