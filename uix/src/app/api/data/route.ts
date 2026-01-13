import { NextResponse } from 'next/server'

import { NavLinkType } from '@/app/types/navlink'
import { ProjectType } from '@/app/types/project'
import { RecordType } from '@/app/types/record'
import { ReviewType } from '@/app/types/review'
import { SpecializeType } from '@/app/types/specialize'
import { PlanType } from '@/app/types/plan'
import { CategoryType } from '@/app/types/category'
import { FooterLinkType } from '@/app/types/footerlinks'
import { HeroType } from '@/app/types/hero'

const HeroData: HeroType[] = [
    {
        imgSrc: '/images/banner/b1.jpg',
    },
    {
        imgSrc: '/images/banner/b3.jpg',
    },

]

const NavLinkData: NavLinkType[] = [
    {
        label: 'Projects',
        href: '/#project',
    },
    {
        label: 'Services',
        href: '/#expertise',
    },
    // {
    //   label: 'Pricing',
    //   href: '/#pricing',
    // },
    {
        label: 'Categories',
        href: '/#categories',
    },
]

const ProjectData: ProjectType[] = [
    {
        coverImg: '/images/project/blogforge.webp',
        name: 'Blog Forge',
    },
    {
        coverImg: '/images/project/gleamer.webp',
        name: 'Gleamer',
    },
    {
        coverImg: '/images/project/learnaxis.webp',
        name: 'Learnaxis',
    },
    {
        coverImg: '/images/project/studiova.webp',
        name: 'Studiova',
    },
    {
        coverImg: '/images/project/homely.webp',
        name: 'Homely',
    },
    {
        coverImg: '/images/project/awake.webp',
        name: 'Awake',
    },
    {
        coverImg: '/images/project/endeavor.webp',
        name: 'Endeavor',
    },
]

const RecordData: RecordType[] = [
    {
        imgSrc: '/images/records/star.svg',
        digit: '4.9 Rating',
        desc: 'Rated by 3,500+ clients on Google and Clutch platforms',
    },
    {
        imgSrc: '/images/records/user.svg',
        digit: '3,500+ Clients',
        desc: 'Trusted by global brands for design and digital solutions',
    },
    {
        imgSrc: '/images/records/cart.svg',
        digit: '$45M+ Revenue',
        desc: 'Generated through websites, apps, and marketing globally',
    },
    {
        imgSrc: '/images/records/star.svg',
        digit: '500+ Projects',
        desc: 'Delivered websites, branding, and full digital experiences worldwide',
    },
];


const ReviewData: ReviewType[] = [
    {
        imgSrc: '/images/review/daniel.webp',
        name: 'Daniel Reid',
        rating: 4.2,
        desc: 'Pixelize nailed our website redesign. Clean layout, fast loading, and mobile-friendly. Highly recommended!',
    },
    {
        imgSrc: '/images/review/sophia.webp',
        name: 'Sophia Turner',
        rating: 4.5,
        desc: 'The UI/UX improvements boosted our user engagement and conversions. Truly a professional team!',
    },
    {
        imgSrc: '/images/review/marcus.webp',
        name: 'Marcus Lee',
        rating: 4.8,
        desc: 'They understood our brand vision perfectly and delivered a logo that stands out in our industry.',
    },
]

const SpecializeData: SpecializeType[] = [
    {
        imgSrc: '/images/specialization/web.svg',
        title: 'Web & Mobile App Development',
        desc: 'Professional, modern, and responsive websites & mobile apps tailored to your needs. Whether you’re a startup, business, or personal brand'
    },
    {
        imgSrc: '/images/specialization/crop.jpg',
        title: 'Food & Crop Produce Sales',
        desc: 'Fresh, quality food items and agricultural produce sourced directly from trusted suppliers. We ensure quality, freshness, and fair pricing.',
    },
    {
        imgSrc: '/images/specialization/wood.jpg',
        title: 'Wood Sales & Supply',
        desc: 'Durable and high quality wood for decking, formworks, building, estimate, rentals for wood, plywood and boards in different sizes',
    },
    {
        imgSrc: '/images/specialization/electrical.jpg',
        title: 'Electrical Works',
        desc: 'Reliable electrical installation, maintenance, and repair services handled by skilled professionals including house and office wiring.',
    },
    {
        imgSrc: '/images/specialization/construction.jpg',
        title: 'Construction Services',
        desc: 'From planning to execution, we offer professional construction services for residential and commercial projects including building and construction',
    },
    {
        imgSrc: '/images/specialization/mechanic.jpg',
        title: 'Professional Mechanic Services',
        desc: 'From routine maintenance to complex repairs, we offer trusted mechanic services for cars, trucks, and commercial vehicles, ensuring safety and performance.'
    },
]

const PlanData: PlanType[] = [
    {
        type: 'Basic',
        price: {
            monthly: 9,
            yearly: 95,
        },
        desc: 'Ideal for freelancers and startups.',
        option: [
            'Consultation with strategy session',
            'Basic design and development',
            'One revision per project',
            'Responsive on all devices',
            'Email support included only',
        ],
    },
    {
        type: 'Pro',
        price: {
            monthly: 19,
            yearly: 185,
        },
        desc: 'Perfect for small growing teams.',
        option: [
            'Advanced project planning support',
            'Premium design and development',
            'Three revisions per project',
            'Fully responsive and optimized',
            'Priority email and chat support',
        ],
    },
]

const CategoryData: CategoryType[] = [
    {
        imgSrc: '/images/category/h1.jpeg',
        title: 'House Painting & Design',
    },
    {
        imgSrc: '/images/category/h2.jpeg',
        title: 'Home Design',
    },
    {
        imgSrc: '/images/category/h3.jpeg',
        title: 'House Painting',
    },
    // {
    //     imgSrc: '/images/category/contentwrite.webp',
    //     title: 'Content Writing',
    // },
    // {
    //     imgSrc: '/images/category/digitalmarket.webp',
    //     title: 'Digital Marketing',
    // },
]

const FooterLinkData: FooterLinkType[] = [
    {
        section: 'Handiman',
        links: [
            // {
            //     label: 'Projects',
            //     href: '/#project',
            // },
            {
                label: 'Services',
                href: '/#expertise',
            },
            // {
            //     label: 'Pricing',
            //     href: '/#pricing',
            // },
            {
                label: 'Categories',
                href: '/#categories',
            },
        ],
    },
    // {
    //     section: 'Support',
    //     links: [
    //         { label: 'Help center', href: '/' },
    //         { label: 'Terms of service', href: '/' },
    //         { label: 'Legal', href: '/' },
    //         { label: 'Privacy Policy', href: '/' },
    //     ],
    // },
]

export const GET = () => {
    return NextResponse.json({
        HeroData,
        NavLinkData,
        ProjectData,
        RecordData,
        ReviewData,
        SpecializeData,
        PlanData,
        CategoryData,
        FooterLinkData,
    })
}
