import { FileHandle } from 'fs/promises';
import React, { useState, useRef, ChangeEvent, LegacyRef } from 'react';
// import altImg from '../../images/icons/fb.png';
import { InputFiles } from 'typescript';
import { category } from '../../utilities/category.type';
import Dropzone from './dropzone';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditCategory = () => {
    const { id } = useParams()
    const [files, setFiles] = React.useState<File[]>([])
    const [imgURL, setImgURL] = React.useState<string | ArrayBuffer | null>("")
    const [formField, setFormField] = React.useState<InitialType>({
        _id: "",
        categoryName: "",
        categoryType: "",
        parentCategory: "",
    })
    const handleDrop = React.useCallback((files: File[]) => {
        setFiles(files)
    }, [])

    interface InitialType {
        _id: string;
        categoryName: string;
        categoryType: string;
        parentCategory: string;
    }

    React.useEffect(() => {
        axios.get(`http://localhost:5000/product/categories/${id}`)
            .then((res) => {
                const data = res.data
                urlToFile(data.image)
                setFormField(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const validationSchema = Yup.object({
        categoryName: Yup.string().required("Name is required"),
        categoryType: Yup.string().required("Category type is required"),
        parentCategory: Yup.string().required("Parent category is required"),
    });


    const urlToFile = (url: string) => {
        const filename = url.slice(55)
        fetch(`${url}`)
            .then(async res => {
                const blob = await res.blob();
                const file = new File([blob], filename, { type: blob.type })

                const newFiles = [...files, file]
                setFiles(newFiles)
            })
    }

    const handleFormSubmit = (formValue: InitialType) => {
        let formData = new FormData()
        formData.append('image', files[0])
        formData.append('categoryName', formValue.categoryName)
        formData.append('categoryType', formValue.categoryType)
        formData.append('parentCategory', formValue.parentCategory)

        axios.put(`http://localhost:5000/product/updateCategory/${formField._id}`, formData)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    console.log(files)
    return (
        <div className="admin-wrapper">

            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <h1 className="admin-page-title">Edit Category</h1>
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
                                        initialValues={formField}
                                        validationSchema={validationSchema}
                                        onSubmit={handleFormSubmit}
                                        enableReinitialize={true}
                                    >
                                        <Form className="settings-form login100-form">

                                            <div className="mb-3">
                                                <label htmlFor="setting-input-2" className="form-label">Category name</label>
                                                <Field className="form-control" type="text" name="categoryName" placeholder="Category name" defaultValue={formField.categoryName} />
                                                <ErrorMessage
                                                    name="categoryName"
                                                    component="div"
                                                    className="alert wrap-msg"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="setting-input-2" className="form-label">Types</label>
                                                <Field className="form-control" name="categoryType" as="select">
                                                    <option selected>Select</option>

                                                    {
                                                        category.category.type.map((type, i) => {
                                                            return (
                                                                <option key={i} value={type.value}
                                                                    selected={type.value === formField.categoryType ? true : false}
                                                                >{type.name}</option>
                                                            )
                                                        })
                                                    }
                                                </Field>
                                                <ErrorMessage
                                                    name="categoryType"
                                                    component="div"
                                                    className="alert wrap-msg"
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="setting-input-2" className="form-label">Parent category</label>
                                                <Field className="form-control" name="parentCategory" as="select">
                                                    <option selected>Select</option>
                                                    {
                                                        category.category.parent.map((parent, i) => {
                                                            return (
                                                                <option key={i} value={parent.value}
                                                                    selected={parent.value === formField.parentCategory ? true : false}
                                                                >{parent.name}</option>
                                                            )
                                                        })
                                                    }
                                                </Field>
                                                <ErrorMessage
                                                    name="parentCategory"
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

        </div>
    );
};

export default EditCategory;