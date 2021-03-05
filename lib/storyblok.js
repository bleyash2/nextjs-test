import StoryblokClient from "storyblok-js-client";

const storyblockAccessToken = process.env.STORYBLOK_ACCESS;

const Storyblok = new StoryblokClient({
  accessToken: storyblockAccessToken,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;
