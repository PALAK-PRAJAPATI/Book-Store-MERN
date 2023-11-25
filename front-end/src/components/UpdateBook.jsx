import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBooks() {
  const id = useParams().id;
  const books = {
    bookname:"",
    description:"",
    author:"",
    image:"",
    price:""
  };
  const navigate = useNavigate();
  const [Data, setData] = useState(books);

  const change = (e) => {
    const { name, value } = e.target; //here as we are directly distructuring the fields so no need to write e.target.name and e.target.value seperately, only need to write e.target as common for destructured fields
    setData({ ...Data, [name]: value });
    console.log(Data);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setData(response.data);
        //   console.log(response);
        //   console.log("response: ", response.data.book);
        // response.data.book
      })
      .catch((error) => console.log(error));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:8000/api/update/${id}`, Data)
      .then((res) => {
        toast.success("Book Successfully Updated...",{position:"top-center"});
        navigate("/book");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(Data);
  return (
    <div className="">
      <h3 className="text-center p-3">
        <b> Update Books </b>
      </h3>
      <form onSubmit={submit} style={{ width: "82vw" }}>
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{ minHeight: "91.5vh" }}
        >
          <div className="container p-4">
            <div className="mb-3" style={{ textAlign: "left" }}>
              <label
                for="exampleFormControlInput1"
                className=""
                style={{ fontSize: "large", fontWeight: "bold" }}
              >
                Book Name
              </label>
              <input
                type="text"
                name="bookname"
                value={Data && Data.bookname}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Book Name"
                autoComplete="off"
                onChange={change}
              />
            </div>

            <div className="mb-3" style={{ textAlign: "left" }}>
              <label
                for="exampleFormControlInput1"
                className=""
                style={{ fontSize: "large", fontWeight: "bold" }}
              >
                Author
              </label>
              <input
                type="text"
                name="author"
                value={Data && Data.author}
                onChange={change}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter The Name Of Author"
                autoComplete="off"
              />
            </div>
            <div className="mb-3" style={{ textAlign: "left" }}>
              <label
                for="exampleFormControlInput1"
                className=""
                style={{ fontSize: "large", fontWeight: "bold" }}
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                value={Data && Data.description}
                onChange={change}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter The Description"
                autoComplete="off"
              />
            </div>
            <div className="mb-3" style={{ textAlign: "left" }}>
              <label
                for="exampleFormControlInput1"
                className=""
                style={{ fontSize: "large", fontWeight: "bold" }}
              >
                Image Url
              </label>
              <input
                type="text"
                name="image"
                value={Data && Data.image}
                onChange={change}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter The URL Of The Image"
                autoComplete="off"
              />
            </div>
            <div className="mb-3" style={{ textAlign: "left" }}>
              <label
                for="exampleFormControlInput1"
                className=""
                style={{ fontSize: "large", fontWeight: "bold" }}
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                value={Data && Data.price}
                onChange={change}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter The Price Of Book"
                autoComplete="off"
              />
            </div>
            <div className="btnDiv" style={{ textAlign: "left" }}>
              <button
                className="btn btn-success"
                style={{
                  width: "7vw",
                  fontSize: "larger",
                  fontWeight: "bolder",
                }}
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateBooks;
