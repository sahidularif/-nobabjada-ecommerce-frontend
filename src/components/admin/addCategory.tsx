import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { category } from '../../utilities/category.type';
import Dropzone from './dropzone';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
const AddCategory = () => {
    const [files, setFiles] = React.useState<File[]>([])
    const [imgURL, setImgURL] = React.useState<string | ArrayBuffer | null>("")

    const handleDrop = React.useCallback((files: File[]) => {
        setFiles(files)
    }, [])

    interface InitialType {
        name: string;
        type: string;
        parent: string;
    }
    const initialValues = {
        name: "",
        type: "",
        parent: "",
    };
    const notify = () => {    
        toast.success("Category successfully added !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          type: 'default',
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };
    const transferFile = (files: File) => {
        const reader = new FileReader()
        if (files) {
            reader.readAsDataURL(files)
            reader.onloadend = () => {
                setImgURL(reader.result)
            }
        }
        else {
            setImgURL("")
        }
    }
    React.useEffect(() => {
        transferFile(files[0])
    }, [files])

    console.log(imgURL)
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required"),

        type: Yup.string().required("Category type is required"),
        parent: Yup.string().required("Parent category is required"),
    });

    const handleFormSubmit = (formValue: InitialType) => {
        let formData = new FormData()
        formData.append('image', files[0])
        formData.append('categoryName', formValue.name)
        formData.append('categoryType', formValue.type)
        formData.append('parentCategory', formValue.parent)

        axios
            .post("https://gleaming-puce-pullover.cyclic.app/product/addCategory", formData)
            .then((response) => {
                notify()
            })
            .catch((err) => {
                console.log(err);
            });
    }
    console.log(imgURL)
    return (
        <div className="admin-wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <h1 className="admin-page-title">Add Category</h1>
                    <hr className="mb-4" />
                    <div className="row g-4 category-section">
                        <div className="col-12 col-md-4">
                            <h3 className="section-title">Image</h3>
                            <div className="section-intro">Upload your category image <a href="help.html">Learn more</a></div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="app-card admin-card-settings shadow-sm p-4 bg-white rounded">
                                <div className="app-card-body">

                                    <Dropzone
                                        handleDrop={handleDrop}
                                        files={files}
                                        setFiles={setFiles} >
                                        <div className="dropzone-body" >

                                            <div className="heading-section text-center">
                                                <h1 className="text-primary"><i className="fad fa-cloud-upload-alt"></i></h1>
                                                <h6 className="text-success">
                                                    <span className="subheading"> Drag & drop photo here</span>
                                                </h6>
                                                <p>(Only *.jpeg and *.png images will be accepted)</p><br />
                                            </div>

                                        </div>
                                    </Dropzone>
                                    {/* {
                                categoryImg ? (
                                    <img src={categoryImg?categoryImg:altImg} alt="" />
                                ):''
                            } */}
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row g-4 category-section">
                        <div className="col-12 col-md-4">
                            <h3 className="section-title">Description</h3>
                            <div className="section-intro">
                                Add your category details and necessary information from here
                                <a href="help.html">Learn more</a></div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="app-card app-card-settings shadow-sm p-4 bg-white rounded">

                                <div className="app-card-body">
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleFormSubmit}
                                    >
                                        <Form className="settings-form login100-form">

                                            <div className="mb-3">
                                                <label htmlFor="setting-input-2" className="form-label">Types</label>
                                                <Field className="form-control" type="text" name="name" placeholder="Category name" />
                                                <ErrorMessage
                                                    name="name"
                                                    component="div"
                                                    className="alert wrap-msg"
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="setting-input-2" className="form-label">Types</label>
                                                <Field className="form-control" name="type" as="select">
                                                    <option selected>Select</option>
                                                    {
                                                        category.category.type.map((type, i) => {
                                                            return (
                                                                <option value={type.value}>{type.name}</option>
                                                            )
                                                        })
                                                    }


                                                </Field>
                                                <ErrorMessage
                                                    name="type"
                                                    component="div"
                                                    className="alert wrap-msg"
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="setting-input-2" className="form-label">Parent category</label>
                                                <Field className="form-control" name="parent" as="select">
                                                    <option selected>Select</option>
                                                    {
                                                        category.category.parent.map((type, i) => {
                                                            return (
                                                                <option value={type.value}>{type.name}</option>
                                                            )
                                                        })
                                                    }
                                                </Field>
                                                <ErrorMessage
                                                    name="parent"
                                                    component="div"
                                                    className="alert wrap-msg"
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-main">Save Changes</button>
                                        </Form>
                                    </Formik>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <footer className="app-footer">
                <div className="container text-center py-3">

                    <small className="copyright">Designed with <span className="sr-only">love</span><i
                        className="fas fa-heart" style={{ color: '#fb866a' }}></i> by <a className="app-link"
                            href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>

                </div>
            </footer> */}

        </div>
    );
};

export default AddCategory;