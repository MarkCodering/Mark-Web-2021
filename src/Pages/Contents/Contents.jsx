import React from "react";
import "./Contents.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Contents() {
  const [contents, setContents] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
        _id,
        url
      }
    }
  }`
      )
      .then((data) => setContents(data))
      .catch(console.error);
  }, []);

  if (!contents) return <div>Loading...</div>;

  return (
    <div className="Youtube_background">
      <h1 className="Youtube_title">YouTube Channel</h1>
      <div className="Youtube_player">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/phkzbdGNVd4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <div>
          <h2>{contents.title}</h2>
          <div>
            <img
              src={urlFor(contents.authorImage).width(100).url()}
              alt="Author is Kap"
            />
            <h4>{contents.name}</h4>
          </div>
        </div>
        <img src={urlFor(contents.mainImage).width(200).url()} alt="" />
        <div>
          <BlockContent
            blocks={contents.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}
