import React, { FunctionComponent } from 'react';
import { Service } from '../types';

const ServiceCard:FunctionComponent<{ service:Service }> = ({ service: { Icon, about, title } }) => {
    const createMarkup = () => {
        return {
            __html: about
        }
    };

    return (
        <div className="p-2 flex items-center space-x-4">
            <Icon className="w-12 h-12 text-customGreen" />
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

export default ServiceCard;