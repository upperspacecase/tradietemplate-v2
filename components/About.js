import siteConfig from "@/config/siteConfig";

export default function About() {
    const { about } = siteConfig;

    return (
        <section id="about" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Photo */}
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-navy-lighter">
                            {about.image ? (
                                <img
                                    src={about.image}
                                    alt={`${siteConfig.businessName} team`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <div className="text-center">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand/20 flex items-center justify-center">
                                            <span className="text-brand text-3xl font-bold">
                                                {siteConfig.businessName.charAt(0)}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400">Team photo</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                            {about.headline}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {about.text}
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <span className="inline-flex items-center text-sm font-medium text-navy bg-brand/10 px-3 py-1.5 rounded-full">
                                {siteConfig.licenseNumber}
                            </span>
                            <span className="inline-flex items-center text-sm font-medium text-navy bg-brand/10 px-3 py-1.5 rounded-full">
                                Est. {siteConfig.yearEstablished}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
