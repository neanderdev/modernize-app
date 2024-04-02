import { SidebarDrawerProvider } from '@/contexts/SidebarContext';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

import './layout-styles.css';

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarDrawerProvider>
            <div className='body'>
                <Header />

                <div className='container'>
                    <Sidebar />

                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </SidebarDrawerProvider>
    )
}
