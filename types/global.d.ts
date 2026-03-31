export {};

declare global {
  interface Window {
    openAccessibilityTools: () => void;
  }
}
