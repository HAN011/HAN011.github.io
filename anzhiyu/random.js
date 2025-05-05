var posts=["2025/05/05/hello-world/","2025/05/05/hello/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };