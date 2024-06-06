export interface CategoryProps {
    id: number,
    name:string
}

export interface AriticleItem {
    id: number,
    title: string,
    listbanner: string,
    subtitle: string,
    content: string,
    isHot: number,
    views: number,
    author: string,
    status: number,
    likes: number,
    tags: [],
    techCategories: [],
    techCategoriesId: number,
    updatedAt: Date
}

export interface OpenProject {
    id: number,
    title: string,
    listbanner: string,
    url: string,
    views: number,
    author: string,
    status: number,
    updatedAt: Date
}

export interface ActivityProps {
    id: number,
    title: string,
    listbanner: string,
    subtitle: string,
    content: string,
    isHot: number,
    views: number,
    author: string,
    status: number,
    likes: number
}
