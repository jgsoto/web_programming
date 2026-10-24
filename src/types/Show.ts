export type Show = {
  id: number;
  name: string;
  summary?: string;
  image?: {
    medium: string;
  };
};

export type ApiResult = {
  show: Show;
};