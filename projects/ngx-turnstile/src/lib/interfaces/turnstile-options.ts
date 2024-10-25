export interface TurnstileOptions {
  sitekey: string;
  action?: string;
  cData?: string;
  callback?: (token: string) => void;
  'error-callback'?: (errorCode: string) => boolean;
  'expired-callback'?: () => void;
  theme?: string;
  language?: string;
  tabindex?: number;
  appearance?: string;
}
