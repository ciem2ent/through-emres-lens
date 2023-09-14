import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

async function getAllImages() {
    const storageRef = ref(storage, "/");
    try {
        const images = await listAll(storageRef);
        const imageURLs = await Promise.all(
            images.items.map(async (item) => {
                return getDownloadURL(item);
            })
        );
        return imageURLs;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
}


export { getAllImages };
