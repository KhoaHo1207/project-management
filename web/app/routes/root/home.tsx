import { Button } from "@/components/ui/button";
import type { Route } from "../../+types/root";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Welcome to TaskHub" },
  ];
}

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
      <Link to={"/sign-in"}>
        <Button className="bg-blue-500 text-white">Sign In</Button>
      </Link>
      <Link to={"/sign-up"}>
        <Button className="bg-gray-500 text-white">Sign Up</Button>
      </Link>
    </div>
  );
}
