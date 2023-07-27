import { GameProvider } from "./components/GameProvider";
import QuickStartGame from "./components/QuickStartGame";

export default function Page() {
  return (
    <GameProvider>
      <QuickStartGame />
    </GameProvider>
  );
}
