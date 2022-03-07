module.exports = {
  locales: {
    "/": {
      lang: "English",
      title: "Nushell",
      description: "A new type of shell.",
    },
    "/de/": {
      lang: "Deutsch",
      title: "Nushell",
      description: "Eine neuer Art von Shell.",
    },
    "/es/": {
      lang: "es",
      title: "Nushell",
      description: "Un nuevo tipo de shell.",
    },
    "/ja/": {
      lang: "ja",
      title: "Nushell",
      description: "新しいタイプのシェル。.",
    },
    "/pt-BR/": {
      lang: "pt-BR",
      title: "Nushell",
      description: "Um novo tipo de shell.",
    },
    "/zh-cn/": {
      lang: "zh-cn",
      title: "Nushell",
      description: "一种新型的外壳。.",
    },
  },
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/icon.png" }],
  ],
  themeConfig: {
    repo: "nushell/nushell",
    repoLabel: "GitHub",
    editLinks: true,
    docsRepo: "nushell/nushell.github.io",
    docsBranch: "main",
    lastUpdated: false,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
        nav: [
          { text: "Book", link: "/book/" },
          { text: "Contributor Book", link: "/contributor-book/" },
          { text: "Cookbook", link: "/cookbook/" },
          { text: "Blog", link: "/blog/" },
          { text: "Demo", link: "http://nushell.sh/demo" },
        ],
        sidebar: {
          "/book/": [
            {
              title: "Nu Book (0.59+)",
              collapsable: false,
              children: [
                "",
                "installation",
                "moving_around",
                "types_of_data",
                "loading_data",
                "strings",
                "working_with_lists",
                "working_with_tables",
                "pipeline",
                "configuration",
                "3rdpartyprompts",
                "custom_commands",
                "aliases",
                "operators",
                "math",
                "variables_and_subexpressions",
                "environment",
                "stdout_stderr_exit_codes",
                "modules",
                "scripts",
                "metadata",
                "creating_errors",
                "shells_in_shells",
                "escaping",
                "plugins",
                "parallelism",
                "dataframes",
                "coloring_and_theming",
                "coming_from_bash",
                "nushell_map",
                "nushell_map_imperative",
                "nushell_map_functional",
                "nushell_operator_map",
                "command_reference",
              ],
            },
          ],
          "/old_book/": [
            {
              title: "Nu Book (0.44)",
              collapsable: false,
              children: [
                "",
                "installation",
                "moving_around",
                "types_of_data",
                "loading_data",
                "working_with_lists",
                "working_with_tables",
                "pipeline",
                "configuration",
                "custom_commands",
                "aliases",
                "operators",
                "math",
                "variables_and_subexpressions",
                "environment",
                "scripts",
                "metadata",
                "shells_in_shells",
                "escaping",
                "plugins",
                "dataframes",
                "coming_from_bash",
                "nushell_map",
                "nushell_map_imperative",
                "nushell_map_functional",
                "nushell_operator_map",
                "command_reference",
              ],
            },
          ],
          "/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: [
                "",
                "philosophy",
                "values",
                "commands",
                "streams",
                "metadata",
                "plugins",
                "shells",
              ],
            },
          ],
          "/cookbook/": [
            {
              title: "Cookbook",
              collapsable: false,
              children: [
                "",
                "setup",
                "help",
                "system",
                "parsing",
                "native_shell_programs",
                "files",
                "git",
                "parsing_git_log",
                "http",
                "misc",
              ],
            },
          ],
        },
      },
      "/de/": {
        selectText: "Sprachen",
        label: "Deutsch",
        editLinkText: "Diese Seite auf GitHub bearbeiten",
        nav: [
          { text: "Buch", link: "/de/book/" },
          { text: "Contributor Book", link: "/contributor-book/" },
          { text: "Cookbook", link: "/cookbook/" },
          { text: "Blog", link: "/blog/" },
          { text: "Demo", link: "http://nushell.sh/demo" },
        ],
        sidebar: {
          "/de/book/": [
            {
              title: "Nu Handbuch (0.59+)",
              collapsable: false,
              children: [
                "",
                "installation",
                "konfiguration",
                "3rdpartyprompts",
                "eigene_befehle",
                "aliase",
                "mathematik",
                "variablen_und_unterausdruecke",
                "plugins",
                "von_bash_kommend",
                "command_reference",
              ],
            },
          ],
        },
      },
      "/es/": {
        selectText: "Idiomas",
        label: "Español",
        editLinkText: "Edita esta página en GitHub",
        nav: [
          { text: "Libro", link: "/es/book/" },
          { text: "Libro Colaborador", link: "/es/contributor-book/" },
          { text: "Cookbook", link: "/cookbook/" },
          { text: "Blog", link: "/blog/" },
          { text: "Demo", link: "http://nushell.sh/demo" },
        ],
        sidebar: {
          "/es/book/": [
            {
              title: "Nu Libro",
              collapsable: false,
              children: [
                "",
                "instalacion",
                "explorando",
                "tipos_de_datos",
                "cargando_datos", // "trabajando_con_listas"
                "trabajando_con_tablas",
                "pipeline",
                "configuracion", // "custom_commands"
                "aliases", // "operadores"
                "matematicas", // "variables_y_subexpresiones"
                "entorno", // "scripts"
                "metadatos",
                "shells_en_shells",
                "escapando",
                "plugins", // "dataframes"
                "llegando_de_bash",
                "mapa_nushell",
                "mapa_imperativo_nushell",
                "mapa_funcional_nushell",
                "mapa_operador_nushell",
                "/book/command_reference.md",
              ],
            },
          ],
          "/es/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: [
                "introduccion",
                "filosofia",
                "valores",
                "comandos",
                "metadatos",
              ],
            },
          ],
        },
      },
      "/ja/": {
        selectText: "言語",
        label: "日本語",
        editLinkText: "GitHubでこのページを編集する",
        nav: [
          { text: "本", link: "/ja/book/" },
          { text: "Contributor Book", link: "/contributor-book/" },
          { text: "Cookbook", link: "/cookbook/" },
          { text: "Blog", link: "/blog/" },
          { text: "Demo", link: "http://nushell.sh/demo" },
        ],
        sidebar: {
          "/ja/book/": [
            {
              title: "Nu 本",
              collapsable: false,
              children: [
                "installation",
                "introduction",
                "moving_around",
                "types_of_data",
                "loading_data",
                "working_with_tables",
                "pipeline",
                "configuration",
                "metadata",
                "shells_in_shells",
                "escaping",
                "plugins",
                "/book/command_reference.md",
              ],
            },
          ],
        },
      },
      "/pt-BR/": {
        selectText: "Línguas",
        label: "Português do Brasil",
        editLinkText: "Edite esta página no GitHub",
        nav: [
          { text: "Livro", link: "/pt-BR/book/" },
          { text: "Livro de Contribuidor", link: "/pt-BR/contributor-book/" },
          { text: "Cookbook", link: "/cookbook/" },
          { text: "Blog", link: "/blog/" },
          { text: "Demo", link: "http://nushell.sh/demo" },
        ],
        sidebar: {
          "/pt-BR/book/": [
            {
              title: "Nu Livro",
              collapsable: false,
              children: [
                "instalacao",
                "introducao",
                "explorando",
                "tipos_de_dados",
                "carregando_dados",
                "trabalhando_com_tabelas",
                "pipeline",
                "metadados",
                "shells_em_shells",
                "escapando",
                "plugins",
                "/book/command_reference.md",
              ],
            },
          ],
          "/pt-BR/contributor-book/": [
            {
              title: "Contributor Book",
              collapsable: false,
              children: [
                "introdução",
                "filosofia",
                "valores",
                "comandos",
                "streams",
                "metadados",
                "plugins",
                "shells",
              ],
            },
          ],
        },
      },
      "/zh-cn/": {
        selectText: "语言",
        label: "中文",
        editLinkText: "在GitHub上编辑此页面",
        nav: [
          { text: "书", link: "/zh-CN/book/" },
          { text: "Contributor Book", link: "/contributor-book/" },
          { text: "Cookbook", link: "/cookbook/" },
          { text: "Blog", link: "/blog/" },
          { text: "Demo", link: "http://nushell.sh/demo" },
        ],
        sidebar: {
          "/zh-cn/book/": [
            {
              title: "Nu 书",
              collapsable: false,
              children: [
                "installation",
                "introduction",
                "moving_around",
                "types_of_data",
                "loading_data",
                "working_with_tables",
                "pipeline",
                "configuration",
                "aliases",
                "math",
                "environment",
                "metadata",
                "/book/command_reference.md",
              ],
            },
          ],
        },
      },
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
