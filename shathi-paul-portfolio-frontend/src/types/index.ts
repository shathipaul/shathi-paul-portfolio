export interface IBlogData {
  articleId: number;
  blogImage: string;
  date: string;
  time: string;
  title: string;
  shortDes: string;
  description: Array<{
    title?: string;
    quote?: string;
    paragraph: string;
  }>;
}

export interface ICommonButton {
  text: string;
  onClick?: () => void;
}
