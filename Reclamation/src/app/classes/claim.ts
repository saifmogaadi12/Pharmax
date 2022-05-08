export interface Claim {
  id?: number;
  route: string;
  name: string;
  surname: string;
  subject: string;
  claimText: string;
  date: string;
  status: string;
  responses: string[];
}
