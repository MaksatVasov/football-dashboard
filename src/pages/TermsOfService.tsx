export default function TermsOfServicePage() {

    return (
        <main className="w-full lg:max-w-5xl mx-auto min-h-screen bg-white rounded-none lg:rounded-2xl mt-0 lg:mt-6 mb-10 pb-16 shadow-sm border border-transparent lg:border-gray-100/50">
            <div className="w-full mx-auto px-6 pt-8 lg:px-12 lg:pt-12 animate-in fade-in duration-300">

                <div className="flex flex-col gap-6">
                    <span className="text-sm font-extrabold text-[#5942AA] uppercase tracking-wider bg-[#5942AA]/10 px-3 py-1 rounded-full w-fit">
                        Legal
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        Terms Of Service
                    </h1>

                    <p className="text-sm text-gray-400">
                        Last updated: September 21, 2026
                    </p>

                    <div className="h-px w-full bg-gray-100 my-2"></div>

                    <div className="flex flex-col gap-6 text-gray-600 text-base leading-relaxed">
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">2. Use License</h2>
                            <p>
                                Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">3. Disclaimer</h2>
                            <p>
                                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">4. Limitations</h2>
                            <p>
                                In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-gray-900">5. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms of Service, please feel free to reach out through our contact channels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}