import { Bot, SquareFunction, Server, Globe, Captions, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type PrimitiveName = 'AI Gateway' | 'Serverless functions' | 'Data & storage' | 'Image CDN' | 'Automatic forms';

type Primitive = {
    name: PrimitiveName;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
};

export const primitives: Primitive[] = [
    {
        name: 'AI Gateway',
        icon: Bot 
    },
    {
        name: 'Serverless functions',   
        icon: SquareFunction 
    },
    {
        name: 'Data & storage',
        icon: Server
    },
    {
        name: 'Image CDN',
        icon: Globe 
    },
    {
        name: 'Automatic forms',
        icon: Captions 
    }
];

export type PrimitiveData = {
    name: PrimitiveName;
    title: string;
    description: string | null;
    features: string[];
    link: {
        name: string,
        href: string
    };
    example: string;
};

export const primitivesData: PrimitiveData[] = [
    {
        name: 'AI Gateway',
        title: 'Power AI apps with AI Gateway',
        description: 'Call OpenAI, Anthropic, or Gemini directly from your code without juggling keys or accounts. Every request is routed through one gateway, with usage tracking and safeguards included.',
        features: [
            'Use AI without managing API keys',
            'Switch between 30+ models',
            'Monitor usage and costs in one place'
        ],
        link: {
            name: 'Read the AI Gateway docs',
            href: '/build/ai-gateway/overview'
        },
        example: 'Example: Generate alt text with OpenAI',
  
    },
    {
        name: 'Serverless functions',
        title: 'Build scalable, fullstack apps with Netlify Functions',
        description: 'Deploy server-side code that works as API endpoints, runs automatically in response to events, or processes more complex jobs in the background.',
        features: [
            'Send automated email',
            'Fetch live data from an API',
            'Return dynamic images',
            'Validate user input'
        ],
        link: {
            name: 'Read the Netlify Functions docs',
            href: '/build/functions/overview'
        },
        example: 'Example: Send email',
    },
    {
        name: 'Data & storage',
        title: 'Agent-friendly storage for full-stack apps',
        description: 'Instantly provision a production-grade database with Netlify DB or use Blobs as a simple key/value store or lightweight database.',
        features: [
            'Store and retrieve blobs and unstructured data for frequent reads and infrequent writes',
            'Use serverless databases to create full-stack apps',
            'Set up in minutes with the help of a code agent',
        ],
        link: {
            name: 'Read the Netlify storage docs',
            href: '/build/data-and-storage/netlify-blobs'
        },
        example: 'Example: Persist user-generated uploads',
    },
    {
        name: 'Image CDN',
        title: 'Better image performance with the Netlify Image CDN',
        description: null,
        features: [
            'Transform images on demand without impacting build times',
            'Optimize the size and format of your images',
            'Improve both the runtime performance and reliability of your site',
        ],
        link: {
            name: 'Read the Netlify Image CDN docs',
            href: '/build/image-cdn/overview'
        },
        example: 'Example: Resize a cached image',
    },
    {
        name: 'Automatic forms',
        title: 'Get information from your users with Netlify Forms',
        description: null,
        features: [
            'Automatic form detection with one HTML attribute',
            'Allows you to create forms in Netlify without extra API calls or additional JavaScript',
            'Uses HTML forms, a trusted web standard',
        ],
        link: {
            name: 'Read the Netlify forms docs',
            href: '/manage/forms/setup'
        },
        example: 'Example: Contact us form',
    }
];