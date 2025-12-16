type Links = {
    title: string;
    columnLinks: {
        label: string;
        href: string;
    }[];
}[];

export const links: Links = [
    {
        title: 'Products',
        columnLinks: [
            {
                label: 'Deploy Previews',
                href: '/platform/core/deploy-previews'
            },
            {
                label: 'Functions',
                href: '/platform/core/functions'
            },
            {
                label: 'Agent Runners',
                href: '/platform/agent-runners'
            },
            {
                label: 'Primitives',
                href: '/platform/primitives'
            },
            {
                label: 'Security',
                href: '/security'
            },
            {
                label: 'Netlify CLI',
                href: 'https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli'
            },
            {
                label: 'Netlify SDK',
                href: 'https://developers.netlify.com/sdk/get-started/introduction'
            },
            {
                label: 'Pricing',
                href: '/pricing'
            },
        ]
    },
    {
        title: 'Resources',
        columnLinks: [
            {
                label: 'Docs',
                href: 'https://docs.netlify.com'
            },
            {
                label: 'Status',
                href: 'https://netlifystatus.com'
            },
            {
                label: 'Support',
                href: '/support'
            },
            {
                label: 'Developer Guides',
                href: 'https://developers.netlify.com'
            },
            {
                label: 'Changelog',
                href: '/changelog'
            },
            {
                label: 'Integrations',
                href: '/integrations'
            },
            {
                label: 'Guides',
                href: '/resources'
            },
            {
                label: 'Hire An Agency',
                href: '/agency-directory'
            },
        ]
    },
    {
        title: 'Company',
        columnLinks: [
            {
                label: 'About',
                href: '/about'
            },
            {
                label: 'Agent Experience',
                href: '/agent-experience'
            },
            {
                label: 'Blog',
                href: '/blog'
            },
            {
                label: 'Customers',
                href: '/customers'
            },
            {
                label: 'Careers',
                href: '/careers'
            },
            {
                label: 'Press',
                href: '/press'
            },
        ]
    },
    {
        title: 'Contact Us',
        columnLinks: [
            {
                label: 'Sales',
                href: '/contact/sales?attr=homepage&ref=sales&id=cta-footer-sales'
            },
            {
                label: 'Support',
                href: '/support'
            },
            {
                label: 'Status',
                href: 'https://netlifystatus.com/'
            },
            {
                label: 'Forums',
                href: 'https://answers.netlify.com/'
            },
        ]
    },
];