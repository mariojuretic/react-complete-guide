import styles from "./PostItem.module.css";

const PostItem = ({ post }) => {
  return (
    <article className={styles.item}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
};

export default PostItem;
