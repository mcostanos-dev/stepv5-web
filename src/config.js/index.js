import TestImage from "../../public/test-image.jpg";

export const MENU_ITEMS = [
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    name: "Best Sellers",
    href: "/best-seller",
  },

  {
    name: "Catalog",
    href: "/catalog",
  },
  {
    name: "Service",
    href: "/service",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const allProducts = [
  {
    id: 1,
    productName: "STEP TP-202",
    description:
      "Machine that offers reliable performance and versatility. With a sturdy build and user-friendly interface, the TP-202 offers ease of use and precise control. Whether you need it for manufacturing, packaging, or other industrial processes, the TP-202 is a dependable choice that delivers consistent results.",
    images: [
      { id: 1, image: TestImage, imageName: "TestImage-1" },
      { id: 2, image: TestImage, imageName: "TestImage-1" },
      { id: 3, image: TestImage, imageName: "TestImage-1" },
      { id: 4, image: TestImage, imageName: "TestImage-1" },
    ],
    variations: [
      {
        id: 1,
        name: "STEP TP-202CE Semi Auto Strapping Machine",
        price: 2000,
        description:
          "Machine that offers reliable performance and versatility. With a sturdy build and user-friendly interface, the TP-202 offers ease of use and precise control. Whether you need it for manufacturing, packaging, or other industrial processes, the TP-202 is a dependable choice that delivers consistent results.",
        stock: 100,
        discounts: [
          { name: "5%", discount: 5, minimumQuantity: 10 },
          { name: "7%", discount: 7, minimumQuantity: 20 },
          { name: "8%", discount: 8, minimumQuantity: 30 },
          { name: "9%", discount: 9, minimumQuantity: 40 },
          { name: "10%", discount: 10, minimumQuantity: 50 },
        ],
        images: [
          { id: 1, image: TestImage, imageName: "TestImage-1" },
          { id: 2, image: TestImage, imageName: "TestImage-1" },
          { id: 3, image: TestImage, imageName: "TestImage-1" },
          { id: 4, image: TestImage, imageName: "TestImage-1" },
        ],
        options: [
          { id: 1, name: "option 1", additionalPrice: 20 },
          { id: 2, name: "option 2", additionalPrice: 60 },
          { id: 3, name: "option 3", additionalPrice: 70 },
          { id: 4, name: "option 4", additionalPrice: 18 },
        ],
      },
      {
        id: 2,
        name: "STEP TP-202 (Used Machine)",
        price: 1000,
        description:
          "Machine that offers reliable performance and versatility. With a sturdy build and user-friendly interface, the TP-202 offers ease of use and precise control. Whether you need it for manufacturing, packaging, or other industrial processes, the TP-202 is a dependable choice that delivers consistent results.",
        stock: 20,
        discounts: [
          { name: "5%", discount: 5, minimumQuantity: 10 },
          { name: "7%", discount: 7, minimumQuantity: 20 },
          { name: "8%", discount: 8, minimumQuantity: 30 },
          { name: "9%", discount: 9, minimumQuantity: 40 },
          { name: "10%", discount: 10, minimumQuantity: 50 },
        ],
        images: [
          { id: 1, image: TestImage, imageName: "TestImage-1" },
          { id: 2, image: TestImage, imageName: "TestImage-1" },
          { id: 3, image: TestImage, imageName: "TestImage-1" },
          { id: 4, image: TestImage, imageName: "TestImage-1" },
        ],
        options: [
          { id: 1, name: "option 1", additionalPrice: 420 },
          { id: 2, name: "option 2", additionalPrice: 10 },
          { id: 3, name: "option 3", additionalPrice: 17 },
          { id: 4, name: "option 4", additionalPrice: 99 },
        ],
      },
      {
        id: 3,
        name: "STEP TP-202 Used Year 2018",
        price: 3000,
        description:
          "Machine that offers reliable performance and versatility. With a sturdy build and user-friendly interface, the TP-202 offers ease of use and precise control. Whether you need it for manufacturing, packaging, or other industrial processes, the TP-202 is a dependable choice that delivers consistent results.",
        stock: 44,
        discounts: [
          { name: "5%", discount: 5, minimumQuantity: 10 },
          { name: "7%", discount: 7, minimumQuantity: 20 },
          { name: "8%", discount: 8, minimumQuantity: 30 },
          { name: "9%", discount: 9, minimumQuantity: 40 },
          { name: "10%", discount: 10, minimumQuantity: 50 },
        ],
        images: [
          { id: 1, image: TestImage, imageName: "TestImage-1" },
          { id: 2, image: TestImage, imageName: "TestImage-1" },
          { id: 3, image: TestImage, imageName: "TestImage-1" },
          { id: 4, image: TestImage, imageName: "TestImage-1" },
        ],
        options: [
          { id: 1, name: "option 1", additionalPrice: 10 },
          { id: 2, name: "option 2", additionalPrice: 220 },
          { id: 3, name: "option 3", additionalPrice: 110 },
          { id: 4, name: "option 4", additionalPrice: 30 },
        ],
      },
    ],
  },
  {
    id: 2,
    productName: "STEP TP-202 SAMPLE 2",
    description:
      "Machine that offers reliable performance and versatility. With a sturdy build and user-friendly interface, the TP-202 offers ease of use and precise control. Whether you need it for manufacturing, packaging, or other industrial processes, the TP-202 is a dependable choice that delivers consistent results.",
    images: [
      { id: 1, image: TestImage, imageName: "TestImage-1" },
      { id: 2, image: TestImage, imageName: "TestImage-1" },
      { id: 3, image: TestImage, imageName: "TestImage-1" },
      { id: 4, image: TestImage, imageName: "TestImage-1" },
    ],
    variations: [
      {
        id: 1,
        name: "STEP TP-202CE Semi Auto Strapping Machine",
        price: 2000,
        description:
          "Machine that offers reliable performance and versatility. With a sturdy build and user-friendly interface, the TP-202 offers ease of use and precise control. Whether you need it for manufacturing, packaging, or other industrial processes, the TP-202 is a dependable choice that delivers consistent results.",
        stock: 100,
        discounts: [
          { name: "5%", discount: 5, minimumQuantity: 10 },
          { name: "7%", discount: 7, minimumQuantity: 20 },
          { name: "8%", discount: 8, minimumQuantity: 30 },
          { name: "9%", discount: 9, minimumQuantity: 40 },
          { name: "10%", discount: 10, minimumQuantity: 50 },
        ],
        images: [
          { id: 1, image: TestImage, imageName: "TestImage-1" },
          { id: 2, image: TestImage, imageName: "TestImage-1" },
          { id: 3, image: TestImage, imageName: "TestImage-1" },
          { id: 4, image: TestImage, imageName: "TestImage-1" },
        ],
        options: [
          { id: 1, name: "option 1", additionalPrice: 20 },
          { id: 2, name: "option 2", additionalPrice: 60 },
          { id: 3, name: "option 3", additionalPrice: 70 },
          { id: 4, name: "option 4", additionalPrice: 18 },
        ],
      },
      {
        id: 2,
        name: "STEP TP-202 (Used Machine)",
        price: 1000,
        description:
          "Machine that offers reliable performance and versatility. With a sturdy build and user-friendly interface, the TP-202 offers ease of use and precise control. Whether you need it for manufacturing, packaging, or other industrial processes, the TP-202 is a dependable choice that delivers consistent results.",
        stock: 20,
        discounts: [
          { name: "5%", discount: 5, minimumQuantity: 10 },
          { name: "7%", discount: 7, minimumQuantity: 20 },
          { name: "8%", discount: 8, minimumQuantity: 30 },
          { name: "9%", discount: 9, minimumQuantity: 40 },
          { name: "10%", discount: 10, minimumQuantity: 50 },
        ],
        images: [
          { id: 1, image: TestImage, imageName: "TestImage-1" },
          { id: 2, image: TestImage, imageName: "TestImage-1" },
          { id: 3, image: TestImage, imageName: "TestImage-1" },
          { id: 4, image: TestImage, imageName: "TestImage-1" },
        ],
        options: [
          { id: 1, name: "option 1", additionalPrice: 420 },
          { id: 2, name: "option 2", additionalPrice: 10 },
          { id: 3, name: "option 3", additionalPrice: 17 },
          { id: 4, name: "option 4", additionalPrice: 99 },
        ],
      },
      {
        id: 3,
        name: "STEP TP-202 Used Year 2018",
        price: 3000,
        description:
          "Machine that offers reliable performance and versatility. With a sturdy build and user-friendly interface, the TP-202 offers ease of use and precise control. Whether you need it for manufacturing, packaging, or other industrial processes, the TP-202 is a dependable choice that delivers consistent results.",
        stock: 44,
        discounts: [
          { name: "5%", discount: 5, minimumQuantity: 10 },
          { name: "7%", discount: 7, minimumQuantity: 20 },
          { name: "8%", discount: 8, minimumQuantity: 30 },
          { name: "9%", discount: 9, minimumQuantity: 40 },
          { name: "10%", discount: 10, minimumQuantity: 50 },
        ],
        images: [
          { id: 1, image: TestImage, imageName: "TestImage-1" },
          { id: 2, image: TestImage, imageName: "TestImage-1" },
          { id: 3, image: TestImage, imageName: "TestImage-1" },
          { id: 4, image: TestImage, imageName: "TestImage-1" },
        ],
        options: [
          { id: 1, name: "option 1", additionalPrice: 10 },
          { id: 2, name: "option 2", additionalPrice: 220 },
          { id: 3, name: "option 3", additionalPrice: 110 },
          { id: 4, name: "option 4", additionalPrice: 30 },
        ],
      },
    ],
  },
];
