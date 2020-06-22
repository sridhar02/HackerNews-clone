import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "../components/Story";
import {
  Globalstyles,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export default function StoriesContainer() {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, [count]);
  return (
    <>
      <Globalstyles />
      <StoriesContainerWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
}
