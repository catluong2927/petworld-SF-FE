import React, {useEffect, useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";
import "./sign-up.css";
import {Toast} from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {updateImage} from "../redux/userRequest";


function UpdateImage() {
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    const navigate = useNavigate();
    const userResponse = useSelector((state) => state.auth.login?.currentUser);
    const isEdit = useSelector((state) => state.user.image?.isUpdated);
    const [id, setId] = useState({});
    const [token, setToken] = useState({});
    const toast = useRef(null);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState(false);
    const [avatar,setAvatar] = useState('')
    const [newAvatar,setNewAvatar] = useState('')


    useEffect(() => {
        setId(userResponse.userDtoResponse.id);
        setToken(userResponse.token)
        setAvatar(userResponse.userDtoResponse.avatar)
    }, [userResponse]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id && image) {
            await updateImage(id, image, dispatch, navigate, toast, token)
        }

    }

    useEffect(() => {
        if(imageUrl){
            const formData = new FormData();
            formData.append("file", imageUrl);
            formData.append("upload_preset", "kakashi"); // value: YOUR_UPLOAD_PRESET
            axios
                .post("https://api.cloudinary.com/v1_1/dyonmctz8/image/upload", formData) // YOUR_CLOUD_NAME
                .then((response) => {
                    setImage(response.data.secure_url);
                    if(image){
                        setIsLoading(false)
                }})
                .catch((error) => console.log(error));
        }
    },[imageUrl,isLoading]);

    const handleImageChange = async (event) => {
        await setIsLoading(true)
        setImageUrl(event.target.files[0]);
    };
    useEffect(() => {
        if(isEdit !== null){
            setNewAvatar(isEdit);
        }
    }, [isEdit])

    return (
        <>
            <div className="card flex justify-content-center gap-2">
                <Toast ref={toast}/>
            </div>
            <Layout>
                <Breadcrumb pageName="Update Avatar" pageTitle="Update Avatar"/>
                <div className="signup-section pt-120 pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div
                                    className="form-wrapper wow fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay=".2s"
                                >
                                    <div className="form-title">
                                        <h3>Update Avatar</h3>
                                        <div className="section profile">
                                            <div className="row">
                                                <div className="col-xl-4">
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="card">
                                                        <div
                                                            className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                                            {newAvatar?<img src={newAvatar} alt="Profile" className="rounded-circle"/>:<img src={avatar} alt="Profile" className="rounded-circle"/>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <input type="file" onChange={handleImageChange}/>
                                                <br/>
                                                <br/>
                                                { image &&
                                                <button className="btn btn-primary btn-sm"
                                                        type="submit">Upload
                                                </button>}
                                                {(isLoading && !image)? <img className="image-loading" src='/assets/images/preloader.gif'/>:""}
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}


export default UpdateImage;
