export const login = () => {
  fetch('http://localhost:8080/user/login', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(postData)
  }).then((Response) => {
    if (Response.status === 200) {
      return Response.json();
    } else {
      Promise.reject();
    }
  });
}