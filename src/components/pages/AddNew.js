import React, { useState } from "react";
import {
  firestore,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  collection,
  addDoc,
} from "../../Firebase";
import "./AddNew.css";
import Footer from "../Footer";

const AddNew = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !location || !description || !image) {
      alert("All fields are required!");
      return;
    }

    try {
      // Create a storage reference
      const storageRef = ref(storage, `images/${image.name}`);
      // Upload the file
      await uploadBytes(storageRef, image);
      // Get the download URL
      const imageUrl = await getDownloadURL(storageRef);

      // Add data to Firestore
      await addDoc(collection(firestore, "users"), {
        name,
        location,
        description,
        imageUrl,
      });

      // Clear fields
      setName("");
      setLocation("");
      setDescription("");
      setImage(null);

      alert("Data successfully submitted!");
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  return (
    <>
      <div className="form-wrap">
        <div className="content-wrap">
          <h5>
            <span>Important <i class="fa-solid fa-circle-exclamation"></i></span><br /><br/>
            Some of our destinations are not marked. So you can help us to set
            those locations in our website. But please consider locations will
            be only marked, if admins approved your inserts!
          </h5>
          <form onSubmit={handleSubmit}>
            <h3>
              Add New Locations <i className="fa-solid fa-location-dot"></i>
            </h3>
            <div className="field">
              <label>Name:</label>
              <input
                placeholder="Location Name"
                className="text"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Location:</label>
              <input
                placeholder="google-map link"
                className="text"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Description:</label>
              <input
                placeholder="Description"
                className="text"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Image:</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="image"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddNew;
