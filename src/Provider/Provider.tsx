import "../tokens/border.css";
import "../tokens/height.css";
import "../tokens/shadow.css";
import "../tokens/spacing.css";
import "../tokens/width.css";
import "./Provider.css";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return children;
}