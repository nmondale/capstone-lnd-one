import React from "react";

export const AboutSection = () => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-6">
      <p>
        {" "}
        <i> Welcome to Seeing Yourself in Your Structure!</i> Thank you for
        taking the time to come and take a look at the About Page. <br />
        Here you’ll find some
        <strong>
          {" "}
          background information about the site, the Lock and Dam 1 story, some
          cultural studies theoretical frameworks that support the content of
          the site, more about me and why I made this, and much more.
        </strong>{" "}
        <br /> <br />
        There are brief blurbs under each header to more easily skim this page
        if you are in a hurry!
      </p>
    </div>
  </div>
);

export const DispositionStudy = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-xl font-bold">What is Lock and Dam 1?</h3>
    <p className="border-b pb-6">
      {" "}
      <i>
        {" "}
        The U.S. Army Corps of Engineers (USACE) is conducting disposition
        studies to evaluate whether to deauthorize and dispose of infrastructure
        like Lock and Dam 1 (LD1) on the Upper Mississippi River, which no
        longer serves its original itended purpose of river navigation. These
        studies consider public opinion, ecological impacts, and alternative
        uses, but have faced significant delays since being mandated by Congress
        in 2014.
      </i>{" "}
    </p>
    <p>
      Colloquially Ford Dam, officially known as Lock and Dam No. 1 (LD1), is on
      the Upper Mississippi River and is located between Minneapolis and Saint
      Paul, Minnesota just north of bdote, the confluence of the Mississippi
      with the Minnesota River at Mississippi River mile 847.9, in Minneapolis.
      The powerhouse portion was previously owned by the Ford Motor Company,
      which operated a hydroelectric power station to feed electricity to its
      Twin Cities Assembly Plant on the east side of the river, but it was sold
      to Brookfield Power Co. in April 2008. The lock and dam structure was
      built and is operated by the St. Paul district of the U.S. Army Corps of
      Engineers' (USACE) Mississippi Valley Division.
    </p>
    <div className="w-full mb-6">
      <iframe
        width="100%"
        height="400px"
        src="https://api.mapbox.com/styles/v1/nellymoonballs1/cm4ll096y001i01s88dcmb6ex.html?title=false&access_token=pk.eyJ1IjoibmVsbHltb29uYmFsbHMxIiwiYSI6ImNtM3hpeXV6ajFneGkyanBqZTg2eXllOHcifQ.CDXjzCtv1-ETXZMMrVSsFw&zoomwheel=false#15.51/44.914237/-93.20072"
        title="Lock and Dam No. 1 Map"
        style={{
          border: "1px solid var(--alt-color)",
          borderRadius: "10px",
        }}
      />
    </div>
    <h3 className="text-xl font-bold border-t pt-6">
      What is the (a) Disposition Study?
    </h3>
    <p>
      The U.S. Army Corps of Engineers (ACE) conducts disposition studies as
      mandated by the U.S. Congress to decide if a project that is being
      operated and maintained by the ACE should be deauthorized and ultimately
      disposed of. This process includes assessing public opinion via hearings
      and public comments. The ACE is currently carrying out disposition studies
      throughout the U.S. There is an ongoing disposition study examining the
      Upper Mississippi, including the three uppermost locks and dams on the
      river— Upper St. Anthony Falls, Lower St. Anthony Falls, and Lock and Dam
      1. USACE’s disposition study will evaluate three alternatives:
    </p>
    <ul className="pl-6 leading-8">
      <li>
        <strong>1.</strong> No action
      </li>
      <li>
        <strong>2.</strong> Partially deauthorize and partially dispose
        (maintaining some flood mitigation features)
      </li>
      <li>
        <strong>3.</strong> Deauthorize and completely dispose
      </li>
    </ul>
    <p>
      In the case of LD1, the ACE has been examining the costs and benefits of
      continuing to operate it, as it no longer serves its original purposes of
      river navigation. The study will investigate the understood "value" the
      American public has from the operation of this infrastructure on the Upper
      Mississippi. If the ACE determines that the infrastructure is no longer
      valuable, they will recommend to Congress to "dispose" of the facilities,
      which could lead to the removal of the dam and/or the sale of the assets
      to other public entities or the private sector. Beyond this, however, the
      disposition study will consider other measures to "preserve and enhance
      recreational opportunities and the health of the ecosystem" and "maintain
      the benefits to the natural ecosystem and human environment." The ACE is
      already working on restoration projects in the upper basin, such as
      dredging pools along the floodplain and using the sediment to build
      islands and restore habitat for wetland fish and waterfowl.
    </p>
    <div className="w-full p-6 ">
      <img
        src="https://fmr.org/files/lockdam1-future.gif"
        alt="Lock and Dam 1 Future"
        className="w-full"
        style={{
          border: "1px solid var(--alt-color)",
          borderRadius: "10px",
        }}
      />
      <p className="text-sm mt-6 text-center underline">
        <a
          href="https://fmr.org/updates/land-use-planning/what-would-undammed-metro-mississippi-river-look"
          target="_blank"
        >
          Lock and Dam 1, Reimagined without Damming Infrastructure — Photo by
          John Anfinson; illustration by LVBrown Studio, courtesy of National
          Parks Conservation Association.
        </a>
      </p>
    </div>
    <p>
      Research shows that the public understanding of the locks and dams'
      purpose varies greatly, with surveys that show how people often associate
      the infrastructure with flood control, water supply, or environmental
      sustainability, which were not the original intended use of the
      infrastructure, river navigation. The possibility of dam removal has
      sparked polarized opinions, with strong arguments both for and against the
      idea. Those who defend dam removal emphasize ecological benefits, such as
      habitat restoration and improved recreational opportunities, while
      opponents express concerns about potential downstream pollution, or shifts
      in the comforts that the control of the dam provides.
    </p>
    <p>
      Public engagement research conducted by Roopali Phadke and student workers
      at Macalester College that outlined the ways in which people understand
      and interact with the river and river infrastructure described
      methodologies that should be used by the ACE to enable more effective
      public engagement in the disposition study process. These methods included
      things like the collection of demographic data to ensure a diverse public,
      and increased dissemination of information around the foundational
      knowledge of the locks and dams and their intended purposes. This research
      was considered by the ACE, and was featured in a progress report detailing
      the disposition study process.
    </p>
    <h3 className="text-xl font-bold">
      Where (When) is the Disposition Study Now?
    </h3>
    <p className="border-b pb-6">
      The bill that both closed the Upper St. Anthony Lock and kickstarted the
      disposition study was passed by Congress in 2014. Now, 10 years later, the
      ACE has not completed any of the three disposition studies for locks and
      dams that are currently almost all out of use. The results of the study
      have been further delayed from the Fall of 2024, to 2025 to 2027, marking
      a repeated cycle of delays throughout the studies.
    </p>
    <h3 className="text-xl font-bold">Some Sources and Further Reading</h3>
    <ul className="list-decimal pl-6 leading-8">
      <li>
        {" "}
        <a
          className="underline"
          href="https://fmr.org/updates/land-use-planning/whats-going-twin-cities-locks-and-dams"
          target="_blank"
        >
          <strong>What's Going on with the Twin Cities Locks and Dams?</strong>
        </a>{" "}
        — Friends of the Mississippi River{" "}
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://fmr.org/updates/land-use-planning/how-were-filling-research-gaps-lock-and-dam-study"
          target="_blank"
        >
          <strong>
            How Were Filling Research Gaps in the Lock and Dam Study?
          </strong>
        </a>{" "}
        — Friends of the Mississippi River
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://fmr.org/updates/land-use-planning/what-would-undammed-metro-mississippi-river-look"
          target="_blank"
        >
          <strong>
            What Would Undammed Metro Mississippi River Look Like?
          </strong>
        </a>{" "}
        — Friends of the Mississippi River
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://fmr.org/updates/land-use-planning/latest-twin-cities-lock-and-dam-studies"
          target="_blank"
        >
          <strong>Latest Twin Cities Lock and Dam Studies</strong>
        </a>{" "}
        — Friends of the Mississippi River
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://www.startribune.com/funding-shortfall-mississippi-river-lock-and-dam-study-twin-cities-army-corps-st-anthony-ford-dam/600291431"
          target="_blank"
        >
          <strong>
            Funding Shortfall Mississippi River Lock and Dam Study Twin Cities
            Army Corps St. Anthony Ford Dam
          </strong>
        </a>{" "}
        — Star Tribune
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://www.startribune.com/army-corps-studying-dam-removal-that-could-restore-free-flowing-mississippi-river-in-twin-cities/600216559"
          target="_blank"
        >
          <strong>
            Army Corps Studying Dam Removal That Could Restore Free-Flowing
            Mississippi River in Twin Cities
          </strong>
        </a>{" "}
        — Star Tribune
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://storymaps.arcgis.com/stories/127c89d36ae2432ebffe941eb00b2f94"
          target="_blank"
        >
          <strong>Seeing Yourself in Your Structure</strong>
        </a>{" "}
        — Story Map
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://sites.google.com/macalester.edu/disposition/home"
          target="_blank"
        >
          <strong>Dispositions Study</strong>
        </a>{" "}
        — Macalester College
      </li>
    </ul>
  </div>
);

