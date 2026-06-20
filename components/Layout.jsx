import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Rama Prayaga | Portfolio</title>
        <meta
          name="description"
          content="AI Engineer specializing in real-time AI systems, LLM-powered applications, multimodal intelligence, scalable automation, healthcare AI, cybersecurity, robotics, and cloud computing. Driven to build intelligence into real-world systems."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, portfolio, AI, Machine Learning, Generative AI, LLMs, Computer Vision, Data Engineering, Python"
        />
        <meta name="author" content="Rama Prayaga" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
