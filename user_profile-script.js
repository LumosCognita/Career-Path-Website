/* Defining the Courses Numbers */

const courses = document.querySelectorAll('.course');

courses.forEach((course, index) => {
    if (index > 9) {
        course.setAttribute('data-index', `${index + 1}`);
    }
    else {
        course.setAttribute('data-index', `0${index + 1}`);
    }
})

/* Setting the Courses Descriptions Positions */

const coursesDescs = document.querySelectorAll('.courseDescription');

coursesDescs.forEach((courseDesc, index) => {
    if(index % 2 !== 0){
        courseDesc.style.right = "75px";
    }
    
    else {
        courseDesc.style.left = "75px";
    }
});