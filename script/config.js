const routes = [
    {
        title: "daily",
        href: {
            youtube: "https://www.youtube.com/",
            messenger: "https://www.messenger.com/",
            gmail: "https://mail.google.com/",
            pokerogue: "https://pokerogue.net/",
        },
    },
    {
        title: "socials",
        href: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            reddit: "https://www.reddit.com/",
        },
    },
    {
        title: "dev",
        href: {
            github: "https://github.com/Azalurg",
            sequence: "https://azalurg.github.io/sequence-inator/",
            timer: "https://azalurg.github.io/EchoTimer",
            arch: "https://archlinux.org/",
        },
    },
    {
        title: "tools",
        href: {
            coingecko: "https://www.coingecko.com/pl",
            coinbase: "https://www.coinbase.com/",
            xtb: "https://xstation5.xtb.com/",
        },
    },
    {
        title: "news",
        href: {
            businessinsider: "https://businessinsider.com.pl/",
            "hacker-news": "https://news.ycombinator.com/",
            trojmiasto: "https://www.trojmiasto.pl/wiadomosci/news.phtml",
            xtb: "https://www.xtb.com/pl/analizy-rynkowe/wiadomosci-rynkowe",
        },
    },
];

const general = {
    dynamicBackground: true,
    newPageOpen: false,
    movingAvgPeriod: 100,
};

