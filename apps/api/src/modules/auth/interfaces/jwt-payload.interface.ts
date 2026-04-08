export interface JwtPayload {
  sub: string;
  email?: string;
  groupId?: string;
  iat?: number;
  exp?: number;
}
