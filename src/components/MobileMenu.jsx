export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-40 bg-neutral-800/90 backdrop-blur-lg transition-opacity duration-100 transform ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div className="pt-20 px-4">
        <a
          href="#research"
          className="block px-4 py-2 text-white hover:bg-neutral-700 rounded-lg mb-1"
        >
          Research
        </a>
        <a
          href="#competitors"
          className="block px-4 py-2 text-white hover:bg-neutral-700 rounded-lg mb-1"
        >
          Competitors
        </a>
        <a
          href="#audience"
          className="block px-4 py-2 text-white hover:bg-neutral-700 rounded-lg mb-1"
        >
          Audience
        </a>
        <a
          href="#metrics"
          className="block px-4 py-2 text-white hover:bg-neutral-700 rounded-lg mb-1"
        >
          Metrics
        </a>
        <a
          href="#content"
          className="block px-4 py-2 text-white hover:bg-neutral-700 rounded-lg mb-1"
        >
          Content
        </a>
        <a
          href="#geography"
          className="block px-4 py-2 text-white hover:bg-neutral-700 rounded-lg mb-1"
        >
          Geography
        </a>
        <a
          href="#swot"
          className="block px-4 py-2 text-white hover:bg-neutral-700 rounded-lg mb-1"
        >
          SWOT
        </a>
        <a
          href="#settings"
          className="block px-4 py-2 text-white hover:bg-neutral-700 rounded-lg"
        >
          Settings
        </a>
      </div>
    </div>
  );
}
