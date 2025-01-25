import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class" // Required for class-based theme switching
      defaultTheme="system" // Fallback to system preference
      enableSystem // Enable automatic system theme detection
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
