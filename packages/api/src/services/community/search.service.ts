import * as DB from "@db";
import { Community } from "@prisma/client";

const createSearchQueryKeywords = (sentence: string) => {
  const query: string[] = [];

  sentence.split(" ").map((word) => {
    query.push(word);
  });

  return query;
};

const searchCommunitiesByName = async (name: string) => {
  const keywords = createSearchQueryKeywords(name);

  const communities: Community[] = [];
  const comm: Community[] = await DB.Community.getAllCommunities();

  keywords.map(async (keyword) => {
    const match: Community[] = [];
    comm.map((c) => {
      if (c.name.toLowerCase().includes(keyword.toLowerCase())) {
        match.push(c);
      }
    });
    communities.push(...match);
  });

  return [...new Set(communities)];
};

export { createSearchQueryKeywords, searchCommunitiesByName };
