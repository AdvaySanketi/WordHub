import { useState, useEffect } from 'react';
import Footer from './Footer';
import NoResults from './NoResults';
import NounOrVerb from './NounOrVerb';
import InitialState from './Initial';
import axios from 'axios';
import PacmanLoader from 'react-spinners/PacmanLoader';

interface Phonetic {
    text: string;
    audio: string;
}

interface Definition {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms?: string[];
    antonyms?: string[];
}

interface DictionaryEntry {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    sourceUrls: string[];
}

interface ResultsProps {
    search_word: string;
    first_time: boolean;
}

export default function Results({ search_word, first_time }: ResultsProps) {
    const [results, setResults] = useState<DictionaryEntry[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!search_word || first_time) return;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const normalizedSearchWord = search_word.toLowerCase().trim();
                if (
                    ['advay', 'advay sanketi', 'advaysanketi'].includes(
                        normalizedSearchWord
                    )
                ) {
                    setResults([
                        {
                            word: 'Advay Sanketi',
                            phonetic: '/ˈæd.vaɪ sʌŋˈkeɪ.ti/',
                            phonetics: [
                                {
                                    text: '/ˈæd.vaɪ/',
                                    audio: '',
                                },
                            ],
                            meanings: [
                                {
                                    partOfSpeech: 'noun',
                                    definitions: [
                                        {
                                            definition:
                                                'A code wizard who turns caffeine into code, transforming wild ideas into sleek mobile and web apps faster than you can say "compile".',
                                            synonyms: [
                                                'Flutter Ninja',
                                                'App Alchemist',
                                                'Digital Dreamweaver',
                                            ],
                                            antonyms: [],
                                        },
                                        {
                                            definition:
                                                'A BTech CSE student at PES University, passionate about anything that catches his eye.',
                                            synonyms: [
                                                'Code Crusader',
                                                'Problem-Solving Wizard',
                                                'Tech Adventure Seeker',
                                            ],
                                            antonyms: [],
                                        },
                                    ],
                                    synonyms: [
                                        'Flutter Ninja',
                                        'Code Crusader',
                                        'Web Wizard',
                                        'App Alchemist',
                                        'Digital Dreamweaver',
                                    ],
                                },
                            ],
                            sourceUrls: [
                                'https://advay-sanketi-portfolio.vercel.app/',
                                'https://github.com/advaysanketi',
                                'https://www.linkedin.com/in/advaysanketi/',
                            ],
                        },
                    ]);
                    setIsLoading(false);
                    return;
                }

                const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search_word}`;
                const response = await axios.get<DictionaryEntry[]>(
                    dictionaryUrl
                );
                setResults(response.data);
            } catch (err) {
                setResults([]);
                setError(
                    err instanceof Error ? err.message : 'An error occurred'
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [search_word, first_time]);

    if (first_time || !search_word) {
        return <InitialState />;
    }

    if (isLoading) {
        return <PacmanLoader />;
    }

    if (
        error ||
        !results.length ||
        !results[0]?.meanings[0]?.definitions[0]?.definition
    ) {
        return <NoResults />;
    }

    const getAudio = () => {
        const audioUrl = results[0]?.phonetics?.find((p) => p.audio)?.audio;
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
        }
    };

    return (
        <div className='font-sans'>
            <div className='mx-5 flex flex-col'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-5xl font-extrabold'>
                        {results[0].word}
                    </h1>
                    <button
                        onClick={getAudio}
                        className='play-btn'
                        disabled={!results[0]?.phonetics?.some((p) => p.audio)}
                    >
                        <img
                            src='/assets/images/icon-play.svg'
                            alt='play icon'
                            className='lg:h-none lg:w-none h-16 w-16'
                        />
                    </button>
                </div>

                <p className='text-primary'>{results[0].phonetic}</p>
            </div>
            <div className='mx-1 lg:mx-5'>
                <NounOrVerb word={results[0]} />
            </div>

            <div className='my-10'>
                <div className='ml-5 h-[1px] flex-1 bg-gray-300 dark:bg-gray-100'></div>
                <h2 className='ml-4 mt-5 text-2xl font-bold text-gray-400'>
                    Source
                </h2>
                <div className='ml-5 mt-2 list-inside list-disc font-bold text-[#ad76cd]'>
                    {results[0]?.sourceUrls.map((urls: any, i: number) => (
                        <li key={i}>
                            <a
                                href={urls}
                                target='_blank'
                                className='underline'
                            >
                                {urls}
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}
