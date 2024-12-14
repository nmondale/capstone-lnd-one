// Define available content tags as a const array for type safety and reusability
export const CONTENT_TAGS = [
  'Digital',
  'Built',
  'Natural',
  'Theory',
  'Justice',
  'Identity',
  'User',
  'History',
  'Current',
  'Power'
] as const;

export type ContentTag = typeof CONTENT_TAGS[number];

// Combined interface for source and author information
interface SourceInfo {
  title: string;
  link?: string;
  type: 'Book' | 'Article' | 'Essay' | 'Brochure' | 'Journal Article' | 'Report';
  author: string;
}

// Interface for a single quote
export interface Quote {
  id: string;
  text: string;
  page?: number;
  tags: ContentTag[];
  sourceInfo: SourceInfo;
}

// Helper function to create multiple quotes from the same source
const createQuotes = (
  sourceInfo: SourceInfo,
  quotes: Array<{ text: string; page?: number; tags: ContentTag[] }>
): Quote[] => {
  return quotes.map((quote, index) => ({
    id: `${sourceInfo.author.toLowerCase().replace(/\s+/g, '-')}-${index}`,
    text: quote.text,
    page: quote.page,
    tags: quote.tags,
    sourceInfo
  }));
};

// Define sources with their authors
const sources = {
  mappingControveries: {
    title: "Mapping Controversies in Architecture (2012)",
    link: "https://www.google.com/books/edition/Mapping_Controversies_in_Architecture/NpP29qruCEkC?hl=en",
    type: "Book" as const,
    author: "Albena Yaneva"
  },
  marxism: {
    title: "On Spatial Planning and Marxism: Looking Back, Going Forwards (2020)",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1111/anti.12614",
    type: "Article" as const,
    author: "Ståle Holgersen"
  },
  speculativeEverything: {
    title: "Speculative Everything (2013)",
    link: "https://www.google.com/books/edition/Speculative_Everything/9gQyAgAAQBAJ?hl=en",
    type: "Book" as const,
    author: "Anthony Dunne & Fiona Raby"
  },
  ifEverythingIsSoSmooth: {
    title: "If everything is so smooth, why am I so sad? (2018)",
    link: "https://www.librarystack.org/user-agent-if-everything-is-so-smooth-why-am-i-so-sad/",
    type: "Book" as const,
    author: "Interviews, edited by Anastasia Kubrak"
  },
  cyborgManifesto: {
    title: "A Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the 1980s (1985)",
    link: "https://theanarchistlibrary.org/library/donna-haraway-a-cyborg-manifesto",
    type: "Essay" as const,
    author: "Donna Haraway"
  },
  conti: {
    title: "Understanding Culture, Cultural Identity, and Cultural Heritage in the Post-Digital Age (2024)",
    link: "https://www.intechopen.com/online-first/1195804",
    type: "Journal Article" as const,
    author: "Luisa Conti"
  },
  secretHistory: {
    title: "The Secret History of the Mississippi's Earliest Locks and Dams (1995)",
    link: "https://fmr.org/sites/default/files/shared/pdf/resources/river_info/anfinson_1995.pdf",
    type: "Article" as const,
    author: "John O. Anfinson"
  },
  upstream: {
    title: "Upstream: Engagement in the Era of Climate Change (2023)",
    link: "https://www.taylorfrancis.com/chapters/oa-edit/10.4324/9781003409748-19/upstream-engagement-era-climate-change-roopali-phadke",
    type: "Journal Article" as const,
    author: "Roopali Phadke"
  },
  engagementMatters: {
    title: "ENGAGEMENT MATTERS: Public Understandings of River Infrastructure",
    link: "https://fmr.org/files/inline-files/conservation_organizations_lsaf_ld1_disposition_study_scoping_comments_dec_18_2022_0.pdf",
    type: "Report" as const,
    author: "Macalester College"
  },
  publicAffairs: {
    title: "Official Public Affairs Brochure: Lock and Dam 1",
    link: "https://www.mvp.usace.army.mil/Portals/57/docs/Public%20Affairs/Brochure/Navigation/2022_Minneapolis_LDs_Brochure_Web.pdf?ver=rVVznJzBWHslI_UyAYCodA%3D%3D",
    type: "Brochure" as const,
    author: "The U.S. Army Corps of Engineers"
  }
};

