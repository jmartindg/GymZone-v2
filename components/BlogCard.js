import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { format } from "date-fns";

const BlogCard = ({ title, slug, author, dateUpdated, excerpt, thumbnail = "/placeholder-image.jpg", avatar, tags }) => {
  return (
    <article className="border">
      <header>
        <Image
          src={"https://8aw35tgl.directus.app/assets/" + thumbnail}
          width={120}
          height={80}
          className="object-cover"
          layout="responsive"
          alt="Blog"
        />
      </header>
      <section className="p-5">
        <div className="flex items-center space-x-1">
          {tags.map((tag) => (
            <span key={tag} className="uppercase text-[10px] bg-secondary text-gray-50 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-lg md:text-xl text-secondary font-bold py-3">{title}</h2>
        <div className="flex items-center space-x-1">
          <Image src={"https://8aw35tgl.directus.app/assets/" + avatar} width={20} height={20} alt={author} />
          <small>
            {author} &bull; {format(new Date(dateUpdated), "MMM dd, yyyy")}
          </small>
        </div>
        <p className="text-sm py-3 text-gray-800 text-ellipsis">{excerpt}</p>
        <Link href={`/blogs/${slug}`} className="self-end">
          <a className="bg-primary hover:bg-primaryHover transition px-4 py-2 text-sm inline-flex items-center">
            Read more <BiChevronRight className="ml-1" />
          </a>
        </Link>
      </section>
    </article>
  );
};

export default BlogCard;
