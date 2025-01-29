export default function Footer() {
    return (
        <footer className='bg-secondary px-4 py-6 text-white'>
            <div className='container mx-auto text-center'>
                <p className='font-sans text-sm'>
                    &copy; {new Date().getFullYear()} Advay Sanketi. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
