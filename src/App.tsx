import { useState, FormEvent } from 'react';
import Header from './components/Header';
import { Search as SearchIcon } from 'react-feather';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
    const [search, setSearch] = useState('');
    const [first, setFirst] = useState(true);
    const [query, setQuery] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (search.trim() === '') return;
        if (first) {
            setFirst(false);
        }
        setQuery(search);
    };

    return (
        <>
            <Header />

            <div className='font:sans-serif mx-auto mb-5 mt-5 w-full sm:w-80 md:w-96 lg:w-[50rem]'>
                <div className='w-full'>
                    <form
                        className='mx-5 flex items-center justify-between rounded-md bg-[#f4f4f4] px-4 py-2 sm:px-10'
                        onSubmit={handleSubmit}
                    >
                        <input
                            placeholder='Search for any word...'
                            type='text'
                            className='w-full border-none bg-transparent text-xl font-bold leading-8 outline-none focus:border-[#f4f4f4] dark:text-black dark:placeholder-gray-400 sm:w-auto'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            title='Search'
                            type='submit'
                            className='mt-3 sm:ml-2 sm:mt-0 sm:flex-shrink-0'
                        >
                            <SearchIcon className='-mt-3 text-2xl text-gray-400 dark:text-black lg:mt-0' />
                        </button>
                    </form>
                </div>
            </div>

            <section className='mx-auto mb-5 mt-5 lg:w-[50rem]'>
                <Results search_word={query} first_time={first} />
            </section>

            {/* <Footer /> */}
        </>
    );
}

export default App;
