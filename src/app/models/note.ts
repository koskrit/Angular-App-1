export interface Note {
  id?: string;
  title: string;
  htmlContent: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: string;
}
