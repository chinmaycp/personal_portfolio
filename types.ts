import { IconType } from 'react-icons';

export interface Service {
    title:string,
    about:string,
    Icon:IconType
};

export interface Skill {
    name:string,
    level:number,
    Icon:IconType
};

export interface Project {
    id: number,
    name:string,
    description:string,
    image_path:string,
    deployed_url:string,
    github_url:string,
    categories:Category[],
    key_technologies:string[]
};

export type Category = 'react' | 'express' | 'mongo' | 'node' | 'django';