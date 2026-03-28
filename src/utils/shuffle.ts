/*
 * @Author: PaulDing 1031071856@qq.com
 * @Date: 2026-03-22 14:49:16
 * @LastEditors: PaulDing 1031071856@qq.com
 * @LastEditTime: 2026-03-22 18:11:06
 * @FilePath: /tuina_of_brain/frontend/src/utils/shuffle.ts
 * @Description:
 *
 * Copyright (c) 2026 by ${git_name_email}, All Rights Reserved.
 */
const fisherYates = (arr: any[]) => {
	const result = [...arr];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
};
export default fisherYates;