export const PostcardProject = () => (
  <div className="flex flex-col gap-6">
    <p>
      The "Dear River" project was created by researchers at Macalester College
      (I was one of them!) to understand and shape public engagement with the
      disposition study, which examines the future of locks and dams, including
      potential removal. The project invited members of the public to write
      postcards to the river, expressing their wishes and dreams for its future,
      with the subject “Dear River,.” Over 2,500 postcards were collected from
      two locations in St. Paul, Minnesota, featuring a wide range of messages,
      from desires for a pristine river to more whimsical wishes of unicorns or
      radioactive spiders. Researchers analyzed a random sample of 500
      postcards, categorizing messages using content tags and examining trends
      in wishes. Key observations included a focus on cleanliness and river
      health, the prevalence of calls for dam abolition over maintenance, and a
      tendency for younger writers to envision future reimaginings of the river.
    </p>
    <div className="w-full mb-6">
      <img
        src="https://64.media.tumblr.com/f9bf6e9f61169e2a78dc1d0226236b93/478f8f7c87a714c8-4a/s2048x3072/fe3d615d8fea56ccb7fd7bd785e90e050f5747d1.pnj"
        alt="Dear River Postcards"
        className="w-full"
        style={{
          border: "1px solid var(--alt-color)",
          borderRadius: "10px",
        }}
      />
      <p className="text-sm mt-6 text-center">
        Postcards from the Dear River Project — Courtesy of Macalester College
      </p>
    </div>
    <p>
      The "Dear River" project has been archived at Macalester College and is
      accessible online and physically.
    </p>
    <h3 className="text-xl font-bold">Some Sources and Further Reading</h3>
    <ul className="list-decimal pl-6 leading-8">
      <li>
        {" "}
        <a
          className="underline"
          href="https://www.macalester.edu/news/2021/08/research-review-dear-river/"
          target="_blank"
        >
          <strong>Dear River Research Review</strong>
        </a>{" "}
        — Macalester College
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://sppl.org/blogs/post/dear-river-postcard-project/"
          target="_blank"
        >
          <strong>Dear River Postcard Project </strong>
        </a>{" "}
        — St. Paul Public Library
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://sites.google.com/macalester.edu/disposition/postcard-project?authuser=0"
          target="_blank"
        >
          <strong>Postcard Project Google Site</strong>
        </a>{" "}
        — Macalester College Researchers
      </li>
    </ul>
  </div>
);

