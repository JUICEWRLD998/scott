import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900/50 border-t border-zinc-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-blue-700 px-3 py-1.5 rounded">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-lg font-bold text-white">SCOTT</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium wireless headphones engineered for perfection.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Specs", "Reviews"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Warranty", "Returns"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 SCOTT. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "Facebook"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
