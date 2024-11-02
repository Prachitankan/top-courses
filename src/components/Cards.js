import React, { useState } from "react";
import Card from "./Card"; // Adjust the path as necessary


const Cards = ({ courses, catogory }) => {
  const [likedCourses, setLikedCourses] = useState([]);
  let allCourses = [];

  const getCourse = () => {
    if (catogory === "All") {
      Object.values(courses).forEach((courseCatogory) => {
        courseCatogory.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else {
      return courses[catogory];
    }
  }


  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div>
          <p>No Data Found</p>
        </div>
      ) : (
        getCourse().map((course) => {
          return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        })
      )}
    </div>
  );
};

export default Cards;
