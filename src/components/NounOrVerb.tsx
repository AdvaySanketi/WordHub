export default function NounOrVerb({ word }: any) {
    return (
        <div className='mx-4 lg:mx-0'>
            {word?.meanings.map((meaning: any, i: number) => (
                <div
                    key={i}
                    className='mt-8 
                    '
                >
                    <div className='flex items-center'>
                        <h1 className={`text-2xl font-bold`}>
                            {meaning.partOfSpeech}
                        </h1>
                        <div className='ml-5 h-[1px] flex-1 bg-gray-300 dark:bg-gray-100'></div>
                    </div>
                    <h2 className='mt-10 text-2xl font-bold text-gray-400'>
                        Meaning
                    </h2>
                    <ul
                        className='mt-2 list-inside list-disc marker:text-primary

                                '
                    >
                        {meaning.definitions.map(
                            (definition: any, j: number) => (
                                <li key={j} className='mb-4'>
                                    {definition.definition}
                                </li>
                            )
                        )}
                    </ul>

                    {meaning?.synonyms && meaning.synonyms.length > 0 ? (
                        <>
                            <h2 className='mt-10 text-2xl font-bold text-gray-400'>
                                Synonyms
                            </h2>
                            <ul className='mt-2 list-inside list-disc marker:text-primary'>
                                {meaning?.synonyms.map(
                                    (synonym: any, k: number) => (
                                        <li key={k}>{synonym}</li>
                                    )
                                )}
                            </ul>
                        </>
                    ) : (
                        <></>
                    )}

                    {meaning?.antonyms && meaning.antonyms.length > 0 ? (
                        <>
                            <h2 className='mt-10 text-2xl font-bold text-gray-400'>
                                Antonyms
                            </h2>
                            <ul className='mt-2 list-inside list-disc marker:text-primary'>
                                {meaning?.antonyms.map(
                                    (synonym: any, k: number) => (
                                        <li key={k}>{synonym}</li>
                                    )
                                )}
                            </ul>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            ))}
        </div>
    );
}
