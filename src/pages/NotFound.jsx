import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="shell flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-headline">This theme doesn&rsquo;t exist.</h1>
        <Link
          to="/"
          className="mt-8 border border-ink px-5 py-2 text-small transition-colors hover:bg-ink hover:text-paper"
        >
          Back to the gallery
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
