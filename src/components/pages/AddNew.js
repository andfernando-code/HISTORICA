import React, { useState } from 'react';
import { firestore, storage, ref, uploadBytes, getDownloadURL, collection, addDoc } from '../../Firebase'; 

const AddNew = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !location || !description || !image) {
      alert('All fields are required!');
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
      await addDoc(collection(firestore, 'users'), {
        name,
        location,
        description,
        imageUrl,
      });

      // Clear fields
      setName('');
      setLocation('');
      setDescription('');
      setImage(null);

      alert('Data successfully submitted!');
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNew;
