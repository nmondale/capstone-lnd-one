import React, { useState } from "react";
import { imageUrls } from "../../../utils/imageUrls";
import BookCoverSVG from "../../../assets/icons/book.svg";
import WorldOfTextModal from "../../../components/WorldOfTextModal";

const Header = () => {
  return (
    <div className="w-full border-b flex">
      <div className="h-[300px] w-[50%] border-r">
        <img
          src={imageUrls.bookCovers.bellHooks.url}
          alt={imageUrls.bookCovers.bellHooks.alt}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[300px] flex items-center justify-center px-8">
        <div className="h-[250px] flex items-center justify-center relative">
          <img
            src={imageUrls.bookCovers.bellHooksCover.url}
            alt={imageUrls.bookCovers.bellHooksCover.alt}
            className="absolute bottom-0 left-0 w-[90.21%] h-[91.388%]"
          />
          <BookCoverSVG className="h-[100%] w-auto relative z-10" />
        </div>
      </div>
      <div className="flex flex-col justify-center pl-2 pr-[20%] py-6 gap-4">
        <h2 className="text-xl font-medium">Discussion Guide:</h2>
        <h1 className="text-3xl font-bold">
          Black Vernacular: Architecture as Cultural Practice by{" "}
          <i>bell hooks</i> (1995)
        </h1>
        <div className="flex gap-2">
          <a
            href="https://uchi-arch.weebly.com/uploads/1/3/1/6/131600248/art_on_my_mind__visual_politics_-_bell_hooks-excerpts.pdf"
            className="px-8 py-2 border bg-alt text-main rounded-full hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
          <a
            href="https://womenwritingarchitecture.org/citation/black-vernacular-architecture-as-cultural-practice/"
            className="px-8 py-2 border rounded-full hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Citation
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
          <p className="mb-8 mx-24 text-xl text-center">
            "bell hooks taught us to analyse the cultural labour of Black women
            who dared to challenge the universal claims of white cultural
            nationalism." <br />{" "}
            <strong>
              <a
                href="https://raceandarchitecture.com/2022/09/06/essay-on-bell-hooks-in-the-architectural-review/"
                className="underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                writes Charles L. Davis II
              </a>
            </strong>
          </p>

          <p className="mb-10">
            The following is a discussion guide and informational support for
            thinking about the work of bell hooks in Black Vernacular:
            Architecture as Cultural Practice.{" "}
            <strong>The chapter is only seven short pages,</strong> and is
            accessible to{" "}
            <a
              href="https://uchi-arch.weebly.com/uploads/1/3/1/6/131600248/art_on_my_mind__visual_politics_-_bell_hooks-excerpts.pdf"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              read for free in pdf form here
            </a>
            . An understanding of the hooks' work is an invaluable tool in
            thinking about the future of a space, and recognizing the value of
            imagining a space that is better, and does better for more people.
          </p>
        </div>

        <section className="mb-8 border-b">
          <h3 className="text-xl font-bold">A Brief Chapter Summary</h3>
          <p className="mb-4 text-sm italic text-balance">
            (for if you don't want to read the chapter, <br /> or if you'd like
            to know how I understood it)
          </p>
          <p className="mb-4">
            Black Vernacular: Architecture as Cultural Practice is a chapter in
            bell hooks' book "Art on My Mind: Visual Politics". The chapter
            focuses mainly on the connection between architecture, space, and
            Black cultural practices, particularly within her own lived
            experience. Personal anecdotes are really important in illustrating
            the ways that even under conditions of segregation and economic
            hardship, Black people in the United States have been able to
            express creativity and find beauty in their surroundings and
            structures. hooks argues that the ability to shape and control one's
            living space is a fundamental aspect of freedom, using vernacular
            architecture as a form of cultural expression that illustrates this
            concept.
          </p>
          <p className="mb-4">
            hook’s chapter describes the importance of individual creativity and
            aesthetic engagement with space, even when limited by material
            resources.. This chapter is a story of how Black people, and more
            broadly, those in marginalized communities, have historically and
            continue to engage with architecture and space, the past and present
            strategies of resistance and physical forms of creative expression.
            hooks suggests that studying these practices is crucial for
            challenging dominant narratives that define Black experiences solely
            through the lens of oppression and victimhood. Documenting,
            theorizing, and enabling these experiences of imagining builds this
            resistance into physical space, and helps to build a world that does
            better.
          </p>
        </section>

        <section className="mb-8 border-b">
          <h3 className="text-xl font-bold mb-4">
            The terms that appear a couple times, and what they might mean
          </h3>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-bold">1. Vernacular Architecture</h4>
              <p>
                <a
                  href="https://www.archdaily.com/951667/what-is-vernacular-architecture"
                  className="text-alt underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Camilla Ghisleni, a writer for Arch Daily,
                </a>{" "}
                defines vernacular architecture in a broader academic
                architectural context as local constructions that use
                traditional building frameworks (in terms of materials,
                resources, or concepts) that originate within the area or
                community from which it is being built. This kind of
                architecture is deeply steeped in its local cultural and
                geographical context. Beyond this definition, vernacular
                architecture is understood by hooks using a quote from professor
                of architecture LaVerne Wells-Bowie as “the language of cultural
                expression” that “exemplifies how the physical environment
                reflects the uniqueness of a culture.” (page 149).
              </p>
            </div>

            <div>
              <h4 className="font-bold">2. Space</h4>
              <p>
                hooks presents a nuanced understanding of space, recognizing
                both material and symbolic dimensions. She argues for the
                importance of understanding how different communities,
                particularly those marginalized and oppressed, interact with,
                shape, and perceive space, shedding light on the ways in which
                space can be a site of personal expression, cultural identity,
                and resistance.
              </p>
            </div>

            <div>
              <h4 className="font-bold">3. Subjugated Knowledges</h4>
              <p>
                The excerpt emphasizes the importance of documenting and
                recognizing the knowledge and practices of marginalized groups,
                which are often overlooked and dismissed by hegemonic
                narratives, including the architectural knowledge and creativity
                embedded in vernacular architecture.
              </p>
            </div>

            <div>
              <h4 className="font-bold">4. Cultural Genealogy of Resistance</h4>
              <p>
                This concept traces the stories of resistance among oppressed
                groups, tracking the evolution of struggles and strategies
                across time. The chapter uses this framework to connect past and
                present practices of vernacular architecture to systems of
                resistance. “Documentation of a cultural genealogy of resistance
                invites the making of theory that highlights the cultural
                practices which transform ways of looking and being in a manner
                that resists reinscription by prevailing structures of
                domination.” (page 151)
              </p>
            </div>

            <div>
              <h4 className="font-bold">5. Aesthetic Interventions</h4>
              <p>
                How individuals subjugated to systems of oppression can assert
                their creativity and agency by making aesthetic choices in their
                living spaces. (page 146)
              </p>
            </div>

            <div>
              <h4 className="font-bold">6. Poverty of Spirit or Imagination</h4>
              <p>
                It is often assumed that poverty inherently constricts one’s
                capabilities of creativity and imagination. hooks describes,
                however, that the “lack of material privilege need not be
                synonymous with poverty of spirit or imagination.” (page 150)
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 border-b">
          <h3 className="text-xl font-bold mb-4">Questions for the Thinking</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>
              What is an example of vernacular architecture from your story or
              the people around you? Were there aesthetic interventions that
              defied systems of oppression?
            </li>
            <li>
              How do these concepts apply beyond living spaces, and into public
              infrastructure?
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
                href="https://raceandarchitecture.com/2022/09/06/essay-on-bell-hooks-in-the-architectural-review/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Essay on bell hooks in The Architectural Review" by Charles L.
                Davis II, written September 6, 2022
              </a>
            </li>
            <li>
              <a
                href="https://www.mwanzaabrown.com/eb-or-aave"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                "African American Vernacular Architecture (AAVA)" by Mwanzaa
                Brown, written Fall 2018
              </a>
            </li>
            <li>
              <a
                href="https://libguides.pratt.edu/black-built-environment/aesthetics-theory"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                "Black Aesthetics + Theory - Black Built Environment: Race and
                Architecture in America", a Source Collection by the Pratt
                Institute Library, created February 2023
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
        worldUrl="https://www.yourworldoftext.com/~babyvomit/bellhooks"
        isOpen={isWorldOfTextOpen}
        onClose={() => setIsWorldOfTextOpen(false)}
      />
    </div>
  );
};

export default Artifact3;
