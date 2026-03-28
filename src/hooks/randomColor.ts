/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-26 12:24:51
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-26 13:01:21
 * @FilePath: /tuina_of_brain/frontend/src/hooks/randomColor.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { useState, useEffect } from "react";
import { useSettingStore } from "../store/useSettingStore";
import { ALL_COLORS } from "../constants/Colors";
import fisherYates from "../utils/shuffle";
import type { ColorOption } from "../types/Colors";
interface ColorScheme {
	fontColors: ColorOption[];
	borderColors: ColorOption[];
}
const { schulte } = useSettingStore();
const [colorScheme, setColorScheme] = useState<ColorScheme>({
	fontColors: [],
	borderColors: [],
});
const initColorScheme = () => {
	const scheme: ColorScheme = { fontColors: [], borderColors: [] };
	// 字体颜色随机
	switch (schulte.fontColor) {
		case "三色":
			scheme.fontColors = fisherYates([...ALL_COLORS]).splice(0, 3);
			break;
		case "五色":
			scheme.fontColors = fisherYates([...ALL_COLORS]).splice(0, 5);
			break;
		case "七色":
			scheme.fontColors = [...ALL_COLORS];
			break;
		default:
			scheme.fontColors = [];
	}

	switch (schulte.borderColor) {
		case "三色":
			scheme.borderColors = fisherYates([...ALL_COLORS]).splice(0, 3);
			break;
		case "五色":
			scheme.borderColors = fisherYates([...ALL_COLORS]).splice(0, 5);
			break;
		default:
			scheme.borderColors = [];
	}
	setColorScheme(scheme);
};

useEffect(() => {
	initColorScheme();
}, [schulte.fontColor, schulte.borderColor]);

export const getFontColorClass = (num: number) => {
	if (schulte.fontColor === "默认" || colorScheme.fontColors.length === 0) {
		return "text-slate-900 dark:text-slate-100";
	}
	const colors = colorScheme.fontColors;
	const color = colors[(num - 1) % colors.length];
	return `text-[${color.value}]`;
};

export const getBorderColorClass = (
	num: number,
	isHighlight = false,
	currentTarget: number = 0,
) => {
	if (
		schulte.borderColor === "默认" ||
		colorScheme.borderColors.length === 0
	) {
		return isHighlight
			? "border-primary"
			: "border-primary/5 hover:border-primary";
	}

	const colors = colorScheme.borderColors;
	const color = colors[(num - 1) % colors.length];

	if (isHighlight && schulte.highlightOnCorrect && num < currentTarget) {
		return `border-[${color.value}]`;
	}

	return `border-[${color.value}]/20 hover:border-[${color.value}]`;
};
