import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

// Funktion zum Abrufen aller Bilder aus Firebase Storage
async function getAllImages() {
  const storageRef = ref(storage, "images");
  const images = await listAll(storageRef);

  const imageURLs = await Promise.all(
    images.items.map(async (item) => {
      return getDownloadURL(item);
    })
  );

  return imageURLs;
}

export { getAllImages };
