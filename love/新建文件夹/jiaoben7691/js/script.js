new Vue({
  el: '#app',
  data() {
    return {
      isOpenedTop: false,
      items: [
        {
          img1: "img/1.jpg",
         
          title: "文❤️豪",
          isOpen: false
        },
        {
          img1: "img/2.jpg",
         
          title: "文❤️豪",
          isOpen: false
        },
        {
          img1: "img/3.jpg",
         
          title: "文❤️豪",
          isOpen: false
        },
        {
          img1: "img/4.jpg",
         
          title: "文❤️豪",
          isOpen: false
        },
  
      ]
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach(item => (item.isOpen = false));
      this.isOpenedTop = false;
    }
  }
})