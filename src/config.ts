export const SITE = {
  website: "https://your-domain.com/", // replace this with your deployed domain
  author: "Clare",
  profile: "https://github.com/your-github-profile",
  desc: "山东大学行政管理+电子科学与技术（双学位班）在读本科生，主要分享平时的学习笔记以及马拉松比赛的相关经历",
  title: "Clare's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    url: "https://github.com/satnaing/astro-paper/tree/main/src/data/blog/",
    text: "Edit page",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
