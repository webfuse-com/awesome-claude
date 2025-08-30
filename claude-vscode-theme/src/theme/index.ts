import { palettes, ansiPalettes, type ThemeVariant } from './palette';
import type { ThemeContext, ThemeOptions, CompiledTheme } from '../types';
import { getTokenColors } from './tokenColors';
import { getSemanticTokens } from './semanticTokens';
import { getUiColors } from './uiColors';

export const defaultOptions: ThemeOptions = {
  accent: 'crail',
  italicComments: true,
  italicKeywords: true,
  boldKeywords: true,
  enableItalics: false,
  bracketMode: 'rainbow',
  workbenchMode: 'default',
};

export const italicOptions: ThemeOptions = {
  accent: 'crail',
  italicComments: true,
  italicKeywords: true,
  boldKeywords: true,
  enableItalics: true,
  bracketMode: 'rainbow',
  workbenchMode: 'default',
};

export function compileTheme(
  variant: ThemeVariant = 'dark',
  options: ThemeOptions = defaultOptions
): CompiledTheme {
  const palette = palettes[variant];
  const ansiColors = ansiPalettes[variant];
  
  const context: ThemeContext = {
    variant,
    palette,
    ansiColors,
    options,
  };
  
  // Determine theme name and type
  const themeNames = {
    'dark': options.enableItalics ? 'Claude Dark Italic' : 'Claude Dark',
    'dark-high-contrast': options.enableItalics ? 'Claude Dark High Contrast Italic' : 'Claude Dark High Contrast',
  };
  
  const isDark = variant.includes('dark');
  const themeName = themeNames[variant];
  
  return {
    name: themeName,
    type: isDark ? 'dark' : 'light',
    colors: getUiColors(context),
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokens(context),
    tokenColors: getTokenColors(context),
  };
}