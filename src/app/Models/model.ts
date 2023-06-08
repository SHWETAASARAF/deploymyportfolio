export interface Education{
    University:string;
    Graduation:string;
    duration:string;
    score:string;
};

export interface WorkExperience{
    role:string;
    company:string;
    duration:string;
    decription:string[];
};

export interface Skill{
    name:string;
    level:string;
    rating:number
}

export interface Project{
    title:string;
    technologies:string;
    description:string[];
    image:string;
}

