import React, { useState } from "react";
import Modal from "react-modal";

function ViewStudent() {
  const [isopenModal, setisopenModal] = useState(false);
  const [isopenEditModal, setisopenEditModal] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const openModal = () => {
    setisopenModal(true);
  };

  const openEditModal = () => {
    setisopenEditModal(true);
  };

  const closeModal = () => {
    setisopenModal(false);
  }

  const closeEditModal = () => {
    setisopenEditModal(false);
  }

  return (
    <>
      <div className="container-fluid">
        <table className="table">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Subject</th>
              <th scope="col">Marks</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
              <button
                  className="btn btn-success "
                  style={{
                    width: "60px",
                    marginRight: "2px",
                    textAlign: "center",
                  }}
                  onClick={openEditModal}
                >
                  {" "}
                  Edit
                </button>

                <Modal isOpen={isopenEditModal}    onRequestClose={closeEditModal} contentLabel="Example Modal">
                  
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
                      <div className='container-fluid ' style={{width: "50%"}}>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">age</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Age" />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <br />
  
  </div>
                      </div>
                      <div className="modal-footer">
                       
                      <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
               
              </Modal>
                <button
                  className="btn btn-danger"
                  style={{ width: "70px", textAlign: "center" }}
                  onClick={openModal}
                >
                  {" "}
                  Delete
                </button>

                <Modal isOpen={isopenModal}  style={customStyles}  onRequestClose={closeModal} contentLabel="Example Modal">
                  
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
                         
                          <button type="button" className="btn btn-primary">
                           Delete
                          </button>
                        </div>
                      </div>
                    </div>
                 
                </Modal>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>
              <button
                  className="btn btn-success "
                  style={{
                    width: "60px",
                    marginRight: "2px",
                    textAlign: "center",
                  }}
                  onClick={openEditModal}
                >
                  {" "}
                  Edit
                </button>

                <Modal isOpen={isopenEditModal}    onRequestClose={closeEditModal} contentLabel="Example Modal">
                  
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
                      <div className='container-fluid ' style={{width: "50%"}}>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">age</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Age" />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <br />
  
  </div>
                      </div>
                      <div className="modal-footer">
                       
                      <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
               
              </Modal>
                <button
                  className="btn btn-danger"
                  style={{ width: "70px", textAlign: "center" }}
                  onClick={openModal}
                >
                  {" "}
                  Delete
                </button>

                <Modal isOpen={isopenModal}  style={customStyles}  onRequestClose={closeModal} contentLabel="Example Modal">
                  
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
                         
                          <button type="button" className="btn btn-primary">
                           Delete
                          </button>
                        </div>
                      </div>
                    </div>
                 
                </Modal>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-success "
                  style={{
                    width: "60px",
                    marginRight: "2px",
                    textAlign: "center",
                  }}
                  onClick={openEditModal}
                >
                  {" "}
                  Edit
                </button>

                <Modal isOpen={isopenEditModal}    onRequestClose={closeEditModal} contentLabel="Example Modal">
                  
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
                      <div className='container-fluid ' style={{width: "50%"}}>
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">age</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Age" />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <br />
  
  </div>
                      </div>
                      <div className="modal-footer">
                       
                      <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
               
              </Modal>

                <button
                  className="btn btn-danger"
                  style={{ width: "70px", textAlign: "center" }}
                  onClick={openModal}
                >
                  {" "}
                  Delete
                </button>

                <Modal isOpen={isopenModal}  style={customStyles}  onRequestClose={closeModal} contentLabel="Example Modal">
                  
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
                         
                          <button type="button" className="btn btn-primary">
                           Delete
                          </button>
                        </div>
                      </div>
                    </div>
                 
                </Modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewStudent;
