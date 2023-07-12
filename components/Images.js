import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { storage } from "@/firebase/config";

export default function Images() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Reference to the images folder inside your Storage bucket
    const imagesRef = ref(storage, "artworks");

    // Fetch the list of images from the folder
    listAll(imagesRef)
      .then((res) => {
        // Get the download URL for each image
        const promises = res.items.map((item) => getDownloadURL(item));

        // Resolve all the promises
        return Promise.all(promises);
      })
      .then((urls) => {
        // Set the image URLs in the state
        setImageUrls(urls.reverse());
      })
      .catch((error) => {
        console.log("Error retrieving image URLs:", error);
      });
  }, []);

  return (
    <div className="">
      <h2>Image Gallery</h2>
      {imageUrls.map((url) => (
        <Image
          key={url}
          src={url}
          alt="Image"
          width={200}
          height={300}
          priority
          className="w-auto h-auto"
        />
      ))}
    </div>
  );
}
