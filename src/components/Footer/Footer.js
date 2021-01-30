import React from 'react';

import './footer.css';

function Footer({company}) {
    return (
        <footer className="footer">
            <img src='./img/logo.svg' alt="logo Space X" className="logo"/>
            <nav className="footer-nav">
                <ul className="list">
                    <li className="item"><a href={`${company ? company.links.elon_twitter : null}`} rel="noopener noreferrer" target='_blank' className="item-link">Elon
                        Musk Twitter</a></li>
                    <li className="item"><a href={`${company ? company.links.twitter : null}`} rel="noopener noreferrer" target='_blank'
                                            className="item-link">Twitter</a></li>
                    <li className="item"><a href={`${company ? company.links.flickr : null}`} rel="noopener noreferrer" target='_blank'
                                            className="item-link">Flickr</a></li>
                    <li className="item"><a href={`${company ? company.links.website : null}`} rel="noopener noreferrer" target='_blank'
                                            className="item-link">Website</a></li>
                </ul>
            </nav>
            <p className="footer-text">
                {/*For additional questions, contact*/}
                {/*<a className="footer-link" href="mailto:rideshare@spacex.com"*/}
                {/*>rideshare@spacex.com</a*/}
                {/*>*/}
                {company ? company.summary : null}
            </p>

        </footer>

    );
}

export default Footer;
