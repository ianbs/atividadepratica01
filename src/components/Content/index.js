import { useEffect, useState } from "react";
import { ContentContainer } from "./styles";

export const Content = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsResponse = await response.json();
    setPosts(postsResponse);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ContentContainer>
      <h2>Últimas do blog</h2>
      {posts.slice(0, 3).map((post) => (
        <article key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body.slice(0, 100)}</p>
        </article>
      ))}
      <a href="http://localhost:3000/#">Ver tudo</a>
    </ContentContainer>
  );
};
