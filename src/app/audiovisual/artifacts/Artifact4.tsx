import React from "react";

const Artifact4: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">
        What do you see, what do you hear?
      </h2>
      <p className="text-sm mb-10">
        The container below is an interactive space where you can type whatever
        you would like about your audiovisual experience at either the physical
        or digital Lock and Dam. The container is an embedded iframe from{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="https://www.yourworldoftext.com"
        >
          Your World of Text
        </a>
        . <i>There are no rules, just type what you want !</i>
      </p>
      <div className="rounded-xl border border-alt overflow-hidden">
        <iframe
          src="https://www.yourworldoftext.com/~babyvomit/lockanddamone"
          className="w-full h-[calc(100vh-20rem)]"
          title="Your World of Text Interactive Space"
        />
      </div>
    </div>
  );
};

export default Artifact4;
