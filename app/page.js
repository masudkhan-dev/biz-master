import AskQuestion from "@/Components/AskQuestion/AskQuestion";
import ClientsTestimonial from "@/Components/ClientsTestimonial/ClientsTestimonial";
import Hero from "@/Components/Hero/Hero";
import LatestBlog from "@/Components/Latest Blog/LatestBlog";
import LatestService from "@/Components/Latest Service/LatestService";
import LatestPortfolio from "@/Components/LatestPortfolio/LatestPortfolio";
import OurGoal from "@/Components/Our Goal/OurGoal";
import OurTeam from "@/Components/Our Team/OurTeam";
import WorkProcess from "@/Components/Work Process/WorkProcess";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <LatestService />
        <WorkProcess />
        <OurGoal />
        <LatestPortfolio />
        <ClientsTestimonial />
        <OurTeam />
        <AskQuestion />
        <LatestBlog />
      </div>
    </main>
  );
}
