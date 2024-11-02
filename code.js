

const logo = document.getElementById("logo");
const dropdown = document.getElementById("dropdownButton");

logo.addEventListener("click", function () {
    // Toggle the dropdown menu visibility
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

async function loadPosts() {
    try {
        //const postsFile = await fetch("https://api.jsonbin.io/v3/b/6723d61ead19ca34f8c1c5ea");
        const postsFile = await fetch("jsonfile.json")

        const postsJson = await postsFile.json();
        const posts = postsJson.record || postsJson;
        const postsContainer = document.getElementById('posts');

        posts.forEach(post => {
            const onePost = document.createElement('div');
            onePost.classList.add('post');
            const postTop = document.createElement('div');
            postTop.classList.add('post-top');
            postTop.innerHTML = `<div class="author-info"><img src="${post.pfp}" alt="profile picture"><p>${post.author}</p></div> <p>${post.date}</p>`;
            onePost.appendChild(postTop);

            const postContent = document.createElement('div');
            postContent.classList.add('post-content');

            post.content.forEach(elem => {
                if (elem.type == 'text') {
                    const elemContent = document.createElement('p');
                    elemContent.textContent = elem.text;
                    postContent.appendChild(elemContent);
                } else if (elem.type == 'image') {
                    const elemContent = document.createElement('img');
                    elemContent.src = elem.src;
                    elemContent.alt = elem.alt;
                    postContent.appendChild(elemContent);
                } else if (elem.type == 'ulist') {
                    const elemContent = document.createElement('ul');
                    elem.li.forEach(li => {
                        const newLi = document.createElement('li');
                        newLi.textContent = li;
                        elemContent.appendChild(newLi);
                    })                    
                    postContent.appendChild(elemContent);
                } else if (elem.type == 'table') {
                    const elemContent = document.createElement('table');

                    const headerTr = document.createElement('tr');
                    elem.trheader.forEach(cell => {
                        const newTh = document.createElement('th');
                        newTh.textContent = cell;
                        headerTr.appendChild(newTh);
                    })

                    elemContent.appendChild(headerTr);
                    
                    elem.tr.forEach(row => {
                        const newTr = document.createElement('tr');
                        
                        row.forEach(cell => {
                            const newTd = document.createElement('td');
                            newTd.textContent = cell;
                            newTr.appendChild(newTd);
                        })
                        elemContent.appendChild(newTr);
                    })

                    postContent.appendChild(elemContent);
                } else if (elem.type == 'link') {
                    const elemContent = document.createElement('a');
                    elemContent.textContent = elem.text;
                    elemContent.href = elem.href;
                    elemContent.target = "_blank";
                    postContent.appendChild(elemContent);
                }
            })

            onePost.appendChild(postContent);

            const postBottom = document.createElement('div');
            postBottom.classList.add('post-bottom');
            postBottom.innerHTML = `<a href="#"><img src="https://i.imgur.com/U1yIDzJ.jpeg" alt="like" class="like-button"></a>`;
            onePost.appendChild(postBottom);

            postsContainer.appendChild(onePost);
        })
    } catch (e) {
        console.log(e);
        console.log('failed!!!')
    }
    return posts;
}

document.addEventListener("DOMContentLoaded", loadPosts);