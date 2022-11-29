// @ts-nocheck
hvm.displayName = "hvm";

export default function hvm(Prism) {
  Prism.languages.hvm = {
    comment: {
      pattern:
        /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true,
    },
    string: {
      pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/,
      greedy: true,
    },
    ref: /'(.*)'/,
    keywords: /\b(ask|run|fun|reg|ctr|dup|let|with|sign)\b/,
    number: /#([0-9])+/,
    hexadecimal_number: /#0[xX]([0-9a-fA-F])+/,
    operator: [
      {
        // infix operator
        pattern: /\+|\-|\*|\/|\%|\&|\|\^|\=\=|\<\=?|\>\=?|\>\>|\<\</,
        greedy: true,
      },
    ],
    symbol: {
      pattern: /\@|\!/,
    },
    call: {
      pattern: /\(\s*[A-Z][\w]*/,
      inside: {
        function_name: {
          pattern: /[A-Z][\w]*/,
        },
      },
    },
    constructor: {
      pattern: /\{\s*[A-Z][\w]*/,
      inside: {
        constructor_name: {
          pattern: /[A-Z][\w]*/,
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

  const terms = [
    "keyword",
    "variable",
    "number",
    "hexadecimal_number",
    "ref",
    "operator",
    "symbol",
    "call",
    "constructor",
  ];

  // recursive call and constructor terms
  for (const term of terms) {
    Prism.languages.hvm.call.inside[term] = Prism.languages.hvm[term];
    Prism.languages.hvm.constructor.inside[term] = Prism.languages.hvm[term];
  }
}
