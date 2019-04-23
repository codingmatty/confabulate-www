module.exports = {
  // App Info
  // appstore_link         : "https://confabulate.co",                                  // Enter App Store URL.
  // playstore_link        : "https://confabulate.co",                                  // Enter Google Play Store URL.
  google_analytics_ID: "UA-138686153-1", // Enter Google Analytics ID or ""
  // presskit_download_link: "https://confabulate.co",                                  // Enter a link to downloadable file or (e.g. public Dropbox link to a .zip file).
  video_or_screenshot: "video", // "screenshot" or "video"
  app_url: "https://app.confabulate.co", // Domain of your website without path_prefix.
  path_prefix: "/", // Prefixes all links. For cases when deployed to example.github.io/automatic-gatsbyjs-app-landing-page/.
  app_name: "Confabulate",
  app_subtitle: "– (verb) engage in conversation; talk",
  app_description:
    "Social relationship manager to help keep up with and strengthen friendships.",
  app_twitter_handle: "@confabulate_app",
  app_keywords: ["social", "community", "relationships"],

  // Personal Info
  your_name: "@codingmatty",
  your_link: "https://www.matthewjacobs.io",
  // your_city              : "Sousse",
  email_address: "codingmatty@gmail.com",
  // facebook_username      : null,
  // instagram_username     : "ed_adel",
  twitter_username: "codingmatty",
  github_username: "codingmatty",
  // youtube_username       : null,

  // Features List
  features: [
    {
      title: "Event Log",
      description:
        "Keep up with conversations you have with friends, this way the next time you see them you can pick up where you left off.",
      fontawesome_icon_name: "book",
    },
    {
      title: "Sync with Google Contacts",
      description:
        "Avoid having to enter contact info manually, and keep information up to date.",
      fontawesome_icon_name: "google",
      fontawesome_icon_type_is_brand: true,
    },
    {
      title: "Check-in Reminders",
      description:
        "Reminders to check in with friends that you haven't talked to in a while.",
      fontawesome_icon_name: "bell",
    },
    {
      title: "Geotagging",
      description:
        "Remember where you met a new friend, and optionally ping you near that location.",
      fontawesome_icon_name: "globe",
    },
    {
      title: "More...",
      description:
        "We are just getting started and would love your input on what could help you connect with your friends.",
      fontawesome_icon_name: "plus",
    },
  ],
  header_background: "rgba(0, 0, 0, 0.1)",
  topbar_title_color: "#ffffff",
  // cover_overlay_color_rgba: "hsla(0, 0%, 62%, 0.8)",
  cover_overlay_color_rgba:
    "hsla(0, 0%, 97%, 0.8),hsla(0, 0%, 13%, 0.8),hsla(0, 0%, 13%, 0.8)",
  device_color: "yellow", // Set to "black", "blue", "coral", "white", or "yellow"
  body_background_color: "ffffff",
  primary_text_color: "#000",
  content_width: "1170px",
  font: `"Roboto", sans-serif`,
  link_color: "#1d63ea",
  app_title_color: "#ffffff",
  app_subtitle_color: "#ffffff",
  app_description_color: "#ffffff",
  feature_title_color: "#000000",
  feature_text_color: "#666666",
  feature_icons_foreground_color: "#1d63ea",
  feature_icons_background_color: "#e6e6e6",
  social_icons_foreground_color: "#666666",
  social_icons_background_color: "#e6e6e6",
  footer_text_color: "#666666",
}
