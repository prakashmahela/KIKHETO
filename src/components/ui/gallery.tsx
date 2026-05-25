import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";
import { Button } from "./button";

type Direction = "left" | "right";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // First make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    // Then start the photo animations after a short delay
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (animationDelay + 0.4) * 1000
    );

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  // Premium narrative photography capturing landscape, leadership, and public administration
  const photos = [
    {
      id: 1,
      order: 0,
      x: "-320px",
      y: "15px",
      mobileX: "-105px",
      mobileY: "10px",
      zIndex: 50,
      direction: "left" as Direction,
      src: "https://i.ibb.co/SX24594W/download-41.jpg",
      alt: "Nagaland Leadership and Public Administration Session",
    },
    {
      id: 2,
      order: 1,
      x: "-160px",
      y: "32px",
      mobileX: "-52px",
      mobileY: "22px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "https://i.ibb.co/Z5VXhfr/download-40.jpg",
      alt: "Kikheto Chishi with Public Officials & Administrators",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      mobileX: "0px",
      mobileY: "5px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "https://i.ibb.co/8nhrrjSD/download-39.jpg",
      alt: "State Ceremony & Distinguished Service Event",
    },
    {
      id: 4,
      order: 3,
      x: "160px",
      y: "22px",
      mobileX: "52px",
      mobileY: "14px",
      zIndex: 20,
      direction: "right" as Direction,
      src: "https://i.ibb.co/tTGMzs7f/download-38.jpg",
      alt: "Community Dialogue, Civic Engagement & Projects",
    },
    {
      id: 5,
      order: 4,
      x: "320px",
      y: "44px",
      mobileX: "105px",
      mobileY: "28px",
      zIndex: 10,
      direction: "left" as Direction,
      src: "https://i.ibb.co/v6MWFZVL/maxresdefault.jpg",
      alt: "Public Address and Developmental Vision Speech",
    },
  ];

  return (
    <div className="mt-14 sm:mt-28 relative">
      <div className="absolute inset-0 max-md:hidden top-[120px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)]"></div>
      
      <p className="lg:text-sm my-2 text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#807568]">
        A Journey Through Visual Stories
      </p>
      
      <h3 className="z-20 mx-auto max-w-2xl justify-center bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 bg-clip-text py-1 sm:py-3 text-center text-2xl font-black tracking-tight text-transparent sm:text-4xl md:text-6xl">
        Welcome to My <span className="text-amber-700"> Stories</span>
      </h3>
      
      {/* Decorative center gold highlight ribbon banner */}
      <div className="mx-auto w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6 sm:mb-10" />

      <p className="mx-auto max-w-lg text-center text-[11px] sm:text-[13px] text-stone-500 font-medium leading-[1.6] mb-8 sm:mb-12 px-4">
        Interact by picking up, dragging, or hovering over each interactive digital keepsake. Relive the defining steps, landscape vistas, and public milestones.
      </p>

      <div className="relative mb-14 sm:mb-24 h-[180px] sm:h-[350px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className={`relative ${isMobile ? "h-[120px] w-[120px]" : "h-[220px] w-[220px]"}`}>
              {/* Render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{
                    x: isMobile ? photo.mobileX : photo.x,
                    y: isMobile ? photo.mobileY : photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={isMobile ? 120 : 220}
                    height={isMobile ? 120 : 220}
                    src={photo.src}
                    alt={photo.alt}
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>


    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-stone-300/60 bg-white p-3 shadow-[0_15px_35px_-5px_rgba(21,18,15,0.12)]">
        {/* Aspect Photo container with standard img loading */}
        <div className="relative w-full h-[90%] overflow-hidden rounded-2xl bg-stone-100">
          <motion.img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 pointer-events-none"
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            draggable={false}
          />
        </div>
        
        {/* Small artistic elegant polarization footer plate text space */}
        <div className="h-[10%] flex items-center justify-center pt-1.5 pb-0.5 select-none">
          <span className="font-sans text-[9px] font-bold text-[#837665] tracking-[0.08em] truncate max-w-[180px]">
            {alt}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