// Create quotes array
export const quotes: Quote[] = [

// Mapping Controversies
  ...createQuotes(
    sources.mappingControveries,
    [
      {
        text: "This divides the world into two sets: one of causes and the other of effects; one of architecture (understood as form, size, location, disposition and materiality) and the other of society (that causes buildings to vary, flourish or perish). This epistemology views architecture as an engineering technology and an objective frame on one side yet, on the other, comprehends it through many subjective perceptions, experiences and symbolic interpretations.",
        page: 1,
        tags: ['Built', 'Theory']
      },
      {
        text: "Questioning whether it is 'the individual architect' or 'society as whole' that should be blamed or praised for the success or failure of a particular project is wrong. This question is to be replaced by a programme of inquiry – Mapping Controversies – a slow and painstaking inquiry that would allow tracing the meanders of the collective action of architecture. ",
        page: 59,
        tags: ['Built', 'Justice', 'Power']
      },
      {
        text: "The mapping refers to the 'art of describing' architectural objects, processes and practices. The accounts included here trace the complexity of phenomena without replacing the specific with general. Mapping Controversies provides us with inventive narrative techniques to gain access to the particular and grasp the unique. We can offer an adequate description on the basis of the series of situations accounted, according to the actors' dynamics and the spaces and times they generate.",
        page: 5,
        tags: ['Built', 'Theory']
      },
      {
        text: "How can we circumvent the boundaries between the abstraction called 'technology' and the abstraction called 'symbolism', between 'subject' and 'object', between 'nature' and 'culture'? ",
        page: 2,
        tags: ['Theory', 'Natural', 'Digital']
      },
      {
        text: "In all of these cases, we do not need to embrace culturalistic discourses of urban differences. Instead, we account for what is specific to these buildings. That is, we treat them as pertinent ethnographic objects and the urban as describable and accountable. Culture will assume an ontological quality (Houdart 2007), not merely an attribute. ",
        page: 2,
        tags: ['Built', 'Identity', 'History']
      }
    ]
  ),

// On Spatial Planning and Marxism

  ...createQuotes(
    sources.marxism,
    [
      {
        text: "Where previous Marxist approaches to planning were very strong on analysing the political economy, I argue there is currently a need—with old hegemonies losing ground, communicative approaches losing support, and neoliberalism in the political economy losing legitimacy—to also discuss establishing alternatives.",
        page: 800,
        tags: ['Theory', 'Justice', 'History']
      },
      {
        text: "The core argument is that planning is not a neutral, purely technical and/or independent activity. Planning must rather be understood as rooted in a political economy defined by capitalist social relations. As power relations are produced through various mechanisms in our societies, planning must be grasped as one particular and material way of producing and reproducing power.",
        page: 804,
        tags: ['Built', 'Justice', 'Current']
      },
      {
        text: "From a materialist perspective, it is important to stress that theoretical discussions are also embedded somewhere outside of themselves, outside the world of ideas. From a Marxist perspective, it is important to see changes in planning theory in relation to changes in the political economy. ",
        page: 807,
        tags: ['Theory', 'History',]
      },
      {
        text: "Where Marxist planning theory in the 1970s and 1980s was more concerned with is than ought, the current diabolic crisis forces us to work on both fronts simultaneously. We need to embrace what previous Marxist discourse did not manage to include, something that is necessary if a Marxist discourse on planning is going to have an impact— the greatest promise of Marxism: a call for social change.",
        page: 802,
        tags: ['Theory', 'Justice', 'History', 'Current']
      },
      {
        text: "We need a socialist programme for how to plan, organise and produce space, with concrete strategies towards new hegemonies. ",
        page: 817,
        tags: ['Built', 'Justice', 'Current']
      }
    ]
  ),

// Speculative Everything

  ...createQuotes(
    sources.speculativeEverything,
    [
      {
        text: "In a consumer society like ours, it is through buying goods that reality takes shape. The moment money is exchanged, a possible future becomes real. If it did not sell it would be sent back, becoming a rejected reality. In a consumer society, the moment we part with our money is the moment a little bit of reality is created. Not just physical reality or cultural butpsychological, ethical, and behavioral.",
        page: 37,
        tags: ['Theory', 'Identity']
      },
      {
        text: "It is often said that if something is conceptual, it is only an idea, but that is missing the point. It is because it is an idea that is important. New ideas are exactly what we need today. Conceptual designs are not only ideas but also ideals, and as the moral philosopher Susan Neiman has pointed out, we should measure reality against ideals, not the other way around: 'Ideals are not measured by whether they conform to reality; reality is judged by whether it lives up to ideals. Reason's task is to deny that the claims of experience are final—and to push us to widen the horizon of our experience by providing ideas that experience ought to obey.'",
        page: 12,
        tags: ['Theory', 'Justice']
      },
      {
        text: "Ideas can be works of art; they are in a chain of development that may eventually find some form. All ideas need not be made physical.",
        page: 14,
        tags: ['Theory', 'Built']
      },
      {
        text: "Critical design is critical thought translated into materiality. It is about thinking through design rather than through words and using the language and structure of design to engage people.",
        page: 35,
        tags: ['Built', 'Theory']
      },
      {
        text: "Design can shift the discussion from one of abstract generalities separated from our lives to tangible examples grounded in our experiences as members of a consumer society. ",
        page: 31,
        tags: ['Built', 'Identity']
      }
    ]
  ),    

// If Everything is So Smooth

  ...createQuotes(
    sources.ifEverythingIsSoSmooth,
    [
      {
        text: "I don't think anyone who works with cities would claim that you can solve the city, or think about it in such terms. And even if we are to focus on the specifics of traffic flows or communication systems or pipes rather than 'the city', I'm still personally wary of thinking about it in this boastful and deterministic way. Optimization always happens at the expense of something else, with the premise that everything itself remains unchanged.",
        page: 53,
        tags: ['Built', 'Theory']
      },
      {
        text: "We no longer should be thinking of buildings as objects in space and then be done with it; there's a possibility (and perhaps a responsibility) to follow buildings in time, know who is using them and how, keep track of their waste, be accountable for their repairs and externalities over time. The added temporal dimension shifts us from spatial design to contextual design in very pragmatic terms.",
        page: 56,
        tags: ['Built', 'User']
      },
      {
        text: "If citizens/ users are to be empowered, they need access to ideas that are not fully formed, with enough internal contradiction to be stretched and accommodated by different users. For example, with our project we wanted to hammer down the idea that you're in the physical world before you're in a virtual world, and that platforms that use and leverage space should give something back.",
        page: 58,
        tags: ['User', 'Digital']
      },
      {
        text: "But who or what is a User? User is traditionally defined as a person who uses software, but this is less true in today's reality, when bots account for forty-eight million, or 15 percent, of all Twitter accounts. Rather than being a human, User is a profile, an avatar, a body double; a virtual stand-in for somebody on the platform. As formulated by the design theorist Benjamin Bratton1, being a User is a question of authentication: anyone or anything can become a User, as long as they have a username and a password, be that a piece of software, a bot, an illegal immigrant, or a smart object connected to the network. ",
        page: 15,
        tags: ['User', 'Digital']
      },
      {
        text: "Becoming-user is about understanding that you are moving between, and holding different relations to many different platforms and beyond. It's tapping into your relationship with computational potential, as one of the many languages that may make into a practice a certain understanding of actors that make the world. ",
        page: 105,
        tags: ['User', 'Identity']
      }
    ]
  ), 

// Manifesto for Cyborgs

  ...createQuotes(
    sources.cyborgManifesto,
    [
      {
        text: "A cyborg is a cybernetic organism, a hybrid of machine and organism, a creature of social reality as well as a creature of fiction.",
        page: 7,
        tags: ['Digital', 'Identity']
      },
      {
        text: "By the late twentieth century, our time, a mythic time, we are all chimeras, theorized and fabricated hybrids of machine and organism; in short, we are cyborgs.",
        page: 8,
        tags: ['Digital', 'Identity']
      },
      {
        text: "The cyborg is resolutely committed to partiality, irony, intimacy, and perversity. It is oppositional, utopian, and completely without innocence. ",
        page: 9,
        tags: ['Digital', 'Theory']
      },
      {
        text: "Cyborg imagery can help express two crucial arguments in this essay: (1) the production of universal, totalizing theory is a major mistake that misses most of reality, probably always, but certainly now; (2) taking responsibility for the social relations of science and technology means refusing an anti-science metaphysics, a demonology of technology, and so means embracing the skillful task of reconstructing the boundaries of daily life, in partial connection with others, in communication with all of our parts.",
        page: 39,
        tags: ['Digital', 'Justice']
      },
      {
        text: "Though both are bound in the spiral dance, I would rather be a cyborg than a goddess.",
        page: 39,
        tags: ['Digital', 'Identity']
      }
    ]
  ),

// Understanding Culture, Cultural Identity, and Cultural Heritage in the Post-Digital Age

  ...createQuotes(
    sources.conti,
    [
      {
        text: "Despite these challenges, digital platforms do facilitate the creation, challenging, reinterpretation, and remixing of cultural narratives by a diverse array of participants, reflecting the multiplicity of identities and experiences in the post-digital age. ",
        page: 8,
        tags: ['Digital', 'Identity']
      },
      {
        text: "The digital extension of the physical context allows individuals to construct and express their identities across multiple, overlapping environments, often transcend- ing geographical boundaries. Turkle [33] highlights how digital platforms provide spaces for experimenting with different facets of identity, enabling individuals to engage with diverse cultural content and connect with others globally. ",
        page: 7,
        tags: ['Digital', 'Identity']
      },
      {
        text: "Digital media have transformed heritage preservation from a process traditionally controlled by institutions and experts to one that is increasingly participatory. Smith [30] argues that while heritage has traditionally been controlled by institutions and experts, digital platforms now empower individuals and communities to shape the narrative of what constitutes cultural heritage. ",
        page: 8,
        tags: ['Digital', 'Identity', 'Power']
      },
    ]
  ),

// The Secret History of the Mississippi's Earliest Locks and Dams

  ...createQuotes(
    sources.secretHistory,
    [
      {
        text: "In Minneapolis, civic and commercial boosters yearned to make their city the head of navigation. As early as 1850, they had tried to convince shippers that steamboats could reach the falls, offering the Lamartine $200 to journey upstream from St. Paul to prove their point. They raised funds during the 1850s to remove boulders and other obstacles. By 1852 they had begun discussing a lock and dam for the river above St. Paul, and in 1855 the St. Anthony Express proposed building two locks and dams: one at the falls and the other near Meeker Island, some three and one-half miles downstream.",
        page: 2,
        tags: ['Built', 'History']
      },
      {
        text: "Locks and Dams No. 1 and 2 were begun during one of the great transforming eras in American history. In 1890, four years before Congress initially authorized the dams, the U.S. Census Bureau announced that the American frontier no longer existed. Many Americans suddenly realized that the country's natural resources were finite. This realization, coupled with the industrializing nation's growing pressure on its resources, spawned a conservation movement that shaped American politics for 25 years. ",
        page: 4,
        tags: ['History', 'Natural']
      },
      {
        text: "By the turn of the century, citizens of Minneapolis and St. Paul, reflecting national enthusiasm, recognized that they had missed a tremendous opportunity. They had observed the transition to hydroelectric power firsthand and recognized the wealth it could bring. ",
        page: 6,
        tags: ['Built', 'History']
      },
    ]
  ),

// Upstream

  ...createQuotes(
    sources.upstream,
    [
      {
        text: "The Corps built and operated the Mississippi's infrastructure with a battle general's intent for over 150 years (Frankel, 2018). Founded in 1755, the Corps is a branch of the US Department of Defense. It is one of the world's largest public engineering, design, and construction agencies. Congress first authorized the Corps to construct six dams in the headwaters area between 1880 and 1907 to support a vocal and powerful flour milling and timber industry. ",
        page: 119,
        tags: ['Built', 'History']
      },
      {
        text: "Dakota still claims this territory and are deeply connected to the politics of infrastructure development in the region. ",
        page: 120,
        tags: ['Justice', 'History', 'Current']
      },
      {
        text: "The river's industrial past is also inseparable from the violence of slavery, anti-Blackness, and the ongoing dispossession of Black communities. Historians have described how the Mississippi served as both refuge and oppressor for those enslaved peoples who toiled the crops and labored on the boats of the antebellum economy (Zeisler-Vralsted, 2019). Zoning and redlining policies in the 20th century further segregated Black populations, simultaneously barring them from the river while exposing them to the impacts of toxic industries that took up residence on the banks (Miller, 2020).",
        page: 120,
        tags: ['Justice', 'History', 'Current']
      },
      {
        text: "Climate change affects infrastructure in predictable and unknowable ways. We expect disruptions from extreme weather events will bend or break some transportation, electric transmission, and water systems. This will have profound impacts on communities, and disproportionately burden those most vulnerable within those societies. Other incremental changes, such as species migrations, will be harder to predict. Adapting to climate change will require building resilience through the strengthening of literal and metaphorical walls and bridges. Place-based approaches to infrastructure design provide opportunities for diverse groups to consider the futures they want to protect and enact.",
        page: 125,
        tags: ['Natural', 'Justice']
      },
    ]
  ),

// ENGAGEMENT MATTERS

  ...createQuotes(
    sources.engagementMatters,
    [
      {
        text: "We recommend the Corps collect basic demographic information about who submits comments and attends public events. This information can be collected anonymously by providing those who submit comments a link to a survey. Demographic forms can also be provided when participants register at in-person or online events. Without this information, it is impossible to know who has and has not participated, and how to target future engagement. ",
        page: 8,
        tags: ['User', 'Justice']
      },
      {
        text: "The public's lack of understanding about the Upper Mississippi locks and dams may hinder their ability to meaningfully engage in disposition studies. This suggests a need for continued comprehensive public outreach and education.",
        page: 5,
        tags: ['User', 'Built']
      },
      {
        text: "We recognize that the Corps has the power to make important decisions about lock and dam infrastructure that will significantly impact surrounding communities for generations. It is vital that public engagement at this stage be as wide- spread and inclusive as possible. ",
        page: 4,
        tags: ['Justice', 'Built']
      },
      {
        text: "We urge the Corps to Build partnerships with youth and youth-led organizations. We found that youth are deeply interested in thinking about the future river and have the capacity to participate and engage. While there may be limitations or concerns about working with minors, they are an important voice to include in the process. They will inherit the river. ",
        page: 8,
        tags: ['User', 'Natural']
      },
      {
        text: "The Corps should provide online engagement opportunities. Survey results from both youth and adults suggested that many are interested in engaging with the Corps' study via online surveys or an online public forum. This would be particularly important as public health challenges are likely to surge in colder weather months, and outdoor conditions make travel to public events more challenging. ",
        page: 8,
        tags: ['Digital', 'User']
      },
    ]
  ),

// Official Public Affairs Brochure: Lock and Dam 1

  ...createQuotes(
    sources.publicAffairs,
    [
      {
        text: "The U.S. Army Corps of Engineers has restricted areas to protect boaters in the vicinity of locks and dams. These areas are: A large area immediately upstream of the dam, usually 600 feet. Strong, unseen currents can pull boats into the dam. A smaller area immediately downstream of the dam, usually 150 feet. Undercurrents and turbulence make the downstream restricted area extremely dangerous.",
        page: 1,
        tags: ['Built', 'User']
      },
      {
        text: "The St. Paul District's navigation program provides a safe, reliable, cost-effective and environmentally sustainable waterborne transportation system on the Upper Mississippi River for the movement of commercial goods and national security needs. To do this, the district maintains a 9-foot navigation channel and 13 locks and dams from Minneapolis to Guttenberg, Iowa.",
        page: 1,
        tags: ['Built', 'Natural']
      }
    ]
  ),

];

// Export a function to get quotes by tag
export const getQuotesByTags = (selectedTags: ContentTag[]): Quote[] => {
  if (selectedTags.length === 0) return quotes;
  
  return quotes.filter(quote =>
    selectedTags.every(tag => quote.tags.includes(tag))
  );
};

// Export a function to get all unique authors
export const getUniqueAuthors = (): string[] => {
  return Array.from(new Set(quotes.map(quote => quote.sourceInfo.author)));
};

// Export a function to get all quotes by an author
export const getQuotesByAuthor = (authorName: string): Quote[] => {
  return quotes.filter(quote => quote.sourceInfo.author === authorName);
};
