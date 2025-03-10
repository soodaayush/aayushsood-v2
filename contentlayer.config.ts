import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "content/posts/**/*.mdx", // path to your MDX files
  fields: {
    title: { type: "string" },
    description: { type: "string" },
    date: { type: "date" },
  },
}));

export default makeSource({
  contentDirPath: "content", // location of your content folder
  documentTypes: [Blog], // define what types of documents you're using
  disableImportAliasWarning: true, // Disable warning on Windows
});
