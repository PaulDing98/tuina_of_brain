/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-26 12:24:51
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-26 18:46:11
 * @FilePath: /tuina_of_brain/frontend/src/hooks/useColor.ts
 * @Description: 自定义 Hook - 管理舒尔特表格的动态配色
 */

import { useState, useMemo, useRef, useEffect } from "react";
import { useSettingStore } from "../store/useSettingStore";
import { ALL_COLORS } from "../constants/Colors";
import fisherYates from "../utils/shuffle";
import type { ColorOption, CssResult } from "../types/Colors";
import type { GameState } from "../types/Schulte";
const colorOptions: ColorOption[] = ALL_COLORS;
// 随机获取数组中的一个元素
const getRandomItem = (arr: ColorOption[]) =>
	arr[Math.floor(Math.random() * arr.length)];

// const randomColor = (colorType: "fontColor" | "borderColor") => {
// 	switch (schulte[colorType]) {
// 		case "默认":
// 			return "inherit";
// 		case "三色":
// 			const threeColors = fisherYates(ALL_COLORS).slice(0, 3);
// 			return threeColors;

// 		// return threeColors[Math.floor(Math.random() * 3)].value;
// 		case "五色":
// 			const fiveColors = fisherYates(ALL_COLORS).slice(0, 5);
// 			return fiveColors;
// 		// return fiveColors[Math.floor(Math.random() * 5)].value;
// 		case "七色":
// 			return fisherYates(ALL_COLORS)[0].value;
// 		default:
// 			return schulte[colorType];
// 	}
// };
// 读取设置并返回className
export const useColor_ = (state: GameState): { colorList: CssResult[] } => {
	const { schulte } = useSettingStore();
	const [colorList, setColorList] = useState<CssResult[]>([]);
	const [fontColorRangeList, setFontColorRangeList] = useState<ColorOption[]>(
		[],
	);
	const [borderColorRangeList, setBorderColorRangeList] = useState<
		ColorOption[]
	>([]);
	// 游戏状态变化时重新随机颜色列表
	useEffect(() => {
		if (state.status === "playing") {
			const fullColorList = fisherYates(colorOptions);
			// 计算两个颜色列表
			const borderColors = fullColorList.slice(
				0,
				schulte.borderColor.value,
			);
			const fontColors = fullColorList.slice(0, schulte.fontColor.value);
			// 统一设置
			setBorderColorRangeList(borderColors);
			setFontColorRangeList(fontColors);
			console.log("state变化了");
		}
	}, [state.status]);
	// 颜色范围列表变化时生成最终的颜色列表
	useEffect(() => {
		if (borderColorRangeList.length && fontColorRangeList.length) {
			const cssList: CssResult[] = [];
			for (let i = 0; i < 25; i++) {
				cssList.push({
					fontColor:
						fontColorRangeList[
							Math.floor(
								Math.random() * fontColorRangeList.length,
							)
						].value,
					borderColor:
						borderColorRangeList[
							Math.floor(
								Math.random() * borderColorRangeList.length,
							)
						].value,
				});
			}

			setColorList(cssList);
		}
		console.log("cssList已更新:", fontColorRangeList);
	}, [fontColorRangeList, borderColorRangeList]);

	return { colorList };
};
export const useColor__ = (state: GameState) => {
	const { schulte } = useSettingStore();

	// 只保留一个 state
	const [colorList, setColorList] = useState<CssResult[]>([]);

	useEffect(() => {
		if (state.status !== "playing") {
			setColorList([]);
			return;
		}

		// 一次性计算所有颜色
		const fullColors = fisherYates([...ALL_COLORS]);

		// 计算颜色池
		const getPool = (setting: { value: number }) => {
			if (setting.value === 0) return [{ value: "inherit" }];
			return fullColors.slice(0, setting.value);
		};

		const borderPool = getPool(schulte.borderColor);
		const fontPool = schulte.highlightOnCorrect
			? [{ value: "text-primary" }]
			: getPool(schulte.fontColor);

		// 生成25个
		const cssList: CssResult[] = [];
		for (let i = 0; i < 25; i++) {
			cssList.push({
				borderColor: borderPool[i % borderPool.length].value,
				fontColor: fontPool[i % fontPool.length].value,
			});
		}

		setColorList(cssList); // 只更新一次
	}, [
		state.status,
		schulte.borderColor.value,
		schulte.fontColor.value,
		schulte.highlightOnCorrect,
	]);

	return { colorList };
};
export const useColor = (state: GameState) => {
	const { schulte } = useSettingStore();

	const colorList = useMemo(() => {
		if (state.status !== "playing") return [];

		const fullColors = fisherYates([...ALL_COLORS]);

		const getPool = (setting: { value: number }) => {
			if (setting.value === 0) return [{ value: "inherit" }];
			return fullColors.slice(0, setting.value);
		};

		const borderPool = getPool(schulte.borderColor);
		const fontPool = schulte.highlightOnCorrect
			? [{ value: "text-primary" }]
			: getPool(schulte.fontColor);

		return Array.from({ length: 25 }, (_, i) => ({
			borderColor: borderPool[i % borderPool.length].value,
			fontColor: fontPool[i % fontPool.length].value,
		}));
	}, [
		state.status,
		schulte.borderColor.value,
		schulte.fontColor.value,
		schulte.highlightOnCorrect,
	]);

	return { colorList };
};
