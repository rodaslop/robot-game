import QuickStartGame from "./components/QuickStartGame";
import QuickStartGameProviders from "./components/QuickStartGameProviders";

export default function Page() {
  return (
    <QuickStartGameProviders>
      <QuickStartGame />
    </QuickStartGameProviders>
  );
}