const icons = {
    sun: "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z'/></svg>",
    "cloud-sun":
        "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 256 256'><path fill='currentColor' d='M156 72a78.8 78.8 0 0 0-20.2 2.7a58.9 58.9 0 0 0-9.4-11.5l9.4-13.6a7.9 7.9 0 0 0-1.9-11.1a8 8 0 0 0-11.2 1.9L113.2 54a55 55 0 0 0-26.9-6l-2.9-16.3a8 8 0 1 0-15.8 2.8l2.9 16.3a55.7 55.7 0 0 0-23.3 14.8l-13.6-9.5a8 8 0 0 0-11.1 2a7.9 7.9 0 0 0 1.9 11.1L38 78.7a55.1 55.1 0 0 0-6 27l-16.3 2.9a8 8 0 0 0 1.4 15.9h1.4l16.3-2.9a52.3 52.3 0 0 0 5.9 12.4A51.9 51.9 0 0 0 76 224h80a76 76 0 0 0 0-152ZM48.6 111.1v-.4a39.6 39.6 0 0 1 6.5-29.5V81h.1a40.1 40.1 0 0 1 25.6-16.4h.5a39.5 39.5 0 0 1 29.1 6.3l.5.3l.4.3a37.4 37.4 0 0 1 9.3 9.3a76.6 76.6 0 0 0-35.6 40a53.8 53.8 0 0 0-9-.8a52.6 52.6 0 0 0-22.1 4.9a40 40 0 0 1-5.3-13.8ZM156 208H76a36 36 0 0 1 0-72a40.3 40.3 0 0 1 4.9.3A74.9 74.9 0 0 0 80 148a8 8 0 0 0 16 0a60 60 0 1 1 60 60Z'/></svg>",
    moon: "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z'/></svg>",
    "cloud-moon":
        "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 256 256'><path fill='currentColor' d='M156 72a85.2 85.2 0 0 0-12.4 1A71.8 71.8 0 0 0 88.2 9.8a8 8 0 0 0-9.6 9.6A58.6 58.6 0 0 1 80 32a56 56 0 0 1-56 56a58.6 58.6 0 0 1-12.6-1.4a8 8 0 0 0-9.6 9.6a71.9 71.9 0 0 0 32.3 45A52 52 0 0 0 76 224h80a76 76 0 0 0 0-152ZM21.4 104H24a72.1 72.1 0 0 0 72-72v-2.7a55.6 55.6 0 0 1 31.9 48.1A76.3 76.3 0 0 0 85 120.8a53.8 53.8 0 0 0-9-.8a51.8 51.8 0 0 0-30 9.6A55.9 55.9 0 0 1 21.4 104ZM156 208H76a36 36 0 0 1 0-72a40.3 40.3 0 0 1 4.9.3A74.9 74.9 0 0 0 80 148a8 8 0 0 0 16 0a60 60 0 1 1 60 60Z'/></svg>",
    cloud: "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 256 256'><path fill='currentColor' d='M160 216H72a64 64 0 0 1 0-128a58.2 58.2 0 0 1 9.3.7A88 88 0 1 1 160 216ZM72 104a48 48 0 0 0 0 96h88a72 72 0 1 0-72-72a8 8 0 0 1-16 0a85.7 85.7 0 0 1 3.3-23.9Z'/></svg>",
    cloudy: "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M30 15.5a6.532 6.532 0 0 0-5.199-6.363a8.994 8.994 0 0 0-17.6 0A6.532 6.532 0 0 0 2 15.5a6.454 6.454 0 0 0 1.688 4.35A5.983 5.983 0 0 0 8 30h11a5.976 5.976 0 0 0 5.61-8.102A6.505 6.505 0 0 0 30 15.501ZM19 28H8a3.993 3.993 0 0 1-.673-7.93l.663-.112l.146-.656a5.496 5.496 0 0 1 10.73 0l.145.656l.663.113A3.993 3.993 0 0 1 19 28Zm4.5-8h-.055a5.956 5.956 0 0 0-2.796-1.756a7.495 7.495 0 0 0-14.299 0a5.988 5.988 0 0 0-1.031.407A4.445 4.445 0 0 1 4 15.5a4.517 4.517 0 0 1 4.144-4.481l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.497 4.497 0 0 1 23.5 20Z'/></svg>",
    "rain-drizzle":
        "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M11 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A.998.998 0 0 1 11 30Z'/><path fill='currentColor' d='M24.8 9.136a8.994 8.994 0 0 0-17.6 0A6.497 6.497 0 0 0 8.5 22h10.881l-1.276 2.553a1 1 0 0 0 1.789.894L21.618 22H23.5a6.497 6.497 0 0 0 1.3-12.864ZM23.5 20h-15a4.497 4.497 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.497 4.497 0 0 1 23.5 20Z'/></svg>",
    rain: "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M23.5 22h-15A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22zM16 4a7 7 0 0 0-6.94 6.14L9 11h-.86a4.5 4.5 0 0 0 .36 9h15a4.5 4.5 0 0 0 .36-9H23l-.1-.82A7 7 0 0 0 16 4zm-2 26a.93.93 0 0 1-.45-.11a1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 14 30zm6 0a.93.93 0 0 1-.45-.11a1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 20 30zM8 30a.93.93 0 0 1-.45-.11a1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 8 30z'/></svg>",
    "rain-heavy":
        "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M17 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A.998.998 0 0 1 17 30zm-9 0a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A.998.998 0 0 1 8 30z'/><path fill='currentColor' d='M30 15.5a6.532 6.532 0 0 0-5.2-6.364a8.994 8.994 0 0 0-17.6 0a6.49 6.49 0 0 0-1.497 12.222l-1.597 3.195a1 1 0 1 0 1.788.894L7.617 22h6.765l-1.276 2.553a1 1 0 1 0 1.788.894L16.619 22h6.764l-1.276 2.553a1 1 0 1 0 1.788.894l1.945-3.89A6.506 6.506 0 0 0 30 15.5ZM23.5 20h-15a4.497 4.497 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.497 4.497 0 0 1 23.5 20Z'/></svg>",
    thunderstorm:
        "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22Z'/><path fill='currentColor' d='m15.87 30.5l-1.74-1l3.15-5.5h-6l4.85-8.5l1.74 1l-3.15 5.5h6l-4.85 8.5z'/></svg>",
    fog: "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M24.8 11.138a8.994 8.994 0 0 0-17.6 0A6.533 6.533 0 0 0 2 17.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 0-2H4v-.497a4.518 4.518 0 0 1 4.144-4.482l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.813l.815.063A4.496 4.496 0 0 1 23.5 22H7a1 1 0 0 0 0 2h16.5a6.496 6.496 0 0 0 1.3-12.862Z'/><rect width='18' height='2' x='2' y='26' fill='currentColor' rx='1'/></svg>",
    snow: "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M23.5 22h-15A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22zM16 4a7 7 0 0 0-6.94 6.14L9 11h-.86a4.5 4.5 0 0 0 .36 9h15a4.5 4.5 0 0 0 .36-9H23l-.1-.82A7 7 0 0 0 16 4zm-4 21.05L10.95 24L9.5 25.45L8.05 24L7 25.05l1.45 1.45L7 27.95L8.05 29l1.45-1.45L10.95 29L12 27.95l-1.45-1.45L12 25.05zm14 0L24.95 24l-1.45 1.45L22.05 24L21 25.05l1.45 1.45L21 27.95L22.05 29l1.45-1.45L24.95 29L26 27.95l-1.45-1.45L26 25.05zm-7 2L17.95 26l-1.45 1.45L15.05 26L14 27.05l1.45 1.45L14 29.95L15.05 31l1.45-1.45L17.95 31L19 29.95l-1.45-1.45L19 27.05z'/></svg>",
    "snow-heavy":
        "<svg xmlns='http://www.w3.org/2000/svg' style='margin-right: 0.25rem' width='1rem' height='1rem' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'><path fill='currentColor' d='M4 26h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm0-4h2v2H8zm-4 4h2v2H4zm4-12h2v2H8zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2H8zm10-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-4 4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z'/><path fill='currentColor' d='M24.8 9.136a8.994 8.994 0 0 0-17.6 0A6.496 6.496 0 0 0 6 21.5v-2.26a4.494 4.494 0 0 1 2.144-8.22l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.494 4.494 0 0 1 26 19.239v2.26a6.496 6.496 0 0 0-1.2-12.363Z'/></svg>",
};

export default {routes, general, icons};
