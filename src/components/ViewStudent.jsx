import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

function ViewStudent() {
  const [isopenModal, setisopenModal] = useState(false);
  const [isopenViewModal, setisopenViewModal] = useState(false);
  const [isopenEditModal, setisopenEditModal] = useState(false);
  const [student, setstudent] = useState([]);
  const [del, setDel] = useState("");

  const [edit, setedit] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [age, setage] = useState("");
  const [subject, setsubject] = useState("");
  const [marks, setmarks] = useState("");
  const [studentEdit, setstudentEdit] = useState();
  const [viewId, setViewId] = useState("");

  const showStudents = async () => {
    try {
      const url = "http://localhost:3002/getStudent";
      axios.get(url).then((res) => {
        if (res.data.success) {
          setstudent(res.data.student);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async () => {
    try {
      const sendData = {
        studentId: del,
      };

      const url = "http://localhost:3002/deleteStudent";
      axios.post(url, sendData).then((res) => {
        if (res.data.success) {
          closeModal();
          showStudents();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const viewStudent = async () => {
    try {
      console.log(edit)
      const sendData2 = {
        studentId: edit
      }

      const url2 = "http://localhost:3002/getStudentById";
      axios.post(url2, sendData2).then((res) => {
        console.log(res.data)
        if (res.data.success) {
          
          setname(res.data.student.name);
          setemail(res.data.student.email)
          setage(res.data.student.age)
          setsubject(res.data.student.subject)
          setmarks(res.data.student.marks)
        }
      });



     
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(studentEdit)

  const editStudent = async () =>{
    try{

     const sendData = {
        studentId: edit,
        name: name,

        email: email,

        age: age,

        subject: subject,
        marks: marks,
      };

      // setfirst(true);

      const url = "http://localhost:3002/editStudent";
      axios.post(url, sendData).then((res) => {
        if (res.data.success) {
          closeEditModal();
          showStudents();

        }
      });
    } catch (error) {
      console.log(error);
    }

  }


  const viewStudentDetails =() =>{

    console.log(viewId)

    try {
      
      const sendData2 = {
        studentId: viewId
      }

      const url2 = "http://localhost:3002/getStudentById";
      axios.post(url2, sendData2).then((res) => {
        console.log(res.data)
        if (res.data.success) {
          
          setname(res.data.student.name);
          setemail(res.data.student.email)
          setage(res.data.student.age)
          setsubject(res.data.student.subject)
          setmarks(res.data.student.marks)
        }
      });



     
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    showStudents();
  },[]
  );

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setisopenModal(true);
  };
  const openViewModal = () => {
    setisopenViewModal(true);
  };

  const openEditModal = () => {
    setisopenEditModal(true);
  };

  const closeModal = () => {
    setisopenModal(false);
  };

  const closeEditModal = () => {
    setisopenEditModal(false);
  };
  const closeViewModal = () => {
    setisopenViewModal(false);
  };

  return (
    <>
      <div className="container-fluid">
        <table className="table">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Subject</th>
              <th scope="col">Marks</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {student?.map((row) => (
              <tr>
                <th scope="row">1</th>
                <td>{row?.name}</td>
                <td>{row?.email}</td>
                <td>{row?.age}</td>
                <td>{row?.subject}</td>
                <td>{row?.marks}</td>
                <td>

                <button
                    className="btn btn-info "
                    style={{
                      width: "60px",
                      marginRight: "2px",
                      textAlign: "center",
                    }}
                    onClick={() => {
                      setViewId(row._id);
                      openViewModal();
                      
                      viewStudentDetails();
                    }}
                  >
                    {" "}
                    View
                  </button>

                  <Modal
                    isOpen={isopenViewModal}
                    style={customStyles}
                    onRequestClose={closeViewModal}
                    contentLabel="Example Modal"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Student Details</h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={closeViewModal}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Name: {name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Email: {email}</h6>
    <h6 class="card-subtitle mb-2 text-muted">age: {age}</h6>
    <h6 class="card-subtitle mb-2 text-muted">subject: {subject}</h6>
    <h6 class="card-subtitle mb-2 text-muted">marks: {marks}</h6>
    
  </div>
</div>
                       
                      </div>
                    </div>
                  </Modal>

                  <button
                    className="btn btn-success "
                    style={{
                      width: "60px",
                      marginRight: "2px",
                      textAlign: "center",
                    }}
                    onClick={() => {
                     setedit(row._id);
                      openEditModal();
                      
                      viewStudent()
                    }}
                  >
                    {" "}
                    Edit
                  </button>

                  <Modal
                    isOpen={isopenEditModal}
                    onRequestClose={closeEditModal}
                    contentLabel="Example Modal"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Edit from</h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={closeEditModal}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div
                            className="container-fluid "
                            style={{ width: "50%" }}
                          >
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">age</label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setage(e.target.value)}
                              />
                            </div>

                           
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                subject
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="subject"
                                value={subject}
                                onChange={(e) => setsubject(e.target.value)}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Marks
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="marks"
                                value={marks}
                                onChange={(e) => setmarks(e.target.value)}
                              />
                            </div>
                            <br />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-primary" onClick={editStudent}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  <button
                    className="btn btn-danger"
                    style={{ width: "70px", textAlign: "center" }}
                    onClick={() => {
                      openModal();
                      setDel(row._id);
                    }}
                  >
                    {" "}
                    Delete
                  </button>

                  <Modal
                    isOpen={isopenModal}
                    style={customStyles}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Confirm Delete?</h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>Are you sure you want to delete this</p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={deleteStudent}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewStudent;
