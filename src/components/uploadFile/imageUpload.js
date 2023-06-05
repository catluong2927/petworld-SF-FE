// import { useState } from "react";
// import axios from "axios";
//
//
// const CloudinaryUploader = () => {
//     const [image, setImage] = useState(null);
//     const [imageUrl, setImageUrl] = useState("");
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("file", image);
//         formData.append("upload_preset", "UserImage"); // value: YOUR_UPLOAD_PRESET
//
//         axios
//             .post("https://api.cloudinary.com/v1_1/dr3rwgzpl/image/upload", formData) // YOUR_CLOUD_NAME
//             .then((response) => {
//                 setImageUrl(response.data.secure_url); //
//                 console.log(response);
//             })
//             .catch((error) => console.log(error));
//     };
//
//     const handleImageChange = (event) => {
//         setImage(event.target.files[0]);
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" onChange={handleImageChange}/>
//                 <br/>
//                 <br/>
//                 <button className="btn btn-primary btn-sm"
//                         type="submit">Upload</button>
//             </form>
//             {imageUrl && <img src={imageUrl} alt="Uploaded" />}
//         </div>
//     );
// };
//
// export default CloudinaryUploader;
