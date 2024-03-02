import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Hero() {
  return (
    <section id="hero">
      <div
        className="container grid h-screen p-2 mx-auto place-items-center gap-y-2 max-h-fit"
        id="container"
      >
        <div className="grid gap-4">
          <div className="min-w-fit md:text-center" id="heading-container">
            <div className="flex w-full md:justify-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
              Hello I'm Deni
            </h1>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
              Software Developer 👋
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mdj:mt-4 max-w-screen-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              autem architecto unde harum aspernatur facere temporibus ipsa
              officiis velit nostrum explicabo deleniti, veniam eligendi,
              impedit dolores quo accusamus quas optio sunt omnis! Impedit harum
              eius, doloribus vero at distinctio? Culpa optio saepe quas illum.
              Distinctio obcaecati earum ipsam assumenda labore.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <div className="flex gap-1" id="social-media-links">
              <FaGithub size={30} />
              <FaTwitter size={30} />
              <FaLinkedin size={30} />
              <FaFacebook size={30} />
              <FaInstagram size={30} />
            </div>
            <div>
              <Button className="w-full px-8 lg:w-fit" variant={"default"}>
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
