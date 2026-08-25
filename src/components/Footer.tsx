
export default function Footer() {
  return (
    <footer className="w-full bg-white py-6 px-4 md:px-8 border-t border-gray-100 mt-8 rounded-b-3xl">
      <div className="lg:max-w-[100rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] font-medium text-gray-500">
          <button className="hover:text-gray-900 transition-colors">
            Terms Of Service
          </button>
          <button className="hover:text-gray-900 transition-colors">
            Report Abuse
          </button>
          <button className="hover:text-gray-900 transition-colors">
            Privacy & Data Policy
          </button>
        </div>

        
        <div className="text-[14px] font-medium text-gray-400 text-center md:text-right">
          2026 All Rights Reserved © OneFootball
        </div>
        
      </div>
    </footer>
  );
}