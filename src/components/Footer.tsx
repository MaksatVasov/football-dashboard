import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-surface py-6 px-4 md:px-8 border-t border-line mt-8">
      <div className="lg:max-w-[100rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] font-medium text-muted">
          <Link to={"/terms"} className="hover:text-fg transition-colors">
            Terms Of Service
          </Link>
          <Link to={"privacy-policy"} className="hover:text-fg transition-colors">
            Privacy & Data Policy
          </Link>
          <a href="https://www.flaticon.com/free-icons/isometric" title="isometric icons">Isometric icons created by Nsit - Flaticon</a>
        </div>



        <div className="text-[14px] font-medium text-muted text-center md:text-right">
          2026 All Rights Reserved © OneFootball
        </div>

      </div>
    </footer>
  );
}