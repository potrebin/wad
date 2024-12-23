import { createStore } from 'vuex'

const savedPosts = JSON.parse(localStorage.getItem('posts')) || [
  {
    date: "Oct 31, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "text",
        text: "We got some awesome news for you!"
      },
      {
        type: "text",
        text: "Nullam ullamcorper nulla eget enim placerat, vel vulputate sem aliquam. Aliquam blandit tortor ac ante vestibulum lacinia. Maecenas vel risus varius, maximus ex tristique, euismod enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      },
      {
        type: "text",
        text: "Praesent imperdiet et odio quis viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id laoreet lectus. Donec eu purus molestie, vulputate nibh sit amet, tempus diam. Vivamus viverra vitae ligula sit amet facilisis. Proin nulla est, pharetra sit amet justo sed, malesuada commodo metus. Mauris ac diam lectus. Nam lacinia fermentum mi, vitae sodales ex rutrum nec. In hac habitasse platea dictumst."
      },
      {
        type: "image",
        src: "https://i.imgur.com/vxRIy9B.png",
        alt: "Wildcat"
      },
      {
        type: "link",
        text: "Read about wild cats",
        href: "https://en.wikipedia.org/wiki/European_wildcat"
      }
    ]
  },
  {
    date: "Oct 30, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "text",
        text: "Aliquam eget dignissim nulla. Sed scelerisque sit amet lorem quis fringilla. Ut lacus purus, laoreet a malesuada sed, malesuada ac dolor. Pellentesque elementum diam ac urna viverra, in commodo dolor iaculis."
      },
      {
        type: "text",
        text: "Praesent et elit porta, bibendum ante non, mollis nisi. Curabitur vel dui justo. Nam dignissim dui vel tellus finibus, eget pretium turpis pulvinar. Nulla ut elementum purus, sed fermentum nisi. Suspendisse interdum dictum orci vel pulvinar."
      },
      {
        type: "table",
        trheader: [
          "Country",
          "Population",
          "% of world"
        ],
        tr: [
          [
            "China",
            "1,409,670,000",
            "17.3%"
          ],
          [
            "India",
            "1,404,910,000",
            "17.3%"
          ],
          [
            "United States",
            "335,893,238",
            "4.1%"
          ],
          [
            "Indonesia",
            "282,477,584",
            "3.5%"
          ],
          [
            "Pakistan",
            "241,499,431",
            "3.0%"
          ]
        ]
      },
      {
        type: "link",
        text: "See the full table here",
        href: "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population"
      }
    ]
  },
  {
    date: "Oct 29, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "image",
        src: "https://i.imgur.com/mhmwjQ7.jpeg",
        alt: "Tartu"
      },
      {
        type: "text",
        text: "Here are some reasons why Tartu is awesome:"
      },
      {
        type: "ulist",
        li: [
          "It is awesome",
          "It is awesome"
        ]
      }
    ]
  },
  {
    date: "Oct 28, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "text",
        text: "Aenean ornare faucibus nibh, vitae mattis ex elementum vel. Pellentesque felis ex, feugiat ut metus vitae, tempus iaculis metus. Morbi fermentum at diam eu luctus. Maecenas eu nulla ac erat convallis vulputate non vel eros. Phasellus metus orci, lobortis a libero et, mollis efficitur eros."
      },
      {
        type: "text",
        text: "In quis turpis ac eros sagittis hendrerit. Fusce ultrices sem elit, in gravida est congue ut. Nunc sed enim feugiat ipsum auctor fringilla et id odio. Duis sagittis eros et posuere sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget risus a sapien tempus porta. Cras bibendum justo at augue rutrum aliquet. Morbi ipsum magna, pretium non lobortis eget, tincidunt sed dolor. Nullam laoreet erat convallis dui blandit condimentum. Praesent varius tincidunt enim nec rhoncus. Quisque ut metus mauris."
      },
      {
        type: "image",
        src: "https://i.imgur.com/DX1sbnc.png",
        alt: "Javascript code snippet"
      },
      {
        type: "text",
        text: "It is extremely interesting so I recommend you to read more:"
      },
      {
        type: "link",
        text: "JavaScript Wikipedia",
        href: "https://en.wikipedia.org/wiki/JavaScript"
      }
    ]
  },
  {
    date: "Oct 27, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "text",
        text: "I'd like to share something that might be of interest to you!"
      },
      {
        type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis justo, posuere eu neque non, tincidunt faucibus tortor. Sed tristique ex ligula, vel finibus leo porttitor quis. Curabitur egestas blandit ex, quis tincidunt massa lobortis quis. Cras enim elit, hendrerit eu odio sed, eleifend tincidunt ligula. Aliquam id risus tristique, vulputate ex quis, aliquet velit. Nullam malesuada ligula libero, in facilisis nisl posuere et. Pellentesque augue elit, laoreet non varius a, tempor vel nibh. Curabitur eget mattis diam. Praesent augue mauris, elementum consectetur auctor id, ullamcorper sed metus. Sed ut dignissim nulla, et auctor est. Donec tristique leo sit amet congue placerat. Praesent nisl neque, rhoncus non ex luctus, hendrerit dapibus nisl. Nunc dapibus mauris lacus, eu semper tellus porta nec. Nulla facilisi. Aliquam tristique diam enim, eget porta mi eleifend eget. Sed eu vehicula dolor, sit amet congue magna."
      },
      {
        type: "text",
        text: "I hope you enjoyed this post."
      }
    ]
  },
  {
    date: "Oct 3, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "image",
        src: "https://i.imgur.com/gN0EIpL.jpeg",
        alt: "University of Tartu"
      },
      {
        type: "text",
        text: "Tartu 2024"
      }
    ]
  },
  {
    date: "Oct 2, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla felis id tellus euismod, ut tempus sem volutpat."
      },
      {
        type: "text",
        text: "Nullam eget luctus lorem, sed fermentum orci."
      }
    ]
  },
  {
    date: "Oct 1, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "image",
        src: "https://i.imgur.com/mhmwjQ7.jpeg",
        alt: "Tartu"
      },
      {
        type: "text",
        text: "Tartu"
      },
      {
        type: "text",
        text: "Morbi vitae magna et turpis gravida efficitur. Praesent porttitor mauris nec nisl rutrum blandit."
      },
      {
        type: "text",
        text: "Consequat nisl volutpat felis varius, vitae placerat sapien pulvinar. Sed dolor sapien, faucibus a lobortis in, condimentum rutrum lectus. Curabitur eu tempus nunc. Proin ultricies vestibulum consectetur. Suspendisse ut cursus sapien. Etiam tristique ut nunc sed auctor."
      },
      {
        type: "text",
        text: "Where these images came from:"
      },
      {
        type: "link",
        text: "Wikipedia",
        href: "https://en.wikipedia.org/wiki/Tartu"
      }
    ]
  },
  {
    date: "Sept 30, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "text",
        text: "Found this fascinating table yesterday, so excited to share it!"
      },
      {
        type: "table",
        trheader: [
          "",
          "a",
          "b",
          "c"
        ],
        tr: [
          [
            "Something 1",
            "1",
            "2",
            "3"
          ],
          [
            "Something 2",
            "4",
            "5",
            ""
          ]
        ]
      }
    ]
  },
  {
    date: "Sept 29, 2024",
    author: "Author Authorson",
    pfp: "https://i.imgur.com/njXiRGS.jpeg",
    likes: 0,
    content: [
      {
        type: "text",
        text: "Here are some exciting facts about Tartu."
      },
      {
        type: "ulist",
        li: [
          "Fact 1",
          "Fact 2",
          "Fact 3"
        ]
      },
      {
        type: "link",
        text: "Find out more",
        href: "https://en.wikipedia.org/wiki/Tartu"
      }
    ]
  }
];

export default createStore({
  state: {
    posts: savedPosts,
  },
  getters: {
    allPosts: (state) => state.posts,
    getPostById: (state) => (id) => state.posts[id],
  },
  mutations: {
    incrementLikes(state, postId) {
      const post = state.posts[postId];
      if (post) {
        post.likes++;
        localStorage.setItem('posts', JSON.stringify(state.posts));
      }
    },
    resetLikes(state, postId) {
      const post = state.posts[postId];
      if (post) {
        post.likes = 0;
        localStorage.setItem('posts', JSON.stringify(state.posts));
      } 
    },
    resetAllLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
  },
  actions: {
    likePost({ commit }, postId) {
      commit('incrementLikes', postId);
    },
  },
  modules: {
  }
})