import React from 'react';

const Layout = ({children, title}) => {

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{title}</a>
                <a className="d-flex" href="" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </nav>
            <main className="container">
                {children}
            </main>
        </>
    )
}

export default Layout;