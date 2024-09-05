function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
let tl = gsap.timeline({ paused: true });

tl.from(".text .div", {
  y: 100,
  opacity: 0,
  delay: 1,
  stagger: 0.08,
}).from(".btns", {
  opacity: 0,
});

// Call this to start the animation
tl.play();

const blocks = document.querySelectorAll(".feature-block");

blocks.forEach((block) => {
  block.addEventListener("mouseenter", function () {
    gsap.to(block, {
      scale: 1.05, // Scale up slightly on hover
      duration: 0.3, // Smooth transition
      ease: "power1.out", // Easing for smooth animation
    });
  });

  block.addEventListener("mouseleave", function () {
    gsap.to(block, {
      scale: 1, // Reset scale when mouse leaves
      duration: 0.3,
      ease: "power1.out",
    });
  });
});

const text= document.querySelectorAll(".intro-text");

text.forEach((block) => {
  block.addEventListener("mouseenter", function () {
    gsap.to(block, {
      scale: 1.05, // Scale up slightly on hover
      duration: 0.3, // Smooth transition
      ease: "power1.out", // Easing for smooth animation
    });
  });

  block.addEventListener("mouseleave", function () {
    gsap.to(block, {
      scale: 1, // Reset scale when mouse leaves
      duration: 0.3,
      ease: "power1.out",
    });
  });
});

const imgBlock= document.querySelectorAll(".intro-visual");

imgBlock.forEach((block) => {
  block.addEventListener("mouseenter", function () {
    gsap.to(block, {
      scale: 1.05, // Scale up slightly on hover
      duration: 0.3, // Smooth transition
      ease: "power1.out", // Easing for smooth animation
    });
  });

  block.addEventListener("mouseleave", function () {
    gsap.to(block, {
      scale: 1, // Reset scale when mouse leaves
      duration: 0.3,
      ease: "power1.out",
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    // Intersection observer to trigger the graph animation only when the page is visible
    let graphsLoaded = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !graphsLoaded) {
                setTimeout(() => {
                    loadGraphs(); // Call the function to load the graphs after a delay
                }, 500); // Delay graph loading by 500 milliseconds (adjust as needed)
                graphsLoaded = true; // Ensure graphs are loaded only once
            }
        });
    });

    observer.observe(document.querySelector('#graph1')); // Observe the first graph element

    // Function to load the graphs
    function loadGraphs() {
        // Graph 1: Pie Chart
        const ctx1 = document.getElementById('graph1').getContext('2d');
        new Chart(ctx1, {
            type: 'pie',
            data: {
                labels: ['Women', 'Seniors', 'Farmers'],
                datasets: [{
                    label: 'Demographic Data',
                    data: [30, 40, 30],
                    backgroundColor: ['#ff6347', '#36a2eb', '#ffcd56'],
                }]
            },
            options: {
                responsive: true,
            }
        });

        // Graph 2: Bar Chart
        const ctx2 = document.getElementById('graph2').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Financial Growth',
                    data: [10, 20, 30, 40],
                    backgroundColor: '#36a2eb',
                }]
            },
            options: {
                responsive: true,
            }
        });

        // Graph 3: Line Chart
        const ctx3 = document.getElementById('graph3').getContext('2d');
        new Chart(ctx3, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [{
                    label: 'Service Usage Over Time',
                    data: [5, 15, 10, 25],
                    backgroundColor: '#ffcd56',
                    borderColor: '#ff6347',
                    fill: false,
                }]
            },
            options: {
                responsive: true,
            }
        });
    }
});
