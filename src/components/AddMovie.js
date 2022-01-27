import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

function AddMovie() {
  let navigate = useNavigate();

  const url = "https://61efd16c732d93001778e5fa.mockapi.io/Movies/";

  let handleSubmit = async (values) => {
    try {
      let response = await axios.post(url, values);
      console.log(response);
      if (response.status === 201) navigate("/all-movielist");
      else alert("Internal server error!");
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      moviename: "",
      producername: "",
      imdbrating: "",
      review: "",
    },
    validationSchema: yup.object({
      moviename: yup.string().required("Required"),
      producername: yup.string().required("Required"),
      imdbrating: yup
        .string()
        .matches(/^\d{2}$/, "Ratig is not valid")
        .required("Required"),
      review: yup.string().default("Good"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  return (
    <div>
      <h1>Add Movies</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="moviename">Movie Name</label>
          <input
            id="moviename"
            name="moviename"
            type="text"
            className="form-control"
            placeholder="Enter Movie Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.moviename}
          />
          {formik.touched.moviename && formik.errors.moviename ? (
            <div style={{ color: "red" }}>{formik.errors.moviename}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label for="producername">Procucer Name</label>
          <input
            id="producername"
            name="producername"
            type="text"
            className="form-control"
            placeholder="Enter Producer Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.producername}
          />
          {formik.touched.producername && formik.errors.producername ? (
            <div style={{ color: "red" }}>{formik.errors.producername}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label for="imdbrating">IMDB Rating</label>
          <input
            id="imdbrating"
            name="imdbrating"
            type="text"
            className="form-control"
            placeholder="Enter IMDB Rating"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.imdbrating}
          />
          <label>Note: Rate will be out of /10</label>
          {formik.touched.imdbrating && formik.errors.imdbrating ? (
            <div style={{ color: "red" }}>{formik.errors.imdbrating}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label for="review">Review</label>
          <input
            id="review"
            name="review"
            type="text"
            className="form-control border-color-green"
            placeholder="Enter Review"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.review}
          />
          {formik.touched.review && formik.errors.review ? (
            <div style={{ color: "red" }}>{formik.errors.review}</div>
          ) : null}
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;
