export const apiConfig = {
  baseUrl: "https://portfolio-backend-omega-sage.vercel.app/v1.0.0/apis",
  projects: {
    create: "/projects/upload",
    getAll: "/projects/getAll",
    getDetails: "/projects/getDetails",
    update: "/projects/update",
    delete: "/projects/delete",
  },
  blogs: {
    create: "/blogs/upload",
    getAll: "/blogs/getAll",
    getDetails: "/blogs/getDetails",
    update: "/blogs/update",
    delete: "/blogs/delete",
  },
  admin: {
    login: "/admin/login",
    me: "/admin/me",
    logout: "/admin/logout",
  },
};

export interface IProjects {
  _id: string;
  title: string;
  stack: string;
  thumbnail: string;
  liveLink: string;
  repoLink: string;
  rank: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBlogs {
  _id: string;
  title: string;
  subTitle: string;
  description: string; // HTML string from the CMS editor
  tag: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
