import React, { useState } from "react";
import { imageUrls } from "../../../utils/imageUrls";
import BookCoverSVG from "../../../assets/icons/book.svg";
import WorldOfTextModal from "../../../components/WorldOfTextModal";

const Header = () => {
  return (
    <div className="w-full border-b flex">
      <div className="h-[300px] w-[50%] border-r">
        <img
          src={imageUrls.bookCovers.jrCarpenter.url}
          alt={imageUrls.bookCovers.jrCarpenter.alt}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[300px] flex items-center justify-center px-8">
        <div className="h-[250px] flex items-center justify-center relative">
          <img
            src={imageUrls.bookCovers.jrCarpenterCover.url}
            alt={imageUrls.bookCovers.jrCarpenterCover.alt}
            className="absolute bottom-0 left-0 w-[90.21%] h-[91.388%]"
          />
          <BookCoverSVG className="h-[100%] w-auto relative z-10" />
        </div>
      </div>
      <div className="flex flex-col justify-center pl-2 pr-[20%] py-6 gap-4">
        <h2 className="text-xl font-medium">Source Discussion Guide:</h2>
        <h1 className="text-3xl font-bold">
          A Handmade Web by <i>J.R. Carpenter</i> (2015)
        </h1>
        <div className="flex gap-2">
          <a
            href="https://luckysoap.com/statements/handmadeweb.html"
            className="px-8 py-2 border bg-alt text-main rounded-full hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Essay Online
          </a>
        </div>
      </div>
    </div>
  );
};

const Artifact3: React.FC = () => {
  const [isWorldOfTextOpen, setIsWorldOfTextOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="p-8 max-w-4xl mx-auto">
        <div className="my-8 border-b">
          <p className="mb-10">
            The following is a discussion guide and informational support for
            thinking about the work of J.R. Carpenters seminal essay A Handmade
            Web (2015). The essay is quite short,{" "}
            <a
              href="https://uchi-arch.weebly.com/uploads/1/3/1/6/131600248/art_on_my_mind__visual_politics_-_bell_hooks-excerpts.pdf"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              and is available on her (handmade!) website
            </a>
            . The website you are currently on is handmade, and I made countless
            choices in the spirit of crafting a Handmade Web.
          </p>
        </div>

        <section className="mb-8 border-b">
          <h3 className="text-xl font-bold">A Brief Chapter Summary</h3>
          <p className="mb-4 text-sm italic text-balance">
            (for if you don't want to read the chapter, <br /> or if you'd like
            to know how I understood it)
          </p>
          <p className="mb-4">
            A Handmade Web is an essay by J.R. Carpenter written in 2015 that
            evokes the term "handmade web" to define web pages that are coded by
            hand, made and maintained by individuals, and challenge conventions
            of reading, writing, design, ownership, privacy, security, or
            identity. Carpenter discusses how the handmade web reflects the
            context of its creation and dissemination. Unlike artifacts in
            museums or libraries, handmade web pages exist in the same medium in
            which they were created, much like how print mediums such as books
            or zines are considered culturally. However, the way they are viewed
            changes as technology evolves.
          </p>
          <p className="mb-4">
            Carpenter describes the early internet as a more amateur and
            experimental online environment, characterized by slowness,
            smallness, and DIY aesthetics, while the contemporary web is
            dominated by large corporations and user-unfriendly platforms.
            Notions of identity, labor, and space are heavily meditated by
            existing on the internet, but the internet is not monolithic, and
            the Handmade Web has unique qualities in its continuing relevance as
            a form of artistic and political resistance against the
            commercialization of the internet.
          </p>
        </section>

        <section className="mb-8 border-b">
          <h3 className="text-xl font-bold mb-4">
            Evocations of the <i>Handmade Web</i>
          </h3>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-bold">1. Web Pages Coded by Hand</h4>
              <p>
                The Handmade web is made and maintained by individuals and are
                one-of-a-kind (provisional, and temporary). The Handmade Web
                challenges conventions of reading, writing, design, ownership,
                privacy, security, and identity.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                2. Engagement with Web Pages and Web Policies:
              </h4>
              <p>
                The Handmade Web centers users and their identities in the
                functions and futures of the of the web, subverting a
                conventional abstraction of the work, bias, people, and spaces
                that go into sustaining the web.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                3. Manual Labor in Web Page Creation and Instructions for a
                Computer
              </h4>
              <p>
                The Handmade Web is a work of manual labor that must be
                understood not as an abstract concept, but instead as
                instructions and conventions used by the computer to construct
                an experience.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                4. The Role of the Physical Body in Interacting with the Web
              </h4>
              <p>
                The Handmade Web is evoked to bring attention to the physical
                body, specifically the hand that controls the mouse while
                browsing the web.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                5. Slowness and Smallness as Forms of Resistance
              </h4>
              <p>
                The Handmade Web promotes slowness and smallness as methods of
                resisting the commercialization of the web.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 border-b">
          <h3 className="text-xl font-bold mb-4">Questions for the Thinking</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>
              Do you understand the internet as a space for poetry and
              resistance?
            </li>
            <li>
              In what manners are your web experiences mediated, and how are
              your digital spaces designed? By whom?
            </li>
          </ul>
        </section>

        <section className="mb-8 border-b">
          <h3 className="text-xl font-bold mb-4">
            Further Reading, if you so wish!
          </h3>
          <ul className="space-y-2 mb-8">
            <li>
              <a
                href="https://thecreativeindependent.com/essays/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                "My website is a shifting house next to a river of knowledge.
                What could yours be?" by Laurel Schwulst, written May 2018
              </a>
            </li>
            <li>
              <a
                href="https://taeyoonchoi.com/poetic-computation/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Poetic Computation" by Taeyoon Choi, currently maintained
              </a>
            </li>
            <li>
              <a
                href="https://pluralistic.net/2022/04/11/coercion-v-cooperation/#the-machine-is-listening"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                "The Machine is Listening" by David Runciman, written April 2022
              </a>
            </li>
          </ul>
        </section>
        <section className="mb-8 border-b">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">A Space for the Talking</h3>
              <p className="text-sm italic mt-1">
                share your thoughts on hooks' work, or leave a note for future
                readers
              </p>
            </div>
            <button
              onClick={() => setIsWorldOfTextOpen(true)}
              className="px-4 py-2 border border-alt rounded-full hover:bg-alt hover:text-main transition-colors"
            >
              Open Discussion Space
            </button>
          </div>
        </section>
      </div>

      <WorldOfTextModal
        worldUrl="https://www.yourworldoftext.com/~babyvomit/jrcarpenter"
        isOpen={isWorldOfTextOpen}
        onClose={() => setIsWorldOfTextOpen(false)}
      />
    </div>
  );
};

export default Artifact3;
