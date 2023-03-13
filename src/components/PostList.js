import { Link } from "react-router-dom";

import styles from "./PostList.module.css";

const PostList = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={post.id.toString()}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
