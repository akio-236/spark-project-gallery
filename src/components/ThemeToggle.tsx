
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-colors"
    >
      <Sun className={`h-5 w-5 transition-all ${
        theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
      }`} />
      <Moon className={`absolute h-5 w-5 transition-all ${
        theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
      }`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
