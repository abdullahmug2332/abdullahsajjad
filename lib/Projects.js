export const allProjects = [
    {
        "logo": "/projects/photoreal/logo.png",
        "cardImage": "/projects/photoreal/cardimg.png",
        "heroImage": "/projects/photoreal/heroimg.png",
        "name": "PhotoReal",
        "slug": "photoreal",
        "description": "PhotoReal is a professional photography studio based in the United States, specializing in portrait, event, and product photography. Alongside photography services, the studio also operates an online store offering premium photo gear, frames, and customized photo products. The platform was developed to provide clients with a smooth booking experience and an elegant shopping interface.",
        "year": 2025,
        "type": "client",
        "theme": null,
        "pageBuiler": null,
        "live_preview_link": "https://photoreal52.com/",
        "role": "Frontend Developer",
        "tech_stack": "React.js",
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "React",
            "Node.js",
            "Redux",
        ],
        "landing_page_image": "/projects/photoreal/landingpage.png",
        "typography": {
            "font_families": [
                "Cal Sans",
                "Nunito"
            ],
            "font_size_heading": "40px",
            "font_size_subheading": "27px",
            "font_size_paragraph": "16px"
        },
        "responsiveness": {
            "mobile": true,
            "tablet": true,
            "laptop": true
        },
        "colors_used": [
            "#20B2AA",
        ],
        "other_details": "<div class='mb-4'><h2>About the Project</h2><p>PhotoReal is a client-based project built for a professional photo studio in the United States. The platform, developed using <strong>React</strong> and <strong>Bootstrap</strong>, showcases photography services, portfolios, and an integrated online shop for photo gear and accessories. It focuses on delivering a premium and visually appealing user experience with responsive design and efficient navigation.</p></div>"
    },
    {
        "logo": "/projects/touraza/logo.png",
        "cardImage": "/projects/touraza/cardimg.png",
        "heroImage": "/projects/touraza/heroimg.png",
        "name": "Touraza",
        "slug": "touraza",
        "description": "Touraza is a modern tour management platform designed to simplify travel planning and management for customers and agencies worldwide. It allows users to explore global destinations, book custom tours, and manage itineraries with ease. Built with a responsive design and powered by React, Touraza ensures a seamless travel booking experience across all devices.",
        "year": 2023,
        "type": "custom",
        "theme": null,
        "pageBuiler": null,
        "live_preview_link": "https://touraza-react.vercel.app/",
        "role": "Frontend Developer",
        "tech_stack": "React.js",
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "React",
            "Node.js"
        ],
        "landing_page_image": "/projects/touraza/landingpage.png",
        "typography": {
            "font_families": [
                "Great Vibes",
                "Open Sans"
            ],
            "font_size_heading": "40px",
            "font_size_subheading": "27px",
            "font_size_paragraph": "16px"
        },
        "responsiveness": {
            "mobile": true,
            "tablet": true,
            "laptop": true
        },
        "colors_used": [
            "#FC2D2D",
            "#212529"
        ],
        "other_details": "<div class='mb-4'><h2>About the Project</h2><p>Touraza is a comprehensive tour management and booking platform built using <strong>React</strong> and <strong>Bootstrap</strong>. It enables users to explore destinations, create customized travel plans, and book tours with ease. The system is designed to be visually appealing, user-friendly, and responsive across all devices, providing a premium digital travel experience.</p></div>"
    },
    {
        "logo": "/projects/digix/logo.png",
        "cardImage": "/projects/digix/cardimg.png",
        "heroImage": "/projects/digix/heroimg.png",
        "name": "Digix",
        "slug": "digix",
        "description": "Digix is a modern course learning and training institute offering high-quality programs in web development, mobile app development, digital marketing, Shopify development, and e-commerce management. The platform is designed to provide learners with practical, industry-focused skills through an interactive and technology-driven environment.",
        "year": 2023,
        "type": "custom",
        "theme": null,
        "pageBuiler": null,
        "live_preview_link": "https://digix-react.vercel.app/",
        "role": "Frontend Developer",
        "tech_stack": "React.js",
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "React",
            "Node.js"
        ],
        "landing_page_image": "/projects/digix/landingpage.png",
        "typography": {
            "font_families": [
                "Great Vibes",
                "Open Sans"
            ],
            "font_size_heading": "40px",
            "font_size_subheading": "27px",
            "font_size_paragraph": "16px"
        },
        "responsiveness": {
            "mobile": true,
            "tablet": true,
            "laptop": true
        },
        "colors_used": [
            "#1EAAF1",
            "#212529"
        ],
        "other_details": null
    },
    {
        "logo": "/projects/frontic/logo.png",
        "cardImage": "/projects/frontic/cardimg.png",
        "heroImage": "/projects/frontic/heroimg.png",
        "name": "Frontic",
        "slug": "frontic",
        "description": "Frontic Hotel is a premium 4-star establishment designed to combine modern comfort with exceptional service. Located in the heart of Seaside City, the hotel provides a perfect blend of luxury, convenience, and technology-driven experiences. This project focuses on creating a comprehensive digital platform for Frontic Hotel that enhances guest satisfaction and streamlines internal hotel operations.",
        "year": 2023,
        "type": "custom",
        "theme": null,
        "pageBuiler": null,
        "live_preview_link": "https://frontic.vercel.app/",
        "role": "Frontend Developer",
        "tech_stack": "React.js",
        "technologies": [
            "HTML",
            "CSS",
            "JS",
            "Bootstrap",
            "React",
            "Node.js",
        ],
        "landing_page_image": "/projects/frontic/landingpage.png",
        "typography": {
            "font_families": [
                "Great Vibes",
                "Sans Serif"
            ],
            "font_size_heading": "40px",
            "font_size_subheading": "27px",
            "font_size_paragraph": "16px"
        },
        "responsiveness": {
            "mobile": true,
            "tablet": true,
            "laptop": true
        },
        "colors_used": [
            "#00917c",
        ],
        "other_details": null

    },






]
export function getFirstProjects(limit = 4) {
    const projectsArray = Object.values(allProjects);
    return projectsArray.slice(0, limit);
}