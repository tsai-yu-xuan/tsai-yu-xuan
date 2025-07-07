AOS.init(); 
// AOS 動畫

const textElement = document.querySelector(".typing-text");
const fullText = textElement.textContent;
  textElement.textContent = ""; // 先清空內容

gsap.to({}, {
  duration: 3,
  repeat: -1,          // 重複播放
  repeatDelay: 1,      // 每次打完後停一秒再重播
    onUpdate: function () {
      const progress = this.progress();
      const length = Math.floor(progress * fullText.length);
      textElement.textContent = fullText.substring(0, length);
    },
    ease: "none"
  });


      gsap.registerPlugin(ScrollTrigger);
      // 移動圖示，模擬沿著線向下滑動
      gsap.to(".line-icon", {
          y: 900, 
          scrollTrigger: {
            trigger: ".timeline", 
            start: "top 30%",
            end: "bottom 50%",
            scrub: true, 
            // markers: true
          }
        });
      gsap.utils.toArray(".work").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "+=300",
              scrub: 1,
              // markers: true
            }
          }
        );
      });