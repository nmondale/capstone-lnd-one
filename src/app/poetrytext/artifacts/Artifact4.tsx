import React, { useState, useMemo } from "react";
import {
  CONTENT_TAGS,
  type ContentTag,
  type Quote,
  getQuotesByTags,
} from "../data/quoteData";

const Artifact4: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<ContentTag[]>([]);

  const filteredQuotes = useMemo(
    () => getQuotesByTags(selectedTags),
    [selectedTags]
  );

  const toggleTag = (tag: ContentTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const QuoteCard: React.FC<{ quote: Quote }> = ({ quote }) => (
    <div className="border rounded-lg mb-4">
      <blockquote className="text-lg p-6 font-serif leading-9">
        "{quote.text}"
      </blockquote>

      <div className="p-6 border-t">
        <div className="flex flex-col text-lg space-y-2">
          <p>
            <i>{quote.sourceInfo.type}:</i>{" "}
            <strong>{quote.sourceInfo.title}</strong>
            {quote.page && <>, page {quote.page}</>}
          </p>

          <p>
            {quote.sourceInfo.author} —{" "}
            {quote.sourceInfo.link && (
              <a
                href={quote.sourceInfo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-bold underline inline-block"
              >
                View Source
              </a>
            )}
          </p>

          <div className="flex flex-wrap gap-2">
            {quote.tags.map((tag) => (
              <span
                key={tag}
                className="px-6 py-1 text-sm border rounded-full bg-main text-alt mt-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quote Collection</h2>
        <p className="mb-6">
          Select one or more tags below to filter quotes by theme. Click a tag
          again to deselect it.
        </p>

        <div className="border rounded-2xl p-6 mb-6 mx-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {CONTENT_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-8 py-2 rounded-full transition-colors border hover:bg-alt hover:text-main
                  ${
                    selectedTags.includes(tag)
                      ? "bg-alt text-main"
                      : " hover:opacity-100"
                  }`}
              >
                {tag}
              </button>
            ))}
            <p className="font-bold mt-4">
              {selectedTags.length === 0
                ? `Showing all quotes (${filteredQuotes.length} Total)`
                : `Showing ${filteredQuotes.length} quote${
                    filteredQuotes.length !== 1 ? "s" : ""
                  } tagged with: ${selectedTags.join(", ")}`}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredQuotes.length === 0 ? (
          <p className="text-center py-8">
            No quotes found with the selected tags. :'(
          </p>
        ) : (
          filteredQuotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))
        )}
      </div>
    </div>
  );
};

export default Artifact4;