export const WhatAmILookingAt = () => (
  <div className="flex flex-col gap-6">
    <h3 className="text-xl font-bold">Project Statement of Purpose</h3>
    <p className="text-lg p-8 border mb-6 mt-3 rounded-xl">
      Consider yourself a river: Your being is shaped and reshaped by
      structures, some visible, like dams and fallen trees, and some invisible,
      like capitalist authorities that may deem you useful in one time, or
      defunct in another. If one is constantly being told in which manner they
      must flow, and to serve what end, flowing freely— truly serving your needs
      and the needs of your community, becomes all the more intangible. <br />
      <br />
      In this time, where us as User-Agents are given the landmark opportunity
      to critically reconsider how these structures serve us, and how we might
      move forward to construct an urban river space that does better, we need
      information, perspective, a space to design, and a space to discuss;
      Access to the bigger picture may allow us to better understand not only
      how the flow of the Mississippi is being controlled, but perhaps the flow
      of knowledge within us and our actions in a post-digital world. <br />
      <br />
      <i>Seeing Yourself in Your Structure</i> seeks to do just this.
    </p>
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold">
        Technical Details: Dependencies (Computational Structures) in Use
      </h3>
      <p>
        {" "}
        The site you are looking at today is handmade. I coded this website and
        it took me like forever. I’m so serious! <br /> I sat and stared at
        layouts, watched looong YouTube tutorials from men who speak like
        robots, and stayed up into the morning getting excited about the fish{" "}
        <i> finally </i> moving correctly on the homepage.{" "}
      </p>
      <p> The site has the following core dependencies: </p>
      <ul className=" pl-6 leading-8">
        <li>
          {" "}
          <strong>React Next.js (next: ^14.2.15)</strong> (Foundational
          frameworks){" "}
        </li>
        <li>
          {" "}
          <strong>Vercel</strong> Building and Hosting{" "}
        </li>
        <li>
          {" "}
          <strong>Three.js Ecosystem</strong> (For 3D){" "}
        </li>
        <li>
          {" "}
          <strong>p5.js</strong> (p5: ^1.11.0, @types/p5: ^1.7.6){" "}
        </li>
        <li>
          {" "}
          <strong>Tailwind CSS</strong> Ecosystem{" "}
        </li>
        <li>
          {" "}
          <strong>SWR</strong> (swr: ^2.2.5), <strong>Axios</strong> (axios:
          ^1.7.7), and <strong>XML Parsing</strong> for using API Data.{" "}
        </li>
      </ul>
      <p>With the following dependencies for media hosting:</p>
      <ul className=" pl-6 leading-8">
        <li>
          {" "}
          Images use <strong>Tumblr Media</strong>{" "}
        </li>
        <li>
          {" "}
          Audio uses <strong>Cloudinary</strong>{" "}
        </li>
        <li>
          {" "}
          Embedded Maps use <strong>Mapbox</strong>{" "}
        </li>
        <li>
          {" "}
          <strong>Your World of Text</strong>{" "}
        </li>
      </ul>
      <p>
        All designs were created and implemented by me, unless otherwise
        specified.
      </p>
      <h3 className="text-xl font-bold">
        The Youtube Tutorials That Carried me Through the Creation of This Site:
      </h3>
      <ul className="list-decimal pl-6 leading-8">
        <li>
          {" "}
          <a
            className="underline"
            href="https://www.youtube.com/watch?v=mhjuuHl6qHM"
            target="_blank"
          >
            <strong>Coding Challenge 124: Flocking Simulation</strong> — The
            Coding Train
          </a>{" "}
          — YouTube
        </li>
        <li>
          {" "}
          <a
            className="underline"
            href="https://www.youtube.com/watch?v=Q7AOvWpIVHU"
            target="_blank"
          >
            <strong>Three.js Beginner’s Tutorial</strong>
          </a>{" "}
          — Fireship
        </li>
        <li>
          {" "}
          <a
            className="underline"
            href="https://www.youtube.com/watch?v=00lxm_doFYw"
            target="_blank"
          >
            <strong>Fetching Data in React - Complete Tutorial</strong>
          </a>{" "}
          — Cosden Solutions
        </li>
      </ul>
    </div>
  </div>
);

