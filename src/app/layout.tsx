import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
    title: 'Push your ideas to the web | Netlify',
    description: 'Build with AI or code, deploy instantly. One platform with everything you need to make real apps live.',
    icons: {
        icon: '/icon.svg',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>

            <body>

                {children}

            </body>

        </html>
    );
}