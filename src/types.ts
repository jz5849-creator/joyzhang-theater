export type ProjectCategory = 'Design' | 'Directing' | 'Producing' | 'Performing';

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  coverImage: string;
  gallery: string[];
  venue?: string;
  // Allow single category OR an array of categories
  category: ProjectCategory | ProjectCategory[];
  productionCompany?: string;
  credits?: ProjectCredit[];
}

// 使用 const assertion 替代 enum，这是现代 TypeScript 的推荐写法
export const ViewState = {
  HOME: 'HOME',
  PORTFOLIO: 'PORTFOLIO',
  ABOUT: 'ABOUT',
  CONTACT: 'CONTACT'
} as const;

// 导出 ViewState 类型，这样你在代码里依然可以像以前一样使用 ViewState 作为类型
export type ViewState = typeof ViewState[keyof typeof ViewState];