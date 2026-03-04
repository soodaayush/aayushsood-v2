import NotFoundContent from "./components/global/notFoundContent";

export const metadata = {
  title: "404 Not Found | Aayush Sood",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundContent />;
}
