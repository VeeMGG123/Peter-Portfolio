export default function manifest() {
  return {
    name: "PeterMedhat Portfolio",
    short_name: "PM",
    description: "Experimental portfolio for a creative software engineer and web developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#070707",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
