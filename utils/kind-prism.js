// @ts-nocheck
kind2.displayName = "kind2";

export default function kind2(Prism) {
  Prism.languages.kind2 = {
    comment: {
      pattern:
        /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true,
    },
    char: {
      pattern:
        /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|ACK|BEL|BS|CAN|CR|DC1|DC2|DC3|DC4|DEL|DLE|EM|ENQ|EOT|ESC|ETB|ETX|FF|FS|GS|HT|LF|NAK|NUL|RS|SI|SO|SOH|SP|STX|SUB|SYN|US|VT|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
      alias: "string",
    },
    string: {
      pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/,
      greedy: true,
    },
    keywords: /\b(do|for|in|with|ask|return|let|if|then|else)\b/,
    number: /\b([0-9])+\b/,
    operator: [
      {
        // infix operator
        pattern: /\+|\-|\*|\/|\%|\&|\|\^|\=\=|\<\=?|\>\=?|\>\>|\<\</,
        greedy: true,
      },
    ],
    symbol: {
      pattern: /\@|\=\>/,
    },
    type: {
      pattern: /[A-Z][A-Za-z\.]*/,
      inside: {
        complement: {
          pattern: /\.([a-z]+)/,
          inside: {
            type_complement: /[a-z]+/,
          },
        },
      },
    },
    variable: {
      pattern: /\b[a-z][\w\.]*/,
      inside: {
        complement: {
          pattern: /\.([a-z]+)/,
          inside: {
            var_complement: /[a-z]+/,
          },
        },
      },
    },
  };
}
