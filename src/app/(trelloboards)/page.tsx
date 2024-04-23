import Header from "@/components/Header";
import PlansComp from "@/components/PlansComp";
import Productivity from "@/components/Productivity";
import { Workflow } from "@/components/WorkFlow";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-16 bg-[#c6fafc]">
        <Productivity />
        <Workflow />
        <PlansComp />
      </div>
    </main>
  );
}
