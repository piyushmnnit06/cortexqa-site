import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

function NotFoundPage() {
  return (
    <>
      <PageHeader
        eyebrow="Not Found"
        title="That page is not available."
        description="The CortexQA page you requested may have moved or the link may be incomplete."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Link to="/" className="inline-flex h-12 items-center gap-2 rounded-md bg-cortex-teal px-6 font-semibold text-slate-950 transition hover:bg-cortex-cyan">
          Back to home <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}

export default NotFoundPage;
