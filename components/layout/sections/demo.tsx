export const DemoSection = () => {
    return <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group mt-14">
            {/* Blur effect */}
            <div className="absolute -inset-2 bg-primary/30 rounded-full blur-3xl" />

            {/* Video container */}
            <div className="relative w-full aspect-video">
                <iframe
                    src="https://www.youtube.com/embed/Ex3EpKxlMO0?si=VB0KOevgnAvB33gM?start=36"
                    title="Crawl4AI demo"
                    className="w-full h-full rounded-lg border border-t-2 border-secondary border-t-primary/30"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        </div>
    </section>
}