import ResumeContent from "../components/resume/ResumeContent";

export const metadata = {
  title: "Resume | Aayush Sood",
  description:
    "View my resume and explore my experience, skills, and education.",
  creator: "Aayush Sood",
  openGraph: {
    title: "Resume | Aayush Sood",
    description:
      "View my resume and explore my experience, skills, and education.",
    url: "https://www.aayushsood.com/resume",
    siteName: "Aayush Sood's Resume",
    images: [
      {
        url: "https://www.aayushsood.com/assets/openGraph/banner.png",
        width: 800,
        height: 600,
        alt: "Aayush Sood's Resume",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Aayush Sood",
    description:
      "View my resume and explore my experience, skills, and education.",
    images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
  },
  alternates: {
    canonical: "https://www.aayushsood.com/resume",
  },
};

export default function Resume() {
  return <ResumeContent />;
}
