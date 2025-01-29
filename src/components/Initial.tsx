export default function InitialState() {
    return (
        <div className='font:sans-serif flex min-h-[400px] flex-col items-center justify-center p-8 text-center'>
            <h1 className='mb-4 text-2xl font-bold md:text-4xl lg:text-5xl'>
                Dictionary
            </h1>
            <p className='mb-4 max-w-md text-lg text-gray-600'>
                Type any word above to get its definition, pronunciation, and
                more.
            </p>
            <p className='text-lg text-gray-600'>
                Try words like "dictionary", or "serendipity", or "advay"
            </p>
        </div>
    );
}