export const IntroductionGuidingText = () => (
  <div className="flex flex-col gap-6">
    <p className="border-b pb-6">
      {" "}
      Definitions of key terms and more academic context for the content
      discussed below can be found on my{" "}
      <a className="underline" href="/litreview">
        Literature Review page
      </a>
      , where I have outlined six peer-reviewed sources in fields like
      speculative design and cultural studies that guide the central argument of
      this project.{" "}
    </p>
    <p className="border-b pb-6">
      Lock and Dam 1 (LD1) takes on a different shape for every individual who
      interacts with it, much like the river it stands on. For some, LD1 is a
      brown blob in the corner of the eye of those who pass the Ford Parkway
      Bridge, for others, it is white letters on a black sign, posted into the
      earth adjacent to the white cliffs of the river valley, for some a history
      of industry and storied aquatic navigation, others navigate a story of
      white settler colonialism, the forceful removal of land and culture.{" "}
      <br />
      <br />
      When presented with the opportunity to imagine a place that does better,
      works better for more people, and moves city infrastructure in a better
      direction, LD1 stakeholders are put in a unique position, and
      <p className="text-xl text-main text-center bg-alt p-4 my-6 rounded-xl font-bold">
        when pencil is put to blank piece of paper, the white abyss begs the
        question, what am I allowed to imagine?
      </p>
      <ul className="list-disc pl-6 mb-6 leading-8">
        <li>
          How is my understanding of a better river space controlled by the
          systems of power that define the built environment?
        </li>
        <li>
          How do my lofty aspirations for river space fit into a system that may
          or may not accommodate them — do they even matter, then?
        </li>
      </ul>
      LD1 constricts the flow of water down the Mississippi, but established
      critical cultural studies of how we understand both physical and digital
      spaces argue that built infrastructure like LD1 also define the
      ideological and material conditions that constrict the flow of knowledge,
      socio-cultural understandings, notions of nature, identity, and the
      politics of planning.{" "}
    </p>
    <p>
      The history of community-oriented digital spaces describes how the popular
      fantasy of a techno-utopia defined the internet as democratizing spaces of
      shared ideals, equitable governance structures that could facilitate
      collaboration, information exchange, and a sense of belonging, ignoring
      the implicit environmental and social exploitation, power imbalances, and
      commodification of social interactions within the very existence of the
      internet. The term “User-Agent” is used to describe a dynamically
      constructed subject position shaped and reshaped by these cultural and
      built infrastructures that shape the internet and contemporary
      capitalistic algorithmic interactions. Buildings and urban spaces such as
      LD1 can be understood as interfaces or platforms that mediate social
      interactions and shape human behavior, drawing parallels between how the
      capitalistic web can define the capabilities of a user to how the built
      city environment can define the capabilities of a resident.
    </p>
    <p>
      Speculative design practice asks one to consider the true “blankness” of
      the process of planning, challenging traditional conventions of design
      that ask for solutions to problems and addressing market needs towards
      design as a medium for social and ethical exploration, raising questions,
      and fostering critical infrastructural reflection. Speculative designs may
      manifest as anything from physical prototypes, fictional artifacts, or
      multimedia experiences that serve as thought experiments rather than
      marketable commodities.
      <p className="text-lg p-8 border my-6 rounded-xl font-bold">
        Mapping both LD1 and the internet as a complex matrix of social,
        material, and infrastructural conditions— interconnected monstrous
        constructions, speculative design practice, the critical and accessible
        alternatives to current standardized contexts of urban planning, must be
        understood not only as valuable but necessary considerations in the
        process of imagining infrastructure.
      </p>
    </p>
  </div>
);

