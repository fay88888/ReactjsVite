<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>Bootstrap Table with Add and Delete Row Feature</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\nbody {\n    color: #404E67;\n    background: #F5F7FA;\n    font-family: 'Open Sans', sans-serif;\n}\n.table-wrapper {\n    width: 700px;\n    margin: 30px auto;\n    background: #fff;\n    padding: 20px;\t\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {\n    padding-bottom: 10px;\n    margin: 0 0 10px;\n}\n.table-title h2 {\n    margin: 6px 0 0;\n    font-size: 22px;\n}\n.table-title .add-new {\n    float: right;\n    height: 30px;\n    font-weight: bold;\n    font-size: 12px;\n    text-shadow: none;\n    min-width: 100px;\n    border-radius: 50px;\n    line-height: 13px;\n}\n.table-title .add-new i {\n    margin-right: 4px;\n}\ntable.table {\n    table-layout: fixed;\n}\ntable.table tr th, table.table tr td {\n    border-color: #e9e9e9;\n}\ntable.table th i {\n    font-size: 13px;\n    margin: 0 5px;\n    cursor: pointer;\n}\ntable.table th:last-child {\n    width: 100px;\n}\ntable.table td a {\n    cursor: pointer;\n    display: inline-block;\n    margin: 0 5px;\n    min-width: 24px;\n}    \ntable.table td a.add {\n    color: #27C46B;\n}\ntable.table td a.edit {\n    color: #FFC107;\n}\ntable.table td a.delete {\n    color: #E34724;\n}\ntable.table td i {\n    font-size: 19px;\n}\ntable.table td a.add i {\n    font-size: 24px;\n    margin-right: -1px;\n    position: relative;\n    top: 3px;\n}    \ntable.table .form-control {\n    height: 32px;\n    line-height: 32px;\n    box-shadow: none;\n    border-radius: 2px;\n}\ntable.table .form-control.error {\n    border-color: #f50000;\n}\ntable.table td .add {\n    display: none;\n}\n"
    }}
  />
  <div className="container-lg">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-8">
              <h2>
                Employee <b>Details</b>
              </h2>
            </div>
            <div className="col-sm-4">
              <button type="button" className="btn btn-info add-new">
                <i className="fa fa-plus" /> Add New
              </button>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Administration</td>
              <td>(171) 555-2222</td>
              <td>
                <a className="add" title="Add" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
                <a className="edit" title="Edit" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
                <a className="delete" title="Delete" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Peter Parker</td>
              <td>Customer Service</td>
              <td>(313) 555-5735</td>
              <td>
                <a className="add" title="Add" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
                <a className="edit" title="Edit" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
                <a className="delete" title="Delete" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td>Fran Wilson</td>
              <td>Human Resources</td>
              <td>(503) 555-9931</td>
              <td>
                <a className="add" title="Add" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
                <a className="edit" title="Edit" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
                <a className="delete" title="Delete" data-toggle="tooltip">
                  <i className="material-icons"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</>
