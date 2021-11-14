interface KakaoAuthFail {
  error: 'access_denied';
  error_description: string;
}

interface KakaoAuthStatus {
  status: 'connected' | 'not_connected';
  user: any;
}

interface KakaoAuthSuccess {
  access_token: string;
  refresh_token: string;
  token_type: string; // bearer
  expires_in: number;
  scope: string;
}

interface KakaoAuth {
  authorize(settings: {
    redirectUri: String;
    state?: string;
    scope?: string;
    throughTalk?: boolean;
    prompts?: string;
  }): void;
  cleanup(): void;
  createLoginButton(settings: {
    container: string | HTMLElement;
    lang?: string;
    size?: 'small' | 'medium' | 'large';
    success?: (res: KakaoAuthSuccess) => void;
    fail?: (err: KakaoAuthFail) => void;
    always?: (res: KakaoAuthSuccess | KakaoAuthFail) => void;
    scope?: string;
    persistAccessToken?: boolean;
    throughTalk?: boolean;
  }): void;
  getAccessToken(): string | null;
  getAppKey(): string | null;
  getStatusInfo(callback?: (params: KakaoAuthStatus) => void): void;
  login(settings: {
    success?: (res: KakaoAuthSuccess) => void;
    fail?: (err: KakaoAuthFail) => void;
    always?: (res: KakaoAuthSuccess | KakaoAuthFail) => void;
    scope?: string;
    persistAccessToken?: boolean;
    throughTalk?: boolean;
  }): void;
  loginForm(settings: {
    success?: (res: KakaoAuthSuccess) => void;
    fail?: (err: KakaoAuthFail) => void;
    always?: (res: KakaoAuthSuccess | KakaoAuthFail) => void;
    scope?: string;
    persistAccessToken?: boolean;
  }): void;
  logout(callback?: VoidFunction): void;
  setAccessToken(token: string, persist?: boolean): void;
}

interface KakaoAPI {
  request(params: {
    url: string;
    data?: Record<string, any>;
    files?: FileList;
    success?: (res: any) => void;
    fail?: (err: any) => void;
    always?: (res: any) => void;
  }): Promise<void>;
}

interface Kakao {
  VERSION: string;
  cleanup(): void;
  init(appKey: string): void;
  isInitialized(): void;
  Auth?: KakaoAuth;
  API?: KakaoAPI;
}

interface Window {
  Kakao?: Kakao;
}
