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

window.onload = () => {
    const answereQuestionsString = localStorage.getItem("questions");
    if (answereQuestionsString === null) {
        alert('حدث خطأ ما في ادخال معلوماتك سوف يتم ارجاعك لصفحة الامتحان القصير')
        const locationPath = window.location.href.split("/");
        locationPath.pop();
        locationPath.push("quiz.html");
        window.location.href = locationPath.join("/");
        return;
    }

    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    
    var requestOptions = {
        method: 'POST',
        body: answereQuestionsString,
        redirect: 'follow',
        headers: headers
    };
    
    fetch("http://localhost:8000/generate_career_path", requestOptions)
        .then(response => response.json())
        .then(data => buildPageFromResponse(data))
        .catch(error => console.log('error', error));


    function buildPageFromResponse(data) {
        console.log({data});
    }
}