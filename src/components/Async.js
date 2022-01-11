import { useEffect, useState } from 'react';

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch(console.log);
  }, []);

  return (
    <div>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
