import { Input } from "../ui/input"
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import AnimatedBackground from "../AnimatedBackground";


export default function AuthPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center text-zinc-400">
      <div className="max-w-md flex flex-col gap-8 bg-zinc-800 rounded-2xl py-12 px-16 ">
        <div className="text-center flex flex-col gap-4 items-center">
          <p className="text-sm font-semibold tracking-wide font-mono uppercase">
            Welcome to
          </p>
          <h1 className="text-6xl font-bold text-purple-400">
            Wizkid Manager
            <sup className="text-2xl pl-1">&#174;</sup>
          </h1>
          <p className="bg-purple-400 w-fit rounded-full px-2 text-zinc-950 text-sm -rotate-6">
            2000
          </p>
        </div>

        <div>

          <form className="flex flex-col gap-6">

            <div
              className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Email"
              />
              <Input
                type="password"
                placeholder="Password"
              />
            </div>

            <Link
              to="/dashboard"
              className="w-full"
            >
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
              >
                Login
              </Button>
            </Link>

          </form>

          <div className="flex justify-center mt-4">
            <Button
              type="button"
              variant="link">
              Forgot Password
            </Button>
          </div>

          <AnimatedBackground />

        </div>
      </div>
    </div>
  );
};