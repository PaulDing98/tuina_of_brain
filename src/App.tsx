/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-18 23:14:36
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-24 18:20:50
 * @FilePath: /tuina_of_brain/frontend/src/App.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSettingStore } from "./store/useSettingStore";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Schulte } from "./pages/Schulte";
import { Sequence } from "./pages/Sequence";
import { Settings } from "./pages/Setting";
// import { Result } from './pages/Result';

function App() {
	const { setSettingsFromLocal } = useSettingStore();
	// App.tsx
	useEffect(() => {
		// 1. 先读本地缓存（立即显示，不等待）
		const localConfig = localStorage.getItem("settings");
		if (localConfig) {
			setSettingsFromLocal(JSON.parse(localConfig));
		}

		// // 2. 如果已登录，异步获取服务器配置
		// if (isLoggedIn) {
		// 	fetchUserSettings().then((serverConfig) => {
		// 		setSettings(serverConfig);
		// 		localStorage.setItem("settings", JSON.stringify(serverConfig));
		// 	});
		// }
	}, []);

	// // 监听登录状态变化
	// useEffect(() => {
	// 	if (isLoggedIn) {
	// 		// 登录了，获取服务器配置
	// 		fetchUserSettings().then(setSettings);
	// 	} else {
	// 		// 登出了，重置为默认值
	// 		resetSettings();
	// 	}
	// 	// ← isLoggedIn 变化时执行
	// }, [isLoggedIn]);
	return (
		<BrowserRouter>
			<Routes>
				{/* 外层包 Layout */}
				<Route element={<Layout />}>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/schulte"
						element={<Schulte />}
					/>
					<Route
						path="/sequence"
						element={<Sequence />}
					/>
					<Route
						path="/settings"
						element={<Settings />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
