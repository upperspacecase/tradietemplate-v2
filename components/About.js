import siteConfig from "@/config/siteConfig";

export default function About() {
    const { about } = siteConfig;

    return (
        <section id="about" className="bg-surface py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary-dark">
                            {about.image ? (
                                <img
                                    src={about.image}
                                    alt={`${siteConfig.businessName} team`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                            <span className="text-primary-light text-3xl font-bold font-[family-name:var(--font-heading)]">
                                                {siteConfig.businessName.charAt(0)}
                                            </span>
                                        </div>
                                        <p className="text-sm text-sky-300/60">Team photo</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4 font-[family-name:var(--font-heading)]">
                            {about.headline}
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed">
                            {about.text}
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <span className="inline-flex items-center text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                                {siteConfig.licenseNumber}
                            </span>
                            <span className="inline-flex items-center text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                                Est. {siteConfig.yearEstablished}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
