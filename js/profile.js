
// Function to open the profile popup
function showProfilePopup(author) {
  const container = document.querySelector("#profile-popup");
  const profileName = document.querySelector("#username-pf");
  const postCount = document.querySelector("#post-count");
  const likesPerPost = document.querySelector("#likes-per-post");
  const profilePosts = document.querySelector("#profile-posts");

  const authorPosts = posts.filter((post) => post.author === author);

  const totalLikes = authorPosts.reduce((sum, post) => sum + parseInt(post.likes, 10), 0);
  const avgLikesPerPost = (totalLikes / authorPosts.length || 0).toFixed(2);

  profileName.textContent = author;
  postCount.textContent = authorPosts.length;
  likesPerPost.textContent = formatLikes(avgLikesPerPost);

  profilePosts.innerHTML = "";
  authorPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "profile-post-item";
    postElement.innerHTML = `
      <p class="post-author">${post.author}</p>
      <p class="post-date">${post.date}</p>
      <p class="post-content">${highlightHashtagsInText(post.content)}</p>
      <div class="post-actions">
        <span class="like-btn">${formatLikes(post.likes)} Like</span>
        <span class="share-btn">Share</span>
      </div>
    `;
    profilePosts.appendChild(postElement);
  });

  container.style.display = "block";
}

// Function to close the profile popup
function closeProfilePopup() {
  document.querySelector("#profile-popup").style.display = "none";
}