export const WhoMadeThisSite = () => (
  <div>
    <div className="flex gap-6 mb-6">
      <div className="w-[20%]">
        <img
          src="https://64.media.tumblr.com/80b6711408b6efe4ab49383753e77bbd/4f8da719d3e07f7c-97/s1280x1920/eb327336b9603b72505484edf49c8ed800499d65.jpg"
          alt="Nelson Mondale"
          className="w-full"
          style={{
            border: "1px solid var(--alt-color)",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="flex-1">
        <p>
          Hello! My name is <strong> Nelson Mondale</strong>, and I am a queer,
          white Macalester college senior who lives in a stinky college
          apartment in Saint Paul MN. I love veggie hot dogs, drawing creepy
          flowers, and the Mississippi River. This site was created as my final
          capstone project for my Media and Cultural Studies degree at
          Macalester, and as an expression of what I have learned through my
          Computer Science and Studio Art education throughout my college
          career. I have known for quite some time that my final project had to
          be about the Mississippi, as it has become an incredible friend and
          teacher to me during my time in the Twin Cities. I am incredibly
          grateful and excited to share what I have learned and made this past
          semester, and I hope there is something here that you remember or that
          changes your mind.
        </p>
      </div>
    </div>
    <p>
      I wanted to extend a special thanks to my advisors and supporters for this
      project:
    </p>
    <ul className="list-disc pl-6 leading-8">
      <li>
        {" "}
        My Advisor —{" "}
        <a
          className="underline"
          href="https://www.macalester.edu/media-cultural-studies/facultystaff/tia-simone-gardner/"
          target="_blank"
        >
          Tia-Simone Gardner{" "}
        </a>{" "}
        who showed me the river and taught me to ask it questions, and to listen
        carefully.
      </li>
      <li>
        {" "}
        My Capstone Professor —{" "}
        <a
          className="underline"
          href="https://www.macalester.edu/media-cultural-studies/facultystaff/john-kim/"
          target="_blank"
        >
          John Kim{" "}
        </a>
        .
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://www.macalester.edu/serie-center/about/staff/aisling-quigley/"
          target="_blank"
        >
          {" "}
          Aisling Quigley{" "}
        </a>
        .
      </li>
      <li>
        {" "}
        <a className="underline" href="https://shanai.work/" target="_blank">
          {" "}
          Shanai Matteson{" "}
        </a>
        .
      </li>
      <li>
        {" "}
        <a
          className="underline"
          href="https://www.macalester.edu/environmental-studies/facultystaff/roopaliphadke/"
          target="_blank"
        >
          {" "}
          Dr. Roopali Phadke{" "}
        </a>
        .
      </li>
      <li>
        {" "}
        My Friends and Family! Thank you for your support and encouragement
        throughout this project. love youu!!! xoxo
      </li>
    </ul>
  </div>
);

export const aboutSections = [
  {
    title: "About Page Introduction",
    content: <AboutSection />,
  },
  {
    title: "Lock and Dam 1 and the Disposition Study",
    content: <DispositionStudy />,
  },
  {
    title: "Dear River Postcard Project",
    content: <PostcardProject />,
  },
  {
    title: "Introduction/Guiding Text",
    content: <IntroductionGuidingText />,
  },

  {
    title: "What Am I Looking At?",
    content: <WhatAmILookingAt />,
  },
  {
    title: "Who Made This Site?",
    content: <WhoMadeThisSite />,
  },
];
