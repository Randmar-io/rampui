import "../styles/base.css";
import "../styles/tokens/border.css";
import "../styles/tokens/height.css";
import "../styles/tokens/shadow.css";
import "../styles/tokens/spacing.css";
import "../styles/tokens/width.css";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return children;
}