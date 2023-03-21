const navigation = {
  main: [
    { name: "TWITTER", href: "https://twitter.com/spacex" },
    { name: "YOUTUBE", href: "https://www.youtube.com/spacex" },
    { name: "INSTAGRAM", href: "https://www.instagram.com/spacex/" },
    { name: "FLICKR", href: "https://www.flickr.com/photos/spacex" },
    { name: "LINKEDIN", href: "https://www.linkedin.com/company/spacex" },
    {
      name: "PRIVACY POLICY",
      href: "https://www.spacex.com/media/privacy_policy_spacex.pdf",
    },
    { name: "SUPPLIERS", href: "https://www.spacex.com/supplier/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 overflow-hidden py-10 px-6 lg:px-8">
      <div className="lg:flex items-center justify-center gap-10">
        <p className="text-center text-xs leading-5 text-gray-100 pb-5">
          SPACEX © 2023
        </p>
        <nav
          className="flex items-center justify-center flex-wrap gap-5"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="lg:pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 font-bold text-white hover:text-gray-400"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
