import React from "react";
import directus from "../../lib/directus";
import Head from "next/head";
import BlogCard from "../../components/BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="GymZone Blogs. View blogposts related on tips on staying healthy, Proper nutirition, and more."
        />
        <meta
          name="keywords"
          content="gym, fitness, gym website, gymzone blogs, fitness tips, gym tips, exercise, list of exercises, beginner exercise, beginner workouts"
        />
        <title>GymZone - Blogs</title>
      </Head>
      <section className="container min-h-screen px-4">
        <header className="mb-6">
          <h1 className="text-3xl uppercase md:text-4xl font-black mt-10">Blogs</h1>
        </header>
        <section className="mb-16 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              slug={blog.slug}
              title={blog.title}
              author={blog.author.name}
              dateUpdated={blog.date_updated ? blog.date_updated : blog.date_created}
              excerpt={blog.excerpt}
              thumbnail={blog.thumbnail.id}
              avatar={blog.author.avatar}
              tags={blog.tags}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const res = await directus.items("blogs").readByQuery({
    fields: ["*", "thumbnail.id", "author.*"],
    sort: "-date_updated",
  });

  return {
    props: {
      blogs: res.data,
    },
  };
}

export default Blogs;
