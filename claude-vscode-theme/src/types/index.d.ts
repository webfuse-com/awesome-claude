import type { ClaudePalette, AnsiColors, ThemeVariant } from '../theme/palette';

export interface ThemeOptions {
  accent: keyof Pick<ClaudePalette, 'crail' | 'orange' | 'blue' | 'purple' | 'green' | 'teal'>;
  italicComments: boolean;
  italicKeywords: boolean;
  boldKeywords: boolean;
  enableItalics: boolean;
  bracketMode: 'rainbow' | 'dimmed' | 'monochromatic';
  workbenchMode: 'default' | 'flat' | 'minimal';
}

export interface ThemeContext {
  variant: ThemeVariant;
  palette: ClaudePalette;
  ansiColors: { normal: AnsiColors; bright: AnsiColors };
  options: ThemeOptions;
}

export interface TextmateRule {
  name?: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

export type TextmateColors = TextmateRule[];

export interface SemanticTokenRule {
  [key: string]: {
    foreground?: string;
    fontStyle?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
  };
}

export interface WorkbenchColors {
  [key: string]: string;
}

export interface CompiledTheme {
  name: string;
  type: 'light' | 'dark';
  colors: WorkbenchColors;
  semanticHighlighting: boolean;
  semanticTokenColors: SemanticTokenRule;
  tokenColors: TextmateColors;
}