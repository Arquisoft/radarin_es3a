import React from 'react';
import { LogoutButton } from '@solid/react';
import { foaf } from 'rdf-namespaces';
import { useProfile } from '../hooks/useProfile';
import { Coordinates } from './Coordinates';


function Dashboard () {
    const profile = useProfile();

    const name = (profile) ? profile.getString(foaf.name) : null;
    const title = (name)
        ? `Coordenadas de ${name}`
        : 'Coordenadas';

    return (
        <>
            <section className="section">
                <h1 className="title">
                    {title}
                </h1>
            </section>

            <Coordinates/>

            <footer className="footer has-text-right">
                <LogoutButton className="button"/>
            </footer>
        </>
    );
}

export default Dashboard;