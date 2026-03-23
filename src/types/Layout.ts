/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-21 16:27:17
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-22 18:48:48
 * @FilePath: /tuina_of_brain/frontend/src/types/layout.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
type RoutePath = "/" | "/schulte" | "/sequence";
type LayoutConfig =
	| {
			showBack: true; // showBack 为 true 时
			onBack: () => void; // onBack 必须存在
			title: string;
	  }
	| {
			showBack: false; // showBack 为 false 时
			onBack?: () => void; // onBack 可选
			title: string;
	  };
export type { RoutePath, LayoutConfig };
