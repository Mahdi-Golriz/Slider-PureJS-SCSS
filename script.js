const sliderData = [
  {
    id: 1,
    title: "First",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisipsum adipisci voluptatem delectus temporibus. Enim doloremque vero temporibus facere quis laboriosam quos. Expedita optio reprehenderit fuga eligendi quae nisi",
    url: "./images/1.jpg",
    alt: "first",
  },
  {
    id: 2,
    title: "Second",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisipsum adipisci voluptatem delectus temporibus. Enim doloremque vero temporibus facere quis laboriosam quos. Expedita optio reprehenderit fuga eligendi quae nisi",
    url: "./images/2.jpg",
    alt: "second",
  },
  {
    id: 3,
    title: "Third",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisipsum adipisci voluptatem delectus temporibus. Enim doloremque vero temporibus facere quis laboriosam quos. Expedita optio reprehenderit fuga eligendi quae nisi",
    url: "./images/3.jpg",
    alt: "third",
  },
  {
    id: 4,
    title: "Fourth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisipsum adipisci voluptatem delectus temporibus. Enim doloremque vero temporibus facere quis laboriosam quos. Expedita optio reprehenderit fuga eligendi quae nisi",
    url: "./images/4.jpg",
    alt: "fourth",
  },
  {
    id: 5,
    title: "Fifth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisipsum adipisci voluptatem delectus temporibus. Enim doloremque vero temporibus facere quis laboriosam quos. Expedita optio reprehenderit fuga eligendi quae nisi",
    url: "./images/5.jpg",
    alt: "fifth",
  },
];

Slider({
  data: sliderData,
  firstActiveIndex: 4,
  intervalTime: 4000,
  width: "100vw",
  height: "60rem",
});
50;
