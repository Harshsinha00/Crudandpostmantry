function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lastActivityTime = new Date().toISOString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost(post) {
  return new Promise((resolve) => {
    
    setTimeout(() => {
      resolve(post);
    }, 1000);
  });
}

function handlePostCreation(post) {
  Promise.all([createPost(post), updateLastUserActivityTime()])
    .then(([createdPost, lastActivityTime]) => {
      console.log('All promises resolved');
      console.log('Created Post:', createdPost);
      console.log('Last Activity Time:', lastActivityTime);

      return deletePost(createdPost);
    })
    .then((deletedPost) => {
      console.log('Post deleted:', deletedPost);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}


const post = {
  title: 'New Post',
  content: 'Newpost',
};

handlePostCreation(post);
