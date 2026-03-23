/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-18 23:14:36
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-20 21:01:07
 * @FilePath: /tuina_of_brain/frontend/src/App.tsx
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Schulte } from "./pages/Schulte";
import { Sequence } from "./pages/Sequence";
import { Settings } from "./pages/Setting";
// import { Result } from './pages/Result';

function App() {
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
						path="/setting"
						element={<Settings />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
