import { useState, useEffect } from 'react';
import heroImg from './assets/hero-img.png';
import Search from './components/Search';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {}, []);

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

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </main>
    );
};

export default App;
