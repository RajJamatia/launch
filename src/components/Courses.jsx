import React from "react";

function Courses() {

  const scienceCourses = [
    { name: "B.Sc Biotechnology", fee: 40000 },
    { name: "B.Sc Botany", fee: 42000 },
    { name: "B.Sc Computer Science", fee: 41000 }
  ];

  const commerceCourses = [
    { name: "BBA", fee: 30000 },
    { name: "B.Com", fee: 32000 },
    { name: "M.Com", fee: 45000 }
  ];

  const artsCourses = [
    { name: "BA Education", fee: 35000 },
    { name: "BA English", fee: 36000 },
    { name: "BA Psychology", fee: 50000 },
    { name: "BA Religious Studies", fee: 30000 }
  ];

  const renderCourses = (courses) => {
    return courses.map((course, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Course Name: {course.name}</h5>
            <p className="card-text">Course Fee: {course.fee}</p>
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-4">

      {/* Science Section */}
      <h2 className="mb-3">School of Science </h2>
      <div className="row mb-5">
        {renderCourses(scienceCourses)}
      </div>

      {/* Commerce Section */}
      <h2 className="mb-3">School of Commerce</h2>
      <div className="row mb-5">
        {renderCourses(commerceCourses)}
      </div>

      {/* Arts Section */}
      <h2 className="mb-3"> School of Arts and Social Science</h2>
      <div className="row mb-5">
        {renderCourses(artsCourses)}
      </div>

    </div>
  );
}

export default Courses;