import Head from "next/head";
import Image from "next/image";
import React from "react";
import directus from "../../lib/directus";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";

const BlogDetails = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>GymZone - {blogs.title}</title>
        <meta name="description" content={blogs.excerpt} />
      </Head>
      <section>
        <Image
          src={"https://8aw35tgl.directus.app/assets/" + blogs.thumbnail.id}
          width={100}
          height={30}
          className="object-cover"
          layout="responsive"
          quality={100}
          alt={blogs.title}
        />
      </section>
      <section className="container px-4 md:px-24 lg:px-32">
        <header>
          <section className="flex items-center pt-10">
            <Image
              src={"https://8aw35tgl.directus.app/assets/" + blogs.author.avatar}
              width={45}
              height={45}
              alt={blogs.author.name}
            />
            <footer className="flex flex-col pl-2">
              <p className="font-semibold">{blogs.author.name}</p>
              <small className="text-gray-600">Author</small>
            </footer>
          </section>
          <h1 className="font-bold text-3xl pb-1 pt-3">{blogs.title}</h1>
          <small>
            <span className="font-semibold">Posted on:</span> {format(new Date(blogs.date_created), "MMM dd, yyyy")} &bull;{" "}
            <span className="font-semibold">Updated on:</span>{" "}
            {format(new Date(blogs.date_updated || blogs.date_created), "MMM dd, yyyy")}
          </small>
        </header>
        <ReactMarkdown className="py-5 whitespace-pre-wrap">{blogs.body}</ReactMarkdown>

        <p className="pb-10 pt-5">
          Tags:{" "}
          {blogs.tags.map((tag, index) => (
            <span key={tag} className="capitalize">
              {(index ? ", " : "") + tag}
            </span>
          ))}
        </p>
      </section>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await directus.items("blogs").readByQuery({
    filter: { slug: params.slug },
    fields: ["*", "thumbnail.id", "author.*"],
  });

  return {
    props: {
      blogs: res.data[0],
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const res = await directus.items("blogs").readByQuery({
    limit: -1,
    fields: ["slug"],
  });

  return {
    paths: res.data.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: "blocking",
  };
};

export default BlogDetails;
