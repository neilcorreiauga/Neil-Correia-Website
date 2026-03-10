// Polyfill for File API required by cheerio/undici in Node.js 18
global.File = class File {
  constructor(parts, name, options) {
    this.parts = parts;
    this.name = name;
    this.options = options;
  }
};
