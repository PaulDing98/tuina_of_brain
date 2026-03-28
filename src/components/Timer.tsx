/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-26 13:15:37
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-26 13:33:54
 * @FilePath: /tuina_of_brain/frontend/src/components/Timer.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { useTimer } from "../hooks/useTimer";
import type { TimerRefProps } from "../types/Timer";
export function Timer({
	startTime,
	penalty,
	gameState,
	endTime,
}: TimerRefProps) {
	const { timeRef } = useTimer({
		startTime,
		penalty,
		gameState,
		endTime,
	});
	return <span ref={timeRef}>00:00</span>;
}
