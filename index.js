module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": [
    // eslint-disable-next-line spellcheck/spell-checker
    "airbnb-base",
    "plugin:cypress/recommended",
    "plugin:flowtype/recommended",
  ],
  "plugins": [
    "flowtype",
    "cypress",
    "mocha",
    "spellcheck",
  ],
  "env": {
    "cypress/globals": true,
  },
  "rules": {
    "no-use-before-define": "off",
    // We like to define helper functions at the end of the file
    // eslint-disable-next-line spellcheck/spell-checker
    "arrow-parens": [
      "error",
      "as-needed",
    ],
    "quotes": [
      "error",
      "double",
    ],
    "semi": [
      "error",
      "never",
    ],
    // eslint-disable-next-line spellcheck/spell-checker
    "max-len": "off",
    "import/prefer-default-export": "off",
    // eslint-disable-next-line spellcheck/spell-checker
    "no-plusplus": "off",
    "import/no-extraneous-dependencies": "off",
    "mocha/no-exclusive-tests": "error",
    "spellcheck/spell-checker": [
      "error",
      {
        "comments": true,
        "strings": true,
        "identifiers": true,
        "lang": "en_US",

        // TODO: Edit and fetch from Google Sheets
        "skipWords": [

          // IT
          "req",
          "res",
          "utc",
          "uri",
          "noflow", // disabling flow checks
          "api",
          "args",
          "auth",
          "autobind",
          "autolinker",
          "automat",
          "automats",
          "datepicker",
          "datepickers",
          "placepicker",
          "placepickers",
          "redirections",
          "xml",
          "autocomplete",
          "gte", // greater than
          "lt", // less than
          "frontend",
          "backend",

          "downarrow", // Cypress syntax
          "uparrow", // Cypress syntax

          // JavaScript
          "dotenv",
          "luxon",

          // Currencies
          "aed",
          "amd",
          "aud",
          "bhd",
          "brl",
          "byn",
          "cad",
          "chf",
          "clp",
          "cny",
          "czk",
          "dkk",
          "eur",
          "gbp",
          "hkd",
          "huf",
          "idr",
          "ils",
          "inr",
          "isk",
          "jod",
          "jpy",
          "kgs",
          "krw",
          "kwd",
          "kzt",
          "mxn",
          "myr",
          "nok",
          "nzd",
          "omr",
          "pen",
          "php",
          "pln",
          "qar",
          "ron",
          "rsd",
          "rub",
          "sar",
          "sek",
          "sgd",
          "thb",
          "try",
          "twd",
          "uah",
          "usd",
          "uzs",
          "yer",
          "zar",

          // Kiwi.com specific
          "oneway",
          "spidey",
          "spiderman",
          "smartfaq",
          "sfaq", // short for SmartFAQ

          // Common abbreviations
          "affil",
          "affils",
          "abid",
          "acc",
          "affilid",
          "affily",
          "ata", // at the airport

          // Common brand names
          "adroll",
          "adwords",
          "aeroflot",
          "airhelp",
          "amex",
          "airconomist",
          "blueribbon",
          "momondo",
          "pinterest",

          // Common names
          "alzbeta",
          "zugica",

          // Common placeholders
          "abc",

          // English enough
          "advices",
          "autofill",
          "autofills",
          "ipad",

          // Places
          "iceland",
          "lisbon",
          "reykvavik",
          "austria",
          "italy",
          "milan",
          "vienna",
          "czech",
          "portugal",
          "brugges",
          "prague",

          // TODO
          "alipay",
          "perex",
          "Bedfinder",
          "beforeunload",
          "Behaviour",
          "bnum",
          "bondi", // TODO
          "bookers",
          "btn",
          "bulleted",
          "cancelled",
          "cardno",
          "chai",
          "chargebacks",
          "checkbox",
          "checkin",
          "classnames",
          "clearfix",
          "clickable",
          "closable",
          "codemod",
          "colours",
          "const",
          "consts",
          "creditcard",
          "cta",
          "ctrl",
          "curr",
          "cvv",

          "dateselect",
          "datetime",
          "deeplink",
          "deeplinks",
          "Dev",
          "devs",
          "dialogs",
          "dinersclub",
          "dir",
          "Dropdown",
          "dtime",
          "dubai",
          "ecmascript",
          "eidam",
          "elevio",
          "elo",
          "esc",
          "eslint",
          "esproposal",
          "eticket",

          "exponea",
          "facebook",
          "faq",
          "faqs",
          "fieldset",
          "fieldsets",
          "filename",
          "firstname",
          "flexi",
          "flowtype",
          "focusin",
          "fontawesome",
          "formatters",
          "forter",
          "fullname",
          "fullstory",
          "globals",
          "gmail",
          "graphql",
          "graphviz",
          "grey",
          "hapl",
          "helpcenter",
          "hiddenscroll",
          "hipercard",
          "Honoured",
          "hotjar",
          "href",
          "hreflang",
          "html",
          "http",
          "https",
          "iatatravelcentre",
          "iban",
          "icao",
          "iframe",
          "illust",
          "img",
          "incompletion",
          "infinario",
          "infographic",
          "init",
          "instagram",
          "instanceof",
          "iphone",
          "ipsum",
          "itemprop",
          "jcb",
          "jira",
          "joe",
          "jpg",
          "kayakwhite",
          "kiwicom",
          "lang",
          "langs",
          "lastname",
          "lastpass",
          "latin",
          "lazyload",
          "linkedin",
          "loc",
          "lodash",
          "logitravel",
          "logmole",
          "logstash",
          "lol",
          "loopback",
          "lorem",
          "luhn",
          "macbook",
          "mailto",
          "mastercard",
          "Metasearch",
          "middlename",
          "middlenames",
          "mmb",
          "modificators",
          "mouseout",
          "mouseover",
          "msg",
          "multicity",
          "multiline",
          "multiplace",
          "multistep",
          "mxn",
          "Nav",
          "navbar",
          "nbsp",
          "ndash",
          "netverify",
          "nitro",
          "nitro",
          "nitrolib",
          "nofollow",
          "nogit",
          "noindex",
          "nok",
          "nonlatin",
          "noopener",
          "noreferrer",
          "Normalizer",
          "nullable",
          "num",
          "onload",
          "ota",
          "palowska",
          "param",
          "params",
          "parsererror",
          "pax",
          "Paxata",
          "paypal",
          "pdf",
          "persistency",
          "pgp",
          "phraseapp",
          "png",
          "pnr",
          "pnum",
          "pobeda",
          "pojo",
          "polyfill",
          "postcss",
          "pre",
          "Prefill",
          "prefilled",
          "preprocessor",
          "prev",
          "promocode",
          "promocodes",
          "proptypes",
          "quadtree",
          "radix",
          "Ramen",
          "rebranding",
          "Rect",
          "redux",
          "remarketing",
          "rentalcars",
          "rgb",
          "rgba",
          "rozok",
          "runnable",
          "russia",
          "russian",
          "saucelabs",
          "scrollable",
          "scrollbar",
          "seatmap",
          "seatmaps",
          "signup",
          "signup",
          "singlestep",
          "sitemap",
          "skygold",
          "skymock",
          "skypicker",
          "skyscanner",
          "skysilver",
          "smartlook",
          "sofort",
          "splitster",
          "src",
          "stdout",
          "strajk",
          "stylint",
          "subdomain",
          "subfield",
          "subheader",
          "subjectless",
          "subnode",
          "subnodes",
          "svg",
          "tbody",
          "textarea",
          "thankyou",
          "timeline",
          "timestamp",
          "tkey",
          "toggler",
          "tomas",
          "tooltip",
          "tooltips",
          "touchstart",
          "transparentify",
          "travelling",
          "trustly",
          "trustpilot",
          "txt",
          "uncheck",
          "uncomment",
          "undef",
          "unhandled",
          "uniqid",
          "unskip",
          "unstyled",
          "urls",
          "usd",
          "utils",
          "vbambuch",
          "viejet",
          "vietjet",
          "viewport",
          "vorisek",
          "webpack",
          "webstorm",
          "webview",
          "whitelabel",
          "Whitelabels",
          "whitelist",
          "whitespace",
          "whoiam",
          "wowairprime",
          "www",
          "xdomain",
          "xhr",
          "xlsx",
          "zooz",
          "vias",
          "asia",
          "onboarding",
          "popup",

          "fns",
          "amsterdam",
          "brno",
          "paris",
          "netherlands",
          "france",
          "localhost",
          "expedia",

          "crashproof",
        ],
        "skipIfMatch": [
          "https?://[^s]*",
        ],
        "skipWordIfMatch": [
          "^foobar.*$",
          // words that begin with foobar will not be checked
        ],
        "minLength": 3,
      },
    ],
  },
}
