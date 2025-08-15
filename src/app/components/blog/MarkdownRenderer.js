"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer({ content }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
