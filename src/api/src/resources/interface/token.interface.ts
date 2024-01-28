export interface TokenInterface {
    user_id: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    refresh_token: string;
    expires_date: Date;
}
