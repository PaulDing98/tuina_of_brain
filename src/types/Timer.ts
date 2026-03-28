import type { GameState } from "./Schulte";
export interface TimerRefProps {
	startTime: number;
	penalty: number;
	gameState: GameState;
	endTime: number;
}
