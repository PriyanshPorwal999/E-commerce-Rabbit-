import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

const NewArrivals = () => {
  // 1. Create a reference to a DOM element (like a scrollable div).
  //    Initially it's null, but will point to the actual DOM element after rendering.
  const scrollRef = useRef(null);

  // 2. State to track whether the user is currently dragging (e.g., mouse is down and moving).
  //    Used in scrollable UI for drag-to-scroll behavior.
  const [isDragging, setIsDragging] = useState(false);

  // 3. State to store the initial X (horizontal) position of the mouse when drag starts.
  //    Helps calculate how far the user has dragged.
  const [startX, setStartX] = useState(0);

  // 4. State to store how much the scrollable element has been scrolled to the left.
  //    This helps determine how far to scroll back when dragging.
  const [scrollLeft, setScrollLeft] = useState(false);

  // 5. State to check if the content can scroll more to the right.
  //    Useful for showing/hiding right arrow or disabling scrolling when at the end.
  const [canScrollRight, setCanScrollRight] = useState(true);

  // State to control visibility/enabled status of left scroll button
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

    // Triggered when the user presses mouse down inside scrollable container
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }

   // Triggered as the user moves the mouse while dragging
  const handleMouseMove = (e) => {
    if(!isDragging) return;
    const x =e.pageX - scrollRef.current.offsetLeft;
    const walk = x -startX; // Distance dragged
    scrollRef.current.scrollLeft = scrollLeft - walk; // Perform scrolling
  }

    // Triggered when user releases mouse or leaves container area
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);

  }

    // Programmatic scroll using button click (left/right)
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

    // Calculates whether scroll buttons should be enabled or disabled
  // Update Scroll Buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable > 0);

      // console.log({
      //   scrollLeft: container.scrollLeft,
      //   clientWidth: container.clientWidth,
      //   containerScrollWidth: container.scrollWidth,
      //   offsetLeft: scrollRef.current.offsetLeft,
      // });

      // console.log(rightScrollable);
    }
    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   containerScrollWidth: container.scrollWidth,
    // });

    // console.log(rightScrollable);
  };


  // Set up scroll event listener on mount, clean up on unmount
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600">
          Discover the latest styles straight off the runway, freshly added to
          keep you wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Butttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-[#ea2e0e] text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button

            onClick={() => scroll("right")}
            // disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-[#ea2e0e] text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            ></img>
            <div className="absolute bottom-0 left-0 right-0 bg-yellow-300/2 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
