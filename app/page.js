import { GameProvider } from "@/components/GameProvider";
import { RobotProvider } from "@/components/Robot";
import { TargetProvider } from "@/components/Target";
import QuickStartGame from "./components/QuickStartGame";

export default function Page() {
  return (
    <GameProvider>
      <RobotProvider>
        <TargetProvider>
          <QuickStartGame />
        </TargetProvider>
      </RobotProvider>
    </GameProvider>
  );
}
