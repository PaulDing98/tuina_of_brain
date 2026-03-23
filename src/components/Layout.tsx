/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-20 20:02:01
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-22 14:28:40
 * @FilePath: /tuina_of_brain/frontend/src/components/Layout.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { Outlet, useMatches, useNavigate } from "react-router-dom";
import type { RouteMeta } from "../router";
import { Footer } from "./Footer";
import { Header } from "./Header";
// import { useLayoutConfig } from "../hooks/useLayoutConfig";
export const Layout = () => {
	const matches = useMatches();
	const navigate = useNavigate();
	const meta = (matches[matches.length - 1]?.handle) as RouteMeta | undefined;
	const title = meta?.title ?? "大脑推拿";
	const showBack = meta?.showBack ?? false;
	const onBack = showBack ? () => navigate((meta?.backTo as any) ?? -1) : undefined;
	// const currentConfig = useLayoutConfig();
	return (
		<div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
			<Header
				title={title}
				showBack={showBack}
				onBack={onBack}
			/>
			<main className="flex flex-1 justify-center py-8 pb-24">
				{/* py-8  */}
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 sm:px-6 lg:px-0">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
};
// export default Layout;
