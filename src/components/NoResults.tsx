import { SearchX } from 'lucide-react';

export default function NoResults() {
    return (
        <div className='font:sans-serif flex min-h-[400px] flex-col items-center justify-center p-8 text-center'>
            <SearchX className='mb-6 h-16 w-16 text-gray-400' />

            <h1 className='mb-4 text-2xl font-bold md:text-4xl lg:text-5xl'>
                No results found
            </h1>

            <p className='mb-8 max-w-md text-lg text-gray-600'>
                We couldn't find what you're looking for. Please check your
                spelling or try searching for a different word.
            </p>
        </div>
    );
}
