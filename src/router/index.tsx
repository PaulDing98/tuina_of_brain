/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-22 13:22:37
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-23 17:10:29
 * @FilePath: /tuina_of_brain/frontend/src/router/index.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-22 13:22:37
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-22 14:02:33
 * @FilePath: /tuina_of_brain/frontend/src/router/index_.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Schulte } from "../pages/Schulte";
import { Sequence } from "../pages/Sequence";
import { Settings } from "../pages/Setting";
export interface RouteMeta {
	title: string;
	showBack?: boolean;
	backTo?: string; // 可选：指定返回路径
}

export const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
				handle: {
					title: "大脑推拿",
					showBack: false,
				} satisfies RouteMeta,
			},
			{
				path: "schulte",
				element: <Schulte />,
				handle: {
					title: "舒尔特表训练",
					showBack: true,
				} satisfies RouteMeta,
			},
			{
				path: "sequence",
				element: <Sequence />,
				handle: {
					title: "序列记忆训练",
					showBack: true,
				} satisfies RouteMeta,
			},
			{
				path: "settings",
				element: <Settings />,
				handle: {
					title: "设置",
					showBack: true,
				} satisfies RouteMeta,
			},
		],
	},
];

export const router = createBrowserRouter(routes);
