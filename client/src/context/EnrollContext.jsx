import { createContext, useContext, useState } from 'react';

const EnrollContext = createContext();

export const useEnroll = () => useContext(EnrollContext);

export const EnrollProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enroll = (course) => {
    if (!enrolledCourses.find(c => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const remove = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(c => c.id !== courseId));
  };

  return (
    <EnrollContext.Provider value={{ enrolledCourses, enroll, remove }}>
      {children}
    </EnrollContext.Provider>
  );
};
