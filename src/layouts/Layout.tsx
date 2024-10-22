import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header className='bg-slate-800'>
                <div className='mx-auto max-w-6xl py-10'>
                    <h1 className="text-4xl text-white">
                        Roles Manager
                    </h1>
                </div>
            </header>

            <main className='mt-10 mx-auto  bg-white shadow'>
                <Outlet />
            </main>
        </>
    )
}
