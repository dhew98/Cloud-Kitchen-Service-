import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Services from '../Services/Services';
import useTitle from '../../Hooks/useTitle';
const Allservice = () => {
    const services = useLoaderData();
    useTitle("All Services")

    return (
        <div>
            <h1 className="text-center mt-2">All Services</h1>
            <CardGroup className='mt-3 '>
                {services.map(service => <Services
                    key={service._id}
                    service={service}
                />)
                }
            </CardGroup>
        </div>
    );
};

export default Allservice;