import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center text-sm font-secondary-sans py-5 border-neutral-800 border-t-2">
          <p>
            © {new Date().getFullYear()} | Chairul An&apos;aam Maulidin.
            Copyright protected.
          </p>
          <p>Made with &#10084; in Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
