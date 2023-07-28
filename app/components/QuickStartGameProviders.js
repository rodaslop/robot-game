import PropTypes from "prop-types";
import { GameProvider } from "@/components/GameProvider";
import { RobotProvider } from "@/components/Robot";
import { TargetProvider } from "@/components/Target";

export default function QuickStartGameProviders({ children }) {
  return (
    <GameProvider>
      <RobotProvider>
        <TargetProvider>{children}</TargetProvider>
      </RobotProvider>
    </GameProvider>
  );
}

QuickStartGameProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
