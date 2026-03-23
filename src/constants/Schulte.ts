/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-22 14:45:58
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-22 19:25:10
 * @FilePath: /tuina_of_brain/frontend/src/constants/Schulte.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import type { SchulteState } from "../types/Schulte";
const INITIAL_STATE: SchulteState = Object.freeze({
	numbers: [],
	currentTarget: 1,
	gameState: { status: "idle" } as const,
	elapsedTime: 0,
	wrongClicks: 0,
});
// as const
export { INITIAL_STATE };
