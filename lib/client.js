import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

//...
export const client = createClient({
  projectId: "u41798jz",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export const MyImage = ({ImageData, ...restProps}) => {
  const imageProps = useNextSanityImage(client, ImageData);

  return (<Img
    {...imageProps}
    {...restProps}
    placeholder="blur"
    blurDataURL={ImageData?.asset._ref}
  />
  )
}



const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
