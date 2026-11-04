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

    async function loadPost() {
        try {
            console.log("Loading...");
       const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
       
       if (response.ok === false) {
        throw new Error("HTTP error");
       }

       console.log(response.ok);
       console.log(response.status);
       const data = await response.json(); 

       console.log(data);
       console.log("Loading complete");
        } catch (error) {
            console.error(error);
        }
    }

    loadPost();
