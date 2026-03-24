/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-24 17:09:27
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-24 19:03:00
 * @FilePath: /tuina_of_brain/frontend/src/store/useSettingStore.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SettingStore, SettingsWrapper } from "../types/Settings";
import { DEFAULT_SETTINGS } from "../constants/Settings";

export const useSettingStore = create<SettingStore>()(
	persist<SettingStore>(
		(set) => ({
			...DEFAULT_SETTINGS,
			setSettingsFromLocal: (newSettings: SettingsWrapper) => {
				set(() => ({
					...newSettings,
				}));
			},
			updateSchulte: (
				newSettings: Partial<SettingsWrapper["schulte"]>,
			) => {
				set((state) => ({
					...state,
					schulte: {
						...state.schulte,
						...newSettings,
					},
				}));
			},
			updateSequence: (
				newSettings: Partial<SettingsWrapper["sequence"]>,
			) => {
				set((state) => ({
					...state,
					sequence: {
						...state.sequence,
						...newSettings,
					},
				}));
			},
		}),
		{ name: "tuina_of_brain_settings" },
	),
);
