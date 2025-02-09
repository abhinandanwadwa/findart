export default function Navigation() {
  return (
    <nav className="w-64 bg-neutral-800 text-neutral-100 fixed h-screen hidden lg:block">
      <div className="p-4 border-b border-neutral-700">
        <div className="text-2xl font-bold">AI ART Finder</div>
      </div>

      <div className="py-4">
        <a
          href="#research"
          className="block px-4 py-2 hover:bg-neutral-700 transition-colors active"
        >
          Research
        </a>
        <a
          href="#competitors"
          className="block px-4 py-2 hover:bg-neutral-700 transition-colors"
        >
          Competitors
        </a>
        <a
          href="#audience"
          className="block px-4 py-2 hover:bg-neutral-700 transition-colors"
        >
          Audience
        </a>
        <a
          href="#metrics"
          className="block px-4 py-2 hover:bg-neutral-700 transition-colors"
        >
          Metrics
        </a>
        <a
          href="#content"
          className="block px-4 py-2 hover:bg-neutral-700 transition-colors"
        >
          Content
        </a>
        <a
          href="#geography"
          className="block px-4 py-2 hover:bg-neutral-700 transition-colors"
        >
          Geography
        </a>
        <a
          href="#swot"
          className="block px-4 py-2 hover:bg-neutral-700 transition-colors"
        >
          SWOT
        </a>
        <a
          href="#settings"
          className="block px-4 py-2 hover:bg-neutral-700 transition-colors"
        >
          Settings
        </a>
      </div>

      <div className="absolute bottom-0 w-full border-t border-neutral-700 p-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQFKdDEFGiEUvg/company-logo_200_200/company-logo_200_200/0/1630559327096/rebec_logo?e=2147483647&v=beta&t=y_2WINStYV6mLW9_I9oHdvmfk2JDVTFDRYEEQPEd0_g"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="font-medium">Next Launch</div>
            <div className="text-sm text-neutral-400">By Rebec Tech. Pvt. Ltd.</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
