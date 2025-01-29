interface ModesProps {
    theme?: string;
    onClick: () => void;
}
export default function Modes({ theme, onClick }: ModesProps) {
    return (
        <div>
            <div className='grid grid-flow-col items-center gap-4'>
                <img
                    src='/assets/images/icon-sun.svg'
                    alt='sun icon'
                    className='dark:text-primary'
                />

                <div
                    className={`flex h-5 w-10 cursor-pointer items-center rounded-full bg-gray-800 dark:bg-primary `}
                    onClick={() => onClick()}
                >
                    <span
                        className={`mx-1 h-[14px] w-[14px] rounded-full bg-white transition-all duration-500 ${
                            theme === 'dark' && 'ml-[22px]'
                        } `}
                    ></span>
                </div>

                <img
                    src='/assets/images/icon-moon.svg'
                    alt='moon icon'
                    className='dark:text-primary'
                />
            </div>
        </div>
    );
}
