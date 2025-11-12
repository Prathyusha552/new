document.addEventListener("DOMContentLoaded", function () {
  const altTexts = {
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/12/bolg-image-01-uai-258x145.jpg":
      "A classroom of young students in Sanskriti School",
    "https://www.sanskritischools.com/kids/img/yt.png":
      "A cyan play button icon",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2024/05/Key-Component-Of-Success-In-CBSE-Schools-In-Hyderabad-uai-258x145.jpg":
      "A group of students in a classroom",
    "https://www.sanskritischools.com/school/img/fb.png": "Green Facebook Icon",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2018/10/tranlogo.png":
      "Sanskriti The School Dilshuknagar Logo",
    "https://www.sanskritischools.com/school/img/twitter.png":
      "Green Twitter Icon",
    "https://www.sanskritischools.com/school/img/1x1.png": "A White Dot",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2024/06/sanskrithi-AI-Blog-uai-258x145.jpg":
      "Students Science Experiment",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2024/02/DSC09657-uai-258x145.jpg":
      "A group of small kids going home",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2024/07/sm-15-10-uai-258x145.jpg":
      "Sanskriti School kids Playday",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2024/08/sm-07-2-1-uai-258x145.jpg":
      "Sanskriti's school kid's family photo",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2024/03/Explore-uai-258x145.png":
      "Sanskriti small kids in uniform",
    "https://www.sanskritischools.com/school/img/icon-quote.png":
      "Green inverted Commas Icon",
    "https://www.sanskritischools.com/kids/img/fb.png": "A Cyan Facebook Logo",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2024/01/DSC07586-1-uai-258x145.jpg":
      "Sanskriti The School Dilshuknagar Building",
    "https://www.sanskritischools.com/school/img/admiticon.png":
      "A Report Icon",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2018/10/logo.png":
      "Sanskriti The School Dilshuknagar Logo",
    "https://www.sanskritischools.com/school/img/youtube.png":
      "Green Youtube Logo",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/05/shutterstock_1923678950-uai-258x145.jpg":
      "A small girl drinking glass of water",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/04/720x405-uai-258x145.png":
      "Sanskriti school recycle principles",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2017/05/Image-uai-258x145.jpg":
      "Mom & son cooking together",
    "https://www.sanskritischools.com/school/img/1-08.jpg":
      "Doodle Portrait of kids",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2022/12/Untitled-3-uai-258x145.png":
      "Winter safety tips",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/03/Artboard-54-uai-258x145.png":
      "Hello Summer",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/09/sm-07-3-uai-258x145.jpg":
      "Science Lab Experiments",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/05/blog-uai-258x145.png":
      "Smiling Children",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/07/shutterstock_728383990-uai-258x145.jpg":
      "Rain",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2017/04/Untitled-design-1-uai-258x145.jpg":
      "Grandchildren & Grandparents",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2017/04/Untitled-design-4-uai-258x145.jpg":
      "Reading A Book",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/08/shutterstock_2004223058-Converted-01-2-uai-258x145.jpg":
      "Happy Independence Day From Sanskriti School",
    "https://www.sanskritischools.com/school/img/1-09.jpg": "Kid Playing",
    "https://www.sanskritischools.com/kids/img/awards/Side-image_1-320x220.jpg":
      "Global Forum Award",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2017/02/Untitled-design-uai-258x145.png":
      "Science Experiment time",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/11/1-1-uai-258x145.jpg":
      "Kids playground Picture",
    "https://www.sanskritischools.com/kids/img/gallery/catogery-img-2.jpeg":
      "Instructions Form",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/10/7001-01-uai-258x145.jpg":
      "Helpdesk",
    "https://www.sanskritischools.com/school/img/1-10.jpg":
      "Kids learning togather",
    "https://www.sanskritischools.com/kids/img/karate-primary-img2.jpg":
      "Kids learning karate",
    "https://www.sanskritischools.com/kids/img/indoor-games-img2.jpg":
      "Children playing carrom",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2022/10/shutterstock_1825380560-uai-258x145.jpg":
      "Kids playing with toys",
    "https://www.sanskritischools.com/kids/img/admiticon.png": "Reprtbook",
    "https://www.sanskritischools.com/kids/img/gallery/catogery-img-5.jpeg":
      "Poetry Recitation Competition",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2022/11/Sk-blog-uai-258x145.png":
      "Kids drawing togather",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/06/shutterstock_1351116623-uai-258x145.jpg":
      "Alarm Clock",
    "https://www.sanskritischools.com/blog/wp-content/uploads/2023/01/shutterstock_2182815815-uai-258x145.jpg":
      "Writing",
  };

  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    const src = img.getAttribute("src");
    if (altTexts.hasOwnProperty(src)) {
      img.setAttribute("alt", altTexts[src]);
    }
  });
});
