import './layout-styles.css';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className='container'>
                {children}
            </div>
        </main>
    )
}
