import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        id:1,
        date: "Oct 31, 2024",
        author: "Author Authorson",
        pfp: "https://i.imgur.com/njXiRGS.jpeg",
        content: [
          { type: "text", text: "We got some awesome news for you!" },
          { type: "image", src: "https://i.imgur.com/vxRIy9B.png", alt: "Wildcat" },
          { type: "link", text: "Read about wild cats", href: "https://en.wikipedia.org/wiki/European_wildcat" },
        ],
      },
        ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
