import React, { useState } from "react";
import styles from "./Editor.module.css";

const BlogEditor = () => {
  const [bannerPreview, setBannerPreview] = useState(null);
  const [titleHeight, setTitleHeight] = useState("15vh");

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerPreview(URL.createObjectURL(file));
    }
  };

  const handleTextareaResize = (event) => {
    event.target.style.height = "15vh";
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <form action="/post" method="post" encType="multipart/form-data" className={styles.container}>
      <input
        id="banner"
        type="file"
        accept="image/*"
        name="photo"
        hidden
        onChange={handleBannerChange}
      />
      <div
        className={styles.pic}
        style={{
          backgroundImage: bannerPreview ? `url('${bannerPreview}')` : "none",
        }}
      >
        <label htmlFor="banner">
          <img src="photo.png" alt="upload_image" className={styles.up} />
        </label>
      </div>
      <div className={styles.blog}>
        <textarea
          className={styles.title}
          placeholder="Blog Title.."
          name="head"
          style={{ height: titleHeight }}
          onKeyDown={handleTextareaResize}
        ></textarea>
        <textarea
          className={styles.title}
          id="b"
          placeholder="Write your blog"
          name="bod"
        ></textarea>
        <input type="submit" className={styles.btn} />
      </div>
    </form>
  );
};

export default BlogEditor;
