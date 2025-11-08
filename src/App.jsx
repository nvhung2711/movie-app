import React from 'react';
import heroImg from './assets/hero-img.png';
import Search from './components/Search';

const App = () => {
    return (
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <header>
                    <img src={heroImg} alt="Hero Banner" />
                    <h1>
                        Find <span className="text-gradient">Movies</span>{' '}
                        You'll Enjoy Without the Hassle
                    </h1>
                </header>
            </div>

            <Search />
        </main>
    );
};

export default App;
