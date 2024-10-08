import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/BackupDBee/",
  title: "BackupDBee 🐝",
  description: "Automatic CLI Based Advance DB Backup System",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        link: "/guide/what-is-backupdbee",
        activeMatch: "/guide/",
      },
    ],

    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/28softwares/BackupDBee" },
    ],
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is backupdbee?", link: "what-is-backupdbee" },
        { text: "Getting Started", link: "getting-started" },
        { text: "Configuration", link: "configuration" },
      ],
    },
    {
      text: "Cli Commands",
      collapsed: false,
      items: [
        { text: "general", link: "cli/general" },
        { text: "db:list", link: "cli/db-list" },
        { text: "db:backup", link: "cli/db-backup" },
      ],
    },
    {
      text: "Automation",
      link: "automate-backup",
    },
  ];
}
