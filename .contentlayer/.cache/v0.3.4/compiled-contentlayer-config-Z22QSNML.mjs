// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "content/posts/**/*.mdx",
  // path to your MDX files
  fields: {
    title: { type: "string" },
    description: { type: "string" },
    date: { type: "date" }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  // location of your content folder
  documentTypes: [Blog],
  // define what types of documents you're using
  disableImportAliasWarning: true
  // Disable warning on Windows
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-Z22QSNML.mjs.map
