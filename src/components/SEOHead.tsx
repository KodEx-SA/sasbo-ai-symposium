export default function SEOHead() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Sasbo AI Symposium 2026",
        "description": "Shaping the Future of Work in South Africa's Financial Sector",
        "startDate": "2026-06-15T09:00:00+02:00",
        "endDate": "2026-06-16T17:00:00+02:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
            "@type": "Place",
            "name": "Johannesburg, South Africa",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Johannesburg",
                "addressCountry": "ZA"
            }
        },
        "organizer": {
            "@type": "Organization",
            "name": "Sasbo",
            "url": "https://sasbo.org.za"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}