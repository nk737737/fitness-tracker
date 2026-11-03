const request = fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(request);

    request.then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })
    ;