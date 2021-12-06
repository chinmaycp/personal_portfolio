import React, { FunctionComponent } from 'react';
import { Category } from '../types';

export const NavItem:FunctionComponent<{ value:Category | 'all', handleFilterCategory:Function, active:string }> = ({ value, handleFilterCategory, active }) => {
    let className = "cursor-pointer hover:text-customGreen capitalize";
    if(active === value) className += " text-customGreen";

    return (
        <li className={className} onClick={() => handleFilterCategory(value)}>{value}</li>
    );
};

const ProjectsNavbar:FunctionComponent<{ handleFilterCategory:Function, active:string }> = (props) => {
    return (
        <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="express" {...props} />
            <NavItem value="mongo" {...props} />
            <NavItem value="node" {...props} />
            <NavItem value="django" {...props} />
        </div>
    )
}

export default ProjectsNavbar;