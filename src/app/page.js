"use client";

import Career from "@/components/home/career/career";
import Clients from "@/components/home/clients";
import Description from "@/components/home/description";
import Landing from "@/components/home/landing";
import OurMission from "@/components/home/our-mission/our-mission";
import Portfolio from "@/components/home/portfolio/portfolio";
import Projects from "@/components/home/projects";
import Testimonials from "@/components/home/testimonial";
import Trending from "@/components/home/trendings/trendings";
import Usp from "@/components/home/usp";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize"; // Import the custom hook
import Cookies from "@/components/Cookie";
import axios from "axios";

export default function Home() {
  const [homePageData, setHomePageData] = useState(null);
  const size = useWindowSize();

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const params = {
          populate: {
            seo: '*',
            our_mission: { populate: '*' },
            Content_Under_Projects: '*',
            digital_ai_cx: { populate: 'media' },
          },
        };
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/home-page`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          },
          params: params,
        });
        const data = response.data.data.attributes;
        setHomePageData(data);
      } catch (error) {
        console.error("Failed to fetch home page data", error);
      }
    };

    fetchHomePageData();
  }, []);

  const isMobileOrTablet = size.width < 768;

  return (
    <main className="main">
      <Landing />
      <Cookies />
      {homePageData && <Usp contents={homePageData.digital_ai_cx} />}
      {homePageData && <OurMission contents={homePageData.our_mission} />}
      <Portfolio />
      {homePageData && <Description contents={homePageData.Content_Under_Projects} />}
      {!isMobileOrTablet && <Projects />}
      <Trending />
      {!isMobileOrTablet && <Testimonials />}
      {!isMobileOrTablet && <Career />}
      {!isMobileOrTablet && <Clients />}
    </main>
  );
}
