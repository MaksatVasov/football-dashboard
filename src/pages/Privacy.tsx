export default function PrivacyPolicyPage() {
    

    return (
        <main className="w-full lg:max-w-5xl mx-auto min-h-screen bg-white rounded-none lg:rounded-2xl mt-0 lg:mt-6 mb-10 pb-16 shadow-sm border border-transparent lg:border-gray-100/50">
            <div className="w-full mx-auto px-6 pt-8 lg:px-12 lg:pt-12 animate-in fade-in duration-300">

                <div className="flex flex-col gap-6">
                    <span className="text-sm font-extrabold text-[#5942AA] uppercase tracking-wider bg-[#5942AA]/10 px-3 py-1 rounded-full w-fit">
                        Legal
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        Privacy & Data Policy
                    </h1>

                    <p className="text-sm text-gray-400">
                        Last updated: September 21, 2026
                    </p>

                    <div className="h-px w-full bg-gray-100 my-2"></div>

                    <div className="flex flex-col gap-6 text-gray-600 text-base leading-relaxed">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
                            <p>
                                We may collect personal identification information from users in a variety of ways, including, but not limited to, when users visit our site, fill out a form, and in connection with other activities, services, features, or resources we make available.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">2. How We Use Collected Information</h2>
                            <p>
                                The collected data may be used to improve customer service, personalize user experience, and run site features effectively without storing unnecessary sensitive personal records on remote servers.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">3. Protection of Your Information</h2>
                            <p>
                                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">4. Sharing Your Personal Information</h2>
                            <p>
                                We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">5. Changes to This Privacy Policy</h2>
                            <p>
                                We have the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}